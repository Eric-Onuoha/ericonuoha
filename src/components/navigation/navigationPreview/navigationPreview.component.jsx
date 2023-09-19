import React, {Fragment, useState} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./navigationPreview.styles.scss";

import { Navbar, Nav } from "bootstrap-4-react";
import Potrait from "../../../assets/images/Eric_Onuoha_Potrait.png";
import HamburgerMenu from "../../../assets/images/burger-menu.svg";

const NavigationPreview = ({navItems}) => {
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState("navItemsMobile");
    const [navFocus, setNavFocus] = useState(" ");

    const toggleMenu = () => {
        (showNav === "navItemsMobile" ? setShowNav(" ") : setShowNav("navItemsMobile"));
        (navFocus === " " ? setNavFocus("navModal") : setNavFocus(" "));
    }

    const handleNavigation = (e) => {
        toggleMenu();
        navigate("/" + e.target.textContent);
    }

    return(
        <Fragment>
            <Navbar id="navigationPreviewComponent" expand="lg" light bg="light" fixed="top">

                <Navbar.Brand id="mobilePotrait" href="/"><img id="potrait" src={Potrait} alt="Potrait of Eric Onuoha" /></Navbar.Brand>
                
                <div id={showNav} className="navItemsContainer">
                    <Navbar.Brand id="laptopPotrait" href="/"><img id="potrait" src={Potrait} alt="Potrait of Eric Onuoha" /> <p id="potraitIntro">Eric Onuoha</p></Navbar.Brand>
                    
                    <Navbar.Nav id="navItems">
                    {navItems.map((navItem) => ( 
                        <Nav.ItemLink className="navItem" key={navItem} onClick={handleNavigation}>{navItem}</Nav.ItemLink>
                    ))}
                    </Navbar.Nav>
                </div>
            <div id={navFocus} onClick={toggleMenu}></div>
            <div className="hamburgerMenu" onClick={toggleMenu}><img src={HamburgerMenu} alt="Menu"/></div>
            </Navbar>
            <Outlet/>
        </Fragment>
    )
};export default NavigationPreview;