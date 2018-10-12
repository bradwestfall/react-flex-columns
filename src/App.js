import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Columns, Column } from './lib/Columns'
import './App.css'

const App = () => {
  return (
    <Fragment>

      <p>
        Gray and Pink styling added so we can see what's going on.
        Also note that negative left and right margin on flex container is
        a <a href="https://csswizardry.com/2011/08/building-better-grid-systems/">technique to help balance gutters</a> and
        will not inadvertently mess with containers of &lt;Columns>&gt;
      </p>

      <Columns gutters>
        <Column flex><h4>First</h4></Column>
        <Column flex><h4>Second</h4></Column>
        <Column flex><h4>Third</h4></Column>
      </Columns>
      <hr />

      <Columns gutterSize={4}>
        <Column flex><h4>First</h4></Column>
        <Column flex><h4>Second</h4></Column>
        <Column flex><h4>Third</h4></Column>
      </Columns>
      <hr />

      <Columns>
        <Column flex><h4>First</h4></Column>
        <Column flex><h4>Second</h4></Column>
        <Column flex><h4>Third</h4></Column>
      </Columns>
      <hr />

      <Columns gutters stackMaxWidth={800}>
        <Column size={10}><h4>First</h4></Column>
        <Column flex><h4>Second</h4></Column>
      </Columns>
      <hr />

      <Columns split>
        <Column><h4>First</h4></Column>
        <Column><h4>Second</h4></Column>
      </Columns>
      <hr />

      <Columns gutters middle>
        <Column size={10}><h4>First</h4></Column>
        <Column flex><span>Second</span></Column>
      </Columns>
      <hr />

      <Columns gutters>
        <Column size={10}><h4>First</h4></Column>
        <Column flex><span>Second</span></Column>
      </Columns>
      <hr />

      <Columns stack>
        <Column size={10}><h4>First</h4></Column>
        <Column flex><h4>Second</h4></Column>
      </Columns>
      <hr />

    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
