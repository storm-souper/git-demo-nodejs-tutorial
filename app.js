const {readFile, writeFile} = require('fs');

const first = readFile('./content/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    } 
    console.log(result)
})
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the result: ${first} and ${second}`
// );

