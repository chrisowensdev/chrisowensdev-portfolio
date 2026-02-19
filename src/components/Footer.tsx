import Container from "./Container";
import { profile } from "@/content/profile";

export default function Footer() {
	return (
		<Container>
			<div
				className="muted"
				style={{
					borderTop: "1px solid var(--hairline)",
					paddingTop: 18,
					display: "flex",
					justifyContent: "space-between",
					gap: 12,
					flexWrap: "wrap",
				}}
			>
				<span>
					© {new Date().getFullYear()} {profile.name}
				</span>
				<span style={{ display: "flex", gap: 12 }}>
					<a href={`mailto:${profile.links.email}`}>Email</a>
					<a
						href={profile.links.github}
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
					<a
						href={profile.links.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
				</span>
			</div>
		</Container>
	);
}
