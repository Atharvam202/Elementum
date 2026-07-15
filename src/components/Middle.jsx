import "./Middle.css";
import redsquare from "../assets/redsquare-middle.png";
import rightimg from "../assets/middle-img1.png";
import yellowLine1 from "../assets/yellow-hero.png";
import greenBlob1 from "../assets/green-hero.png";

function Middle() {
  return (
    <section className="Middle">
        <img src={yellowLine1} className="yellow-line1" alt="" />
        <img src={greenBlob1} className="green-blob1" alt="" />
        <div className="left1">
            <h1 className="left_heading">
                Tomorrow should <br />
                be better than today
            </h1>
            <p className="home-para">
                We are a team of strategists, designers communicators, researchers. <br />
                Togeather, we belive that progress only happens when you refuse <br />
                to play things safe.
            </p>
            <div className="read-more-btn1">
            <span className="text">Read more</span>
            <span className="line"></span>
            <span className="arrow">→</span>
            </div>
            
        </div>
        <div className="right1">
            <img src={redsquare} className="red-square" alt="" />
            <img src={rightimg} className="right-img" alt="" />
        </div>
    </section>
  );
}

export default Middle;