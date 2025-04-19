import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-1000 p-4 flex justify-between items-center",
        "bg-white/10 backdrop-blur-md shadow-md"
      )}
    >
      <Link href="/" className="text-xl font-bold text-gray-800">
        Mountain Coders
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
          About
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
          Contact
        </Link>
        <Button variant="outline" size="sm">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;