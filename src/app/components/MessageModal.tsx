import { Montserrat } from "next/font/google";
import { HiXCircle, HiCheck, HiCheckCircle } from "react-icons/hi";
type ModalProps = {
  message: string;
  extra_msg?: string | null;
  type: "success" | "error";
  open: boolean;
  modalCloser: () => void;
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MessageModal({
  message,
  extra_msg,
  open,
  modalCloser,
  type,
}: ModalProps) {
  return (
    <section
      className={`${montserrat.className} ${
        !open ? "hidden" : ""
      } fixed bg-[#000000af] left-0 right-0 top-0 bottom-0 z-50`}
    >
      <div
        className={`absolute grid gap-2 -translate-1/2 top-1/2 left-1/2 rounded w-80 h-auto p-4 bg-gray-300`}
      >
        <div>
          {type == "error" ? (
            <HiXCircle className="text-6xl text-red-500 m-auto" />
          ) : (
            <HiCheckCircle className="text-6xl text-green-600 m-auto" />
          )}
        </div>
        <p className="text-center text-sm text-gray-700 font-light">
          {message}
        </p>
        <p className="text-center text-xs font-extralight">{extra_msg}</p>
        <div className="justify-self-end">
          <button
            onClick={() => modalCloser()}
            className={`${
              type == "error"
                ? "bg-red-500 hover:bg-red-400"
                : "bg-green-600 hover:bg-green-700"
            }  px-4 py-1.5 rounded-xs cursor-pointer text-xs custom-transition text-gray-200 font-light w-fit`}
            type="button"
          >
            close
          </button>
        </div>
      </div>
    </section>
  );
}
