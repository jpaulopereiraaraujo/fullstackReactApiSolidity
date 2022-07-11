import Nav from "../components/Nav";
import videoBG from '../assets/block.mp4'
import NewsGeneral from "../components/NewsGeneral"

function CryptoNews() {

    return(
        <>

<div className='mainVB'>
        <div className="overlay"></div>

        <video src={videoBG} autoPlay loop muted />
    </div>
        <Nav/>

        <div class="columns is-mobile is-centered">
        <div class="column is-four-fifths  is-half is-offset-3">
            <div class="is-justify-content-center">
            <NewsGeneral/>
        </div>
        </div>
    </div>

        

        
        
        </>

    )
}

export default CryptoNews