// https://mdsvex.com/docs#options
import autolinkHeadings from 'rehype-autolink-headings'
import slug from 'rehype-slug'
import abbr from 'remark-abbr'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [abbr],
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
