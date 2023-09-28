
// FETCHES XML EPISODES -- rssAPI is the address of the RSS and showSlug is the selected show's name like "la_voz_del_avatar.xml"
export async function getPodcasts(rssAPI, showSlug) {
  var convert = require('xml-js');
  try {
    const res = await fetch(`${rssAPI}${showSlug}`);
    
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


//FETCHES POSTS FROM STRAPI
export async function fetchPosts(strapiURL) {
  const postsURL = `${strapiURL}/api/posts/?populate=*`;
  const posts = await fetch(postsURL);
  return posts.json();
}
