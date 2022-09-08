import React, { useState, useEffect } from "react";
import "./RandomQuoteMachine.css";

export default function RandomQuoteMachine() {
  const [quotes, setQuotes] = useState("");
  const [color, setColor] = useState("black");

  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  const getRandomColor = () => {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColorIndex]);
  };

  const onClick = () => {
    getQuote();
    getRandomColor();
  };

  useEffect(() => {
    onClick();
  }, []);

  return (
    <>
      <div className="container" style={{ background: color }}>
        <div className="quote-box">
          <div class="quote-text">
            <i className="fa fa-quote-left icon"></i>
            <p className="quote" key={Math.random()}>
              {quotes.text}
            </p>
          </div>
          <p className="author"> - {quotes.author}</p>
          <div className="btnContainer">
            <button
              className="btn"
              onClick={onClick}
              style={{ background: color }}
            >
              New quote
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ background: color }}
            >
              Tweet
            </a>
          </div>
        </div>
        <div className="coder">by TrixOMG</div>
      </div>
    </>
  );
}
