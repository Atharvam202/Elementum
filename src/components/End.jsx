import "./End.css";

import greenBlob from "../assets/green-hero.png";
import yellowLine from "../assets/yellow-hero.png";

/* Left Images */
import leftBig from "../assets/left-big.png";
import leftTop from "../assets/left-top.png";
import leftMid from "../assets/left-mid.png";
import leftBottom from "../assets/left-bottom.png";

/* Right Images */
import rightBig from "../assets/right-big.png";
import rightTop from "../assets/right-top.png";
import rightMid from "../assets/right-mid.png";
import rightSmall from "../assets/right-small.png";

function End() {
  return (
    <section className="End">

      {/* LEFT */}
      <div className="left-side">

        <img src={leftTop} className="left-img left-top" alt="" />

        <img src={leftMid} className="left-img left-middle" alt="" />

        <img src={leftBottom} className="left-img left-bottom" alt="" />

        <img src={leftBig} className="left-img left-big" alt="" />

      </div>

      {/* MIDDLE */}
      <div className="mid-side">

        <img src={greenBlob} className="green-blob-end" alt="" />
        <img src={yellowLine} className="yellow-line-end" alt="" />

        <h1 className="end-heading">
          What our customer
          <br />
          says About Us
        </h1>

        <div className="testimonial-box">

          <span className="quote quote-top">❝</span>

          <p>
            Elementum delivered the site within the timeline as they
            requested. In the end, the client found a 50% increase in
            traffic within days since its launch. They also had an
            impressive ability to use technologies that the company
            hasn't used, which have also proved to be easy to use and
            reliable.
          </p>

          <span className="quote quote-bottom">❞</span>

        </div>

      </div>

      {/* RIGHT */}
      <div className="right-side">

        <img src={rightTop} className="right-img right-top" alt="" />

        <img src={rightSmall} className="right-img right-small" alt="" />

        <img src={rightMid} className="right-img right-middle" alt="" />

        <img src={rightBig} className="right-img right-big" alt="" />

      </div>

    </section>
  );
}

export default End;