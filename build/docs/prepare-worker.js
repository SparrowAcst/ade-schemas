const path = require("path")
const { mkdirs, copy, remove } = require("fs-extra")
const { readFile, writeFile } = require("fs")
const fs = require("fs")
const YAML = require("js-yaml")
const JsonRefs = require("json-refs")
const { deepExtend, processFolderRecursive } = require("./utils")

const TEMP_DIR = "./.temp"
const DIST_DIR = "./dist"
const SCHEMA_DIR = `${DIST_DIR}/schema`
const CSS_DIR = "./node_modules/github-markdown-css"
const YAML_DIR = "./schemas/yaml"



const exists = async path => await fs.promises.access(path).then(()=>true).catch(()=>false)

const yaml2json = async file => {
    if (path.extname(file) != ".yaml") return
    let jsonSch = YAML.load((await fs.promises.readFile(file)).toString())
    await fs.promises.writeFile(path.resolve(`${path.dirname(file)}/${path.basename(file,".yaml")}`), JSON.stringify(jsonSch, null, " "))
}

const resolveSchema = async file => {
    if (path.extname(file) != "") return

    let { resolved, refs } = await JsonRefs.resolveRefs(
        deepExtend(JSON.parse((await fs.promises.readFile(file)).toString()), {}), 
        { location: file }
 	)

    console.log("Resolve > " + path.resolve(`${path.dirname(file)}/${path.basename(file)}.schema.json`))

    await fs.promises.writeFile(path.resolve(`${path.dirname(file)}/${path.basename(file)}.schema.json`), JSON.stringify(resolved, null, " "))

}

const removeUnusedFiles = async file => {
	if (path.extname(file) != ".json") {
		await remove(file)
	}
}


const execute = async () => {
   
    if ((await exists(SCHEMA_DIR))) {
        await remove(SCHEMA_DIR);
    }
    await mkdirs(SCHEMA_DIR)

    if ((await exists(TEMP_DIR))) {
        await remove(TEMP_DIR);
    }
    await mkdirs(TEMP_DIR)

    await copy(YAML_DIR, TEMP_DIR, { overwrite: true })

    await processFolderRecursive(TEMP_DIR, yaml2json)
    await processFolderRecursive(TEMP_DIR, resolveSchema)
	await processFolderRecursive(TEMP_DIR, removeUnusedFiles)
    
    await copy(TEMP_DIR, SCHEMA_DIR, { overwrite: true })

    await remove(TEMP_DIR)

    await copy(CSS_DIR, DIST_DIR, { overwrite: true })

}


module.exports = execute