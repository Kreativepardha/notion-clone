import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins ({ 
    subsets: ["latin"],
    weight: ["400", "600"]
});

export const LogoComp = () => {
        return (
            <div className="hidden md:flex items-center gap-x-2 mr-6">
                <Image src="logo.svg" height="40" width="40" alt="logo"  className="dark:hidden"/>
                <Image src="/logodark.svg" height="40" width="40" alt="logo"  className="dark:block hidden"/>
            <p className={cn("font-bold text-yellow-400", font.className)} >Potion</p>
            </div>
        )
}

export default LogoComp;