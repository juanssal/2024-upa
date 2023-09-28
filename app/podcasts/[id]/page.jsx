import React from 'react'
import ListEpisodes from '../listEpisodes'

// TO-DO
// - Add dynamic text based on user selection for the ListEpisodes prop

export default function shows() {
  return (
    <main>
        <ListEpisodes showName={"Params will go here"} showSlug={"la_voz_del_avatar.xml"}/>
    </main>
  )
}
