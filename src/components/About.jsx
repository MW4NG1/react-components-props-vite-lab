import React from "react";
// About component
function About(props) {
    return (
    <aside>
        {/* Displays the blog logo */}
        <img 
          src={props.image}
          alt="blog logo"
        />
        {/* Displays the blog description */}
        <p>{props.about}</p>
    </aside>
    );
}
export default About;