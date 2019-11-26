export function getVerticalFormFieldDuplicateErrorError(): Error {
  return Error('An error was already declared.');
}

export function getVerticalFormFieldDuplicateHintError(): Error {
  return Error('A hint was already declared.');
}

export function getVerticalFormFieldDuplicateLabelError(): Error {
  return Error('A label was already declared.');
}

export function getVerticalFormFieldMissingControlError(): Error {
  return Error('vertical-form-field must contain a VerticalFormFieldControl.');
}