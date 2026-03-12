export type Project = {
	slug: string;
	title: string;
	blurb: string;
	description: string[];
	role: string;
	stack: string[];
	highlights: string[];
	links: { label: string; href: string }[];
	image: string; // path under /public
};

export const projects: Project[] = [
	{
		slug: "clearpath-health-advisor",
		title: "ClearPath — Health Advisor Demo",
		blurb: "A minimal, conversion-focused demo site built for my agency (Elevate DevWorks).",
		description: [
			"ClearPath is a demo site designed to showcase a clean funnel, strong above-the-fold clarity, and mobile-first layout decisions.",
			"Built to be easily adapted for different advisor niches with simple content swaps and modular sections.",
		],
		role: "Design + Development",
		stack: ["Next.js", "TypeScript", "Static Export", "SEO"],
		highlights: [
			"Mobile-first hero + CTA clarity",
			"Fast load + simple architecture for easy client customization",
			"Structured sections to support quick scanning by users",
		],
		links: [
			{
				label: "Live site",
				href: "https://clearpath.elevatedevworks.com",
			},
		],
		image: "/projects/clearpath-1200.webp",
	},
	{
		slug: "greenscape",
		title: "Greenscape — Landscaping Demo",
		blurb: "Service business demo site focused on trust signals, services clarity, and lead capture.",
		description: [
			"Greenscape is a demo for local service businesses, emphasizing a clean service breakdown and obvious contact pathways.",
			"The goal is a template that feels custom while remaining quick to deploy and easy to maintain.",
		],
		role: "Design + Development",
		stack: ["Next.js", "TypeScript", "Static Export", "Performance"],
		highlights: [
			"Clear services layout for quick comprehension",
			"Trust-first design: reviews/credibility section placeholders",
			"Optimized structure for simple iteration",
		],
		links: [
			{
				label: "Live site",
				href: "https://greenscape.elevatedevworks.com",
			},
		],
		image: "/projects/greenscape-1200.webp",
	},
	{
		slug: "invoice-ways",
		title: "InvoiceWays",
		blurb: "React Native app deployed to web, iOS, and Android for real-world invoicing workflows.",
		description: [
			"InvoiceWays is a cross-platform React Native application built with a friend for his software company.",
			"The focus is a simple invoicing workflow and consistent UX across platforms.",
		],
		role: "Co-developer",
		stack: ["React Native", "Web + iOS + Android", "App delivery"],
		highlights: [
			"Cross-platform delivery (web + mobile)",
			"Workflow-driven UI built around invoicing needs",
			"Shipped with real stakeholder feedback",
		],
		links: [{ label: "Website", href: "https://invoiceways.com" }],
		image: "/projects/invoiceways-1200.webp",
	},
	{
		slug: "peak-performance",
		title: "Peak Performance HVAC - WordPress",
		blurb: "Conversion-focused local service website built with WordPress, Gutenberg, a custom child theme, and a custom emergency call plugin.",
		description: [
			"Peak Performance is a demo HVAC website built to showcase a clean, maintainable WordPress implementation for local service businesses.",
			"The project focuses on reusable page structures, lightweight Gutenberg layouts, and a custom Astra child theme to avoid heavy page builders while maintaining design consistency.",
			"A small custom plugin was also created to add a configurable emergency call bar using WordPress hooks and the Settings API.",
		],
		role: "Design + Development",
		stack: [
			"WordPress",
			"Astra Theme",
			"Gutenberg",
			"Custom Child Theme",
			"PHP",
			"Custom Plugin",
		],
		highlights: [
			"Reusable service-page template system (AC Repair, Heating Repair, Maintenance)",
			"Custom Astra child theme for consistent spacing, layout rules, and responsive styling",
			"Custom emergency call bar plugin using WordPress hooks and admin settings",
			"Gutenberg block patterns used to speed up page creation and maintain layout consistency",
			"Conversion-focused layout for local service businesses (clear CTAs, service hierarchy)",
		],
		links: [{ label: "Live Demo", href: "https://your-demo-url.com" }],
		image: "/projects/peak-performance-1200.webp",
	},
];

export function getProject(slug: string) {
	return projects.find((p) => p.slug === slug);
}
