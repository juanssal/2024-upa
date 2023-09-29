
import React from 'react'
import * as functions from "../../../utils/functions"
import * as variables from "../../../utils/variables"
import ListEpisodes from '../../listEpisodes'

import Player from './player'

export default async function Episode({ params }) {
  const episodeId = parseInt(params.episode)
  const showId = params.podcast
  const showXMLId = `${showId}.xml`
  
  const episode = await functions.getPodcast(variables.rssAPI, showXMLId, episodeId)

  
  return (
    <main>
      
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
      <Player episodeId={episodeId} trackURL={episode.url}/>
      <ListEpisodes showName={showId} showSlug={`${showId}.xml`} url={`podcasts/${showId}`}/>

    </main>
  )
}
