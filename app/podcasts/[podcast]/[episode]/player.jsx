"use client"
import React from 'react'
import { useRouter } from "next/navigation"

export default function Player({episodeId}) {
    const router = useRouter()
    const handleNextTrack = () => router.push(`http://localhost:3000/podcasts/concierto_en_domingo/${episodeId + 1}`)
    const handlePreviousTrack = () => router.push(`http://localhost:3000/podcasts/concierto_en_domingo/${episodeId - 1}`)
  return (
    <div >
        <p onClick={handleNextTrack}>Next Button</p>
        <p onClick={handlePreviousTrack}>Previous Button</p>
    </div>
  )
}
