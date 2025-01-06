import { openFullPost } from "./post-open.js";
import { getData } from "./api.js";
import { showErrorLoad } from "./modal.js";

const picturesContainer = document.querySelector(".pictures");

const picturesTemplate = document.querySelector("#picture").content.querySelector(".picture");

function renderPosts(posts){
  const postsFragment = document.createDocumentFragment();

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
function loadPost (){
  getData()
    .then((data) => {
      renderPosts(data);
    })
    .catch(
      (err) => {
        showErrorLoad(err.message);
      }
    );
}

export {loadPost};
