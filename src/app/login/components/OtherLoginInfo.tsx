type InfoProps = {
  text: string;
};
export default function OtherLoginInfo({ text }: InfoProps) {
  return (
    <div className="flex items-center content-center justify-center gap-2">
      <span>
        <hr
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
          }}
          className="block w-20 max-[930px]:w-14 max-[800px]:w-10 max-[760px]:w-20 max-[390px]:w-14 max-w-full h-[1px] max-[800px]:h-[0.5px] max-[760px]:h-[1px] border-none bg-black"
        />
      </span>
      <span className="text-xs max-[800px]:text-[10px] max-[760px]:text-xs max-[390px]:text-[10px] font-normal text-nowrap">
        {text}
      </span>
      <span className="self-center min-h-auto">
        <hr
          style={{
            background:
              "linear-gradient(90deg,#000000 0%,  rgba(0, 0, 0, 0) 100%)",
          }}
          className="block w-20 max-[930px]:w-14 max-[800px]:w-10 max-[760px]:w-20 max-[390px]:w-14  max-w-full h-[1px] max-[800px]:h-[0.5px] max-[760px]:h-[1px] border-none bg-black"
        />
      </span>
    </div>
  );
}
