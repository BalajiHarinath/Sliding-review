import "./styles.css";
import { useState, useEffect } from "react";
import Data from "./data";

export default function App() {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  function right(index) {
    return setIndex(index + 1);
  }
  function left(index) {
    return setIndex(index - 1);
  }
  return (
    <section className="App">
      <h1>
        <span style={{ color: "brown" }}>/ </span>Reviews
      </h1>
      <div className="underline"></div>
      <div className="section-center">
        {data.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "next";
          if (personIndex === index) {
            position = "active";
          } else if (personIndex === index - 1) {
            position = "prev";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} />
              <h4 className="name">{name}</h4>
              <p className="title">{title}</p>
              <p className="quote">{quote}</p>
            </article>
          );
        })}
        {console.log(index)}
        <button className="left" onClick={() => left(index)}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button className="right" onClick={() => right(index)}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
}
