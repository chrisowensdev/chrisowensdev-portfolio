import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Chris Owens — Software Developer",
		template: "%s — Chris Owens",
	},
	description:
		"Portfolio of Chris Owens — product-focused developer building fast, clean web experiences with Next.js and React.",
	metadataBase: new URL("https://chrisowens.dev"), // add when you deploy
	openGraph: {
		type: "website",
		title: "Chris Owens — Software Developer",
		description:
			"Product-focused developer building fast, clean web experiences with Next.js and React.",
	},
	icons: {
		// If you prefer explicit control in addition to app/icon.png:
		icon: "/elevate-logo-symbol-48x48.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
