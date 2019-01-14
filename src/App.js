import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { css, Global } from '@emotion/core'
import { Columns, Column } from './lib/Columns'

const global = css`
  body {
    padding: 3em 7em;
    font-family: Arial;
  }

  .react-flex-columns {
    background-color: #ccc;
  }

  .react-flex-columns > * {
    background: linear-gradient(to right, #d82164, #9a0b3f);
    min-height: 3em;
  }
`

const responsive = css`
  @media (max-width: 600px) {
    display: block;
    .react-flex-column { width: auto; }
  }
`

const App = () => {
  return (
    <Fragment>
      <Global styles={global} />
      <p>
        Gray and Pink styling added so we can see what's going on.
        Also note that negative left and right margin on flex container is
        a <a href="https://csswizardry.com/2011/08/building-better-grid-systems/">technique to help balance gutters</a> and
        will not inadvertently mess with containers of &lt;Columns&gt;
      </p>


      <Columns gutters>
        <Column flex>First</Column>
        <Column flex>Second</Column>
        <Column flex>Third</Column>
      </Columns>

      <hr />
      <Columns gutterSize={4}>
        <Column flex>First</Column>
        <Column flex>Second</Column>
        <Column flex>Third</Column>
      </Columns>
      <hr />

      <Columns>
        <Column flex>First</Column>
        <Column flex>Second</Column>
        <Column flex>Third</Column>
      </Columns>
      <hr />

      <Columns gutters css={responsive}>
        <Column size={10}>First</Column>
        <Column flex>Second</Column>
      </Columns>
      <hr />

      <Columns split>
        <Column>First</Column>
        <Column>Second</Column>
      </Columns>
      <hr />

      <Columns gutters middle>
        <Column size={10}>First</Column>
        <Column flex><span>Second</span></Column>
      </Columns>
      <hr />

      <Columns gutters>
        <Column size={10}>First</Column>
        <Column flex><span>Second</span></Column>
      </Columns>
      <hr />

      <Columns stack>
        <Column size={10}>First</Column>
        <Column flex>Second</Column>
      </Columns>
      <hr />

    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
