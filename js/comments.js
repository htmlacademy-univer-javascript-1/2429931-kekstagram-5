import { createCommentTemplate } from "./comment-template.js";

const bigPictureElement = document.querySelector(".big-picture");
const socialBigPicture = bigPictureElement.querySelector(".big-picture__social");

createCommentTemplate();
const commentTemplate = document.querySelector("#comment").content.querySelector(".social__comment");

const btnLoaderComments = bigPictureElement.querySelector(".comments-loader");
const countComments = bigPictureElement.querySelector(".social__comment-count");
const listComments = bigPictureElement.querySelector(".social__comments");
const commsLoader = socialBigPicture.querySelector(".social__comments-loader");
const commsCount = socialBigPicture.querySelector(".social__comment-count");

const COMMENTS_LOAD_COUNT = 5;

let countCommsShow = 0;

function removeOldComments(){
  while (listComments.firstChild) {
    listComments.removeChild(listComments.lastChild);
  }
}

const addOrRemoveHidden = (hiddenFlag) =>{
  if (hiddenFlag){
    commsLoader.classList.add("hidden");
    commsCount.classList.add("hidden");
  } else {
    commsLoader.classList.remove("hidden");
    commsCount.classList.remove("hidden");
  }
};

function getAllComments(comments){
  countCommsShow = 0;
  renderComments(comments);
}

function renderComments(comments) {
  const commentsToShow = comments.slice(countCommsShow, countCommsShow + COMMENTS_LOAD_COUNT);

  if (commentsToShow.length > 0) {
    listComments.appendChild(createCommentsFragment(commentsToShow));
    countCommsShow += commentsToShow.length;
  }

  countComments.innerHTML = `${countCommsShow} из <span class="comments-count">${comments.length}</span> комментариев`;

  if (countCommsShow < comments.length) {
    addOrRemoveHidden(false);

    btnLoaderComments.onclick = () => {
      renderComments(comments);
    };
    return;
  }
  addOrRemoveHidden(true);
}

function createComment(comment) {
  const commentBlock = commentTemplate.cloneNode(true);
  const elementCommentBlock = commentBlock.querySelector(".social__picture");

  const {avatar, name, message} = comment;

  elementCommentBlock.src = avatar;
  elementCommentBlock.alt = name;
  // elementCommentBlock.title = name;
  commentBlock.querySelector(".social__text").textContent = message;

  return commentBlock;
}

function createCommentsFragment(comments){
  const commentsFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    commentsFragment.appendChild(createComment(comment));
  });

  return commentsFragment;
}

export {removeOldComments, getAllComments};
