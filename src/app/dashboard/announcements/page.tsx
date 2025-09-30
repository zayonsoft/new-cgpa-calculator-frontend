"use client";
import ClassicUnderline from "@/app/components/ClassicUnderline";
import ReceipientComponent from "./ReceipientComponent";
import { FormEvent, useEffect, useState } from "react";
import RequestAPI from "@/app/tokens/RequestAPI";
import { getAccessToken } from "@/app/tokens/GetTokens";
import { UserResponseType } from "@/contexts/UserContext";
import { useUser } from "@/contexts/UserContext";
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

  const axios = RequestAPI();
  useEffect(() => {
    console.log("Gotten");
    const access = getAccessToken();
    axios
      .get("users", {
        params: { search: search },
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => {
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
    setFormData((prevData) => ({ ...prevData, title: newValue }));
  }

  function updateBody(newValue: string) {
    setFormData((prevData) => ({ ...prevData, body: newValue }));
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

    if (receipientCount > 0) {
      axios
        .post("mail_users", mailForm, {
          headers: { Authorization: `Bearer ${getAccessToken()}` },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err.status);
        });
    }
  }

  return (
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
                className="bg-[#004bad] hover:bg-[#004093] p-2.5 min-w-25 custom-transition  text-sm rounded-full text-gray-200 cursor-pointer"
                type="submit"
              >
                Send
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
  );
}
