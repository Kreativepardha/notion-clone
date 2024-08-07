"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import LogoComp from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Spinner } from "@/components/Spinner";
import Link from "next/link";



export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();
    
    return <div className={cn(
        "z-50 bg-background  fixed top-0 flex items-center w-full p-6", 
        scrolled && "border-b shadow-sm shadow-yellow-400"
    )}>
      <LogoComp />
      <div className="md:ml-auto md:justify-end justify-between cursor-pointer w-full flex items-center gap-x-4 hover:text-yellow-400">
          {isLoading && (
            <Spinner />
          )}{
            !isAuthenticated && !isLoading && (
              <  >
              <SignInButton  mode="modal">
                <Button  className="mx-3"  variant="ghost" size="sm">
                  Log in
                </Button>
              </SignInButton>
          
                </>
                    
            )
          }
          {isAuthenticated && !isLoading && (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/documents">
                    Enter Potion
                  </Link>
                </Button>
                <UserButton 
                afterSignOutUrl="/"/>
              </>
          )}
        <ModeToggle />
      </div>
    </div>
}