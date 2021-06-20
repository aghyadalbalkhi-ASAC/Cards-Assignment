
import React from 'react';
import { Link  } from 'react-router-dom';
import { Nav,Navbar, NavItem, Button} from 'react-bootstrap';

function Header({itemCount}) {


    return(
    <div className="header">
        <div className="container">
            <div className="row row-header">
                <div className="col-12">
                    <Navbar className="justify-content-center" expand="lg" id="nav" sticky="top">   
                        <Navbar.Brand id="text-color"  href="/">  Cards Assignment</Navbar.Brand>
                            <Nav >
                                <NavItem >
                                    <Link to={`/postscart`}>
                                        <Button outline ><span className="fa fa-shopping-cart fa-lg"></span> Posts Cart {itemCount} </Button>
                                    </Link>
                                </NavItem>
                            </Nav>
                    </Navbar>
                </div>
            </div>
        </div>
        <br></br><br></br><br></br><br></br>
    </div>
    )
}

export default Header;