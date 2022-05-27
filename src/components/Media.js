import React, { Component } from 'react'
import MediaItem from './MediaItem'
import PropTypes from 'prop-types'

export class Media extends Component {
    static defaultProps = { 
        pageSize : 5 ,
        genre : ''
    }
    static propTypes = { 
        pageSize : PropTypes.number, 
        genre : PropTypes.string 
    }
    constructor() {
        super() ;
        this.state = {
            results :[],
            page :1 ,
            loading :false ,
            totalResults : 0,
            totalpages : 0
        }
    }

    async componentDidMount() {
        if(this.props.searchState === true) {
          let url = `https://api.themoviedb.org/3/search/movie?api_key=748d8f1491929887f482d9767de12ea8&language=en-US&query=${this.props.searchtext}&page=1&include_adult=false` ;
          let data = await fetch(url) ;
          let parsedData = await data.json() ;
          this.setState({results:parsedData.results , totalResults:parsedData.total_results , totalpages : parsedData.total_pages})
          this.props.resetSearchState();
        }
        else{
          let url = `https://api.themoviedb.org/3/trending/${this.props.type}/day?api_key=748d8f1491929887f482d9767de12ea8` ;
        let data = await fetch(url) ;
        let parsedData = await data.json() ;
        this.setState({results:parsedData.results , totalResults:parsedData.total_results , totalpages : parsedData.total_pages})
        }
        
    }
    handleNextClick = async()=> {
        let url = `https://api.themoviedb.org/3/trending/${this.props.type}/day?api_key=748d8f1491929887f482d9767de12ea8&page=${this.state.page+1}` ;
        let data = await fetch(url) ;
        let parsedData = await data.json() ;
        this.setState({results:parsedData.results , totalResults:parsedData.total_results , totalpages : parsedData.total_pages , page:parsedData.page})
    }
    handlePrevClick = async()=> {
        let url = `https://api.themoviedb.org/3/trending/${this.props.type}/day?api_key=748d8f1491929887f482d9767de12ea8&page=${this.state.page-1}` ;
        let data = await fetch(url) ;
        let parsedData = await data.json() ;
        this.setState({results:parsedData.results , totalResults:parsedData.total_results , totalpages : parsedData.total_pages , page:parsedData.page})
    }
  render() {
    return (
      <div className="container my-3">
          <div className='row'>
          {this.state.results.map((element)=>{
              return <div className="col-md-4"key={element.id}>
                  {/* {console.log(element.title)} */}
                <MediaItem type={element.media_type} tmdbid={element.id} title={element.hasOwnProperty("title")?element.title:element.name} vote={element.vote_average} descrip={element.overview} imageUrl={`https://www.themoviedb.org/t/p/w1280/${element.poster_path}`}   />
              </div>
          })}
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-dark text-light my-1 mx-1" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > this.state.totalpages} type="button" className="btn btn-outline-dark text-light my-1 mx-1" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default Media