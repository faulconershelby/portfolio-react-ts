import '../CSS/hero.scss'
import ReactTypingEffect from 'react-typing-effect';
import Box from './3dBox';
import {Canvas} from "@react-three/fiber"

export default function Portfolio() {
    return (
      // maybe change how this div is structured to contain the stuff and things
          <div className= "hero-main" id="hero"> 
              <div className = "heading-section">
                  <div className = "intro">
                  <ReactTypingEffect
                      text = {["...", "... Portfolio"]}
                      speed = {100}
                      typingDelay = {1000}
                      eraseDelay = {1000}
                      eraseSpeed = {100}
                      cursorRenderer = {cursor => <h1 className = "cursor"> {cursor} </h1>}
                      displayTextRenderer = {(text, i) => {
                          return (<p className="name"> {text}</p>)
                      }}
                  />
                  </div>
              </div>
          </div>
    )
}