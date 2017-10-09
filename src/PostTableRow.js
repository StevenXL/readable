import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import { Button } from "react-bootstrap";

const PostTableRow = ({
  id,
  title,
  body,
  author,
  category,
  voteScore,
  timestamp,
  upVote,
  downVote
}) =>
  <tr key={`${title}-${category}-${voteScore}`}>
    <td>
      <Link to={`/${category}/${id}`}>
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
    <td>
      <Button bsStyle="success" onClick={() => upVote(id)}>
        Up Vote
      </Button>
    </td>
    <td>
      <Button bsStyle="warning" onClick={() => downVote(id)}>
        Down Vote
      </Button>
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
  timestamp: PropTypes.number.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired
};

export default PostTableRow;
