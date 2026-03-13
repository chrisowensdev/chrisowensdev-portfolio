import Container from "@/components/Container";
import Pill from "@/components/Pill";
import { projects, getProject } from "@/content/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
	return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const project = getProject(slug);

	if (!project) return { title: "Project" };

	return {
		title: project.title,
		description: project.blurb,
		openGraph: {
			title: project.title,
			description: project.blurb,
			type: "article",
			// If you set metadataBase in layout, this can be relative:
			images: project.image ? [{ url: project.image }] : undefined,
		},
	};
}

export default async function ProjectDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const project = getProject(slug);
	if (!project) return notFound();

	return (
		<Container>
			<div style={{ paddingTop: 16 }}>
				<div className="panel" style={{ padding: 16 }}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 10,
						}}
					>
						<div>
							<h1
								style={{
									margin: 0,
									fontSize: 26,
									letterSpacing: -0.4,
								}}
							>
								{project.title}
							</h1>
							<div className="muted" style={{ marginTop: 6 }}>
								{project.role}
							</div>
						</div>

						<div
							style={{
								borderRadius: 14,
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

									objectFit: "cover",
									display: "block",
								}}
							/>
						</div>

						<div className="muted" style={{ fontSize: 15 }}>
							{project.description.map((p, idx) => (
								<p
									key={idx}
									style={{
										marginTop: idx === 0 ? 0 : 10,
										marginBottom: 0,
									}}
								>
									{p}
								</p>
							))}
						</div>

						<div
							style={{
								display: "flex",
								gap: 8,
								flexWrap: "wrap",
								marginTop: 6,
							}}
						>
							{project.stack.map((s) => (
								<Pill key={s}>{s}</Pill>
							))}
						</div>

						<div style={{ marginTop: 10 }}>
							<div style={{ fontWeight: 650, marginBottom: 6 }}>
								Highlights
							</div>
							<ul
								className="muted"
								style={{ margin: 0, paddingLeft: 18 }}
							>
								{project.highlights.map((h) => (
									<li key={h} style={{ marginBottom: 6 }}>
										{h}
									</li>
								))}
							</ul>
						</div>

						<div
							style={{
								display: "flex",
								gap: 10,
								flexWrap: "wrap",
								marginTop: 10,
							}}
						>
							{project.links.map((l) => (
								<a
									key={l.href}
									className="btn btnPrimary"
									href={l.href}
									target="_blank"
									rel="noreferrer"
								>
									{l.label} ↗
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
