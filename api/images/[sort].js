import Parser from "rss-parser";
import { load } from "cheerio";

export default async (req, res) => {
  const { sort = "hot" } = req.query;
  const endPoint = `https://www.reddit.com/user/Kinga_20/m/cats/.rss?sort=${sort}`;
  const parser = new Parser();
  const feed = await parser.parseURL(endPoint);
  console.log(feed.items.slice(0, 4));
  const images = feed.items
    .map(d => {
      const $ = load(d.content);
      const full = $(
        $("a")
          .toArray()
          .find(d =>
            /https?:\/\/(?:(?:www\.)?imgur\.com|i\.redd\.it)\/\w+\.jpe?g/.test(
              $(d).attr("href")
            )
          )
      ).attr("href");
      const thumbnail = $(
        $("img")
          .toArray()
          .find(d => /https?:\/\/a\.thumbs\.redditmedia/.test($(d).attr("src")))
      ).attr("src");

      return {
        title: d.title,
        link: d.link,
        full,
        thumbnail,
        author: d.author,
        isoDate: d.isoDate
      };
    })
    .filter(d => d.full);
  console.log(sort);
  console.log(endPoint);

  return res.json(images);
};
