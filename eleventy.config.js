// Eleventy turns src/ into plain static HTML in _site/. Templates use Nunjucks includes, which map
// one-to-one onto PHP includes in the live site (layout → page shell, partials → shared chrome,
// sections → one file per page section). CSS, JS and images are copied through untouched.
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets', 'src/uploads': 'uploads' });

  return {
    dir: { input: 'src', includes: '_includes', output: '_site' },
    templateFormats: ['njk'],
    htmlTemplateEngine: 'njk',
  };
}
