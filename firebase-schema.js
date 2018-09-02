
export class Schema {}


class SchemaType {
  constructor () {
    this._isRequired = false
    this._default = undefined
  }

  isRequired () {
    this._isRequired = true
    return this
  }

  default (d) {
    this._default = d
    return this
  }
}

class PrimitiveSchemaType extends SchemaType {
  constructor (type) {
    super()
    if (typeof type !== 'string') {
      throw new Error('Primitive type value must be a string. Got ' + type)
    }
    this._type = type
  }

  validate (v) {
    return typeof v === this._type
  }
}

class ChainableSchemaType extends SchemaType {
  constructor (primitiveSchemaType) {
    this._primitive = primitiveSchemaType
  }
}

export const SchemaTypes = {
  string: {
    validate: (v) => typeof v === 'string'
  }
}

export const makeSchema = (firebase, allSchemas) => {

}
