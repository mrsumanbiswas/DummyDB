"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Plus } from "lucide-react"
import { AddDatabaseDialog } from "@/components/chat/ConnectDialog"

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(true)
	const router = useRouter()

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div>
			<header
				className={`max-w-3xl container sticky left-0 top-2 z-50 w-full bg-background/80 text-foreground backdrop-blur-lg transition-all duration-300 
        ${isScrolled ? "py-4 md:py-4" : "border-b-0 py-4"}`}
			>
				<div className="container mx-auto flex items-center justify-between px-0">
					{/* Logo */}
					<a href="/" className="flex items-center space-x-4">
						<div className="flex items-center space-x-4">
							<Image
								src="/blue_logo.svg"
								alt="DummyDB Logo"
								width={32}
								height={32}
								className="w-6 h-6"
							/>
							<h1 className="text-sm font-bold text-foreground">
								DummyDB <span className="text-muted-foreground font-light ml-2">HexaFalls</span>
							</h1>
						</div>
					</a>

					{/* Add database dialog */}

					<div className="flex items-center space-x-4">
						<div className="flex items-center gap-2 mr-2 py text-xs text-green-400">
							Connected
							<span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
						</div>
						<AddDatabaseDialog />
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header