export default function Pill({ children }: { children: React.ReactNode }) {
	return (
		<span
			style={{
				display: "inline-flex",
				alignItems: "center",
				padding: "5px 10px",
				borderRadius: 999,
				border: "1px solid var(--hairline)",
				background: "rgba(255,255,255,0.04)",
				fontSize: 12,
			}}
		>
			{children}
		</span>
	);
}
