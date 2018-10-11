import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Columns, Column } from './lib/Columns'
import './App.css'

const App = () => {
  return (
    <Fragment>

      <Columns gutters middle>
        <Column size={10}>Gutters</Column>
        <Column flex>
          <h3>Middle</h3>
        </Column>
      </Columns>
      <hr />

      <Columns split>
        <Column>split</Column>
        <Column>split</Column>
      </Columns>
      <hr />

      <Columns gutters middle reverse>
        <Column size={10}>Gutters</Column>
        <Column flex>
          <h3>Middle</h3>
        </Column>
      </Columns>
      <hr />

      <Columns stack>
        <Column size={10}>Gutters</Column>
        <Column flex>
          <h3>Middle</h3>
        </Column>
      </Columns>
      <hr />

    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
