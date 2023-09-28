import React from 'react'
import ListEpisodes from '../listEpisodes'

// TO-DO
// - Add dynamic text based on user selection for the ListEpisodes prop
// - Transform params in proper show name format

export default function shows({ params }) {
    const showId = params.id
    return (
        <main>
        <h2>Esto es: {showId}</h2>
            <ListEpisodes showName={showId} showSlug={`${showId}.xml`} />

        </main>
    )
}
