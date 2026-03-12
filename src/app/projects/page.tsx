import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description: "Selected projects and shipped work by Chris Owens.",
};

export default function ProjectsPage() {
	return (
		<Container>
			<div style={{ paddingTop: 16, paddingBottom: 10 }}>
				<h1 style={{ margin: 0, fontSize: 26, letterSpacing: -0.4 }}>
					Projects
				</h1>
				<p className="muted" style={{ marginTop: 8, maxWidth: 760 }}>
					A small selection of shipped work, demo builds, and product
					experiments.
				</p>
			</div>

			<div className="grid3">
				{projects.map((p) => (
					<ProjectCard key={p.slug} project={p} />
				))}
			</div>
		</Container>
	);
}
