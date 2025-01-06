const loadSuccessTemplate = document.querySelector("#success").content.querySelector(".success");
const loadErrorTemplate = document.querySelector("#error").content.querySelector('.error');

const closeLoad = () => {
  const activeModal = document.querySelector(".modal-show-active");
  if (activeModal) {
    activeModal.classList.remove('modal-show-active');
    activeModal.remove();
  }
};

const onDocumentKeydown = (evt) => {
  if (evt.key === "Escape" || evt.keyCode === 27) {
    evt.preventDefault();
    document.removeEventListener("keydown", onDocumentKeydown);
    closeLoad();
  }
};

const onClickOutside = (event) => {
  if (!event.target.closest(".success__inner")) {
    document.removeEventListener("click", onClickOutside);
    closeLoad();
  }
};

const onClickBtn = () => {
  closeLoad();
};

const createModalFragment = (template, message) => {
  const modalFragment = document.createDocumentFragment();

  const modalBlock = template.cloneNode(true);
  modalBlock.classList.add('modal-show-active');
  if (message) {
    modalBlock.querySelector('.error__title').textContent = message;
    // modalBlock.querySelector('.error__title').style.padding = "10px 5px";
  }

  modalFragment.appendChild(modalBlock);
  return modalFragment;
};

const addFragment = (btn) => {
  document.addEventListener("keydown", onDocumentKeydown);
  btn.addEventListener("click", onClickBtn);
  document.addEventListener("click", onClickOutside);
};

const showSuccessLoad = () => {
  document.body.append(createModalFragment(loadSuccessTemplate));
  const btnSuccess = document.querySelector(".success__button");
  addFragment(btnSuccess);
};

const showErrorLoad = (message) => {
  document.body.append(createModalFragment(loadErrorTemplate, message));
  const btnError = document.querySelector(".error__button");
  addFragment(btnError);
  // document.querySelector('.error__title').style.height = "10px";
};

export { showSuccessLoad, showErrorLoad };
