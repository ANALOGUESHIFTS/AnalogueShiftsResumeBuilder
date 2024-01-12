export default function LoadingComponent() {
  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-black/10 flex justify-center items-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
