console.log("person 1: shows ticket");
console.log("person 2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));

  const addButter = new Promise((resolve, reject) => resolve("butter"));

  const getColdDrink = new Promise((resolve, reject) => resolve("cola"));

  let ticket = await promiseWifeBringTicks;

  console.log(`wife: i have the ${ticket}`);
  console.log("husband: we should go in");
  console.log("wife: no i am hungry");

  let popcorn = await getPopcorn;

  console.log(`husband: i got some ${popcorn}`);
  console.log("husband: we should go in");
  console.log("wife: I need some butter on my popcorn");

  let butter = await addButter;

  console.log(`husband: i got some ${butter} on popcorn`);
  console.log("husband: anything else ?");
  console.log("wife: i want some Cooled drinks ");

  let cola = await getColdDrink;

  console.log("here is your " + cola);
  console.log("wife: Thanks");
  return ticket;
};

preMovie().then((t) => {
  console.log(`person 3: shows ${t}`);
});

console.log("person 4: shows ticket");
console.log("person 5: shows ticket");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

var posts = [
  { name: "lee", body: "This is lee's property" },
  { name: "john", body: "This is john's property" },
];

async function deletePost() {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts.pop());
      reject("Removing is failed");
    }, 2000);
  });
}

deletePost().then((err) => {
  console.log(err);
});

async function createPost(post) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      resolve(posts);
      reject("post adding is failed");
    }, 2000);
  });
}

createPost({ name: "Ken", body: "This is ken's property" }).then((err) => {
  console.log(err);
});



