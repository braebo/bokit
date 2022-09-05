// https://github.com/MailCheck-co/mailcheck.site/blob/master/mdsvexplugins/mdsvex-url-to-import.js

import { visit } from 'unist-util-visit'

// forgive me
const RE_SCRIPT_START = /<script(?:\s+?[a-zA-z]+(=(?:["']){0,1}[a-zA-Z0-9]+(?:["']){0,1}){0,1})*\s*?>/i

// look for thumbnailImg in formatter part of the markdown
// if it exists we create manual import of image for vite
// and export it to page metadata (that is available in layout)
// that allows to use imagetools plugin for thumbnail generation
export default function formatterToImport() {
	return function transformer(tree, vFile) {
		if (vFile.data.fm?.thumbnailImg) {
			console.log(vFile.data.fm?.thumbnailImg)
			// if all thumbnails will have the same sizes we can set them here, avoiding putting
			// them in markdown formatter

			// this adds an import called thumbnail which imports the image from frontmatter called thumbnailImg
			// behind the scences vite image tools picks up on the fact you are importing an image and does some magic
			// it then sets the image source to the frontmatter on the prop called thumbnail
			// and then in the html img tag we can do src={meta.thumbnail}
			const scripts = `import thumbnail from "${vFile.data.fm.thumbnailImg}";\n
      metadata.thumbnail=thumbnail;\n`
			let is_script = false
			visit(tree, 'html', (node) => {
				if (RE_SCRIPT_START.test(node.value)) {
					is_script = true
					node.value = node.value.replace(RE_SCRIPT_START, (script) => `${script}\n${scripts}`)
				}
			})

			if (!is_script) {
				tree.children.push({
					type: 'html',
					value: `<script>\n${scripts}</script>`
				})
			}
		}
	}
}
