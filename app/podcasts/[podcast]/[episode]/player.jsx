"use client"
import React from 'react'
import { useRouter } from "next/navigation"

// TO-DO
// - Manage next/previous limits based on number of episodes
// - Reverse order of index (but not order of appearance)
// - Add scroll bar
// - Style it all

export default function Player({ episodeId, trackURL, showId }) {
    const router = useRouter()
    const [isTrackPlaying, setTrackPlaying] = React.useState(false)
    function handleNextTrack() {
        handlePauseTrack()
        router.push(`http://localhost:3000/podcasts/${showId}/${episodeId + 1}`)

    }
    function handlePreviousTrack() {
        handlePauseTrack()
        router.push(`http://localhost:3000/podcasts/${showId}/${episodeId - 1}`)
    }
    function handlePlayTrack() {
        setTrackPlaying(true)
        return (
            document.getElementById('audioPlayer').play()
        )
    }
    function handlePauseTrack() {
        setTrackPlaying(false)
        return (
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
