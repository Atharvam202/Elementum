import "./Home.css";
import epsillon from "../assets/Ellipse.png";
import mount from "../assets/home-mount.png";
import yellowLine from "../assets/yellow-hero.png";
import greenBlob from "../assets/green-hero.png";
import pinkBlob from "../assets/pink-hero.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";

function Home() {
  return (
    
    <section className="Home">

      <img src={yellowLine} className="yellow-line" alt="" />
      <img src={greenBlob} className="green-blob" alt="" />
      <img src={pinkBlob} className="pink-blob" alt="" />
      
    <div className="hero">

    <h1 className="home-heading">
        The thinkers and <br />
        doers were changing <br />
        the status quo with
    </h1>

    <img src={epsillon} className="ellipse" alt="" />

    <p className="home-para">
        We are a team of strategists, designers, communicators,
        researchers. Together,
        <br />
        we believe that progress only happens when you refuse to
        play things safe.
    </p>

    <img src={mount} className="mount" alt="" />

    </div>

    <div className="home-images">
    <img src={img1} className="circle-image img1" alt="" />
    <img src={img2} className="circle-image img2" alt="" />
    <img src={img3} className="circle-image img3" alt="" />
    <img src={img4} className="circle-image img4" alt="" />
    <img src={img5} className="circle-image img5" alt="" />
    <img src={img6} className="circle-image img6" alt="" />
    <img src={img7} className="circle-image img7" alt="" />
    <img src={img8} className="circle-image img8" alt="" />

    </div>
    </section>
    
  );
}

export default Home;