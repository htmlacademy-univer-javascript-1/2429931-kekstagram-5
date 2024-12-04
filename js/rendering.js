import { getAllPosts } from "./data.js";

const picturesContainer = document.querySelector(".pictures");
const picturesTemplate = document.querySelector("#picture").content.querySelector(".picture");

const postsFragment = document.createDocumentFragment();

const posts = getAllPosts();
posts.forEach((post) => {
  const postsElement = picturesTemplate.cloneNode(true);
  postsElement.querySelector(".picture__img").src = post.url;
  postsElement.querySelector(".picture__img").alt = post.description;
  postsElement.querySelector(".picture__comments").textContent = post.comments.length;
  postsElement.querySelector(".picture__likes").textContent = post.likes;
  picturesContainer.appendChild(postsElement);
});

picturesContainer.appendChild(postsFragment);
