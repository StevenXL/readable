import React from "react";
import PropTypes from "prop-types";

import { Table, Glyphicon } from "react-bootstrap";

import PostTableRow from "./PostTableRow";

const PostsListPresenter = ({
  posts,
  changePostsSortBy,
  sortBy,
  sortOrder,
  upVote,
  downVote
}) => {
  const triangle = (
    <Glyphicon
      glyph={sortOrder === "ascend" ? "triangle-top" : "triangle-bottom"}
    />
  );

  const option = <Glyphicon glyph="option-horizontal" />;

  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
          <th>Author</th>
          <th>Category</th>
          <th onClick={() => changePostsSortBy("voteScore")}>
            Vote Score {sortBy === "voteScore" ? triangle : option}
          </th>
          <th onClick={() => changePostsSortBy("timestamp")}>
            Time Posted {sortBy === "timestamp" ? triangle : option}
          </th>
          <th>Upvote</th>
          <th>Downvote</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post =>
          <PostTableRow
            key={post.id}
            upVote={upVote}
            downVote={downVote}
            {...post}
          />
        )}
      </tbody>
    </Table>
  );
};

// SETTINGS
PostsListPresenter.defaultProps = { categories: [] };

PostsListPresenter.propTypes = {
  categories: PropTypes.array,
  changePostsSortBy: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired
};

export default PostsListPresenter;
