let React = require('react')
let Nav = require('Nav')

let Main = (props) => {
  return (
      <div>
        <Nav/>
        <div className='row'>
          <div className='coloumns medium-6 large-4 small-centered'>
            <h1>Component mounted</h1>
          </div>
        </div>
      </div>
    )
}

module.exports = Main
