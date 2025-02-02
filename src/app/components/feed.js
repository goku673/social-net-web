"use client"
import React from "react"
import CreatePost from "./createPost";
import PostCard from "./postCard";


const Feed = ({ posts, isCreatingPost, setIsCreatingPost, addPost }) => {
  return (
    <div>
      <CreatePost isCreatingPost={isCreatingPost} setIsCreatingPost={setIsCreatingPost} addPost={addPost} />
      <div className="space-y-6 mt-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feed

