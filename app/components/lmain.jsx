const React = require('react')
const LoadList = require('LoadList')
const {getJSON} = require('io-square-browser')
const {postJSON} = require('io-square-browser')

const LMain = React.createClass({
  componentDidMount: function () {
    getJSON('/getloads').then((response) => {
      this.setState(
        {loads: response.loads}
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
      'id': this.refs.id.value,
      'start_location': this.refs.slocation.value,
      'end_location': this.refs.elocation.value
    }
    postJSON('/addload', obj).then((res) => {
      console.log('fdsfds')
      window.location.hash = '#/loads'
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
    let {loads} = this.state
    if (this.state.show) {
      return (
        <div>
          <form>
              <input type='id' ref='id' placeholder='Enter the id'/>
              <input type='slocation' ref='slocation' placeholder='Enter the start location'/>
              <input type='elocation' ref='elocation' placeholder='Enter the end location'/>
              <button className='button' onClick={this.onFormSubmit}>Add load</button>
          </form>
        </div>
      )
    }
    return (
      <div>
       <input type='submit' className='button' value='Add' onClick={this.onSubmit}/>
       <LoadList loads={loads}/>
      </div>
    )
  }
})

module.exports = LMain
