export function getVerticalTableDuplicateCaptionError(): Error {
  return Error('A caption was already declared.');
}