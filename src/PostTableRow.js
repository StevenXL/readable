import React from "react";
import PropTypes from "prop-types";

import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const PostTableRow = ({
  title,
  body,
  author,
  category,
  voteScore,
  timestamp
}) =>
  <tr key={`${title}-${category}-${voteScore}`}>
    <td>
      {title}
    </td>
    <td>
      {body}
    </td>
    <td>
      {author}
    </td>
    <td>
      {category}
    </td>
    <td>
      {voteScore}
    </td>
    <td>
      {distanceInWordsToNow(timestamp)} ago
    </td>
  </tr>;

// SETTINGS
PostTableRow.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired
};

export default PostTableRow;
