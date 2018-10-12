# React Flex Columns

React Flex Columns is an abstraction on CSS Flexbox-style columns for add-hoc layout that are not complex enough to justify writing custom CSS.

Inspired by https://philipwalton.github.io/solved-by-flexbox/demos/grids and https://css-tricks.com/dont-overthink-flexbox-grids

## Install

```sh
npm install react-flex-columns
```

## Basic Usage

```jsx
import { Columns, Column } from 'react-flex-columns'

const App = () => (
  <Columns>
    <Column flex>Left</Column>
    <Column flex>Right</Column>
  </Columns>
)
```

`<Columns>` creates a `div` with `display: flex`. The children `<Column>`'s must be the first level children of `<Columns>` and create `div`'s that are flex items. Flex items by default will be side-by-side with each other even though the divs are still block-level elements. As flex items, their width will be as wide as their contents unless other properties are provided like `flex: 1`. In the above example, providing a `flex` boolean property will create a `flex: 1` styling which in this case results in two 50% wide columns. [Learning more about Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) will help you use this Module.


## Examples

See the Codesandbox for an interactive example

![Example Image](docs/example.png)


## API

There are two React components exported as named exports:

```sh
import { Columns, Column } from 'react-flex-columns'
```

