
const { execa } = require("execa")
const watch = require('node-watch')
const { styleText } = require('node:util')

const updateAll = async () => {
	try {
		const{ stdout } = await execa({stdout: ['pipe', 'inherit']})`npm run docs:schemas`;
		console.log(stdout);
		console.log(styleText("green", "Docs updated successfully"))
	} catch(e) {
		console.log(styleText("red", e.stderr || ""))//.join("\n")))
	}	
}


const run = async () => {

	let schemaWatcher = watch(
			'./schemas/yaml/', 
			{ 
				filter: /\.yaml$/,
				recursive: true 
			}, 
			
			async (evt, name) => {
			  await updateAll()	
			  // if (evt == 'update') {
			  //   // on create or modify
			  // }

			  // if (evt == 'remove') {
			  //   // on delete
			  // }

			}
	)

	let partialsWatcher = watch(
		'./build/docs/partials', 		
		{ 
			filter: /\.md$/,
			recursive: true 
		}, 
		async (evt, name) => {
			  await updateAll()	
			  // if (evt == 'update') {
			  //   // on create or modify
			  // }

			  // if (evt == 'remove') {
			  //   // on delete
			  // }
			}
	)		
	

	await updateAll()
}

run()

