import Nav from "../components/Nav";
import videoBG from '../assets/block.mp4'
import NewsGeneral from "../components/newsapi-devonly"

function apiNews() {

    return(
        <>

<div className='mainVB'>
        <div className="overlay"></div>

        <video src={videoBG} autoPlay loop muted />
    </div>
        <Nav/>

        <div className="columns is-mobile is-centered">
        <div className="column is-four-fifths  is-half is-offset-3">
            <div className="is-justify-content-center">
            <NewsGeneral/>
        </div>
        </div>
    </div>

        

        
        
        </>

    )
}

export default apiNews