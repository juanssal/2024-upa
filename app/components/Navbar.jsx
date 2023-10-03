import Link from "next/link"
import LogoutButton from "./LogoutButton"

export default function Navbar({user}) {
  return (
    <nav className="nav">
          <Link href="/" className="mr-auto"><h1>UPA</h1></Link>
          <Link href="/streaming" className="mr-auto">Radio en línea</Link>
          <Link href="/blog" className="mr-auto">Blog</Link>
          <Link href="/podcasts" className="mr-auto">Podcasts</Link>
          <Link href="/proyectos" className="mr-auto">Proyectos</Link>
          <Link href="/nosotros" className="mr-auto">Nosotros</Link>
          {user && <span>Hola, {user.email}</span>}
          <LogoutButton />
        </nav>

  )
}
