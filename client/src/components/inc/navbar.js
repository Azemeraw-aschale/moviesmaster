import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar  navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse-sm" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
    // <nav class="flex justify-between  navbar navbar-expand-lg bg-dark text-white navbar-dark fixed-top">
    //   <div>
    //     <h1>Company</h1>
    //   </div>
    //   <div class="">
    //     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    //       <li class="nav-item">
    //         <Link to="/" class="nav-link active">
    //           Home
    //         </Link>
    //       </li>
    //       <li class="nav-item">
    //         <Link to="/help" class="nav-link active">
    //           Services
    //         </Link>
    //       </li>
    //       <li class="nav-item">
    //         <Link to="/contact" class="nav-link active">
    //           Contact
    //         </Link>
    //       </li>
    //       <li class="nav-item">
    //         <Link to="/about" class="nav-link active">
    //           About
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="flex gap-2 justify-end">
    //     <div>
    //       <button className="btn bg-primary">SignUP</button>
    //     </div>
    //     {/* <div>
    //     <button className="btn bg-primary">SignIn</button>
    //     </div> */}
    //   </div>
    // </nav>
  );
}

export default Navbar;
