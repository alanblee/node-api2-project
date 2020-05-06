import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then((res) => {
      setPostData(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/posts/${id}`).then((res) => {
      const updatedData = postData.filter((post) => {
        return post.id !== res.data.id;
      });
      setPostData(updatedData);
    });
  };
  return (
    <div className="content-container">
      <div className="list-container">
        {postData.map((post) => {
          console.log(post);
          return (
            <div key={post.id} className="post-entry">
              <div className="post-title">
                <h2> {post.title} </h2>
              </div>
              <div className="post-content">
                <p> {post.bio} </p>
              </div>
              <div className="cta-btn">
                <i
                  className="fas fa-trash"
                  onClick={() => handleDelete(post.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
