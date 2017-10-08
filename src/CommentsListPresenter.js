import React from "react";
import { Table } from "react-bootstrap";

import CommentTableRow from "./CommentTableRow";

const CommentsPresenter = ({ comments }) => {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Comment</th>
          <th>Author</th>
          <th>Vote Score</th>
          <th>Time</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {comments.map(comment =>
          <CommentTableRow key={comment.id} {...comment} />
        )}
      </tbody>
    </Table>
  );
};

export default CommentsPresenter;
