export const ctx = {
	matchMedia(query: string) {
		return globalThis.matchMedia(query)
	},
	getDocumentElement() {
		return globalThis.document.documentElement
	},
	_reset() {
		this.matchMedia = globalThis.matchMedia
		this.getDocumentElement = () => globalThis.document.documentElement
	},
}
