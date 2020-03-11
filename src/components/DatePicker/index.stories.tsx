import React, { useState } from 'react'
import moment from 'moment'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { storiesOf } from '@storybook/react'

const Demo = () => {
  const [selectedDate, handleDateChange] = useState(new Date())

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <KeyboardDatePicker
        value={selectedDate}
        onChange={handleDateChange as any}
        clearable
        inputVariant='outlined'
        format='YYYY/MM/DD'
        minDate={new Date()}
        margin='dense'
        inputProps={{
          size: 7,
        }}
      />
    </MuiPickersUtilsProvider>
  )
}

storiesOf('Date Picker', module).add('normal', () => <Demo />)
