import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav, NavLogo, NavLink, NavMenu, ButtonWrapper, NavButton, MenuIcon, SideMenu, SideMenuWrapper, CloseButton } from "./NavbarElements";
import bluecircleLogo from "../assets/blue-circle-logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);

    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <img src={bluecircleLogo} alt="Blue Circle Investments Inc." />
                </NavLogo>

                <NavMenu $isOpen={isOpen}>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/testimonials">Testimonials</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </NavMenu>

                <ButtonWrapper>
                    <NavButton to="/booking">Book Now</NavButton>
                </ButtonWrapper>

                {/* Mobile Menu Toggle */}
                <MenuIcon onClick={toggleSideMenu}>
                    {isSideMenuOpen ? <FaTimes /> : <FaBars />}
                </MenuIcon>
            </Nav>

            {/* Side Menu */}
            <SideMenu $isOpen={isSideMenuOpen}>
                <CloseButton onClick={toggleSideMenu}>
                    <FaTimes />
                </CloseButton>
                <SideMenuWrapper>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/testimonials">Testimonials</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/booking">Book Now</NavLink>
                </SideMenuWrapper>
            </SideMenu>
        </>
    );
};

export default Navbar;
