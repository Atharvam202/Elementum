import "./Middle3.css";
import yellowLine3 from "../assets/yellow-hero.png";
import newredline from "../assets/redline2.png";
import greenBlobmid from "../assets/green-hero.png";


const projects = [
  {
    left: "Office of multiple\ninterest content",
    title: "Colaborative & partnership",
  },
  {
    left: "The hanger US Air force\ndigital experimental",
    title: "We talk about our weight",
  },
  {
    left: "Delta faucet content,\nsocial, digital",
    title: "Piloting digital confidence",
  },
];

function Middle3() {
  return (
    <section className="Middle3">
      <img src={yellowLine3} className="yellow-line4" alt="" />
      <img src={greenBlobmid} className="green-blobmid" alt="" />
      <img src={newredline} className="new-redline" alt="" />


      <div className="top">
        <div className="left3">
          <h1 className="top_heading">
            What we can <br />
            offer you!
          </h1>
        </div>
      </div>
      <div className="bottom">
        {projects.map((item, index) => (
          <div className="project-row" key={index}>
            <div className="project-left">
              {item.left.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div className="project-center">
              <h2>{item.title}</h2>

              {item.image && (
                <img src={item.image} alt="" className="project-circle" />
              )}
            </div>

            <div className="project-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Middle3;
