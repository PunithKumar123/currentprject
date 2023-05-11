import axios from 'axios';

import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FeedsDisplay from './FeedsDisplay';
import "../css/FeedsPage.css";
// import Feedsimg from "../Assets/Feeds.png";


const FeedsPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const editor = useRef(null);
  const [post, setPost] = useState({
    title: '',
    content: ''
  })
  const fieldChanged = (event) => {
    // console.log(event);
    setPost({
      ...post,
      'title': event.target.value
    })
  }
  const contentFieldChanged = (event) => {
    setPost({ ...post, 'content': event.target.value })
  }
  const CreatePost = (e) => {
    e.preventDefault();
    console.log(post)
    if (post.title.trim() === '') {
      alert("post title is required!!")
      return;
    }
    if (post.content.trim() === '') {
      alert("post content is required!!")
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`
    };

    axios.post('http://192.168.1.128:8080/api.venturecapitalist.com/postFeed', { token, post }, { headers })
      .then((response) => {
        alert(response.data.message);
        navigate("/FeedsDisplay");

      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
  
    <div className='Main-feed-div'>
      <div className='Feeds-wrapper' id='feed-wrapper'>
        {/* <div className='Feeds-Child-Cont'> */}
          <h4 id='feed-main-title'>Whats on your mind</h4>
          <form onSubmit={CreatePost}>
            <div className='Feeds-Title-div'>
              {/* <label htmlFor="title">Post Title</label> */}
              
              <input type="text" className='Feeds-title'
                id="title"
                placeholder="Enter title"
                onChange={fieldChanged} />
            </div>
            <div className='Feeds-Body' >
              {/* <label htmlFor="title">Post Content</label> */}
              <input type="text"
                className='Feeds-Content-input'
                id="Content"
                placeholder="Enter content"
                value={post.content}
                onChange={contentFieldChanged}
              />
              {/* <JoditEditor
                className='Feeds-jodit'
                ref={editor}
                value={post.content}
                // config={config}
                // tabIndex={1} // tabIndex of textarea
                onBlur={contentFieldChanged}
              // onChange={newContent => {}}
              /> */}
            </div>
            <div className='Feeds-Buttons'>
              <button className='submit-feed-btn' type='submit' onClick={CreatePost}>Post</button>
              {/* <button className='btn btn-primary' id= 'Reset-Post' >Reset Post</button> */}
            </div>
          </form>
        {/* </div> */}

      </div>
      <div className='Feeds-Display-div'>
      <FeedsDisplay/>
      </div>
    </div>

  )
}
export default FeedsPage;





