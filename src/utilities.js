import Ramda from "ramda";
import uuidv4 from "uuid/v4";

export const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || "Component";

export const createPostForSubmission = postForm => {
  const id = uuidv4();
  const timestamp = Date.now();

  return Ramda.merge({ id, timestamp }, postForm);
};

export const sortCommentsByVoteScoreDesc = comments => {
  const compare = ({ voteScore: voteScoreOne }, { voteScore: voteScoreTwo }) =>
    voteScoreTwo - voteScoreOne;

  return Ramda.sort(compare, comments);
};

export const isPresent = value =>
  value !== "" && value !== null && value !== undefined;

export const createCommentForPostSubmission = commentForm => {
  const id = commentForm.id || uuidv4();
  const timestamp = Date.now();

  return Ramda.merge({ id, timestamp }, commentForm);
};

export const createCommentForPutSubmission = ({ body }) => {
  const timestamp = Date.now();
  return { body, timestamp };
};
