import React from "react";

// function User(props) {
//   return (
//     <div id="user">

//     </div>
//   )
// }

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
