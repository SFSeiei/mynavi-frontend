import React from 'react'
import { FieldProps } from 'formik'
import { KeyboardDatePicker as MuiDatePicker } from '@material-ui/pickers'
import { PropTypes } from '@material-ui/core'

interface Props extends FieldProps {
  margin?: PropTypes.Margin
}

const DatePicker = ({ margin = 'dense', field, form }: Props) => {
  const { errors, touched } = form
  const { value, name } = field

  return (
    <MuiDatePicker
      clearable
      inputVariant='outlined'
      format='YYYY/MM/DD'
      fullWidth
      margin={margin}
      name={name}
      value={isNaN(Date.parse(value)) ? null : new Date(value)}
      inputValue={value}
      helperText={errors[name] && touched[name] ? errors[name] : null}
      error={Boolean(errors[name] && touched[name])}
      onChange={(date, value) => {
        form.setFieldValue(field.name, value ? value : '', true)
        form.setFieldTouched(field.name, true, true)
      }}
    />
  )
}

export default DatePicker
