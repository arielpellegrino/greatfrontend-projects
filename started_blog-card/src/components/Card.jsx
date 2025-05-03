import React from "react";
import "./Card.css";
import ImageBanner from "../img/img_banner.jpg";

export default function Card() {
  return (
    <div className="container">
      <div className="blog__card">
        <div className="img__banner">
          <img src={ImageBanner} className="img__banner" alt="Banner Image" />
        </div>
        <div className="info__banner">
          <div className="badge__banner">Interior</div>
          <div className="title__banner">
            <h3>Top 5 Living Room Inspirations</h3>
          </div>

          <div className="descripton__banner">
            <h6>
              Curated vibrants colors for your living, make it pop & calm in the
              same time.
            </h6>
          </div>
          <button className="button__banner"><a href="#">Read more  &rarr; </a></button>
        </div>
      </div>
    </div>
  );
}
