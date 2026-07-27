import React from "react";
// Header component
function Header(props) {
    return (
    <Header>
        {/* Display the blog name */}
        <h1>{props.name}</h1>
    </Header>
    );
}
export default Header;