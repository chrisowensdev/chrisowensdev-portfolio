import Link from "next/link";
import Container from "./Container";
import { profile } from "@/content/profile";
import Image from "next/image";

export default function Navbar() {
	return (
		<div
			style={{
				position: "sticky",
				top: 0,
				zIndex: 50,
				backdropFilter: "blur(10px)",
				borderBottom: "1px solid var(--hairline)",
				background: "rgba(11,12,16,0.55)",
			}}
		>
			<Container>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: 12,
					}}
				>
					<Link
						href="/"
						style={{
							fontWeight: 650,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: 10,
						}}
					>
						<Image
							src="/elevate-logo-symbol-48x48.png"
							width={20}
							height={20}
							alt="Elevate DevWorks"
							priority
						/>
						<p>{profile.name}</p>
					</Link>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 14,
						}}
					>
						<Link href="/projects" className="muted">
							Projects
						</Link>
						<a
							className="muted"
							href={profile.links.github}
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							className="muted"
							href={profile.links.linkedin}
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
					</div>
				</div>
			</Container>
		</div>
	);
}
