
import React from 'react'
import Link from 'next/link'
import * as utils from "../utils/variables"
import * as functions from "../utils/functions"

// TO-DO ------------------------------------------------------------------------------------
// - Need to style it all


export default async function ListEpisodes({ showName, showSlug, handleSelectEpisode, url }) {
  // Importing function from utils
  const episodesArray = await functions.getPodcasts(utils.rssAPI, showSlug)

  return (
    <main>
      <h2>{showName}</h2>
      {episodesArray?.map((episode, index) =>
        <div key={index}>
          <Link href={`/${url}/${episode.id}`}>
            <h3>{episode.title}</h3>
          </Link>

        </div>
      )}
    </main>
  )
}
