const React = require('react')

const Add = React.createClass({
  render: function () {
    let {id} = this.props
    console.log(this.props)
    return (
      <div className='row'>
        <div className='coloumns medium-6 large-9 small-centered main'>
          <input type='id' ref='id' placeholder='Enter the load id'/>
        </div>
        <div className='coloumns medium-6 large-9 small-centered main'>
            <input type='submit' className='button' value='Add Load' onClick={this.onSubmit}/>
        </div>
      </div>
    )
  }
})

module.exports = Add
