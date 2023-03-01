import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode} menu`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode === 'light'?'black':'light'}`} to="/">{props.text}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode === 'light'?'black':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className= "nav-link" to="/about">About</Link>
        </li>
      </ul>
      <button className="btn btn-danger my-3 mx-2" type="submit">Red</button>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.color}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
    </div>
  </div>
</nav>
    </>
  );
}
