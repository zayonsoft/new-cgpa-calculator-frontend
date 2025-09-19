import { Montserrat } from "next/font/google";
import { HiXCircle, HiCheck, HiCheckCircle } from "react-icons/hi";
type ModalProps = {
  message: string;
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
        className={`absolute grid gap-5 -translate-1/2 top-1/2 left-1/2 rounded w-80 h-auto p-4 bg-gray-300`}
      >
        <div>
          {type == "error" ? (
            <HiXCircle className="text-7xl text-red-600 m-auto" />
          ) : (
            <HiCheckCircle className="text-7xl text-green-600 m-auto" />
          )}
        </div>
        <p className="text-center font-semibold">{message}</p>
        <div>
          <button
            onClick={() => modalCloser()}
            className={`${
              type == "error"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }  p-2 rounded cursor-pointer custom-transition text-white w-full`}
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}
