import React from "react";
// import PostStatusFilter from "../post-status-filter";

import "./post-list.css";

import PostListItem from "../post-list-item";

const PostList = ({ posts }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <PostListItem l {...itemProps} />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};
export default PostList;