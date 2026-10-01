export interface WaitForAnimationsOptions {
	/** Include descendants and pseudo-elements. Default: `true`. */
	subtree?: boolean | undefined
	/**
	 * Frames to wait before the first query, so pending effects
	 * can start animations. Default: `1`.
	 */
	settleFrames?: number | undefined
	/** Skip animations the caller does not care about, e.g. a decorative spinner. */
	filter?: ((animation: Animation) => boolean) | undefined
	/**
	 * Reject with a list of animations still running after this
	 * many milliseconds. Default: none in code, set one in tests.
	 */
	timeout?: number | undefined
	signal?: AbortSignal | undefined
}
