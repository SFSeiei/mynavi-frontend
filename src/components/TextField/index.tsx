import React from 'react'
import { TextField as MuiTextField, PropTypes } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FieldProps } from 'formik'

const useStyles = makeStyles({
  input: {
    '&::placeholder': {
      color: 'darkgray',
    },
  },
})

interface Props extends FieldProps {
  type?: string
  margin?: PropTypes.Margin
  placeholder?: string
  disabled?: boolean
  multiline?: boolean
  rows?: number
}

const TextField = ({
  type = 'text',
  margin = 'dense',
  placeholder,
  field,
  form,
  disabled,
  multiline,
  rows,
}: Props) => {
  const classes = useStyles()
  const { errors, touched } = form
  const { name } = field

  return (
    <MuiTextField
      variant='outlined'
      margin={margin}
      disabled={disabled}
      fullWidth
      multiline={multiline}
      rows={rows}
      type={type}
      inputProps={{ spellCheck: false }}
      InputProps={{
        classes: { input: classes.input },
      }}
      error={Boolean(errors[name] && touched[name])}
      helperText={errors[name] && touched[name] ? errors[name] : null}
      placeholder={placeholder}
      {...field}
    />
  )
}

export default TextField
