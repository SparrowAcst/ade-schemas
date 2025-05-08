const Validator = require("../utils/schema-validator")

let data = require("./data")

describe('Objects subschema test suite', () => {

	test.each(data)('Schema: $schema', ({ schema, data, expected }) => {
	    const v = new Validator(require(schema))
	    expect(v.validate(data)).toEqual(expected)
	})

})	

