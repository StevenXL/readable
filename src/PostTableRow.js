import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const PostTableRow = ({
  id,
  title,
  body,
  author,
  category,
  voteScore,
  timestamp
}) =>
  <tr key={`${title}-${category}-${voteScore}`}>
    <td>
      <Link to={`/posts/${id}`}>
        {title}
      </Link>
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired
};

export default PostTableRow;
