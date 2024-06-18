export default function ActionInput({
  data,
  updateDataValue,
  label,
  setData,
  index,
}) {
  return (
    <div key={data.id} className="w-full relative h-14 ">
      <input
        value={data.award}
        onChange={(e) =>
          updateDataValue(data.id, e.target.value, setData, label.toLowerCase())
        }
        placeholder={`${label} #${index + 1}`}
        className="w-full rounded-2xl bg-white outline-AnalogueShiftsTextColor pr-8 pl-4 max-h-14 py-4 border text-base text-black/80"
      />
      <button
        onClick={() =>
          setData((prev) => prev.filter((item) => item.id !== data.id))
        }
        className="absolute top-[30%] right-5"
      >
        <i className="fa-solid fa-trash text-black/60 text-base"></i>
      </button>
    </div>
  );
}
