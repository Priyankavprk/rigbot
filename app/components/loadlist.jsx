const React = require('react')
const Load = require('Load')

const LoadList = React.createClass({
  render: function () {
    let {loads} = this.props
    let renderLoads = () => {
      return loads.map((load) => {
        return (
          <Load key={load.id} {...load}/>
        )
      })
    }
    return (
      <div>
        {renderLoads()}
      </div>
    )
  }
})

module.exports = LoadList
