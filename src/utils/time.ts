/**
 * Helper function to pause execution for a given number of milliseconds.
 * @param ms - Milliseconds to sleep.
 */
export async function sleep(ms: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, ms));
  return;
}
