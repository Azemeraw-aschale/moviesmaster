

import slider1 from "../image/slider1.jpg";
import slider2 from "../image/slider2.jpg";
import slider3 from "../image/slider3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Slider() {
   

  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={slider3}
            alt="Los Angeles"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={slider2}
            alt="Chicago"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={slider3}
            alt="New York"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </div>
      </div>

      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
}

export default Slider;