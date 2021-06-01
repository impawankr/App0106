import React from "react";
import "./names";
import "./data";
import "./style.css";

function App(props) {
  return (
    <>
      <h1>hey!🔥 my name is {props.name}</h1>
      <h2>my age: {props.age}</h2>
    </>
  );
}
//card component
function Card(props) {
  return (
    <>
      <div className="card_body">
        <div className="card_img">
          <img src={props.src} alt="img" />
        </div>
        <div className="card_title">
          <h1>{props.title}</h1>
          <a className="btn_link" href={props.link} target="_pawan">
            <button className="btn">Watch Now!</button>
          </a>
        </div>
        <div className="card_desp">
          <p>{props.desp}</p>
        </div>
      </div>
    </>
  );
}
//header component

function Header(props) {
  return (
    <>
      <div className="head">
        <h1>Top Movies (English)</h1>
      </div>
    </>
  );
}
function Footer(props) {
  return (
    <>
      <div className="foot head">
        <h1>© 2021 Copyright</h1>
      </div>
    </>
  );
}

function allNames(val) {
  return (
    <>
      <App name={val.name} age={val.age} />
    </>
  );
}

function ncards(val) {
  return (
    <>
      <Card
        title={val.title}
        src={val.imgsrc}
        desp={val.desc}
        link={val.link}
      />
    </>
  );
}

export default App;
export { Card, allNames, Header, ncards, Footer };
