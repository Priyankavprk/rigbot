const React = require('react')
const Driver = require('Driver')

const DriverList = React.createClass({
  render: function () {
    let {drivers} = this.props
    let renderDrivers = () => {
      return drivers.map((driver) => {
        return (
          <Driver key={driver.id} {...driver}/>
        )
      })
    }
    return (
      <div>
        {renderDrivers()}
      </div>
    )
  }
})

module.exports = DriverList
