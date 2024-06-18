import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="border-top bg-[#293A77] footer">
      <div className="container ">
        <div className="row">
          <div className="col-md-4 text-white">
            <h5 className="text-white">company Info</h5>
            <hr />
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur
            </p>
          </div>
          <div className="col-md-4 text-white">
            <h5>Quick link</h5>
            <hr />
            <div>
              <Link to="/ ">Home</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <Link to="/help">Service</Link>
            </div>
          </div>
          <div className="col-md-4 text-white ">
            <h5 className="text-white">Contact Address</h5>
            <hr />
            <div>
              <p className="text-white mb-1">09-881-881-77</p>
            </div>
            <div>
              <p className="text-white mb-1">Addis Ababa</p>
            </div>
            <div>
              <p className="text-white mb-1">company@gmail.com</p>
            </div>
            <div>
              <p className="text-white mb-1">Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
