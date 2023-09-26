fetch("https://jsonplaceholder.typicode.com/posts")
  .then(async (resp) => {
    if (resp.status !== 200) throw new Error("ERRO 404");
    const posts = await resp.json();
    return posts;
  })
  .then((posts) => console.log(posts))
  .catch((e) => console.log(e));
