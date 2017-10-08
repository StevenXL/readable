import React from "react";
import PropTypes from "prop-types";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const PostMetaData = ({ timestamp, voteScore }) => {
  return (
    <span>
      <h4>
        Posted: <small>{distanceInWordsToNow(timestamp)} ago</small>
      </h4>

      <h4>
        Vote Score: <small>{voteScore}</small>
      </h4>
    </span>
  );
};

PostMetaData.propTypes = {
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired
};

export default PostMetaData;
