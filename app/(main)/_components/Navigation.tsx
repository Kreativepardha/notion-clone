'use client'

import { cn } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"
import { usePathname } from "next/navigation"
import { ElementRef, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"


export const Navigation = () =>{
    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)")
    const isResizingRef = useRef(false)
    const sidebarRef = useRef<ElementRef<"aside">>(null)
    const navbarRef = useRef<ElementRef<"div">>(null)
    const [isResetting, setIsResetting] = useState(false)
    const [isCollapsed,setIsCollapsed] = useState(isMobile)





    return <>
        {/* <aside
        ref={sidebarRef}
        className={cn (
            "groups/sidebar h-full bg-secondary 
        overflow-y-auto relativ flex w-60 flex-col z-[99999]",
        )}
        > */}
            <div 
            className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute 
            top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition"
                role="button"
            >
              <ChevronLeft className="h-6 w-6"/>  
            </div>
            <div className="">
                <p>Actiom items</p>
            </div>
            <div className="mt-4">
                <p>Documents</p>
            </div>
                <div 
                    className="opacity-0 group-hover/sidebar:opacity-100
                    transition cursor-ew-resize absoulute h-full w-1 bg-primary/10 right-0 top-0"
                /> 

            </aside>

    </>

}

