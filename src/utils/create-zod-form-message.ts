export function createZodFormMessage(name: string, message: string) {
  if (!name || !message) {
    throw new Error(
      "Must provide name and message to create a valid Zod form error message.",
    );
  }
  return `${name};;${message}`;
}
