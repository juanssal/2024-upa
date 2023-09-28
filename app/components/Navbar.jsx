import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="nav">
          <Link href="/"><h1>UPA</h1></Link>
          <Link href="/streaming">Radio en línea</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/podcasts">Podcasts</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/nosotros">Nosotros</Link>
        </nav>
  )
}
