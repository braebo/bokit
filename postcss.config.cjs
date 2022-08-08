const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
	plugins: [
		autoprefixer,
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
}
