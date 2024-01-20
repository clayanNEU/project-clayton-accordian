import { useState } from "react";
import { reactSections } from "./dataAccordian";
import "./Accordian.css";

export default function Accordion() {
  // keep track of open or closed state, set to null initially
  const [openSectionId, setOpenSectionId] = useState(null);
  function handleClick(id) {
    // conditional
    if (openSectionId === id) {
      // if the section is already open, close the section, set to null
      setOpenSectionId(null);
    } else {
      // close the clicked section here
      setOpenSectionId(id);
    }
  }
  const listOfReactItems = reactSections.map((item) => (
    <div key={item.id}>
      <h1 onClick={() => handleClick(item.id)}>{item.title}</h1>
      {openSectionId === item.id && <section>{item.description}</section>}
    </div>
  ));
  return <ul>{listOfReactItems}</ul>;
}
