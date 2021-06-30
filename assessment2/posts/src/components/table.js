import React from "react";

export default function Table() {
  let [posts, setPosts] = React.useState([]);

  async function getPosts() {
    await fetch("http://localhost:8000/allPosts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPosts(res)
      });
  }

  React.useEffect(() => {
    // fetch('http://localhost:8000/allPosts').then((res)=>res.json()).then((response)=>{
    //     setPosts(response);
    //     console.log(response[0]);
    // });
    getPosts();
  }, []);

  return (
    <div>
      <div>
        <table>
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
