import ClassicUnderline from "@/app/components/ClassicUnderline";
import ReceipientComponent from "./ReceipientComponent";

export default function Announcements() {
  return (
    <section className="grid gap-4 grid-cols-2">
      {/* Left div */}
      <div className="grid py-1.5 gap-1 bg-gray-100 rounded-md shadow-sm ">
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-900">
            <ClassicUnderline text="Send Mail" />
          </h1>
        </div>
        <div className="p-4 ">
          <form className="grid gap-4" action="">
            <div className="grid gap-0.5">
              <label htmlFor="subject" className="text-sm">
                Subject:
              </label>
              <input
                id="subject"
                className="w-full border-gray-600 border-1 p-2.5 text-sm rounded-md outline-none placeholder:text-xs"
                name="subject"
                type="text"
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
                placeholder="Message body"
              ></textarea>
            </div>
            <div className="grid justify-self-end">
              <button
                className="bg-[#004bad] p-2.5 min-w-25  text-sm rounded-full text-gray-200 cursor-pointer"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* right div for receipient list */}
      <ReceipientComponent receipientList={[]} />
    </section>
  );
}
