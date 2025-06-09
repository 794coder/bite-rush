import Link from "next/link";
import Image from "next/image";
import {MdOutlinePhone} from "react-icons/md";
import {LiaShoppingBagSolid} from "react-icons/lia";
import Button from "@mui/material/Button"


const Header = () => {
    return (
        <header className="w-[100] fixed top-0 left-0 z-[100]">
            <div className="container flex items-center justify-between">
                <div className={"logo"}>
                    <Link href="/">
                        <Image src={"/logo.png"} alt={"logo"} width={"100"} height={"100"} className={"rounded-lg"}></Image>
                    </Link>
                </div>
                <div className={"flex items-center justify-end ml-auto"}>
                    <nav className={"flex items-center gap-3"}>
                        <ul className="flex gap-3 text-white font-semibold mb-0">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/menu">Our Menu</Link></li>
                            <li><Link href="/shop">Shop</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                    <span className={"text-y text-lg text-yellow-400" +
                        " font-bold ml-3"}><MdOutlinePhone/></span>
                    <Link href="/cart"  className={" p-2 m-1"}>
                        <LiaShoppingBagSolid/><span></span>
                    </Link>

                    <Button className={"btn-border rounded-full"
                    }>
                        <Link href={'/sign-in'} className={'text-decoration-none'}>Sign In</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;