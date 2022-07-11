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

        <div class="is-justify-content-center is-align-self-center">
            <NewsGeneral/>
        </div>

        
        
        </>

    )
}

export default CryptoNews