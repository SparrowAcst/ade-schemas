const execute = require("./prepare-worker")

const run = async () => {
	try {
		await execute()
	} catch(e) {
		console.error(e.toString())
	}	
}

run()
