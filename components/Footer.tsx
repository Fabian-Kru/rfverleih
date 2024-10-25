import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Logo from "../public/Logo.jpg"
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <Image
                            className="h-10"
                            src={Logo}
                            alt="R&F Verleih Logo"
                            width={40}
                            height={250}
                        />
                        <p className="text-sm">
                            Mieten statt Kaufen - Ihr zuverlässiger Partner für Strom, Licht und Party-Equipment.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-primary-foreground hover:text-primary-foreground/80">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-primary-foreground hover:text-primary-foreground/80">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-primary-foreground hover:text-primary-foreground/80">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider uppercase">Produkte</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Stromgeneratoren
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Beleuchtung
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Soundsysteme
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            DJ-Equipment
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold tracking-wider uppercase">Support</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Preise
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Dokumentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Guides
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            API Status
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider uppercase">Unternehmen</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Über uns
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Partner
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold tracking-wider uppercase">Rechtliches</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Datenschutz
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            AGB
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Cookie-Einstellungen
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm hover:underline">
                                            Impressum
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-primary-foreground/10 pt-8">
                    <p className="text-sm text-center">
                        &copy; {new Date().getFullYear()} R&F Verleih. Alle Rechte vorbehalten.
                    </p>
                </div>
            </div>
        </footer>
    )
}