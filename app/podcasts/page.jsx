import Link from "next/link";


export default function Podcasts() {
  return (
   <main>
    <h2>Nuestros podcasts</h2>
    <Link href="/podcasts/concierto_en_domingo">Concierto en Domingo</Link>
    <Link href="/podcasts/la_voz_del_avatar">La Voz del Avatar</Link>
  
   </main>
  )
}
