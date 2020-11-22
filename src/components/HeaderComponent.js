import { Component } from 'react';
import {Navbar, NavbarBrand,Jumbotron} from 'reactstrap';


class Header extends Component{
    render(){
        return(
         <>
             <Navbar dark>
                 <div className="container">
                     <NavbarBrand href="/">Hotel</NavbarBrand>
                 </div>
              </Navbar>
              <Jumbotron>
                  <div className="container">
                      <div className="row row-header">
                          <div className="col-12 col-sm-6">
                              <h1>Hotel Transalveniya</h1>
                              <p>We take inspiration form the World's best cuisines, and create a unique fusion experience.Our limpsmacking creations will tickle your culinary senses!</p>
                          </div>
                      </div>
                  </div>
              </Jumbotron>
         </>
        );
    }
}

export default Header;