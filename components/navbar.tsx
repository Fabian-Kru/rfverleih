"use client"

import { useState } from "react"
import Link from "next/link"
import { Zap, Lightbulb, Music, Mail, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image";
import Logo from "@/public/Logo.jpg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { name: "Strom", icon: <Zap className="h-4 w-4" />, href: "#strom" },
        { name: "Licht", icon: <Lightbulb className="h-4 w-4" />, href: "#licht" },
        { name: "Party", icon: <Music className="h-4 w-4" />, href: "#party" },
        { name: "Kontakt", icon: <Mail className="h-4 w-4" />, href: "#kontakt" },
    ]

    return (
        <nav className="w-full bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                className="h-10"
                                src={Logo}
                                alt="R&F Verleih Logo"
                                width={40}
                                height={250}
                            />
                            <span className="text-xl font-bold">R&F Verleih</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
                                >
                                    {item.icon}
                                    <span className="ml-2">{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="bg-neutral-950 border-none">
                                    <Menu className="h-6 w-6"/>
                                    <span className="sr-only">Menü öffnen</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[240px] bg-primary text-primary-foreground">
                                <nav className="flex flex-col space-y-4 mt-4">
                                    {menuItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.icon}
                                            <span className="ml-2">{item.name}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}