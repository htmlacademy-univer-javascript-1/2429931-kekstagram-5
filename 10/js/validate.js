import { ERRORS } from "./constansts.js";

const {notHash, notSpaces, hashRepeat} = ERRORS;

const isHashtagUnique = (hashtags) => {
  const uniqueHashtags = new Set(hashtags);
  return uniqueHashtags.size === hashtags.length;
};

const getValue = (value) => value.toLowerCase().trim().split(/\s+/);

const validateHashtags = (value) => {
  const hashtags = getValue(value);

  if (hashtags.length === 0 || hashtags[0] === "") {
    return { valid: true, message: "" };
  }

  for (const tag of hashtags) {
    if (tag[0] !== "#") {
      return { valid: false, message: notHash};
    }
  }

  if (!isHashtagUnique(hashtags)) {
    return { valid: false, message: hashRepeat };
  }

  if (hashtags.some((tag) => tag.slice(1).includes("#"))) {
    return { valid: false, message: notSpaces };
  }

  return { valid: true, message: "" };
};

const commentValidate = (value) => value.length <= 140;

export {validateHashtags, commentValidate};
