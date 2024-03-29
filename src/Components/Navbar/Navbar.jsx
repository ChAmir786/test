import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h2 class="offcanvas-title" id="offcanvasNavbarLabel">Close Menu</h2>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><h3>Food</h3></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><h3>About</h3></a>
          </li>
        </ul>
      </div>
    </div>
    <div className="Myfood">My Food</div>
    <div className="Mail">Mail</div>
  </div>
</nav>
  
 
</>
  )}
export default Navbar;
