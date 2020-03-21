import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import { useErrorStyle } from 'components'
import { FieldProps } from 'formik'
import React from 'react'
import { FileDownLoadGroup } from './formConfig'
import { downloadFile } from 'apis/MAAES030Api'
import { useDispatch } from 'react-redux'
import { openSnackbar } from 'reducers/messageReducer'

const useStyles = makeStyles(theme => ({
  list: {
    // maxHeight: 320,
  },
}))

const FileDownLoad = ({ form, field }: FieldProps) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const errorClasses = useErrorStyle()
  const { errors, touched } = form
  const { name, value } = field
  const [checked, setChecked] = React.useState(false)

  const handleOnClick = (i: any) => (e: any) => {
    debugger
    e.preventDefault()
    e.stopPropagation()
    let fileId = -1
    let fileName = ''
    // eslint-disable-next-line array-callback-return
    value.find((file: FileDownLoadGroup, index: any) => {
      if (i === index) {
        fileId = file.fileManagerId
        fileName = file.fileName
      }
    })
    downloadFile(fileId)
      .then(response => {
        if (window.navigator.msSaveBlob) {
          try {
            window.navigator.msSaveBlob(response, fileName)
          } catch (e) {
            console.log(e)
          }
        } else {
          const blobUrl = window.URL.createObjectURL(response)
          const aElement = document.createElement('a')
          document.body.appendChild(aElement)
          aElement.style.display = 'none'
          aElement.href = blobUrl
          aElement.download = fileName
          aElement.click()
          document.body.removeChild(aElement)
        }
      })
      .catch((error: { message: any }) => {
        dispatch(openSnackbar(error.message))
      })
  }

  const handleCheckBoxOnClick = (i: any) => (e: any) => {
    // eslint-disable-next-line array-callback-return
    value.find((file: FileDownLoadGroup, index: any) => {
      if (i === index) {
        if (e.target.checked) {
          file.checked = '1'
        } else {
          file.checked = '0'
        }
      }
    })
    setChecked(!checked)
    form.setFieldValue(name, value)
  }

  return (
    <FormControl
      error={Boolean(errors[name] && touched[name])}
      style={{ width: '85%' }}>
      {value && value.length > 0 && (
        <List className={classes.list}>
          {value.map((file: FileDownLoadGroup, i: any) => (
            <ListItem divider={i < value.length - 1} key={file.fileName}>
              <ListItemIcon>
                <FileCopyIcon />
              </ListItemIcon>
              <ListItemText>
                <Link component='button' onClick={handleOnClick(i)}>
                  {file.fileName}
                </Link>
              </ListItemText>
              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <Checkbox
                      color='primary'
                      edge='end'
                      checked={Boolean(parseInt(file.checked))}
                      onChange={handleCheckBoxOnClick(i)}
                    />
                  }
                  label={'　削除'}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
      {errors[name] && touched[name] ? (
        <p className={errorClasses.helperText}>{errors[name]}</p>
      ) : null}
    </FormControl>
  )
}

export default FileDownLoad
