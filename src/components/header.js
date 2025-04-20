import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <nav>
            <ul>
                <li><a href="#home">Accueil</a></li>
                <li><a href="#about">A propos</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </nav>

    );
};

export default Header;