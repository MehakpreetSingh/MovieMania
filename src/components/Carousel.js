import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner " >
                <div className="carousel-item active">
                <img src="//forumcinemaslv.blob.core.windows.net/1012/Event_9398/landscape_billboard_wide/Doctor-Strange-2-billboard.jpg" className="d-block mx-auto w-100 " alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="//forumcinemaslv.blob.core.windows.net/1012/Event_9398/landscape_billboard_wide/Doctor-Strange-2-billboard.jpg"  className="d-block mx-auto w-100 " alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="//forumcinemaslv.blob.core.windows.net/1012/Event_9398/landscape_billboard_wide/Doctor-Strange-2-billboard.jpg"  className="d-block mx-auto w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
      </div>
    )
  }
}

export default Home
