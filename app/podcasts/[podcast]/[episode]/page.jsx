import React from 'react'
import * as functions from "../../../utils/functions"
import * as variables from "../../../utils/variables"
import ListEpisodes from '../../listEpisodes'


export default async function Episode({ params }) {
  const episodeId = parseInt(params.episode)
  const showId = params.podcast
  const showXMLId = `${showId}.xml`
  
  const episode = await functions.getPodcast(variables.rssAPI, showXMLId, episodeId)

  
  return (
    <main>
    {console.log("chhhhhheck----------------------------------", Object.values(episode))}
      <h2>{showId}</h2>
      <h3>{episode.title}</h3>
      <ListEpisodes showName={showId} showSlug={`${showId}.xml`} url={`podcasts/${showId}`}/>
      {console.log(params.podcast)}
    </main>
  )
}
