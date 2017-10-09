import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { deleteComment, upVoteComment, downVoteComment } from "./actions";
import { Link } from "react-router-dom";

import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const CommentTableRow = ({
  id,
  body,
  author,
  voteScore,
  timestamp,
  deleteComment,
  upVoteComment,
  downVoteComment
}) => {
  return (
    <tr key={id}>
      <td>
        {body}
      </td>
      <td>
        {author}
      </td>
      <td>
        {voteScore}
      </td>
      <td>
        {distanceInWordsToNow(timestamp)} ago
      </td>
      <td>
        <Link to={{ pathname: "/comment/edit", state: { commentId: id } }}>
          Edit
        </Link>
      </td>
      <td>
        <Button bsStyle="danger" onClick={() => deleteComment(id)}>
          Delete
        </Button>
      </td>
      <td>
        <Button bsStyle="success" onClick={() => upVoteComment(id)}>
          Up Vote
        </Button>
      </td>
      <td>
        <Button bsStyle="warning" onClick={() => downVoteComment(id)}>
          Down Vote
        </Button>
      </td>
    </tr>
  );
};

export default connect(null, { deleteComment, upVoteComment, downVoteComment })(
  CommentTableRow
);
