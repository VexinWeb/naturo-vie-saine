import * as cheerio from "cheerio";

function parseHTML(html) {
  const $ = cheerio.load(html);
  $("head").remove();
  $.html();
  let elementsObject = [];
  let i = 0;

  const elements = $("body *:not(figure, br)");

  elements.each((index, element) => {
    if (element.name === "img") {
      elementsObject[i] = {
        tag: element.name,
        src: $(element).attr("src"),
        alt: $(element).attr("alt"),
      };
    } else {
      elementsObject[i] = {
        tag: element.name,
        text: $(element).text(),
      };
    }
    i++;
  });
  return elementsObject;
}
export default parseHTML;
