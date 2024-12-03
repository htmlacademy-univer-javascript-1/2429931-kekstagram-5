const COUNT_POSTS = 25;
const NAMES_USER = [
    'Иван',
    'Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
];

const MESSAGE = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createPosts(index){
    return {
        id: index,
        url: `photos/${index}.jpg`,
        description: `description${index}`,
        likes: getRandomInteger(15,200),
        comments: getAllComments(),
    };
}

// function getAllPosts(){
//     const posts = new Array(COUNT_POSTS)
//         .fill(0)
//         .map((item,index) => createPosts(index + 1));
//     return posts;
// }


function getAllPosts() {
    return Array.from(Array(COUNT_POSTS), (element, index) => createPosts(index + 1));
}

function createComments(index){
    return{
        id: index,
        avatar: `img/avatar-${getRandomInteger(0,6)}.svg`,
        message: getRandomArrayElement(MESSAGE),
        name: getRandomArrayElement(NAMES_USER),
    };
}

// function getAllComments(){
//     const randomCountMessage = getRandomInteger(0, 30);
//     const messages = new Array(randomCountMessage)
//         .fill(0)
//         .map((item,index) => createComments(index + 1));
//     return messages;
// }

function getAllComments() {
    const randomCountMessage = getRandomInteger(0, 30);
    return Array.from(Array(randomCountMessage), (element, index) => createComments(index + 1));
}

console.log(getAllPosts());
