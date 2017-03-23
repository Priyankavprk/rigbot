let React = require('react')
let {Link, IndexLink} = require('react-router')
let LMain = require('LMain')

let Nav = React.createClass({
  render: function () {
    return (
        <div className='top-bar'>
          <div className='top-bar-left'>
            <ul className='menu'>
              <li className='menu-text'>Rigbot</li>
              <li><IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Drivers</IndexLink></li>
              <li><Link to='/loads' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Loads</Link></li>
            </ul>
          </div>
         </div>
      )
  }
})

module.exports = Nav
