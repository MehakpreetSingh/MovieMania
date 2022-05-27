import React, { Component } from 'react'
import './mediaItem.css'
export class MediaItem extends Component {
  render() {
    return (
      <div className="mx-3 my-3">
        <div className="card-container  box">
                <div className="card-flip ">
                
                <div className="card front bg-dark">
                <img src={this.props.imageUrl} className="card-img-top img-fluid" alt="movie-poster"/>
                    <div className="card-block bg-black">
                    <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text text-center px-4">{this.props.descrip.slice(0,88)}</p>
                            <p className="card-text"><small className="text-muted">2011</small></p>
                    </div>
                </div>
                {/* <!-- End Card Front --> */}

                {/* <!-- Card Back --> */}
                <div className="card back ">
                <div className="card-header warning-color"></div>
                    <div className="card-block text-center">
                    <h4 className="card-title">Rating</h4>
                                <p className="card-text"><a href="/" className="rating">{this.props.vote}/10</a></p>
                                <p className="card-text"><a href="/" className="rating">{this.props.id}</a></p>
                    <a href={`https://www.2embed.ru/embed/tmdb/${this.props.type}?id=${this.props.tmdbid}`} className="btn btn-secondary orange" >Watch Now</a>
                    </div>
                                    <img className="movie" src={this.props.imageUrl} alt="back-img"/>
                </div>
                {/* <!-- End Card Back --> */}
                </div>
            </div>
            {/* <!-- End Card --> */}
      </div>
    )
  }
}

export default MediaItem
