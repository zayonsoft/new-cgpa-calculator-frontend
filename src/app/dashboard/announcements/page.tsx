export default function Announcements() {
  return (
    <section className="grid gap-4 grid-cols-2">
      {/* Left div */}
      <div className="grid gap-2 bg-gray-100 rounded-md">
        <div className="px-4 py-2 border-b border-b-gray-500">
          <h1 className="font-semibold text-2xl">Send Mails</h1>
        </div>
        <div className="p-4 ">
          <form className="grid gap-4" action="">
            <div className="grid gap-0.5">
              <label htmlFor="subject" className="text-sm">
                Subject:
              </label>
              <input
                id="subject"
                className="w-full border-gray-600 border-1 p-2 text-sm rounded-md outline-none"
                name="subject"
                type="text"
              />
            </div>
            <div className="grid gap-0.5">
              <label htmlFor="body" className="text-sm">
                Body:
              </label>
              <textarea
                className="outline-none resize-none w-full border-gray-600 border-1 p-2 text-sm rounded-md h-[40vh]"
                name="body"
                id="body"
              ></textarea>
            </div>
            <div>
              <button
                className="bg-[#004bad] p-2 text-sm rounded text-gray-200 cursor-pointer"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* right div for receipient list */}
      <div className="grid gap-2 content-start">
        <h1>Receipient List</h1>
        <div className="grid gap-0.5">
          <div className="bg-[#004bad] w-fit p-1.5 text-gray-200">
            <p>favourlosotu@gmail.com</p>
            <button type="button" className="-">
              void button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
