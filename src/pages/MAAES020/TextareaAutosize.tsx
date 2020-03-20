import React from 'react'
import { FormControl, makeStyles } from '@material-ui/core'
import { FieldProps } from 'formik'
import Textarea from '@material-ui/core/TextareaAutosize'

interface Props extends FieldProps {
  label?: string
  type?: string
  variant?: any
  className?: any
  maxAmount?: number
}

const useStyles = makeStyles(theme => ({
  textarea: {
    border: '1px solid #e2e8f0',
    borderRadius: 4,
  },
  textareaError: {
    borderColor: '#e53935',
  },
  helperText: {
    fontSize: '11px',
    marginTop: '4px',
    minHeight: '1em',
    textAlign: 'left',
    fontFamily:
      'Noto Sans SC,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontWeight: 400,
    lineHeight: '1em',
    letterSpacing: '0.33px',
    color: '#e53935',
  },
}))

const TextareaAutosize = ({ field, form, label, type, ...others }: Props) => {
  const classes = useStyles()
  const { errors, touched } = form
  const { name, value, onBlur } = field
  const { className } = others

  const handleOnChange = (event: any) => {
    const value = event.target.value
    form.setFieldValue(name, value === '' ? [] : value.split('\n'))
  }

  return (
    <>
      <Textarea
        {...others}
        className={[
          className,
          classes.textarea,
          touched[name] && errors[name] ? classes.textareaError : '',
        ].join(' ')}
        value={value.join('\n')}
        name={name}
        onChange={handleOnChange}
        onBlur={onBlur}
        rows={10}
      />
      <div>
        <FormControl error={Boolean(touched[name] && errors[name])}>
          {errors[name] && touched[name] ? (
            <p className={classes.helperText}>{errors[name]}</p>
          ) : null}
        </FormControl>
      </div>
    </>
  )
}

export default TextareaAutosize
