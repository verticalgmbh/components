export function getVerticalFormFieldMissingControlError(): Error {
  return Error('vertical-form-field must contain a VerticalFormFieldControl.');
}

export function getVerticalFormFieldDuplicatedHintError(): Error {
  return Error('A hint was already declared.');
}

export function getVerticalFormFieldDuplicateErrorError(): Error {
  return Error('A error was already declared.');
}