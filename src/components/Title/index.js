import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTitle = styled.h1`
  color: #3C4858;
  margin: 1.75rem 0 0.875rem;
  text-decoration: none;
  font-weight: 700;
  font-family: "Roboto Slab", "Times New Roman", serif;
`

const Title = basedOn =>
  StyledTitle.withComponent(basedOn)

Title.propTypes = {
  basedOn: PropTypes.string
}

Title.defaultProps = {
  basedOn: 'h1'
}

export default Title
