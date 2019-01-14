import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import classnames from 'classnames'

export const Column = ({ children, className, gutterUnit, stack, split, size, flex, align, ...rest }) => {
  // When stack is enabled, we don't return traces of the columns div tags
  if (stack) return <Fragment>{children}</Fragment>

  const styles = css`
    box-sizing: border-box;
    min-width: 0;
    ${gutterUnit && 'margin-left: ' + gutterUnit * 0.5 + 'em;'}
    ${gutterUnit && 'margin-right: ' + gutterUnit * 0.5 + 'em;'}
    ${size && !split && 'width: ' + size + 'em;'}
    ${flex && !split && 'flex: 1;'}
    ${align && 'text-align: ' + align.toLowerCase()}
  `

  return (
    <div {...rest} css={styles} className={classnames('react-flex-column', className, {
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
  align: PropTypes.oneOf(['left', 'right', 'center'])
}

export default Column
