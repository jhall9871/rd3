import React from 'react'
import {object, array} from 'prop-types'
import {connect} from 'react-redux'
import styled, {ThemeProvider, injectGlobal} from 'styled-components'
import ThemePicker from 'containers/ThemePicker'
import {getTheme} from 'redux/selectors'

injectGlobal`
  body {
    margin: 0;
    overflow: hidden;
  }
`

const Root = styled.div`
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.color};
  font: 11px sans-serif;
  padding: 8px;
`

const ThemedApp = ({theme, children}) => (
  <ThemeProvider theme={theme}>
    <Root>
      {children}
      <ThemePicker />
    </Root>
  </ThemeProvider>
)

ThemedApp.propTypes = {
  theme: object,
  children: array
}

const mapStateToProps = (state, ownProps) => ({
  theme: getTheme(state)
})

export default connect(mapStateToProps)(ThemedApp)
