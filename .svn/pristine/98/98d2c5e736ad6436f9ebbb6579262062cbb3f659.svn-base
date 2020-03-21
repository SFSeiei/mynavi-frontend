import React, { useRef } from 'react'
import clsx from 'clsx'
import { DropTargetMonitor, useDrop } from 'react-dnd'
import { NativeTypes } from 'react-dnd-html5-backend'
import { FieldProps } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
  colors,
  FormControl,
} from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

import { bytesToSize } from 'utils/misc'
import { useErrorStyle } from 'components'

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
  dropZone: {
    border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(6),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.grey[50],
      opacity: 0.5,
      cursor: 'pointer',
    },
  },
  dragActive: {
    backgroundColor: colors.grey[50],
    opacity: 0.5,
  },
  image: {
    width: 130,
  },
  info: {
    marginTop: theme.spacing(1),
  },
  list: {
    // maxHeight: 320,
  },
  actions: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

type Operation = 'reject' | 'success' | 'fail' | 'close'

const FilesDropzone = ({ form, field }: FieldProps) => {
  const classes = useStyles()
  const errorClasses = useErrorStyle()

  const { errors, touched } = form
  const { name, value } = field

  const handleDrop = (acceptedFiles: FileList) => {
    form.setFieldValue(
      name,
      [...acceptedFiles].reduce((result, current) => {
        if (
          value.find(
            (i: any) =>
              i.lastModified === current.lastModified && i.name === current.name
          )
        ) {
          return result
        } else {
          return [...result, current] as File[]
        }
      }, value)
    )
  }

  const handleFileDrop = (item: any, monitor: DropTargetMonitor) => {
    if (monitor) {
      handleDrop(monitor.getItem().files)
    }
  }

  const handleRemoveAll = () => {
    form.setFieldValue(name, [])
  }

  const handleRemove = (file: any) => () => {
    form.setFieldValue(name, value.filter((i: any) => i !== file))
  }

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop: handleFileDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const inputRef = useRef(null)

  const handleClick = () => {
    if (inputRef && inputRef.current) {
      ;(inputRef.current as any).click()
    }
  }

  const isActive = canDrop && isOver

  const handleChange = () => {
    if (inputRef.current) {
      handleDrop((inputRef.current as any).files)
    }
  }

  return (
    <FormControl error={Boolean(errors[name] && touched[name])}>
      <div
        className={clsx({
          [classes.dropZone]: true,
          [classes.dragActive]: isActive,
        })}
        ref={drop}
        onClick={handleClick}>
        <input
          ref={inputRef}
          multiple
          type='file'
          className={classes.input}
          onChange={handleChange}
        />
        <div>
          <img
            alt='Select file'
            className={classes.image}
            src='/images/add_file.svg'
          />
        </div>
        <div>
          <Typography gutterBottom variant='h3'>
            アップロード
          </Typography>
          <Typography
            className={classes.info}
            color='textSecondary'
            variant='body1'>
            アップロードするファイルを選択してください
          </Typography>
        </div>
      </div>
      {value.length > 0 && (
        <>
          <List className={classes.list}>
            {value.map((file: any, i: any) => (
              <ListItem divider={i < value.length - 1} key={file.name}>
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <ListItemText
                  primary={file.name}
                  primaryTypographyProps={{ variant: 'h5' }}
                  secondary={bytesToSize(file.size)}
                />
                <Tooltip title='削除'>
                  <IconButton edge='end' onClick={handleRemove(file)}>
                    <HighlightOffIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
          <div className={classes.actions}>
            <Button onClick={handleRemoveAll} size='small'>
              全削除
            </Button>
          </div>
        </>
      )}
      {errors[name] && touched[name] ? (
        <p className={errorClasses.helperText}>{errors[name]}</p>
      ) : null}
    </FormControl>
  )
}

export default FilesDropzone
