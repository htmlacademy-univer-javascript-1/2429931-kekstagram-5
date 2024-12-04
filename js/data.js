import { getRandomArrayElement, getRandomInteger} from "./util.js";
import * as constansts from "./constansts.js";

function createPosts(index){
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(constansts.DESCRIPTION),
    likes: getRandomInteger(15,200),
    comments: getAllComments(),
  };
}

function getAllPosts() {
  return Array.from(Array(constansts.COUNT_POSTS), (element, index) => createPosts(index + 1));
}

function createComments(index){
  return{
    id: index,
    avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
    message: getAllMessages(),
    name: getRandomArrayElement(constansts.NAMES_USER),
  };
}

function getAllComments() {
  const randomCountComments = getRandomInteger(0, 30);
  return Array.from(Array(randomCountComments), (element, index) => createComments(index + 1));
}

function getAllMessages(){
  const randomCountMessages = getRandomInteger(1,2);
  return Array.from(Array(randomCountMessages), () => getRandomArrayElement(constansts.MESSAGE)).join("\n");
}

export {getAllPosts};
