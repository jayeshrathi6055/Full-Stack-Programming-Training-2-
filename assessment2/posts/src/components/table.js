import React from "react";

export default function Table() {
  let [posts, setPosts] = React.useState([]);

  function getPosts() {

    // fetch("https://jsonplaceholder.typicode.com/posts")
    fetch("http://localhost:8000/allPosts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res)
      });
  }

  React.useEffect(() => {
    getPosts();
  }, []);
 
  return (
    <div>
      <div>
        <table border = '1'>
          <thead>
            <tr>
              <td>Sno.</td>
              <td>Title</td>
              <td>Body</td>
            </tr>
          </thead>
          <tbody>
            {posts.map((element, index) => (
              <tr key={index}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
