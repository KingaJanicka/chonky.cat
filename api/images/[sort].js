import Parser from "rss-parser";

export default async (req, res) => {
  const { sort = "hot" } = req.query;
  const endPoint = `https://www.reddit.com/user/Kinga_20/m/cats/.rss?sort=${sort}&limit=100`;
  const parser = new Parser();
  const feed = await parser.parseURL(endPoint);
  const images = feed.items
    .map(d => ({
      title: d.title,
      link: d.link,
      content: d.content.match(/https?:\/\/(?:www\.)?imgur\.com\/\w+/),
      author: d.author,
      isoDate: d.isoDate
    }))
    .filter(d => d.content);

  return res.json(images);
};
