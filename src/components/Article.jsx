import React from "react";
// Article component
function Article(props) {
    return (
    <article>
        {/* Displays the article title */}
        <h3>{props.title}</h3>

        {/* Displays the article date */}
        <small>{props.date}</small>

        {/* Displays the article preview */}
        <p>{props.preview}</p>
    </article>
    );
}
export default Article;