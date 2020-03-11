import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FieldProps } from 'formik'
import MuiTextField from '@material-ui/core/TextField'

interface Props extends FieldProps {
  label: string
  type?: string
  variant?: any
  className?: any
  maxAmount?: number
}

const useStyles = makeStyles({
  input: {
    '&::placeholder': {
      color: 'darkgray',
    },
  },
})

const TextField = ({ field, form, label, type, ...others }: Props) => {
  const classes = useStyles()
  const { errors, touched } = form
  const { name, onChange } = field

  const handleChange = (e: any) => {
    onChange(e)
  }

  return (
    <MuiTextField
      {...field}
      {...others}
      label={label}
      margin='dense'
      fullWidth
      inputProps={{ spellCheck: false }}
      error={Boolean(errors[name] && touched[name])}
      helperText={errors[name] && touched[name] ? errors[name] : null}
      type={type ? type : 'text'}
      InputProps={{
        classes: { input: classes.input },
      }}
      onChange={handleChange}
    />
  )
}

export default TextField
