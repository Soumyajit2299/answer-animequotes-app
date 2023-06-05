import React, { useState } from "react";
/// THIS MODEL COMPONENT INCLUDES SOME EXTRA STYLING WHICH IS NOT MENTIONED IN THE QUESTION  \\\\
const AnimeQuotes = () => {
  const [title, setTitle] = useState("Anime Quotes");
  const [subtitle, setSubtitle] = useState("by Dipanjan Sengupta");
  const [body, setBody] = useState(
    "Click On The Button Below To Generate A Random Anime Quote"
  );

  const handleApi = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://animechan.vercel.app/api/random");
      const data = await response.json();
      setTitle(data.anime);
      setSubtitle(data.character);
      setBody(data.quote);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div
        className="card"
        style={{
          width: "36rem",
          height: "14rem",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            {title}
          </h5>
          <h6
            className="card-subtitle mb-2 text-body-secondary"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              color: "#777",
              marginBottom: "16px",
            }}
          >
            {subtitle}
          </h6>
          <p
            className="card-text"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "18px",
              marginBottom: "0",
            }}
          >
            <b>"{body}"</b>
          </p>
        </div>
      </div>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          style={{
            marginTop: "10px",
            width: "240px",
            fontFamily: "Arial, sans-serif",
            fontSize: "18px",
            fontWeight: "bold",
          }}
          onClick={handleApi}
        >
          Generate Quote
        </button>
      </div>
    </div>
  );
};

export default AnimeQuotes;
