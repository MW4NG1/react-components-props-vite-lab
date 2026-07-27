import React from "react";
// About component
function About(props) {
  return (
    <aside>
      {/* Displays the blog logo */}
      <img
        src={props.image || "https://via.placeholder.com/215"}
        alt="blog logo"
      />
      {/* Displays the blog description */}
      <p>{props.about}</p>
    </aside>
  );
}
export default About;
