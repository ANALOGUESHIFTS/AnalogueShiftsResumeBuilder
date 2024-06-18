export const steps = [
  {
    title: "Step 01",
    color: "linear-gradient(101.17deg, #60A4EF 0%, #A5CDF6 100%)",
  },
  {
    title: "Step 02",
    color: "linear-gradient(101.17deg, #EE8652 0%, #FACBB3 100%)",
  },
  {
    title: "Step 03",
    color: "linear-gradient(101.17deg, #4AB690 0%, #9CDECA 100%)",
  },
];

export const inspectColor = (selected) => {
  if (selected === "Step 01") return "#4b94ea";
  if (selected === "Step 02") return "#ea723c";
  if (selected === "Step 03") return "#2ca482";
};

export const handleFull = (selected, setSelected) => {
  if (selected === "Step 01") setSelected("Step 02");
  if (selected === "Step 02") setSelected("Step 03");
  if (selected === "Step 03") setSelected("Step 01");
};
