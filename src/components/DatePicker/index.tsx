import React from 'react'
import { FieldProps } from 'formik'
import { DatePicker as MuiDatePicker } from '@material-ui/pickers'
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
      format='MM/DD/YYYY'
      fullWidth
      margin={margin}
      name={name}
      value={value}
      helperText={errors[name] && touched[name] ? errors[name] : null}
      error={Boolean(errors[name] && touched[name])}
      onChange={date => form.setFieldValue(field.name, date, true)}
    />
  )
}

export default DatePicker
