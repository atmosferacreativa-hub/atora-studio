module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/app.js": "app.js" });
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
  };
};
