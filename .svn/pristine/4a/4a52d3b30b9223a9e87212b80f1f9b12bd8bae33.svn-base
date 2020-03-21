import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Button, Grid } from '@material-ui/core'
import { FieldProps } from 'formik'
import { categoryRadioList } from './formConfig'
import NotificationModal, { Result } from '../MAAES040'

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

  const getBodyHtml = (htmlStr: string) => {
    htmlStr += '\n'
    // get quote
    const quoteStrPattern = />[\s\S]*?\n/g
    const quoteStrArr = htmlStr.match(quoteStrPattern)
    if (quoteStrArr) {
      quoteStrArr.forEach(value => {
        htmlStr = htmlStr.replace(value, `<blockquote class=${classes.blockquote}>${value.substring(1, value.length - 1)}</blockquote>`)
      })
    }

    // get strong
    const strongStrPattern = /[*]{2}[\s\S]*?[*]{2}/g
    const strongStrArr = htmlStr.match(strongStrPattern)
    if (strongStrArr) {
      strongStrArr.forEach(value => {
        htmlStr = htmlStr.replace(
          value,
          '<strong>' + value.substring(2, value.length - 2) + '</strong>'
        )
      })
    }

    // get link
    const linkStrPattern = /\[[\s\S]*?\]\([\s\S]*?\)/g
    const linkContexPattern = /\[[\s\S]*\]\(/g
    const linkStrArr = htmlStr.match(linkStrPattern)
    if (linkStrArr) {
      linkStrArr.forEach((value) => {
        const linkContextArr = value.match(linkContexPattern)
        if (linkContextArr) {
          const linkContext = linkContextArr[0].substring(1, linkContextArr[0].length - 2)
          htmlStr = htmlStr.replace(value, `<a href='javascript:void(0)' class=${classes.a}>${linkContext}</a>`)
        }
      })
    }

    // get list
    const listStrPattern = /-\s[\s\S]*?(\n|<[/]blockquote>)/g
    const listStrArr = htmlStr.match(listStrPattern)
    if (listStrArr) {
      listStrArr.forEach(value => {
        if (value.search('</blockquote>') >= 0) {
          htmlStr = htmlStr.replace(value, '<li>' + value.substring(2, value.length - '</blockquote>'.length) + '</li></blockquote>')
        } else {
          htmlStr = htmlStr.replace(value, '<li>' + value.substring(2, value.length - 1) + '</li>')
        }
      })
    }

    // > - 粗斜体文本
    // - Marker character change forces new list start:
    // [# h1 标题](https://www.baidu.com)
    // **This is bold text**
    return htmlStr
  }

  const formatFileSize = (fileSize: number) => {
    // formatedFileSize = fileSize / 1024 > 0 ? fileSize / 1024 / 1024 + 'MB' : fileSize / 1024 + 'KB'
    return (fileSize / 1024.0).toFixed(3)
  }

  const showPreview = () => {
    setIsInit(false)
    const bodyHtml = getBodyHtml(formValue.body)
    let category = ''
    categoryRadioList.map(value => (value.value === formValue.category ? category = value.label : ''))
    setPreviewValues({
      category: category,
      publicStartDate: formValue.publicStartDate,
      subject: formValue.subject,
      body: bodyHtml,
      // fileList: formValue.fileSelected.map((value: File) => ({
      //   attachmentName: value.name,
      //   fileSize: formatFileSize(value.size)
      // })),
      fileList: [
                  {attachmentName: 'file1', fileSize: formatFileSize(123456789)}, 
                  {attachmentName: 'file2', fileSize: formatFileSize(987645321)}, 
                  {attachmentName: 'file3', fileSize: formatFileSize(456321789)}
                ]
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
