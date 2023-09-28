import React from 'react'
import * as utils from "../utils/variables"

var convert = require('xml-js');

async function getPodcasts() {
  try {
    const res = await fetch(`${utils.rssAPI}la_voz_del_avatar.xml`);
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

export default async function ListEpisodes() {
  const episodesArray = await getPodcasts()
  return (
    <main>
      {console.log(episodesArray)}
      

    </main>
  )
}
