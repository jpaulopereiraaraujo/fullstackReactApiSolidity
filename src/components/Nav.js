
function Nav() {
  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
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
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a href="/">
            <img src="https://techatlast.com/wp-content/uploads/2012/06/web-3.0.png" alt="Bulma: a modern CSS framework based on Flexbox" width="224" height="56"></img>
          </a>
          <div role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false" >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>

        </div>

        <div id="navMenu" class="navbar-menu ">
          <div class="navbar-start">
            <a id="linkhome" class="navbar-item" href="/">
              Home
            </a>

            <a id="linkhome" class="navbar-item" href="/vendingmachine">
              VendingMachine
            </a>

            <a id="linkhome" class="navbar-item" href="/faucet">
              Faucet
            </a>

            <a id="linkhome" class="navbar-item" href="/cryptonews">
              CryptoNews
            </a>


            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
                Links Úteis
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="https://faucet-react-solidity.vercel.app/">
                  Meu Faucet
                </a>
                <a class="navbar-item" href="https://faucet.egorfine.com/">
                  Faucet 1
                </a>

                <a class="navbar-item" href="https://faucet.metamask.io/">
                  Faucet 2
                </a>

                <a class="navbar-item" href="https://google.com">
                  Contrato - Ropsten
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-primary" href="https://www.linkedin.com/in/joao-paulo-pereira-de-ara%C3%BAjo-b24b63231/">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Linkedin</span>
                  </a>
                </p>




                <p class="control">
                  <a class="button is-primary" href="https://github.com/jpaulopereiraaraujo">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Github</span>
                  </a>
                </p>

                <p class="control">
                  <a class="button is-primary" href="https://github.com/jpaulopereiraaraujo/VendingMachineTokenJP/archive/refs/heads/main.zip">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>


    </>
  )


}

export default Nav;