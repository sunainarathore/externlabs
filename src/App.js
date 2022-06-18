import React from 'react'
import Slider from 'react-touch-drag-slider'
import styled, { createGlobalStyle } from 'styled-components';

import images from './image';

// define some basic styles
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,body {
    padding: 0;
    margin: 0;
  }
`
// The slider will fit any size container, lets go full screen...
const AppStyles = styled.main`
  height: 100vh;
  width: 100vw;
`

// Whatever you render out in the Slider will be draggable 'slides'
function App() {
  return (
    <>
      <GlobalStyles />
      <AppStyles>
        <Slider>
          {images.map(({ url, title }, index) => (
            <img src={url} key={index} alt={title} />
          ))}
        </Slider>
      </AppStyles>
    </>
  )
}

export default App
