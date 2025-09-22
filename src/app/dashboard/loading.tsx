export default function setLoading() {
  return (
    <div className="bg-black fixed left-0 right-0 top-0 bottom-0 z-[1000]">
      <p className="text-white absolute -translate-1/2 left-1/2 top-1/2">
        Loading...
      </p>
    </div>
  );
}
