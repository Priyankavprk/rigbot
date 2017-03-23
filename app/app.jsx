let React = require('react')
let ReactDOM = require('react-dom')
let {Route, Router, IndexRoute, hashHistory} = require('react-router')
let Main = require('Main')
const DMain = require('DMain')
const LMain = require('LMain')
const Add = require('Add')

// load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation()

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
<Router history={hashHistory}>
  <Route path='/' component={Main}>
  <Route path='loads' component={LMain}/>
  <Route path='add' component={Add}/>
    <IndexRoute component={DMain}/>
  </Route>
</Router>,
  document.getElementById('app')
)
