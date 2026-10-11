import Image from "next/image";
import NavLinks from "./NavLinks";



const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD",{dateStyle:"full"})
    
    return (
        <header>
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between">
            <div className="flex items-center justify-center gap-2" >
                <Image className="w-10 h-10" height={50} width={50} src={'/logo.webp'} alt='' />
                <div>
                    <h2>Bangla News 24</h2>
                <p>{date}</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <button className="btn" >সাইন ইন</button>
            <button className="btn bg-red-700 text-white" >সাইন আপ</button>
            </div>
        </div>
        
        <NavLinks/>
        </header>
    );
};

export default Header;