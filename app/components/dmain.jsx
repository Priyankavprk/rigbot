const React = require('react')
const DriverList = require('DriverList')
const {getJSON} = require('io-square-browser')
const {postJSON} = require('io-square-browser')

const DMain = React.createClass({
  componentDidMount: function () {
    getJSON('/getdrivers').then((response) => {
      this.setState(
        {drivers: response.drivers}
      )
    })
  },
  onSubmit: function () {
    this.setState(
      {show: true}
    )
  },
  onFormSubmit: function () {
    let obj = {
      'name': this.refs.name.value,
      'id': this.refs.id.value,
      'current_location': this.refs.clocation.value,
      'loads': []
    }
    postJSON('/adddriver', obj).then((res) => {
      console.log('fdsfds')
      window.location.hash = '#/'
    })
  },
  render: function () {
    if (!this.state) {
      return (
        <div>
         Loading
        </div>
      )
    }
    let {drivers} = this.state
    if (this.state.show) {
      return (
        <div>
          <form>
              <input type='id' ref='id' placeholder='Enter the id'/>
              <input type='clocation' ref='clocation' placeholder='Enter the current location'/>
              <input type='name' ref='name' placeholder='Enter the name'/>
              <button className='button' onClick={this.onFormSubmit}>Add driver</button>
          </form>
        </div>
      )
    }
    return (
      <div>
       <input type='submit' className='button' value='Add' onClick={this.onSubmit}/>
       <DriverList drivers={drivers}/>
      </div>
    )
  }
})

module.exports = DMain
