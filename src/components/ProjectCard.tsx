import Link from "next/link";
import Pill from "./Pill";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className="panel"
			style={{ display: "block", padding: 14 }}
		>
			<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
				<div
					style={{
						borderRadius: 12,
						overflow: "hidden",
						border: "1px solid var(--hairline)",
					}}
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={project.image}
						alt={`${project.title} preview`}
						style={{
							width: "100%",
							height: 210,
							objectFit: "cover",
							display: "block",
						}}
					/>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						gap: 12,
						alignItems: "baseline",
					}}
				>
					<div style={{ fontWeight: 650 }}>{project.title}</div>
					<span className="muted" style={{ fontSize: 13 }}>
						{project.role}
					</span>
				</div>

				<div className="muted" style={{ fontSize: 14 }}>
					{project.blurb}
				</div>

				<div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
					{project.stack.slice(0, 4).map((s) => (
						<Pill key={s}>{s}</Pill>
					))}
				</div>
			</div>
		</Link>
	);
}
