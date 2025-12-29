import type { Properties } from '../properties/properties.ts'

/**
 * Interface for component props that include a style property.
 */
export type StyleProps<TLength = 0 | (string & {}), TTime = string & {}> = {
	style?: Properties<TLength, TTime> | undefined
}
