import Ajv from 'ajv'
import { Unprocessable } from '@feathersjs/errors'

export function compileSchema (schema, options = {}) {
  const defaults = {
    allErrors: true
  }
  const validator = new Promise(function (resolve, reject) {
    const ajv = new Ajv(Object.assign({}, defaults, options))
    try {
      resolve(ajv.compile(schema))
    } catch (error) {
      reject(error)
    }
  })

  return initializeHook(validator)
}

function initializeHook (validator) {
  return function (hook) {
    return validator
      .then((validate) => {
        if (hook.data) {
          hook.params.validated = validate(hook.data)
          if (!hook.params.validated) {
            throw new Unprocessable('Invalid request data', {
              errors: validate.errors
            })
          }
        }
        return hook
      })
  }
}
