const fetch = require('node-fetch');

function prom() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error("No response");
        }
        return response.json();
      })
      .then((data) => {
        console.log("the data is :-", data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

prom()
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.error(error);
  });
