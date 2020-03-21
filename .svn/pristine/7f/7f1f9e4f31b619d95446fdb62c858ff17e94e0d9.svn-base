import { Divider, FormControl, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FieldProps } from 'formik'
import { Editor, EditorState, RichUtils } from 'md-draft-js'
import React, { useState } from 'react'
import EditorToolbar from './EditorToolbar'

const useStyles = makeStyles(theme => ({
  editorContainer: {
    padding: theme.spacing(2),
    minHeight: 300,
    width: '100%',
    outline: 'none',
    resize: 'none',
    border: '0',
    '&:focus': {
      outline: 'none',
    },
    '& .public-DraftEditorPlaceholder-root': {
      ...theme.typography.body2,
    },
    '& .public-DraftEditorPlaceholder-hasFocus': {
      display: 'none',
    },
  },
  button: {
    margin: theme.spacing(3),
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

interface Props extends FieldProps {
  maxAmount: number
}

const MarkDownEditor = ({ field, form, maxAmount, ...others }: Props) => {
  const classes = useStyles()
  const { name, value } = field
  const { errors, touched } = form
  const [editorState, setEditorState] = useState(
    value ? EditorState.createWithContent(value) : EditorState.createEmpty()
  )

  const handelOnChange = (editorState: any) => {
    if (maxAmount && maxAmount >= EditorState.getText(editorState).length) {
      setEditorState(editorState)
    } else {
      setEditorState(
        EditorState.createWithContent(
          EditorState.getText(editorState).substr(0, maxAmount)
        )
      )
    }
    form.setFieldValue(name, EditorState.getText(editorState))
  }

  const handleClick = (command: string) => () => {
    setEditorState(RichUtils.applyCommand(editorState, command))
  }

  const handleLink = () => {
    const link = (global as any).prompt('Link URL:')
    if (link) {
      setEditorState(
        EditorState.createWithContent(
          EditorState.getText(editorState) + `[](${link})`
        )
      )
    }
  }

  return (
    <>
      <FormControl
        style={{ width: '100%' }}
        error={Boolean(touched[name] && errors[name])}>
        <Paper>
          <EditorToolbar onClick={handleClick} onLink={handleLink} />
          <Divider />
          <Editor
            {...others}
            className={classes.editorContainer}
            editorState={editorState}
            onChange={handelOnChange}
          />
          <Divider />
        </Paper>
        {errors[name] && touched[name] ? (
          <p className={classes.helperText}>{errors[name]}</p>
        ) : null}
        <Typography align='right' gutterBottom variant='h5'>
          {`入力 ${
            EditorState.getText(editorState).length > maxAmount
              ? maxAmount
              : EditorState.getText(editorState).length
          } / 最大 ${maxAmount}`}
        </Typography>
      </FormControl>
    </>
  )
}

export default MarkDownEditor
