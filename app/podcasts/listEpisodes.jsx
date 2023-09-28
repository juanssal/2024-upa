
import React from 'react'
import * as utils from "../utils/variables"

var convert = require('xml-js');


// TO-DO ------------------------------------------------------------------------------------
// - Need to change hard coded show name to the specific one user selected
// - Need to style it all





export default async function ListEpisodes({showName, showSlug}) {
  
  async function getPodcasts() {
    try {
      const res = await fetch(`${utils.rssAPI}${showSlug}`);
      if (!res.ok) {
        throw new Error(`Fetch failed with status: ${res.status}`);
      }
  
      let data = await res.text();
      let episodes = JSON.parse(convert.xml2json(data, { compact: true, spaces: 4 })).rss.channel.item;
  
      if (!Array.isArray(episodes)) {
        throw new Error('Episodes is not an array.');
      }
  
      let episodesArray = episodes.map((episode) => ({
        title: episode.title._text,
        description: episode.description._cdata,
        url: episode.guid._text,
        image: episode['itunes:image']._attributes.href,
      }));
  
      return episodesArray;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  const episodesArray = await getPodcasts()
  return (
    <main>
      <h2>{showName}</h2>
      {episodesArray?.map((episode, index) =>
        <div key={index}>
          <h3>{episode.title}</h3>
          <p>{episode.description}</p>
        </div>
      )}
    </main>
  )
}
