/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute
 */
export function getReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / wordsPerMinute);
	return Math.max(1, minutes);
}

export function formatReadingTime(minutes: number): string {
	return `${minutes} min de lecture`;
}
