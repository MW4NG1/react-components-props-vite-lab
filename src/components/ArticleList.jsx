import React from "react";
// Import the Article component
import Article from "./Article";
// ArticleList component receives the post array
function ArticleList(props) {
  return (
    <main>
      {/* Loop through each post and create an article component */}
      {props.posts.map(function (post) {
        return (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
          />
        );
      })}
    </main>
  );
}
export default ArticleList;
