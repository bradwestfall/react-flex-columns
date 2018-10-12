import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Media from 'react-media'
import Column from './Column'

export const componentTypeIsSame = (Component, type) => {
  // https://github.com/gatsbyjs/gatsby/issues/3486#issuecomment-364163889
  return type === Component || type === <Component />.type
}

const Columns = ({ children, className, middle, gutterSize, gutters, split, reverse, stack, stackMaxWidth }) => {
  const gutterUnit = gutterSize || (gutters && 1)

  // Verify and augment children columns
  children = React.Children.map(children, child => {
    if (!child) return
    if (!componentTypeIsSame(Column, child.type)) throw new Error('<Columns> can only have <Column> as a direct child')
    return React.cloneElement(child, { ...child.props, stack, gutterUnit, split })
  })

  // When stack is enabled, we don't return traces of the columns div tags
  if (stack) return <Fragment>{children}</Fragment>

  const styles = {
    display: 'flex',
    boxSizing: 'borderBox'
  }
  if (middle) styles.alignItems = 'center'
  if (split) styles.justifyContent = 'space-between'
  if (reverse) styles.flexDirection = 'row-reverse'
  if (gutterUnit) styles.marginLeft = `${gutterUnit * -0.5}em`
  if (gutterUnit) styles.marginRight = `${gutterUnit * -0.5}em`

  const classNames = classnames('react-flex-columns', className, {
    'react-flex-columns-align-middle': !!middle,
    'react-flex-columns-split': !!split,
    'react-flex-columns-reverse': !!reverse
  })

  // If we're using the responsive settings
  if (stackMaxWidth) {
    return (
      <Media query={`(max-width: ${Number.isInteger(stackMaxWidth) ? `${stackMaxWidth}px` : stackMaxWidth})`}>
        {stack => {
          if (stack) return <Fragment>{children}</Fragment>
          return <div className={classNames} style={styles}>{children}</div>
        }}
      </Media>
    )
  }

  return <div className={classNames} style={styles}>{children}</div>
}

Columns.defaultProps = {
  middle: false,
  gutterSize: null,
  gutters: null,
  split: false,
  reverse: false,
  stack: false
}

Columns.propTypes = {
  middle: PropTypes.bool,
  gutterSize: PropTypes.number,
  gutters: PropTypes.bool,
  split: PropTypes.bool,
  reverse: PropTypes.bool,
  stackMaxWidth: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number
  ])
}

export { Columns, Column }
