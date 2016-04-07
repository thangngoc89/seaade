import mdIt from "markdown-it"
import cheerio from "cheerio"

export default function renderer(text) {
  const html = mdIt({
    html: true,
    linkify: true,
    typographer: true,
  }).render(text)

  const $ = cheerio.load(html)

  $("a").each(function() {
    const href = $(this).attr("href")

    if (/^(https?\:\/\/)/.test(href)) {
      $(this).attr("target", "_blank")
    }
  })
  return $.html()
}
