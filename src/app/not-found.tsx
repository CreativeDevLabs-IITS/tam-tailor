import Link from "next/link";

export default function NotFound() {
  return (
    <section className="phero">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>That page seems to have <em>come apart at the seam.</em></h1>
        <p className="phero__lead">It may have moved. Head back to the home page or call us on 204-775-1160.</p>
        <p><Link className="btn" href="/">Back to home</Link></p>
      </div>
    </section>
  );
}
