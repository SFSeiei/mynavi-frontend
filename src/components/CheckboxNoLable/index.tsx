import React from 'react'
import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  FormControl,
} from '@material-ui/core'
import { FieldProps } from 'formik'
import { useErrorStyle } from 'components'

interface Props extends FieldProps {
  label?: string
}

const CheckboxNoLable = ({ label, field, form }: Props) => {
  const classes = useErrorStyle()
  const { errors, touched } = form
  const { name, value } = field

  const handleChange = (e: any) => {
    form.setFieldValue(name, e.target.checked ? '1' : '0')
  }

  return (
    <FormControl error={Boolean(errors[name] && touched[name])}>
      <MuiCheckbox
        color='primary'
        checked={Boolean(parseInt(value))}
        onChange={handleChange}
      />
      {errors[name] && touched[name] ? (
        <p className={classes.helperText}>{errors[name]}</p>
      ) : null}
    </FormControl>
  )
};

export { CheckboxNoLable } ;