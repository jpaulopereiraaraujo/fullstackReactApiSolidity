import videoBG from '../assets/block.mp4'
import Nav from "../components/Nav"
import imgJP from '../assets/jp.jpg'

function Home() {
    return(
        <>
        
      <div className='mainVB'>
        <div className="overlay"></div>

        <video src={videoBG} autoPlay loop muted />
    </div>
    <Nav/>

    <div class="container is-align-content-center my-5 py-5">
  <div class="notification is-primary">
     <figure class="image is-128x128">
        <img class="is-rounded" src={imgJP} alt="Foto"></img>
    </figure>
    <div class="box my-6">
   Olá me chamo João Paulo  sou Dev. Solidity Jr. e atualmente em busca de uma vaga de desenvolvedor, neste endereço você encontrará alguns projetos meus, também no meu link do github possuo alguns projetos, se você quiser conferir basta acessar logo no topo desta página, obrigado pela visita  :)
    </div>


  
  </div>
</div>

   
        

        
        </>
    
        )
   
}

export default Home;