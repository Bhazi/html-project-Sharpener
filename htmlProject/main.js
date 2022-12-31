let posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPost() {
  var output = " ";
  setTimeout(() => {
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function setPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error : Something is went wrong ");
      }
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length != 0) {
        resolve(posts.pop());
      } else {
        reject("Error : Array is Empty");
      }
    }, 1000);
  });
}

setPost({ title: "Post Three", body: "This is post three" })
  .then(() => {
    getPost();
    deletePost()
      .then(() => {
        getPost();
        deletePost()
          .then(() => {
            getPost();
            deletePost()
              .then(() => {
                getPost(),
                  setPost({
                    title: "Post four",
                    body: "This is post four",
                  }).then(() => {
                    getPost(),
                      deletePost()
                        .then(() => {
                          getPost(),
                            deletePost()
                              .then()
                              .catch((err) => {
                                console.log(err);
                              });
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });x



// ===========promises.all===================
var user = [{ name: "Lee", lastActivity: new Date().toString() }];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.push(post);
      resolve(user);
      reject();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivity = new Date().toString();
      resolve(lastActivity);
      reject("sorry");
    }, 1000);
  });
}

const op = createPost({
  name: "Poll",
  lastActivity: new Date().toString(),
});
const opo = updateLastUserActivityTime();

Promise.all([op, opo])
  .then(([posts, ActivityTime]) => {
    console.log(posts);
    console.log("before creating post time is " + ActivityTime);
  })
  .catch((err) => {
    console.log(err);
  });
