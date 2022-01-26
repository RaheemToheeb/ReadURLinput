const fs = require("fs")
const http = require('http')

const port = 9999;

const ifPage = (req, res) => {

    if (req.url === "/boys") {
        fs.readFile("/boys.html", (error, data) => {
            if (error) {
                console.log("couldn't read file " + error)
            } else {
                res.end(data)
            }
        })
    } else if (req.url === "/girls") {
        fs.readFile("/girls.html", (error, data) => {
            if (error) {
                console.log("couldn't read file " + error)
            } else {
                res.end(data)
            }
        })
    } else if (req.url === "/staff"){
        fs.readFile("staff.html", (error, data) => {
            if (error) {
                console.log("couldn't read file " + error)
            } else {
                res.end(data)
            }
        })
    } else if (req.url === "/myself") {
        fs.readFile("./myself.html", (error, data) => {
            if(error) {
                console.log("can't read file ", error)
            } else {
                res.end(data)
            }
        })
    } else {
        res.end("Your request not found")
    }
};

const app = http.createServer(ifPage)

app.listen(port, () => {
    console.log("Port " + port + " Active")
})