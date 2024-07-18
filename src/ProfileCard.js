function ProfileCard({ image, title, handle, color }) {
  return (
    <div
      className={
        "flex flex-col w-60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer rounded-md bg-[" +
        color +
        "]"
      }
    >
      <img className="p-2" src={image} />

      <div className=" bg mt-2 mb-2 flex items-center ml-3">
        <img className=" w-10" src={image} />
        <div className="ml-[8px] gap-0">
          <h3 className="font-[650] m-0">{title}</h3>
          <p className="m-0">{handle}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
