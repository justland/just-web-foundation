/**
 * Appends a suffix to an ID if the ID is defined.
 *
 * @param id - The ID to append the suffix to (accepts null e.g. from getAttribute).
 * @param suffix - The suffix to append to the ID.
 * @returns The ID with the suffix appended, or undefined if the ID is null/undefined.
 */
export function appendId(id: string | null | undefined, suffix: string): string | undefined {
	return id ? `${id}-${suffix}` : undefined
}
