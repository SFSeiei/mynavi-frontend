import React from 'react'
import { storiesOf } from '@storybook/react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

storiesOf('Select Input', module)
  .add('Single', () => <Select options={options} />)
  .add('Multi', () => <Select options={options} isMulti />)
  .add('Creatable', () => <CreatableSelect options={options} isMulti />)