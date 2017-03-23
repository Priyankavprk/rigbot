const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

const server = app.listen(process.env.PORT || 3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Server listening at http://%s:%s', host, port)
})

function addDriver (driver) {
    fs.readFile('data.json', (err, data) => {
    if (data) {
      let obj = JSON.parse(data)
      obj.drivers.push(driver)
      fs.writeFile('data.json', JSON.stringify(obj, null, 4))
    }
  })
}

function getDrivers (req, res) {
  fs.readFile('data.json', (err, data) => {
    if (data) {
      let obj = JSON.parse(data)
      console.log(obj.drivers)
      res.send(obj.drivers)
    }
  })
}

function getLoads (req, res) {
  fs.readFile('data.json', (err, data) => {
    if (data) {
      let obj = JSON.parse(data)
      console.log(obj.loads)
      res.send(obj.loads)
    }
  })
}

function addLoad (load) {
  fs.readFile('data.json', (err, data) => {
    if (data) {
      let obj = JSON.parse(data)
      obj.loads.push(load)
      fs.writeFile('data.json', JSON.stringify(obj, null, 4))
    }
  })
}

function assignLoad (req, res) {
  console.log(req.params.id)
  fs.readFile('data.json', (err, data) => {
    if (data) {
      let obj = JSON.parse(data)
      let a = obj.drivers.filter(function (driver) {
        if (driver.id === req.params.id) return driver
      })
      a[0].loads.id = req.params.load_id
      a[0].loads.start_location = req.params.start_location
      a[0].loads.id = req.params.end_location
      fs.writeFile('data.json', JSON.stringify(obj, null, 4))
    }
  })
}

var l = {
  "start_location": "y",
  "end_location": "x",
  "id": "654"
}

//getDrivers()
//getLoads()
//assignLoad('23', l)

app.get('/getdrivers', getDrivers)
app.get('/getloads', getLoads)
app.post('/assignload/:id', assignLoad)
