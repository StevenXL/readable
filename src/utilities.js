import Ramda from "ramda";
import uuidv4 from "uuid/v4";

export const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || "Component";

export const createPostForSubmission = postForm => {
  const id = uuidv4();
  const timestamp = Date.now();

  return Ramda.merge({ id, timestamp }, postForm);
};
