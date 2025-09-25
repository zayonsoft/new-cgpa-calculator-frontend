"use client";
import { useState } from "react";
import CheckIcon from "./CheckIcon";
export default function MessageModal() {
  const [modalOpened, setModalOpened] = useState(true);
  function closeModal() {
    setModalOpened(false);
  }
  return (
    <section>
      <div
        className={`fixed ${
          !modalOpened ? "hidden" : ""
        } z-50 inset-0 overflow-y-auto`}
        id="my-modal"
      >
        <div className="bg-[#6a7282bf] h-screen fixed top-0 right-0 bottom-0 left-0">
          <div
            className="absolute bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl -translate-1/2 top-1/2 left-1/2 transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div>
                <CheckIcon />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Error
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    There was an error processing your request.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6">
              <button
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                onClick={closeModal}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      <script></script>
    </section>
  );
}
