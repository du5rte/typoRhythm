import * as React from 'react'
import * as ReactDOM from 'react-dom'

// TypoRhythm
import typoRhythm from '../typorhythm/typorhythm.es5.js'

class Demo extends React.Component {
  render() {

    function type(val) {
      return typoRhythm({size:val, margin:1})
    }

    return (
      <div>
        <h1 style={typoRhythm({size:72, margin:2})}>TypoRhythm</h1>
        <h1 style={type(47)}>Heading One</h1>
        <h2 style={type(34)}>Heading Two</h2>
        <h3 style={type(26)}>Heading Three</h3>
        <h4 style={type(21)}>Heading Four</h4>
        <h5 style={type(18)}>Heading Five</h5>
        <h6 style={type(16)}>Heading Six</h6>

        <p style={type(16)}>
          A basic foundation of design is <b>Typography</b> &minus;
          This module is aimed to create <u>typographic rhythm</u> with inline styles using <b>JavaScript</b>.
          It calculates the appropriate font-size, line-height,
          margin-bottom and padding in <b>Ems</b> while keeping it in a neat <b>24px</b> Base Vertical Grid.
        </p>

        <pre style={typoRhythm({size:21, margin: 1, padding:1})}>
          <span style={{opacity: '0.5'}}>{'<pre style={ '}</span>
            {'typoRhythm({ size:16, margin: 1, padding:1 })'}
          <span style={{opacity: '0.5'}}>{' }></pre>'}</span><br />
        </pre>

        <ul style={type(16)}>
          <li>Full control with simple API</li>
          <li>Pixels to Ems</li>
          <li>Responsive</li>
        </ul>
      </div>
     )
  }
}

ReactDOM.render(<Demo />, document.getElementById('demo'))
