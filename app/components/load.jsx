const React = require('react')

const Load = React.createClass({
  render: function () {
    let {id, start_location, end_location} = this.props
    return (
      <div className='card box-style' style={{width: '100%', paddingTop: '0.5%'}} >
        <div className='card-section'>
            <div className='row' style={{fontSize: '18px'}}>
              <div className='large-3 columns' style={{textAlign: 'center'}}>
                {id}
              </div>
              <div className='large-6 columns' style={{textAlign: 'center', wordWrap: 'break-word'}}>
                {start_location}
              </div>
              <div className='large-3 columns' style={{textAlign: 'center'}}>
              {end_location}
              </div>
            </div>
          </div>
        </div>
    )
  }
})

module.exports = Load
