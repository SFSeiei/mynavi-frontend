import React from 'react'
import { FieldProps } from 'formik'
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  helperText: {
    fontSize: '11px',
    minHeight: '1em',
    textAlign: 'left',
    fontFamily:
      'Noto Sans SC,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontWeight: 400,
    lineHeight: '1em',
    letterSpacing: '0.33px',
    color: '#e53935',
    // margin: '0 14px 0',
  },
})

interface Props extends FieldProps {
  label: string
  radioList: {
    label: string
    value: string
  }[]
}

const Toggle = ({ field, form, label, radioList, ...others }: Props) => {
  const classes = useStyles()
  const { name, value } = field
  const { errors, touched } = form
  const handleChange = (e: any) => {
    form.setFieldValue(name, e.target.value)
  }

  return (
    <FormControl error={Boolean(errors[name] && touched[name])}>
      <RadioGroup row value={value} onChange={handleChange} {...others}>
        {radioList.map(i => (
          <FormControlLabel
            control={<Radio />}
            label={i.label}
            color='primary'
            value={i.value}
            key={i.value}
          />
        ))}
      </RadioGroup>
      {errors[name] && touched[name] ? (
        <p className={classes.helperText}>{errors[name]}</p>
      ) : null}
    </FormControl>
  )
}

export default Toggle
