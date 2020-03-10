import Snoowrap from "snoowrap";

export default async (req, res) => {
  const { sort = "hot", page = 1, time = "week" } = req.query;
  const r = new Snoowrap({
    userAgent: "Chonky.cat v1",
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD
  });

  // const result = await r.getHot().map(post => post.title);

  const multireddit = (await r.getMyMultireddits()).find(
    s => s.name === "cats"
  );
  switch (sort) {
    default:
    case "hot":
      console.log("Sort: hot");
      try {
        const result = (
          await Promise.all(
            multireddit.subreddits.map(async subreddit =>
              (await subreddit.getHot({ limit: 1 * page }))
                .map(d => ({
                  permalink: d.permalink,
                  url: d.url,
                  author: d.author,
                  created_utc: d.created_utc,
                  subreddit: d.subreddit_name_prefixed,
                  thumbnail: d.thumbnail
                }))
                .filter(d => d.url.endsWith(".jpg"))
                .slice(page - 1, page)
            )
          )
        ).reduce((a, c) => a.concat(c), []);

        return res.json(result);
      } catch (e) {
        return res.json([]);
      }
    case "rising":
      console.log("Sort: rising");
      return res.json(
        (
          await Promise.all(
            multireddit.subreddits.map(
              async subreddit =>
                await subreddit
                  .getRising({ limit: 1 * page })
                  .map(d => ({
                    permalink: d.permalink,
                    url: d.url,
                    author: d.author,
                    created_utc: d.created_utc,
                    subreddit: d.subreddit_name_prefixed,
                    thumbnail: d.thumbnail
                  }))

                  .filter(d => d.url.endsWith(".jpg"))
                  .slice(page - 1, page)
            )
          )
        ).reduce((a, c) => a.concat(c), [])
      );
    case "top":
      console.log("Sort: top");
      return res.json(
        (
          await Promise.all(
            multireddit.subreddits.map(async subreddit =>
              // (await subreddit.getTop({ time: time })).map(d => ({
              (await subreddit.getTop({ limit: 1 * page, time }))
                .map(d => ({
                  permalink: d.permalink,
                  url: d.url,
                  author: d.author,
                  created_utc: d.created_utc,
                  subreddit: d.subreddit_name_prefixed,
                  thumbnail: d.thumbnail
                }))

                .filter(d => d.url.endsWith(".jpg"))
                .slice(page - 1, page)
            )
          )
        ).reduce((a, c) => a.concat(c), [])
      );
    case "new":
      return res.json(
        (
          await Promise.all(
            multireddit.subreddits.map(async subreddit =>
              (await subreddit.getNew({ limit: 1 * page }))
                .map(d => ({
                  permalink: d.permalink,
                  url: d.url,
                  author: d.author,
                  created_utc: d.created_utc,
                  subreddit: d.subreddit_name_prefixed,
                  thumbnail: d.thumbnail
                }))

                .filter(d => d.url.endsWith(".jpg"))
                .slice(page - 1, page)
            )
          )
        ).reduce((a, c) => a.concat(c), [])
      );
  }
};

///  https://not-an-aardvark.github.io/snoowrap/Subreddit.html#getTop__anchor
