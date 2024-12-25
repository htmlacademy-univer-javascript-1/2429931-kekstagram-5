// import { createCommentTemplate } from "./comment-template.js";
import { removeOldComments, getAllComments } from "./comments.js";

const bigPictureElement = document.querySelector(".big-picture");
const btnCloseFullPosts = bigPictureElement.querySelector(".big-picture__cancel");
const socialBigPicture = bigPictureElement.querySelector(".big-picture__social");

const onDocumentKeydown = (evt) => {
  if (evt.key === "Escape" || evt.keyCode === 27) {
    evt.preventDefault();
    closeFullPost();
  }
};

function renderPost(post){
  const {url, description, comments, likes} = post;

  const imgBigPictureElement = bigPictureElement.querySelector(".big-picture__img img");
  const likesBigPicture = socialBigPicture.querySelector(".likes-count");
  const countCommentsBigPicture = socialBigPicture.querySelector(".comments-count");
  const descriptionBigPicture = socialBigPicture.querySelector(".social__caption");

  imgBigPictureElement.src = url;
  likesBigPicture.textContent = likes;
  countCommentsBigPicture.textContent = comments.length;
  descriptionBigPicture.textContent = description;

  getAllComments(comments);
}

function openFullPost(post){
  removeOldComments();
  bigPictureElement.classList.remove("hidden");
  document.querySelector("body").classList.add("modal-open");

  renderPost(post);
  document.addEventListener("keydown", onDocumentKeydown);
  btnCloseFullPosts.addEventListener("click", closeFullPost);
}

function closeFullPost(){
  bigPictureElement.classList.add("hidden");
  document.querySelector("body").classList.remove("modal-open");
  document.removeEventListener("keydown", onDocumentKeydown);
  btnCloseFullPosts.removeEventListener("click", closeFullPost);
}

export {openFullPost};
