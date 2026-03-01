export function tryParseJSON<T>(json: string | null | undefined): T | undefined {
	if (!json) return undefined
	try {
		return JSON.parse(json)
	} catch {
		return undefined
	}
}
