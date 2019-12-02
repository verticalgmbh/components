export function getVerticalInputUnsupportedTypeError(type: string): Error {
  return Error(`Input type "${type}" isn't supported by vertical-input.`);
}