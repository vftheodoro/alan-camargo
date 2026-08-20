import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow light">404</p>
      <h1>Esta página não foi encontrada.</h1>
      <p>O caminho pode ter mudado ou não existir.</p>
      <Link className="button button-primary" href="/">
        Voltar para o início
      </Link>
    </section>
  );
}
