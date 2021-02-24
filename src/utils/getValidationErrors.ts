/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const getValidationErrors = (err: any) => {
  const validationErrors = {}
  err.inner.forEach((error: any) => {
    validationErrors[error.path] = error.message
  })

  return validationErrors
}

export default getValidationErrors
