import {useState} from 'react'

import {marked} from 'marked'
import { sampleText } from './sampleText'

const App = () => {
  const [text, setText] = useState(sampleText)



  const renderText = text => {
    const __html = marked(text, {sanitize: true})
    return {__html}
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
          <textarea onChange={e => setText(e.target.value)} id='editor' className='form-control' value={text} rows='35' />
        </div>
        <div className='col-sm-6'>
<div id='preview' dangerouslySetInnerHTML={renderText(text)}></div>
        </div>
      </div>
    </div>
  )
}
export default App