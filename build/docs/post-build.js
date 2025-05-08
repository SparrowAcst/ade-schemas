( async () => {

	const path = require("path")
	const { mkdirs, copySync } = require("fs-extra")
	const fs = require("fs")
	const { deepFilter, processFolderRecursive} = require("./utils")
	
	const SCHEMA_DIR = "./dist/schema"

	const removeProps = file => {
		if(path.extname(file) == ".json") {
			console.log("Sanitize >", file)
			let schema = JSON.parse(fs.readFileSync(file).toString())
			let nodes = deepFilter(schema, node => node.subschema || node.title || node.description)
			nodes.forEach( node => {
				delete node.instance.subschema
				delete node.instance.title
				delete node.instance.description
			})
			fs.writeFileSync(file, JSON.stringify(schema, null, " "))
			return
		}	
	}

	await processFolderRecursive(SCHEMA_DIR, removeProps)

})()


