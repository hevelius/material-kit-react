import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const getColorFromProps = ({ theme, color }) => theme[color] || '#6c757d' // As in original kit

const StyledBadge = styled.span`
  background-color: ${getColorFromProps};
  margin-right: 3px;
  border-radius: 12px;
  padding: 5px 12px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  display: inline-block;
`

const Badge = ({ children, color }) =>
  <StyledBadge color={color}>{children}</StyledBadge>

Badge.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ])
}

export default Badge
