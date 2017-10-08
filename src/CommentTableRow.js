import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { deleteComment } from "./actions";

import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const CommentTableRow = ({
  id,
  body,
  author,
  voteScore,
  timestamp,
  deleteComment
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
        <Button bsStyle="danger" onClick={() => deleteComment(id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default connect(null, { deleteComment })(CommentTableRow);
