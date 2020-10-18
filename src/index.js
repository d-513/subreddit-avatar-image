import axios from "axios";
import cheerio from "cheerio";

/**
 * @method
 * @param {string} sub - The subreddit to get the icon from
 * @returns {string} - The icon URL of the subreddit
 */
export const getAvatar = async (sub) => {
  const res = await axios.get(`https://old.reddit.com/r/${sub}/`, {});
  const $ = cheerio.load(res.data);
  const img = $("#header-img");
  const i = img.attr("src") || "//i.imgur.com/bcxwh4B.png";
  return "https:" + i;
};
