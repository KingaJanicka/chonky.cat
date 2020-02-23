import axios from "axios";

const LEON_ALBUM_HASH = "1PvxiXp";

export default async (req, res) => {
  const {
    data: response
  } = await axios.get(
    `https://api.imgur.com/3/album/${LEON_ALBUM_HASH}/images`,
    { headers: { authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}` } }
  );

  return res.json(
    response.data.map(d => ({
      title: d.title,
      link: d.link,
      full: d.link,
      thumbnail: d.link,
      author: d.author,
      isoDate: new Date(d.datetime).toISOString()
    }))
  );
};
