import React, { useState } from 'react'
import { EditorState, Editor, RichUtils } from 'md-draft-js'
import ReactMarkdown from 'react-markdown'
import { Paper, Divider, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
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
}))

const DemoEditor = () => {
  const classes = useStyles()
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [previewContent, setPreviewContent] = useState('')

  const handlePreview = () => {
    setPreviewContent(EditorState.getText(editorState))
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
    <Paper>
      <EditorToolbar onClick={handleClick} onLink={handleLink} />
      <Divider />
      <Editor
        className={classes.editorContainer}
        editorState={editorState}
        onChange={setEditorState}
      />
      <Divider />
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        onClick={handlePreview}>
        Preview
      </Button>
      <Divider />
      <div className={classes.editorContainer}>
        <ReactMarkdown source={previewContent} />
      </div>
    </Paper>
  )
}

export default DemoEditor
