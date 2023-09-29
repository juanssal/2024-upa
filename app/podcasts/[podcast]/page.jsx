

import React from 'react'
import ListEpisodes from '../listEpisodes'


import Image from "next/image"
import playIcon from "../../assets/play.svg"
import pauseIcon from "../../assets/pause.svg"
// TO-DO
// - Add dynamic text based on user selection for the ListEpisodes prop
// - Transform params in proper show name format

export default function Shows({ params }) {
    const showId = params.podcast
    return (
        <main>
            <h2>Esto es: {showId}</h2>
            <ListEpisodes showName={showId} showSlug={`${showId}.xml`} url={`podcasts/${showId}`} />
        </main>
    )
}
