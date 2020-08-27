global.fetch = require('node-fetch');

exports.getPosts = function () {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      // Figure out how to return data from promises so it can be rendered in Expo
      console.log('POSTS');
      data.forEach((post) => console.log(post.title));
    })
    .catch((err) => console.log(err));
};

exports.getPostComments = function () {
  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((comment) => console.log(comment.email));
    })
    .catch((err) => console.log(err));
};

// Created a config file for this function -> addPostConfig.json
exports.addPost = function () {
  let configjson = require('/Users/sivamagarwalla/Desktop/npm-react-native-test/addPostConfig.json');

  fetch(configjson.BASE_URL, {
    method: configjson.REQUEST_TYPE,
    headers: {
      Accept: configjson.REQUEST_HEADER.Accept,
      'Content-type': configjson.REQUEST_HEADER['Content-type'],
    },
    body: JSON.stringify({
      title: configjson.REQUEST_PARAMETERS.title,
      body: configjson.REQUEST_PARAMETERS.body,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
