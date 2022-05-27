import React , {useState} from 'react'
import MediaItem from './MediaItem'

const Search = () => {
    const [query, setquery] = useState('')
    const [type, settype] = useState('')
    const [results, setresults] = useState([])
    const [totalResults, settotalResults] = useState(0)
    const [totalpages, settotalpages] = useState(0)
    const [page, setpage] = useState(0)

    const fetchQuery = async () => {
        let url = `https://api.themoviedb.org/3/search/${type}?api_key=748d8f1491929887f482d9767de12ea8&language=en-US&query=${query}&page=1&include_adult=false` ;
        let data = await fetch(url) ;
        let parsedData = await data.json() ;
        console.log(parsedData)
      setresults(parsedData.results) ;
      settotalResults(parsedData.total_results );
      settotalpages(parsedData.total_pages) ;
  }
    const ontoggle = (e) => {
            e.preventDefault();
            fetchQuery();
    }
    const onRadioChange = (e) => {
        settype(e.target.value)
      }
    
    
  return (
      <>
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
                <form className="d-flex" role="search" onSubmit={ontoggle} >
                    <div className="mx-3 btn-group btn-group-sm d-flex text-light" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check text-light" value='movie' name="btnradio" id="btnradio1" autoComplete="off" onChange={onRadioChange}/>
                        <label className="btn btn-outline-light text-light" htmlFor="btnradio1">Movies</label>

                        <input type="radio"  className="btn-check" name="btnradio" value='tv' id="btnradio2" autoComplete="off" onChange={onRadioChange}/>
                        <label className="btn btn-outline-light text-light" htmlFor="btnradio2">TV</label>
                    </div>
                    <input className="form-control me-2" name="search" type="search" placeholder="Search" aria-label="Search" onChange={e=>setquery(e.target.value)}/>
                    <button className="btn btn-outline-light text-light " type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
    
      </div>
      <div className="container my-3">
      <div className='row'>
      {results.map((element)=>{
          return <div className="col-md-4"key={element.id}>
              {/* {console.log(element.title)} */}
            <MediaItem type={type} tmdbid={element.id} title={element.hasOwnProperty("title")?element.title:element.name} vote={element.vote_average} descrip={element.overview} imageUrl={`https://www.themoviedb.org/t/p/w1280/${element.poster_path}`}   />
          </div>
      })}
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-outline-dark text-light my-1 mx-1">&larr; Previous</button>
        <button disabled={page + 1 >totalpages} type="button" className="btn btn-outline-dark text-light my-1 mx-1" >Next &rarr;</button>
      </div>
  </div>
  </>
  )
}

export default Search
