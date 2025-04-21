import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <nav >
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <ul>
                    <li >
                        <a href="#home">Accueil</a>
                    </li>
                    <li><a href="#about">A propos</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            {/* </div> */}
        </nav>

    );
};

export default Header;