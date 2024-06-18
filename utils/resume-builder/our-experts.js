import SalesForceLogo from "@/public/images/salesforce-logo.svg";
import NewYorkLogo from "@/public/images/new-york-post-logo.svg";
import MSNBC from "@/public/images/msnbc-logo.svg";
import FOX from "@/public/images/fox-logo.svg";
import Entrepreneur from "@/public/images/entrepreneur-logo.svg";
import Zendesk from "@/public/images/zendesk-logo.svg";

export const logos = [
  SalesForceLogo,
  NewYorkLogo,
  MSNBC,
  FOX,
  Entrepreneur,
  Zendesk,
];

export const handleMouseOver = (id) => {
  let elem = document.getElementById(id);
  elem.classList.add("pauseAnimation");
};
export const handleMouseOut = (id) => {
  let elem = document.getElementById(id);
  elem.classList.remove("pauseAnimation");
};
