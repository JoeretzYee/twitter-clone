import React, { useState, useEffect } from "react";
import "../css/feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("text", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed__header'>
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            key={post.text}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
