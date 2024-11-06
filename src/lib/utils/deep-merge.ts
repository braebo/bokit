export function deep_merge<T>(...objects: Partial<T>[]): T {
	return objects.reduce((acc, curr) => {
		if (!is_object(acc) || !is_object(curr)) {
			if (Array.isArray(acc) && Array.isArray(curr)) {
				return [...acc, ...curr]
			}
			return curr
		}

		for (const [key, value] of Object.entries(curr)) {
			if (is_object(value) && key in acc && is_object(acc[key])) {
				if (Array.isArray(acc[key]) && Array.isArray(value)) {
					acc[key] = [...acc[key], ...value]
				} else {
					acc[key] = deep_merge(acc[key], value)
				}
			} else {
				acc[key] = value
			}
		}

		return acc
	}, {}) as T
}

function is_object(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null
}
