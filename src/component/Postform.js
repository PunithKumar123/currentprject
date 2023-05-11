import React, { useState } from "react";
import "/home/nineleaps/project1/src/css/Postform.css";
function PostForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image);
    onSubmit(event, formData);
    setTitle("");
    setBody("");
    setImage(null);
  };
  const handleCancel = () => {
    onCancel();
    setTitle("");
    setBody("");
    setImage(null);
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  return (
    <div className="post-form-container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
        />
        <div className="post-form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default PostForm;