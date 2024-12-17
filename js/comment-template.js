function createCommentTemplate(){
  const templateElement = document.createElement("template");
  const body = document.body;
  body.appendChild(templateElement);
  templateElement.id = "comment";
  templateElement.innerHTML = '<li class="social__comment"><img class="social__picture" src="img/avatar-4.svg" alt="Аватар комментатора фотографии" width="35" height="35">  <p class="social__text">aaaaaaaaaaaaa</p></li>';
}
export {createCommentTemplate};
