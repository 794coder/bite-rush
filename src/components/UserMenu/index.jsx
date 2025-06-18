"use client"
import React, {useEffect, useState} from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import Link from "next/link";
import {LogOut} from "lucide-react"
import {useRouter} from "next/navigation";

const UserMenu = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const handleLogout = async () => {
   try {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/sign-in");
  } catch (err) {
    console.error("Logout failed", err);
  }
};

    useEffect(() => {
        const token=localStorage.getItem("token");
        if (token) {
            try{
                const decoded=JSON.parse(atob(token.split('.')[1]));
                setUser(decoded);
            }catch(err){
                console.log(err);
                localStorage.removeItem("token");
            }
        }
    },[])

    return (
       <div className="flex items-center gap-6">
                    {isLoading?null:user?(
                        <div className="flex items-center gap-3">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative w-8 h-8 rounded-full">
                                        <Avatar className="h-8 w-8 border border-slate-300">
                                            <AvatarFallback className="bg-yellow-500 text-white">
                                                {user?.name?.charAt(0)?.toUpperCase() || "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-bold text-red-800 leading-none">{user.name||"User"}</p>
                                        </div>
                                    </DropdownMenuLabel>
                                        <DropdownMenuSeparator/>
                                    <DropdownMenuItem className="cursor-pointer text-red-800 font-bold">
                                        {user.email}
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem className="cursor-pointer text-red-800 font-bold"
                                        onClick={handleLogout}
                                    >
                                        <LogOut className="mr-2 h-2 w-4"/>
                                        <span>Logout</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ):<Link href="/sign-in">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                            Sign In
                        </Button>
                    </Link>}
                </div>
    );
};

export default UserMenu;