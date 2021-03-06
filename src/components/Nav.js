import { Link } from 'react-router-dom'
import { Button } from 'react-bulma-components';
function Nav() {
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });

  });




  return (


    <>
      <nav class="navbar is-transparent is-hidden-mobile">
        <div class="navbar-brand">
          <a href="/">
            <img src="https://techatlast.com/wp-content/uploads/2012/06/web-3.0.png" alt="Bulma: a modern CSS framework based on Flexbox" width="224" height="56"></img>
          </a>



          <div role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false" id="refreshThis">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>





        </div>

        <div id="navMenu" class="navbar-menu ">
          <div class="navbar-start">

            <Link to='/' class="navbar-item">
              <Button>
                Home
              </Button>
            </Link>

            <Link to='/vendingmachine' class="navbar-item">
              <Button>
                VendingMachine
              </Button>
            </Link>

            <Link to='/faucet' class="navbar-item">
              <Button>
                Faucet
              </Button>
            </Link>

            <Link to='/cryptonews' class="navbar-item">
              <Button>
                CryptoNews
              </Button>
            </Link>





            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                Links ??teis
              </div>
              <div class="navbar-dropdown is-boxed">

                <a class="navbar-item" href="https://faucet.egorfine.com/" target="_blank" rel="noreferrer">
                  Faucet 1 para mais Eths
                </a>

                <a class="navbar-item" href="https://faucet.metamask.io/" target="_blank" rel="noreferrer">
                  Faucet 2 para mais Eths
                </a>

                <a class="navbar-item" href="https://ropsten.etherscan.io/address/0xACC74631B7d28E248aeef69f0a4c564dea63DDA5" target="_blank" rel="noreferrer">
                  Contrato- VendingMachine - Ropsten
                </a>

                <a class="navbar-item" href="https://ropsten.etherscan.io/address/0x4CdC6a70288CAE72B110E2D0914C31E65d9a28EC" target="_blank" rel="noreferrer">
                  Contrato- Faucet - Ropsten
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-link" href="https://www.linkedin.com/in/joao-paulo-pereira-de-ara%C3%BAjo-b24b63231/" target="_blank" rel="noreferrer">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Linkedin</span>
                  </a>
                </p>




                <p class="control">
                  <a class="button is-dark has-text-white" href="https://github.com/jpaulopereiraaraujo" target="_blank" rel="noreferrer">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Github</span>
                  </a>
                </p>

              </div>
            </div>
          </div>
        </div>







      </nav>

      <nav class="navbar is-transparent is-hidden-tablet">


        <nav class="breadcrumb is-centered is-mobile" aria-label="breadcrumbs">
          <ul>
          

            <Link to='/' class="navbar-item">
              <Button class="button ">
                Home
              </Button>
            </Link>

            <Link to='/vendingmachine' class="navbar-item">
              <Button class="button ">
                VendingMachine
              </Button>
            </Link>

            <Link to='/faucet' class="navbar-item">
              <Button class="button ">
                Faucet
              </Button>
            </Link>

            <Link to='/cryptonews' class="navbar-item">
              <Button class="button ">
                CryptoNews
              </Button>
            </Link>
            

            <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-link" href="https://www.linkedin.com/in/joao-paulo-pereira-de-ara%C3%BAjo-b24b63231/" target="_blank" rel="noreferrer">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Linkedin</span>
                  </a>
                </p>




                <p class="control">
                  <a class="button is-dark has-text-white" href="https://github.com/jpaulopereiraaraujo" target="_blank" rel="noreferrer">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Github</span>
                  </a>
                </p>

              </div>
            </div>
          </div>
          


          </ul>
        </nav>


      </nav>


    </>
  )


}

export default Nav;