import { validateSchema } from 'feathers-hooks-common';
import ajv from 'ajv';
import schema from './<%= kebabName %>.schema';

const base = Object.assign({}, schema);

const create = Object.assign({}, base, {});

const update = Object.assign({}, base, {});

const patch = Object.assign({}, base, {});

const deleteRequired = (schema: any) => {
  if(schema.required) delete schema.required
}
deleteRequired(patch);

const validateCreate = (options?: any) => {
  return validateSchema(create, ajv, options);
};

const validateUpdate = (options?: any) => {
  return validateSchema(update, ajv, options);
};

const validatePatch = (options?: any) => {
  return validateSchema(patch, ajv, options);
};

const moduleExports = {
  validateCreate,
  validateUpdate,
  validatePatch
};

export default moduleExports;
