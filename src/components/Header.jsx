import React from "react";
// Header component
function Header(props) {
  return (
    <header>
      {/* Display the blog name */}
      <h1>{props.name}</h1>
    </header>
  );
}
export default Header;
