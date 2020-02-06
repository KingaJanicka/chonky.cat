import Parser from "rss-parser";
import Snoowrap from "snoowrap";

export default async (req, res) => {
  const { sort = "hot" } = req.query;
  console.log(process.env);
  const r = new Snoowrap({
    userAgent: "Chonky.cat v1",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD
  });
  return res.json(r.getSubmission("2np694"));
};
