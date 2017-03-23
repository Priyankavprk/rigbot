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

function addLoad (req, res) {
    fs.readFile('data.json', (err, data) => {
    if (data) {
      let obj = JSON.parse(data)
      obj.loads.push(req.body)
      fs.writeFile('data.json', JSON.stringify(obj, null, 4), () => {
        res.status(200).send('Done')
      })
    }
  })
}

function getLoads (req, res) {
  fs.readFile('data.json', (err, data) => {
    if (data) {
      let obj = JSON.parse(data)
      res.send({
        loads: obj.loads
      })
    }
  })
}

function addDriver (req, res) {
  fs.readFile('data.json', (err, data) => {
    if (data) {
      let obj = JSON.parse(data)
      obj.drivers.push(req.body)
      fs.writeFile('data.json', JSON.stringify(obj, null, 4), () => {
        res.status(200).send('Done')
      })
    }
  })
}

function getDrivers (req, res) {
  fs.readFile('data.json', (err, data) => {
    if (data) {
      let obj = JSON.parse(data)
      res.send({
        drivers: obj.drivers
      })
    }
  })
}

function assignLoad (req, res) {
  fs.readFile('data.json', (err, data) => {
    if (data) {
      let obj = JSON.parse(data)
      let d = obj.drivers.filter(function (driver) {
        if (driver.id === req.body.driver_id) return driver
      })
      let l = obj.loads.filter(function (load) {
        if (load.id === req.body.load_id) return load
      })
      d[0].loads.push(l)
      fs.writeFile('data.json', JSON.stringify(obj, null, 4))
    }
  })
}

//getDrivers()
//getLoads()
//assignLoad('23', l)
app.post('/adddriver', addDriver)
app.get('/getdrivers', getDrivers)
app.post('/addload', addLoad)
app.get('/getloads', getLoads)
app.post('/assignload', assignLoad)
