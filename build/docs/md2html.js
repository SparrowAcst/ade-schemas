const fs = require("fs")
const path = require("path")
const { parseArgs } = require('node:util')

const jaceMark = require("@sparrow/jace-mark")


const run = async () => {
    try{
    	const args = process.argv;

    	const options = {
            
            md: {
                type: 'string',
                short: 'i'
            },
            
            html: {
                type: 'string',
                short: 'o'
            }
        
        };

        const {
            values,
            positionals
        } = parseArgs({ args, options, allowPositionals: true });

        const inputFile = values?.md
        const outputFile = values?.html

        const md = fs.readFileSync(inputFile).toString()
        const result = await jaceMark.render(md, {})
        fs.writeFileSync(outputFile, 
        	`
        	<meta name="viewport" content="width=device-width, initial-scale=1">
    		<link rel="stylesheet" href="github-markdown.css">
            <style>
                .markdown-body {
                    box-sizing: border-box;
                    min-width: 200px;
                    max-width: 980px;
                    margin: 0 auto;
                    padding: 45px;
                }

                @media (max-width: 767px) {
                    .markdown-body {
                        padding: 15px;
                    }
                }
                .value {
                    font-weight: bold;
                    font-size: 85%;
                    border-radius: 4px;
                    padding: 0px 6px 2px;
                    margin-right: 5px;
                    background: #F5F5F5;
                    border: 2px solid #BCAAA4;
                }

                .markdown-body code, .markdown-body tt {
                    background-color: transparent !important;
                }
            </style>
        	<article class="markdown-body">
        		${result}
        	</article>
        	`
        )
    } catch(e){
        console.log(e)
    }    

}

run()