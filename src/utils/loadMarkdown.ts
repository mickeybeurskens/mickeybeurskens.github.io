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

  export async function loadMarkdownHTML(url: string, charLimit: number | null = null) {
    const { data: fullMarkDownSource } = await axios.get(url);
  
    const markDownSource = (charLimit !== null) ? fullMarkDownSource.substring(0, charLimit) : fullMarkDownSource;
  
    const postHtml = markDownIt.render(markDownSource);
    const [, title] = fullMarkDownSource.split("#"); 
    
    return { postHtml, title };
  }