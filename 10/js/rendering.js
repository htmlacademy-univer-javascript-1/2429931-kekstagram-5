import { getAllPosts } from "./data.js";
import { openFullPost } from "./post-open.js";

const picturesContainer = document.querySelector(".pictures");

const picturesTemplate = document.querySelector("#picture").content.querySelector(".picture");

function renderPosts(){
  const postsFragment = document.createDocumentFragment();

  const posts = getAllPosts();
  posts.forEach((post) => {
    const {url, description, comments, likes} = post;

    const postsElement = picturesTemplate.cloneNode(true);
    const queryPicture = postsElement.querySelector(".picture__img");

    queryPicture.src = url;
    queryPicture.alt = description;
    postsElement.querySelector(".picture__comments").textContent = comments.length;
    postsElement.querySelector(".picture__likes").textContent = likes;

    postsFragment.appendChild(postsElement);

    postsElement.addEventListener("click", () => {
      openFullPost(post);
    });
  });

  picturesContainer.appendChild(postsFragment);
}

export {renderPosts};
