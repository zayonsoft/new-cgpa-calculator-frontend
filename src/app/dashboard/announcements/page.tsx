"use client";
import ClassicUnderline from "@/app/components/ClassicUnderline";
import ReceipientComponent from "./ReceipientComponent";
import { FormEvent, useEffect, useState } from "react";
import RequestAPI from "@/app/tokens/RequestAPI";
import { getAccessToken } from "@/app/tokens/GetTokens";
import { UserResponseType } from "@/contexts/UserContext";
import { useUser } from "@/contexts/UserContext";
import MessageModal from "@/app/components/MessageModal";
import { SetModalProps } from "@/contexts/UserProvider";

export default function Announcements() {
  const { user } = useUser();
  const [users, setUsers] = useState<UserResponseType[]>([]);
  const [selectedIds, setSelectedIds] = useState<any>({});
  const [receipientCount, setReceipientCount] = useState<number>(0);
  const [search, setSearch] = useState("");
  const [receipientError, setReceipientError] = useState<{
    error: string;
    active: boolean;
  }>({
    error: "",
    active: false,
  });
  const [reload, setReload] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ title: string; body: string }>({
    title: "",
    body: "",
  });

  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [modalData, setModalData] = useState<SetModalProps>({
    message: "",
    extra_msg: "",
    type: "error",
  });

  const [loading, setLoading] = useState<boolean>(false);

  function closeModal() {
    setModalOpened(false);
  }

  function setModalMessage({ message, extra_msg, type }: SetModalProps) {
    setModalOpened(true);
    setLoading(false);
    setModalData((prevData: SetModalProps) => ({
      ...prevData,
      message,
      extra_msg,
      type,
    }));
  }

  const axios = RequestAPI();
  useEffect(() => {
    const access = getAccessToken();
    axios
      .get("users", {
        params: { search: search },
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => {
        hideReceipientError();
        let userList = response.data?.users as [];
        setUsers(userList);
      })
      .catch((err) => {
        if (err.status == 401) {
          showReceipientError("An Error Occured! Try Refreshing the Page");
        } else {
          showReceipientError("Network Error! Couldn't Connect to the Server!");
        }
      });
  }, [user, search, reload]);

  useEffect(() => {
    let count = 0;
    for (let i in selectedIds) {
      const eachValue = selectedIds[i]; //returns true or false if selected or not
      eachValue ? count++ : count;
    }
    setReceipientCount(count);
  }, [selectedIds]);

  useEffect(() => {
    hideReceipientError();
  }, [reload]);

  function updateSearch(value: string) {
    setSearch(value);
  }

  function updateSelection(id: string | number) {
    const tempSelection = selectedIds;
    let newState = !(id in tempSelection && tempSelection[id]);

    setSelectedIds((prevData: any) => ({ ...prevData, [id]: newState }));
  }

  function selectReceipient(id: string | number) {
    setSelectedIds((prevData: any) => ({ ...prevData, [id]: true }));
  }

  function reloadReceipients() {
    setReload((prevValue) => !prevValue);
  }

  function selectAll() {
    for (var i in users) {
      let user = users[i];
      selectReceipient(user.id!);
    }
  }

  function showReceipientError(message: string) {
    setReceipientError({ error: message, active: true });
  }
  function hideReceipientError() {
    setReceipientError({ error: "", active: false });
  }

  function updateTitle(newValue: string) {
    if (!loading) setFormData((prevData) => ({ ...prevData, title: newValue }));
  }

  function updateBody(newValue: string) {
    if (!loading) setFormData((prevData) => ({ ...prevData, body: newValue }));
  }

  function submitForm(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const mailForm = new FormData(form);
    let receipientList = [];
    for (let i in selectedIds) {
      const selected = selectedIds[i];
      if (selected) receipientList.push(i);
    }
    mailForm.append("receipients", JSON.stringify(receipientList));

    if (!(formData.body.trim() && formData.title.trim())) {
      if (formData.title.trim() || formData.body.trim()) {
        if (!formData.title.trim()) {
          setModalMessage({
            message: "Incomplete Form",
            extra_msg: "Pls, enter message title",
            type: "error",
          });
          return;
        } else {
          setModalMessage({
            message: "Incomplete Form",
            extra_msg: "Pls, enter message body",
            type: "error",
          });
          return;
        }
      }

      setModalMessage({
        message: "Incomplete Form",
        extra_msg: "Fill in message title and body ",
        type: "error",
      });
      return;
    }

    if (loading) return;

    if (receipientCount > 0) {
      setLoading(true);
      axios
        .post("mail_users", mailForm, {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        })
        .then((response) => {
          console.log(response.data);
          let successMsg = response.data?.detail;
          setModalMessage({
            message: "Success",
            extra_msg: successMsg ? successMsg : "Mails Sent Successfully",
            type: "success",
          });
          //set message to success
        })
        .catch((err) => {
          console.log(err);
          if (err.status) {
            let message = err?.response?.data?.detail || "Something Went Wrong";
            setModalMessage({
              message: "An Error Occured",
              extra_msg: message,
              type: "error",
            });
          } else {
            setModalMessage({
              message: "Network Error",
              extra_msg: "We couldn't communicate our server",
              type: "error",
            });
          }
        });
    } else {
      setModalMessage({
        message: "No Receipient",
        extra_msg: "Please Select at least one receipient",
        type: "error",
      });
      return;
    }
  }

  return (
    <>
      <section className="grid gap-4 grid-cols-2 max-[601px]:grid-cols-1">
        {/* Left div */}
        <div className="max-[601px]:order-2 grid py-1.5 gap-1 bg-gray-100 rounded-md shadow-sm ">
          <div className="p-4">
            <h1 className="text-xl font-semibold text-gray-900">
              <ClassicUnderline text="Send Mail" />
            </h1>
          </div>
          <div className="px-4">
            <p className="p-2 bg-[#004bad] text-gray-100 w-fit rounded-md text-sm">
              <span>{receipientCount}</span> Receipient
              {receipientCount > 1 ? "s" : ""} Selected
            </p>
          </div>
          <div className="p-4 ">
            <form
              onSubmit={(e) => submitForm(e)}
              className="grid gap-4"
              action=""
            >
              <div className="grid gap-0.5">
                <label htmlFor="subject" className="text-sm">
                  Subject:
                </label>
                <input
                  id="subject"
                  className="w-full border-gray-600 border-1 p-2.5 text-sm rounded-md outline-none placeholder:text-xs"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => updateTitle(e.target.value)}
                  placeholder="Message Title"
                />
              </div>
              <div className="grid gap-0.5">
                <label htmlFor="body" className="text-sm">
                  Body:
                </label>
                <textarea
                  className="outline-none resize-none w-full border-gray-600 border-1 p-2.5 text-sm rounded-md h-[40vh] placeholder:text-xs"
                  name="body"
                  id="body"
                  value={formData.body}
                  onChange={(e) => updateBody(e.target.value)}
                  placeholder="Message body"
                ></textarea>
              </div>
              <div className="grid justify-self-end">
                <button
                  className={`relative shadow-sm p-2.5 min-w-25 custom-transition  text-sm rounded-full text-gray-200 after:w-5 after:h-5 after:rounded-full after:border-gray-300 after:border-l-gray-700 after:border-3 after:-translate-1/2 after:left-1/2 after:top-1/2 py-3 after:absolute  after:bg-transparent after:animate-spin ${
                    loading
                      ? "after:block  bg-gray-400"
                      : " bg-[#004bad] after:hidden hover:bg-[#004093] cursor-pointer"
                  }`}
                  type="submit"
                >
                  <span className={`${loading ? "invisible" : "visible"}`}>
                    Send
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* right div for receipient list */}
        <ReceipientComponent
          receipientList={users}
          search={search}
          selectedIds={selectedIds}
          updateSearch={updateSearch}
          updateSelection={updateSelection}
          selectAll={selectAll}
          errorObj={receipientError}
          reloadReceipient={reloadReceipients}
        />
      </section>
      <MessageModal
        message={modalData.message}
        extra_msg={modalData.extra_msg}
        modalCloser={closeModal}
        type={modalData.type}
        open={modalOpened}
      />
    </>
  );
}
