import { useState } from 'react'
import randomColor from 'randomcolor'

import './App.css'

function App() {
  const [buttonLabel, setButtonLabel] = useState('✨ new tone')
  const [buttonClassName, setButtonClassName] = useState('new-tones-button')
  const [buttonLabelClassName, setButtonLabelClassName] = useState('')
  const [animatingButton, setAnimatingButton] = useState(false)

  function handleNewToneClick() {
    if (!animatingButton) {
      setAnimatingButton(true)
      setButtonClassName('new-tones-button boi')
      setButtonLabelClassName('new-tone-slide-out')

      const backgroundColor = randomColor()
      const root = document.getElementsByTagName('html')[0]
      root.style.setProperty('background-color', backgroundColor)
    }
  }

  function handleButtonAnimationEnd(e: React.AnimationEvent) {
    if (e.animationName === 'boi') {
      setButtonClassName('new-tones-button ng-boing no-pointer')
    } else if (e.animationName === 'glow-down') {
      setButtonClassName('new-tones-button')
    }
  }

  function handleButtonLabelAnimationStart(e: React.AnimationEvent) {
    if (e.animationName === 'who-dis-slide-out') {
      setButtonClassName('new-tones-button glow-down no-pointer')
    }
  }

  function handleButtonLabelAnimationEnd(e: React.AnimationEvent) {
    if (e.animationName === 'new-tone-slide-out') {
      setButtonLabel('who dis?')
      setButtonLabelClassName('who-dis-slide-in')
    } else if (e.animationName === 'who-dis-slide-in') {
      setButtonLabelClassName('who-dis-slide-out')
    } else if (e.animationName === 'who-dis-slide-out') {
      setButtonLabel('✨ new tone')
      setButtonLabelClassName('new-tone-slide-in')
    } else if (e.animationName === 'new-tone-slide-in') {
      setButtonClassName('new-tones-button')
      setButtonLabelClassName('')
      setAnimatingButton(false)
    }
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            handleNewToneClick()
          }}
          className={buttonClassName}
          onAnimationEnd={handleButtonAnimationEnd}
        >
          <div
            className={buttonLabelClassName}
            style={{
              minWidth: '140px',
            }}
            onAnimationStart={handleButtonLabelAnimationStart}
            onAnimationEnd={handleButtonLabelAnimationEnd}
          >
            {buttonLabel}
          </div>
        </button>
      </div>
      <div className="byline">
        <div className="byline-text">
          A collection of fun concepts <span className="no-line-break">by <a href="mailto:tony@fitd.tech">Anthony Peluso-Cook</a>.</span>
        </div>
        <div className="fitd-link">
          <a href ="https://fitd.tech">See my other projects</a>.
        </div>
      </div>
    </>
  )
}

export default App
