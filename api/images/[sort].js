import Snoowrap from "snoowrap";

export default async (req, res) => {
  const { sort = "hot", page = 1, time = "week", before, after } = req.query;
  const r = new Snoowrap({
    userAgent: "Chonky.cat v1",
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD
  });

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
              (await subreddit.getHot({ before, after }))
                .map(d => {
                  return {
                    permalink: d.permalink,
                    url: d.url,
                    author: d.author,
                    created_utc: d.created_utc,
                    subreddit: d.subreddit_name_prefixed,
                    thumbnail: d.thumbnail,
                    preview: d.preview,
                    name: d.name
                  };
                })
                .filter(d => d.url.endsWith(".jpg"))
            )
          )
        ).reduce((a, c) => a.concat(c), []);

        return res.json(result);
      } catch (e) {
        console.log(e);
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
                  .getRising({ before, after })
                  .map(d => ({
                    permalink: d.permalink,
                    url: d.url,
                    author: d.author,
                    created_utc: d.created_utc,
                    subreddit: d.subreddit_name_prefixed,
                    preview: d.preview,
                    name: d.name
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
              (await subreddit.getTop({ before, after }))
                .map(d => ({
                  permalink: d.permalink,
                  url: d.url,
                  author: d.author,
                  created_utc: d.created_utc,
                  preview: d.preview,
                  name: d.name
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
              (await subreddit.getNew({ before, after }))
                .map(d => ({
                  permalink: d.permalink,
                  url: d.url,
                  author: d.author,
                  created_utc: d.created_utc,
                  subreddit: d.subreddit_name_prefixed,
                  preview: d.preview,
                  name: d.name
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
