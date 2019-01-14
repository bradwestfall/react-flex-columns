import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { css } from '@emotion/core'
import Column from './Column'

export const componentTypeIsSame = (Component, type) => {
  // https://github.com/gatsbyjs/gatsby/issues/3486#issuecomment-364163889
  return type === Component || type === <Component />.type
}

const Columns = ({ children, className, middle, gutterSize, gutters, split, reverse, stack, ...rest }) => {
  const gutterUnit = gutterSize || (gutters && 1)

  // Verify and augment children columns
  children = React.Children.map(children, child => {
    if (!child) return
    if (!componentTypeIsSame(Column, child.type)) throw new Error('<Columns> can only have <Column> as a direct child')
    return React.cloneElement(child, { ...child.props, stack, gutterUnit, split })
  })

  // When stack is enabled, we don't return traces of the columns div tags
  if (stack) return <Fragment>{children}</Fragment>

  const styles = css`
    display: flex;
    box-sizing: border-box;
    ${middle && 'align-items: center;'}
    ${split && 'justify-content: space-between;'}
    ${reverse && 'flex-direction: row-reverse;'}
    ${gutterUnit && 'margin-left: ' + gutterUnit * -0.5 + 'em;'}
    ${gutterUnit && 'margin-right: ' + gutterUnit * -0.5 + 'em;'}
  `

  const classNames = classnames('react-flex-columns', className, {
    'react-flex-columns-align-middle': !!middle,
    'react-flex-columns-split': !!split,
    'react-flex-columns-reverse': !!reverse
  })

  return <div {...rest} className={classNames} css={styles}>{children}</div>
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
  className: PropTypes.string,
  middle: PropTypes.bool,
  gutterSize: PropTypes.number,
  gutters: PropTypes.bool,
  split: PropTypes.bool,
  reverse: PropTypes.bool,
  stack: PropTypes.bool
}

export { Columns, Column }
