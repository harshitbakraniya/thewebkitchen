import React from "react";


const Header = (props) => {
    let open = false;
    const openNav = () => {
        let nav = document.getElementById("navbar");
        let line1 = document.getElementById("line1");
        let line2 = document.getElementById("line2");
        let line3 = document.getElementById("line3");

        if (open) {
            nav.style.right = "-100%";
            nav.style.animation = "none";
            line1.style.backgroundColor = "#fff"
            line1.style.transform = "rotate(0deg)";
            line1.style.transformOrigin = "top left";
            line2.style.display = "block";
            line3.style.backgroundColor = "#fff"
            line3.style.transform = "rotate(0deg)";
            line3.style.transformOrigin = "top left";
            open = false;
        }
        else {
            nav.style.right = "-10%";
            nav.style.animation = "openNavbar .5s 2";
            line1.style.backgroundColor = "#000000"
            line1.style.transform = "rotate(40deg)";
            line1.style.transformOrigin = "top left";
            line2.style.display = "none";
            line3.style.backgroundColor = "#000000"
            line3.style.transform = "rotate(-40deg)";
            line3.style.transformOrigin = "top left";
            open = true;
        }
    }
    return (
        <header className="header">
            <div className="nav-icon" onClick={openNav}>
                <span id="line1"></span>
                <span id="line2"></span>
                <span id="line3"></span>
            </div>
            <nav className="navbar" id="navbar">
                <ul>
                    <li className="active">HOME</li>
                    <li>ABOUT US</li>
                    <li>PORTFOLIO</li>
                    <li>SERVICES</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;