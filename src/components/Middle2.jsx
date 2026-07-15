import "./Middle2.css";
import leftimg from "../assets/left-middle.png";
import yellowLine2 from "../assets/yellow-hero.png";
import greenBlob2 from "../assets/green-hero.png";
import redtringle1 from "../assets/redtringle.png";
import redtringle2 from "../assets/redtringle.png";

function Middle2() {
  return (
    <section className="Middle2">
  <img src={yellowLine2} className="yellow-line2" alt="" />
  <img src={greenBlob2} className="green-blob2" alt="" />

  <div className="left2">
    <img src={redtringle1} className="red-triangle1" alt="" />
    <img src={leftimg} className="left-img2" alt="" />
    <img src={redtringle2} className="red-triangle2" alt="" />
  </div>

  <div className="right2">
    <h1 className="left_heading">
      See how we can <br />
      help you progress.
    </h1>

    <p className="home-para">
      We add a layer of fearless insights and action that allows change<br />
      makers to accelerate their progress in areas such as brand, design, <br /> 
      digital, comms and social research.
    </p>

    <div className="read-more-btn1">
      <span>Read more</span>
      <span className="line"></span>
      <span>→</span>
    </div>
  </div>
</section>
  );
}

export default Middle2;