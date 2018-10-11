import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const Column = ({ children, className, gutterUnit, stack, split, size, flex, display, align }) => {
  if (!display) return null
  // When stack is enabled, we don't return traces of the columns div tags
  if (stack) return <Fragment>{children}</Fragment>

  // Initial Styles: https://css-tricks.com/flexbox-truncated-text/
  const styles = {
    boxSizing: 'borderBox',
    minWidth: 0
  }
  if (gutterUnit) styles.marginLeft = `${gutterUnit * 0.5}em`
  if (gutterUnit) styles.marginRight = `${gutterUnit * 0.5}em`
  if (size && !split) styles.width = `${size}em`
  if (flex && !split) styles.flex = 1
  if (align) styles.textAlign = align.toLowerCase()

  return (
    <div style={styles} className={classnames('react-flex-column', className, {
      [`react-flex-columns-align-${align}`]: !!align,
      'react-flex-columns-flex': !!flex
    })}>
      {children}
    </div>
  )
}

Column.defaultProps = {
  split: false,
  stack: false,
  display: true,
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gutterUnit: PropTypes.number,
  stack: PropTypes.bool,
  split: PropTypes.bool,
  size: PropTypes.number,
  flex: PropTypes.bool,
  display: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right', 'center'])
}

export default Column
