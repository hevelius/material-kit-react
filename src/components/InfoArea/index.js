import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import StyledTitle from '../Title'

const getColorFromProps = ({ theme, color }) => theme[color] || theme.gray

const Container = styled.div`
    max-width: 360px;
    margin: 0 auto;
    padding: 0;
`
const IconWrapper = styled.div`
    float: left;
    margin-top: 24px;
    margin-right: 10px;
    color: ${getColorFromProps};
    ${({ vertical }) => vertical && 'float: none;'}
`

const renderIcon = icon => styled(icon)`
    ${({ vertical }) => vertical
    ? `width: 61px;
    height: 61px;`
    : `width: 36px;
    height: 36px;`}
`

const DescriptionWrapper = styled.div`
  color: ${getColorFromProps};
  overflow: hidden;
`

const Description = styled.p`
  color: ${getColorFromProps};
  overflow: hidden;
  margin-top: 0;
  font-size: 14px;
`

const Title = StyledTitle.withComponent('h4')

const InfoArea = ({ icon, iconColor, vertical, title, description }) => {
  const Icon = renderIcon(icon)
  return (
    <Container>
      <IconWrapper color={iconColor} vertical={vertical}>
        <Icon vertical={vertical} />
      </IconWrapper>
      <DescriptionWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DescriptionWrapper>
    </Container>
  )
}

InfoArea.propTypes = {
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  vertical: PropTypes.bool
}

InfoArea.defaultProps = {
  iconColor: 'gray'
}

export default InfoArea
