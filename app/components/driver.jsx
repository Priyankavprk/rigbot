const React = require('react')
const Add = require('Add')

const Driver = React.createClass({
  onSubmit: function () {
    let {id} = this.props
    //console.log(id)
    //window.location.hash = '#/add'
    return(
    <Add id={id}/>
    )

  },
  render: function () {
    let {id, name, current_location} = this.props
    return (
      <div className='card box-style' style={{width: '100%', paddingTop: '0.5%'}} >
        <div className='card-section'>
            <div className='row' style={{fontSize: '18px'}}>
              <div className='large-3 columns' style={{textAlign: 'center'}}>
                {id}
              </div>
              <div className='large-6 columns' style={{textAlign: 'center', wordWrap: 'break-word'}}>
                {name}
              </div>
              <div className='large-3 columns' style={{textAlign: 'center'}}>
              {current_location}
              </div>
            </div>
            <div className='row' style={{fontSize: '18px'}}>
              <div className='large-3 columns' style={{textAlign: 'center'}}>
                <input type='submit' className='button' value='Add load' onClick={this.onSubmit}/>
              </div>
            </div>
          </div>
        </div>
    )
  }
})

module.exports = Driver
