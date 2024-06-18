export const handleMouseOver = (id) => {
  let elem = document.getElementById(id);
  elem.classList.add("pauseAnimation");
};

export const handleMouseOut = (id) => {
  let elem = document.getElementById(id);
  elem.classList.remove("pauseAnimation");
};
