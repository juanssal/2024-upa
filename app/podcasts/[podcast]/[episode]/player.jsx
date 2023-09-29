"use client"
import React from 'react'
import { useRouter } from "next/navigation"

export default function Player({episodeId, trackURL}) {
    const router = useRouter()
    const [isTrackPlaying, setTrackPlaying] = React.useState(false)
    const handleNextTrack = () => router.push(`http://localhost:3000/podcasts/concierto_en_domingo/${episodeId + 1}`)
    const handlePreviousTrack = () => router.push(`http://localhost:3000/podcasts/concierto_en_domingo/${episodeId - 1}`)
    const handlePlayTrack = () => {
        console.log(isTrackPlaying)
        setTrackPlaying(true)
        return (
            document.getElementById('audioPlayer').play()
        )
    }
    const handlePauseTrack = () => {
        console.log(isTrackPlaying)
        setTrackPlaying(false)
        return(
            document.getElementById('audioPlayer').pause()
        )
    }
  return (
    <div >
        <p onClick={handleNextTrack}>Next Button</p>
        <p onClick={handlePreviousTrack}>Previous Button</p>
        <p onClick={handlePlayTrack}>Play Button</p>
        <p onClick={handlePauseTrack}>Pause Button</p>
        <audio
                    id="audioPlayer"
                    src={trackURL}
                ></audio>
    </div>
  )
}
