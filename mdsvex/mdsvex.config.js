// https://mdsvex.com/docs#options
import mdsvexFrontmatterToImport from './mdsvex-frontmatter-to-import.js'
import mdsvexUrlToImport from './mdsvex-url-to-import.js'
import autolinkHeadings from 'rehype-autolink-headings'
import slug from 'rehype-slug'
import abbr from 'remark-abbr'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [mdsvexUrlToImport, mdsvexFrontmatterToImport, abbr],
	rehypePlugins: [
		slug,
		[
			autolinkHeadings,
			{
				behavior: 'wrap'
			}
		]
	]
}

export default mdsvexConfig
