import React from 'react'
import * as utils from "../utils/variables"

var convert = require('xml-js');

async function getPodcasts() {
    const res = await fetch(`${utils.rssAPI}la_voz_del_avatar.xml`)
    let data = await res.text()
    let episodes = await JSON.parse(convert.xml2json(data, {compact: true, spaces: 4})).rss.channel.item;
    return episodes
}

export default async function PodcastList() {
    const podcasts = await getPodcasts()
  return (
    <main>
        {/* {console.log(`this is a test ${utils.rssAPI}la_voz_del_avatar.xml`)} */}
        {console.log("this are my podcast keys", podcasts[0].description._cdata)}
    </main>
  )
}
