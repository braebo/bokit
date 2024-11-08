// https://preprocessors.samplekit.dev/docs/code-decoration

import { createShikiLogger, processCodeblockSync, getOrLoadOpts } from '@samplekit/preprocess-shiki'

export default async () => {
	const opts = await getOrLoadOpts()
	const preprocessorRoot = `${import.meta.dirname}/src/routes/`
	const formatFilename = (/** @type {string} */ filename) => filename.replace(preprocessorRoot, '')

	return processCodeblockSync({
		include: (filename) => filename.startsWith(preprocessorRoot),
		logger: createShikiLogger(formatFilename),
		opts,
	})
}
