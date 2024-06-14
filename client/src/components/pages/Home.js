import React from "react";
import { Link } from "react-router-dom";
import Slider from "../inc/slider";
import Vms from "../inc/mission";
import Navbar from "../inc/navbar";
import image1 from "../image/action2.jpg";
import image3 from "../image/action5.jpg";
import image2 from "../image/ction6.jpg";
import slider2 from "../image/slider2.jpg";
import slider3 from "../image/slider3.jpg";
import Footer from "../inc/footer";
import MyNavbar from "../inc/HomeNavbar";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <MyNavbar />

      <div className="">
        <section className="section  flex justify-center mt-10 p-[60px] bg-gray-100 ">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="card shadow rounded w-full" 
          >
            <Carousel.Item>
              <img
                src={image1}
                alt="Slider1"
                style={{
                  width: "100%",
                  height: "350px",
                  borderRadius: "20px",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image3}
                alt="Slider2"
                style={{
                  width: "700px",
                  height: "350px",
                  borderRadius: "20px",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={image2}
                alt="Slider3"
                style={{
                  width: "700px",
                  height: "350px",
                  borderRadius: "20px",

                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
        <Vms />
        <section className="section  border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading ">Our Service</h3>
                <div className="underline mx-auto"></div>
              </div>
              <div className="col-md-4 text-center">
                <div className="card shadow">
                  <img src={image1} className="w-100% border-bottom"></img>
                  <div className="card-body">
                    <h6>Service1</h6>
                    <div className="underline mx-auto"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    <Link to="/servics" className="btn btn-link">
                      read more
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="card shadow">
                  <img src={image2} className="w-100% border-bottom"></img>
                  <div className="card-body">
                    <h6>Service2</h6>
                    <div className="underline mx-auto"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    <Link to="/servics" className="btn btn-link">
                      read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="card shadow">
                  <img src={image3} className="w-100% border-bottom"></img>
                  <div className="card-body">
                    <h6>Service3</h6>
                    <div className="underline mx-auto "></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    <Link to="/servics" className="btn btn-link">
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
