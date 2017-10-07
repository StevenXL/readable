import React from "react";

import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const CommentTableRow = ({ id, body, author, voteScore, timestamp }) => {
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
    </tr>
  );
};

export default CommentTableRow;
