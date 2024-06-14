"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import LogoComp from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";



export const Navbar = () => {
    const scrolled = useScrollTop();
    
    return <div className={cn(
        "z-50 bg-background dark:bg-[#131212] fixed top-0 flex items-center w-full p-4", 
        scrolled && "border-b shadow-sm shadow-yellow-400"
    )}>
      <LogoComp />
      <div className="md:ml-auto md:justify-end justify-between cursor-pointer w-full items-center gap-x-4 hover:text-yellow-400">
        <ModeToggle />
      </div>
    </div>
}