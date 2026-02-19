import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import Link from "next/link";

export default function HomePage() {
	return (
		<Container>
			<section style={{ paddingTop: 24, paddingBottom: 10 }}>
				<div className="panel" style={{ padding: 18 }}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 10,
						}}
					>
						<div
							style={{
								fontSize: 34,
								fontWeight: 750,
								letterSpacing: -0.6,
							}}
						>
							{profile.name}{" "}
							<span className="muted">— {profile.role}</span>
						</div>

						<div
							className="muted"
							style={{ fontSize: 16, maxWidth: 760 }}
						>
							{profile.tagline}
						</div>

						<div
							style={{
								display: "flex",
								gap: 10,
								flexWrap: "wrap",
								marginTop: 6,
							}}
						>
							<Link className="btn btnPrimary" href="/projects">
								View Projects
							</Link>
							<a
								className="btn"
								href={profile.links.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
							<a
								className="btn"
								href={profile.links.github}
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
							{profile.links.resumePdf ? (
								<a
									className="btn"
									href={profile.links.resumePdf}
									target="_blank"
									rel="noreferrer"
								>
									Resume (PDF)
								</a>
							) : (
								<span
									className="muted"
									style={{
										alignSelf: "center",
										fontSize: 13,
									}}
								>
									Resume PDF: add later
								</span>
							)}
						</div>
					</div>
				</div>
			</section>

			<section style={{ paddingTop: 18 }}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "baseline",
						gap: 12,
					}}
				>
					<h2 style={{ margin: 0, fontSize: 18 }}>
						Featured Projects
					</h2>
					<Link className="muted" href="/projects">
						All projects →
					</Link>
				</div>

				<div style={{ marginTop: 12 }} className="grid3">
					{projects.map((p) => (
						<ProjectCard key={p.slug} project={p} />
					))}
				</div>
			</section>

			<section style={{ paddingTop: 26 }}>
				<h2 style={{ margin: 0, fontSize: 18 }}>Skills</h2>
				<div style={{ marginTop: 12 }} className="grid3">
					{Object.entries(profile.skills).map(([group, items]) => (
						<div
							key={group}
							className="panel"
							style={{ padding: 14 }}
						>
							<div style={{ fontWeight: 650, marginBottom: 8 }}>
								{group}
							</div>
							<div
								className="muted"
								style={{
									display: "flex",
									gap: 8,
									flexWrap: "wrap",
								}}
							>
								{items.map((s) => (
									<span
										key={s}
										style={{
											borderBottom:
												"1px dotted var(--hairline)",
										}}
									>
										{s}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			<section style={{ paddingTop: 26, paddingBottom: 26 }}>
				<h2 style={{ margin: 0, fontSize: 18 }}>Contact</h2>
				<div className="panel" style={{ padding: 14, marginTop: 12 }}>
					<div className="muted">
						Best way to reach me:{" "}
						<a href={`mailto:${profile.links.email}`}>
							{profile.links.email}
						</a>
					</div>
				</div>
			</section>
		</Container>
	);
}
