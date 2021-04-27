import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post.js';

const PostList = ({
  posts,
  currentPost,
}) => (
  <div className="showList">
    {posts.map(post => (
      <Post
        currentShow={currentPost}
        key={post.number}
        post={post}
      />
    ))}
    <div className="show show--dummy" />
  </div>
);

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  currentPost: PropTypes.string.isRequired,
};

export default PostList;
