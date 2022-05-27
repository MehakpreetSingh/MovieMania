import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    onTrigger = (event) => {
      this.props.appCallback(event.target.search.value)
      console.log("search Clicked")
      event.preventDefault();
    }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="./icon.png" alt="" width="30" height="24"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Genre
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/">Fiction</a></li>
                        <li><a className="dropdown-item" href="/">Fantasy</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex" role="search" >
                    <Link to="/search"><button className="btn btn-outline-light text-light " type="button">Search</button></Link>
                </form>
                </div>
            </div>
            </nav>
            <div className="btn-group btn-group-sm d-flex" role="group" aria-label="Basic radio toggle button group">
                <Link to="/movies" ><input type="button" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" href="/movies"/></Link>
                <label className="btn btn-outline-dark" htmlFor="btnradio1">Movies</label>

                <Link to="/tv"><input type="button"  className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" href="/tv"/></Link>
                <label className="btn btn-outline-dark" htmlFor="btnradio2">TV</label>
                </div>
    
      </div>
    )
  }
}

export default Navbar
