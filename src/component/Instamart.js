import React, { useState } from "react";

// Function Pass PROPS
const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold">{title}</h3>
      {isVisible ? (
        <button onClick={toggleVisibility} className="cursor-pointer">
          ➖
        </button>
      ) : (
        <button onClick={toggleVisibility} className="cursor-pointer">
          ➕
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

// Parent
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const toggleSectionVisibility = (sectionName) => {
    setVisibleSection((prevVisibleSection) =>
      prevVisibleSection === sectionName ? "" : sectionName
    );
  };

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold text-color-50">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ..."
        }
        isVisible={visibleSection === "about"}
        toggleVisibility={() => toggleSectionVisibility("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, ..."
        }
        isVisible={visibleSection === "team"}
        toggleVisibility={() => toggleSectionVisibility("team")}
      />
      <Section
        title={"Career"}
        description={
          "There are many variations of passages of Lorem Ipsum available, ..."
        }
        isVisible={visibleSection === "career"}
        toggleVisibility={() => toggleSectionVisibility("career")}
      />
      <Section
        title={"Product"}
        description={
          "There are many variations of passages of Lorem Ipsum available, ..."
        }
        isVisible={visibleSection === "product"}
        toggleVisibility={() => toggleSectionVisibility("product")}
      />
    </div>
  );
};

export default Instamart;

