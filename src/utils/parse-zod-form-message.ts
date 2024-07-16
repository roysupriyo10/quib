import { AuthFormContextType } from "#/@types";

export function parseZodFormMessage(message: string): AuthFormContextType {
  console.log(message);

  const [name, errorMessage] = message.split(";;");

  console.log(name, errorMessage);

  if (!name || !errorMessage) {
    throw new Error("Corrupted format of message passed.");
  }

  return {
    name,
    message: errorMessage,
  };
}

//
//
// S for single responsibilit
// O for open for extension but closed for modification
// L for Liskov Substitution Principle which means that a subclass must be replaceable with its superclass
// I for interface segregation
// D for
