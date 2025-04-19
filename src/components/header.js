import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <nav>
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#service">services</a></li>
                <li><a href="#project">projects</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </nav>

    );
};

export default Header;