import BNews from "../components/BNews"
import "../App.css"
import Nav from "../components/Nav"
import videoBG from '../assets/block.mp4'


function CryptoNews() {

    return (
        <>

            <div className='mainVB'>
                <div className="overlay"></div>

                <video src={videoBG} autoPlay loop muted />
            </div>
            <Nav />


            <div className="columns is-mobile is-centered">
                <div className="column is-four-fifths  is-half is-offset-3">
                    <div className="is-justify-content-center">
                        
                        <BNews />
                    </div>
                </div>
            </div>





        </>

    )
}

export default CryptoNews