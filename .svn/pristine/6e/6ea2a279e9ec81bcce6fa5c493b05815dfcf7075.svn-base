import React, { useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography } from '@material-ui/core'
import { FieldProps } from 'formik'
import RootRef from '@material-ui/core/RootRef'
import TextareaAutosize from './TextareaAutosize'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import LinkIcon from '@material-ui/icons/Link'

const useStyles = makeStyles(theme => ({
  formContorl: {
    paddingTop: theme.spacing(2),
  },
  textCounter: {
    float: 'right',
    minWidth: 120,
    textAlign: 'right',
  },
}))

interface Props extends FieldProps {
  className: any
  maxAmount: number
}

const MultiTextWithCounter = ({ field, form, className, maxAmount }: Props) => {
  const classes = useStyles()
  const { name, value } = field
  const textArea = useRef<HTMLTextAreaElement>(null)

  const handleChangeTextAreaValue = (event: any) => {
    const textValue = event.target.value || ''
    if (maxAmount && maxAmount >= textValue.length) {
      form.setFieldValue(name, event.target.value)
    }
  }
  const decorateTextAreaValue = (firstStr: string, nextStr: string) => {
    const textAreaObj = textArea.current
    if (textAreaObj) {
      const startPos = textAreaObj.selectionStart
      const endPos = textAreaObj.selectionEnd
      let appendAmount = firstStr.length + nextStr.length
      if (textAreaObj.value.length <= maxAmount - appendAmount) {
        const textArr = textAreaObj.value.split('')
        textArr.splice(endPos, 0, nextStr)
        textArr.splice(startPos, 0, firstStr)
        const textValue = textArr.join('')
        form.setFieldValue(name, textValue)
      } else {
        appendAmount = 0
      }
      changeFocus(startPos, endPos + appendAmount)
    }
  }
  const changeFocus = (startPos: number, endPos: number) => {
    const textAreaObj = textArea.current
    if (textAreaObj) {
      textAreaObj.focus()
      setTimeout(() => {
        if (textAreaObj) {
          textAreaObj.setSelectionRange(startPos, endPos)
        }
      }, 1)
    }
  }
  const decorateToBold = () => {
    decorateTextAreaValue('**', '**')
  }
  const decorateToLink = () => {
    decorateTextAreaValue('[', ']()')
  }
  const decorateToList = () => {
    decorateTextAreaValue('- ', '')
  }
  const decorateToQuote = () => {
    decorateTextAreaValue('>', '')
  }

  return (
    <Grid container>
      <Grid item xs={12} className={classes.formContorl}>
        <Button variant='contained' onClick={decorateToBold}>
          <FormatBoldIcon />
        </Button>
        <Button variant='contained' onClick={decorateToLink}>
          <LinkIcon />
        </Button>
        <Button variant='contained' onClick={decorateToList}>
          <FormatListBulletedIcon />
        </Button>
        <Button variant='contained' onClick={decorateToQuote}>
          <FormatQuoteIcon />
        </Button>
      </Grid>
      <Grid item xs={12}>
        <RootRef rootRef={textArea}>
          <TextareaAutosize
            field={{
              ...field,
              onChange: handleChangeTextAreaValue,
              value:
                value && value.length > maxAmount
                  ? value.substr(0, maxAmount)
                  : value,
            }}
            form={form}
            label=''
            aria-label='empty textarea'
            className={className}
          />
        </RootRef>
        <Grid container justify='flex-end'>
          <Grid item className={classes.textCounter}>
            <Typography gutterBottom variant='h5'>
              {`入力 ${
                value.length > maxAmount ? maxAmount : value.length
              } / 最大 ${maxAmount}`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MultiTextWithCounter
