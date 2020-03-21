import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Button, Grid } from '@material-ui/core'
import { FieldProps } from 'formik'
import { categoryRadioList } from './formConfig'
import NotificationModal, { Result } from '../MAAES040'
import { bytesToSize } from 'utils/misc'

const useStyles = makeStyles(theme => ({
  previewBorder: {
    width: '100%',
    minHeight: 600,
    border: '1px solid #eeeeee;',
    marginTop: theme.spacing(2),
    borderRadius: 4,
  },
  blockquote: {
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '40px',
    marginInlineEnd: '40px'
  },
  a: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    },
    color: '#551aa8',
  }
}))

const Preview = ({ field, form, ...others }: FieldProps) => {
  const classes = useStyles()
  const formValue = form.values

  const initialValues: Result = {
    category: '',
    publicStartDate: '',
    subject: '',
    body: '',
    fileList: [
      {
        attachmentName: '',
        fileSize: '0',
      },
    ],
  }
  const [previewValues, setPreviewValues] = useState(initialValues)
  const [isInit, setIsInit] = useState(true)

  const showPreview = () => {
    setIsInit(false)
    let category = ''
    categoryRadioList.map(i => (i.value === formValue.category ? category = i.label : ''))
    setPreviewValues({
      category: category,
      publicStartDate: formValue.publicStartDate,
      subject: formValue.subject,
      body: formValue.body,
      fileList: formValue.fileSelected.map((i: File) => ({
        attachmentName: i.name,
        fileSize: bytesToSize(i.size)
      })),
    })
  }

  return (
    <Grid container justify='flex-end'>
      <Button onClick={showPreview} variant='contained' color='primary'>
        プレビューを見る
      </Button>
      <Grid item xs={12} className={classes.previewBorder}>
        {isInit ? <div></div> : <NotificationModal {...previewValues} />}
      </Grid>
    </Grid>
  )
}

export default Preview
