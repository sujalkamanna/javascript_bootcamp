function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
  });
}

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 2000);
  });
}

Promise.all([getUser(), getPosts()])
  .then(([user, posts]) => {
    console.log("User:", user);
    console.log("Posts:", posts);
  })
  .catch(error => {
    console.error("Something failed:", error);
  });
