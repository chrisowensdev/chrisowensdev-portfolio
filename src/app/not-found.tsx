import Container from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
	return (
		<Container>
			<div className="panel" style={{ padding: 16, marginTop: 18 }}>
				<h1 style={{ marginTop: 0 }}>Not found</h1>
				<p className="muted">That page doesn’t exist.</p>
				<Link className="btn btnPrimary" href="/">
					Go home
				</Link>
			</div>
		</Container>
	);
}
