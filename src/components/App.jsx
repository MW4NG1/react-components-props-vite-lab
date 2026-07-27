import React from "react";
import blogData from "../data/blog";

// Import the child components
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* Display the Header component */}
      <Header name={blogData.name} />
      {/* Display the About component */}
      <About image={blogData.image} about={blogData.about} />
      {/* Display the ArticleList component */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
