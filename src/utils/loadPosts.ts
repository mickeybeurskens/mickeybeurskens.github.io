// postUtils.ts
import axios from "redaxios";
import { PostIndex } from "../types/PostIndex";
import MarkdownIt from "markdown-it";
import Highlight from "highlight.js";
import MarkdownItTexmath from "markdown-it-texmath";
import katex from "katex";
import emoji from "markdown-it-emoji";


const markDownIt = new MarkdownIt({
  html: true,
  highlight: function (str: string, lang: string) {
    if (lang && Highlight.getLanguage(lang)) {
      try {
        return Highlight.highlight(str, { language: lang }).value;
      } catch (__) { }
    }

    return "";
  },
})
  .use(emoji)
  .use(MarkdownItTexmath, {
    engine: katex,
    delimiters: "dollars",
    katexOptions: {
      macros: { "\\RR": "\\mathbb{R}" },
      strict: false,
      newLineInDisplayMode: true,
      output: "mathml",
    },
  });

export async function loadPostData(postsIndex: PostIndex[], id: string) {
  const { url = "" } = postsIndex.find(({ id: postId }) => postId === id) || {};
  const { data: markDownSource } = await axios.get(url);
  const postHtml = markDownIt.render(markDownSource);
  const [, title] = markDownSource.split("#");

  return { postHtml, title };
}
