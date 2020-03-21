import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import ReactMde from 'react-mde'
import 'react-mde/lib/styles/css/react-mde-all.css'

import DemoEditor from './index'

const Demo = () => {
  const [state, setState] = useState('Hello')
  return <ReactMde value={state} onChange={setState} />
}

storiesOf('Markdown Editor', module)
  .add('Plain', () => <DemoEditor />)
  .add('Full', () => <Demo />)
