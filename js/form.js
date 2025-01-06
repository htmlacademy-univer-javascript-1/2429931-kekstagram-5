import { validateHashtags, commentValidate } from "./validate.js";
import { FILE_TYPES, ERRORS } from "./constansts.js";
import { sendData } from "./api.js";
import { showSuccessLoad, showErrorLoad} from "./modal.js";

const bodyElement = document.body;
const imgUpload = bodyElement.querySelector(".img-upload");
const imgUploadOverlay = imgUpload.querySelector(".img-upload__overlay");
const imgUploadInput = imgUpload.querySelector(".img-upload__input");
const btnImgUploadCancel = imgUploadOverlay.querySelector(".img-upload__cancel");
const imgUploadPreview = imgUploadOverlay.querySelector(".img-upload__preview img");
const imgUploadForm = imgUpload.querySelector(".img-upload__form");
const effectsPreview = document.querySelectorAll(".effects__preview");

const textHashTags = document.querySelector(".text__hashtags");
const textDescription = document.querySelector(".text__description");

const submitButton = imgUpload.querySelector(".img-upload__submit");

const pristine = new Pristine(imgUploadForm, {
  classTo: "form__item",
  errorClass: "form__item--invalid",
  successClass: "form__item--valid",
  errorTextParent: "form__item",
  errorTextTag: "span",
  errorTextClass: "form__error"
});

function addValidHashAndTag(){
  pristine.addValidator(textHashTags, (value) => {
    const result = validateHashtags(value);
    return result.valid;
  }, (value) => {
    const result = validateHashtags(value);
    return result.message;
  }, 1);

  pristine.addValidator(textDescription, commentValidate, ERRORS.bigSizeDescriprion);
  textDescription.addEventListener("input", (event) => {
    event.preventDefault();
    pristine.validate();
  });
}
addValidHashAndTag();

const onDocumentKeydown = (evt) => {
  if (evt.key === "Escape" || evt.keyCode === 27) {
    evt.preventDefault();

    if (document.activeElement === textHashTags
      || document.activeElement === textDescription) {
      evt.stopPropagation();
    } else {
      imgUploadForm.reset();
      closePhotoInForm();
    }
  }
};

function addEventListenerForm(){
  imgUploadInput.addEventListener("change", (event) => {
    event.preventDefault();

    getSrc();
  });
}

function getSrc(){
  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    resetForm();
    effectsPreview.forEach((element) => {
      imgUploadPreview.src = URL.createObjectURL(file);
      element.style.backgroundImage = `url(${imgUploadPreview.src})`;
    });
    openUploadForm();
  } else {
    imgUploadInput.value = "";
  }
}

function openUploadForm(){
  imgUploadOverlay.classList.remove("hidden");
  bodyElement.classList.add("modal-open");

  document.addEventListener("keydown", onDocumentKeydown);
  btnImgUploadCancel.addEventListener("click", closePhotoInForm);
  imgUploadForm.addEventListener("submit", onSubmitForm);
}

function closePhotoInForm(){
  imgUploadOverlay.classList.add("hidden");
  document.querySelector("body").classList.remove("modal-open");

  document.removeEventListener("keydown", onDocumentKeydown);
  btnImgUploadCancel.removeEventListener("click", closePhotoInForm);
  imgUploadForm.removeEventListener("submit", onSubmitForm);
}

function resetForm(){
  imgUploadPreview.src = "#";

  effectsPreview.forEach((element) => {
    element.style.backgroundImage = "none";
  });
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

function onSubmitForm(evt){
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    textHashTags.value = textHashTags.value.trim().replace(/\s+/g, " ");

    sendData(new FormData(evt.target))
      .then(() => {
        showSuccessLoad();
        closePhotoInForm();
        imgUploadForm.reset();
      })
      .catch(
        (err) => {
          showErrorLoad(err.message);
        }
      )
      .finally(unblockSubmitButton);
  }
}

export {addEventListenerForm};
