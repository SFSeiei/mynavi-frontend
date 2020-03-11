import React from 'react'
import { Typography } from '@material-ui/core'
import { FieldProps } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import TextField from './TextField'

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
    minWidth: 200,
  },
  textCounter: {
    float: 'right',
    minWidth: 120,
    textAlign: 'right',
  },
}))

interface Props extends FieldProps {
  name?: string
  label: string
  type?: string
  variant?: any
  className?: any
  maxAmount: number
}

const InputWithCounter = ({
  field,
  form,
  label,
  type,
  variant,
  className,
  maxAmount,
  ...others
}: Props) => {
  const classes = useStyles()
  const { name, value } = field
  const handleChange = (event: any) => {
    if (maxAmount && maxAmount >= event.target.value.length) {
      form.setFieldValue(name, event.target.value)
    }
  }
  return (
    <>
      <TextField
        {...others}
        form={form}
        field={{
          ...field,
          onChange: handleChange,
          value:
            value && value.length > maxAmount
              ? value.substr(0, maxAmount)
              : value,
        }}
        label={label}
        className={classes.textField}
      />
      <Typography align='right' gutterBottom variant='h5'>
        {`入力 ${
          value.length > maxAmount ? maxAmount : value.length
        } / 最大 ${maxAmount}`}
      </Typography>
    </>
  )
}

export default InputWithCounter
