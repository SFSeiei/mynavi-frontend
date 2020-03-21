import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import Link from '@material-ui/core/Link'
const useStyle = makeStyles(theme => ({
  paper: {
    width: '100%',
    height: '100%',
    minHeight: 600,
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(4),
  },
  categoryS: {
    color: 'white',
    fontWeight: 'bold',
    background: 'grey',
  },
  subject: {
    fontWeight: 'bold',
    color: '#696868',
  },
  body: {
    marginLeft: theme.spacing(1)
  },
  hr: {
    width: '100px',
    marginTop: '5px',
    backgroundColor: '#c0c0c0',
    height: '1px',
    border: 'none',
  },
  hrL: {
    marginTop: '5px',
    backgroundColor: '#c0c0c0',
    height: '1px',
    border: 'none',
  },
  categoryL: {
    borderStyle: 'solid;0.1px;red',
    borderWidth: 'thin',
    borderColor: '#c0c0c0',
    borderRadius: '4px',
  },
  laberC: {
    fontWeight: 'bold',
  },
  marginT: {
    margin: '15px 0 0 0',
  },
  marginD: {
    margin: '0 0 15px 0',
  }
}))

interface FileLink {
  attachmentName: string
  fileSize: string
}

export interface Result {
  category: string
  publicStartDate: string
  subject: string
  body: string
  fileList: FileLink[]
}

const MAAES040 = (props: Result) => {
  const classes = useStyle()
  const { category, publicStartDate, subject, body, fileList } = props

  return (
    <Paper className={classes.paper}>
      <React.Fragment>
        <Typography className={classes.categoryS} gutterBottom variant='h3'>
          運営からのお知らせ
        </Typography>
        <Grid container alignItems='flex-start' justify='space-around'>
          <Grid item xs={12} className={classes.marginT}>
            <label>分類</label>
          </Grid>
          <Grid item xs={12}>
            <label className={classes.categoryL}>{category}</label>
          </Grid>
          <Grid item xs={12} className={classes.marginT}>
            <label>公開開始日</label>
          </Grid>
          <Grid item xs={12}>
            <label>{publicStartDate}</label>
            <hr className={classes.hr} />
          </Grid>
          <Grid item xs={12} className={classes.marginT}>
            <label>タイトル</label>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.subject} gutterBottom variant='h2'>
              {subject}
            </Typography>
            <hr className={classes.hrL} />
          </Grid>
          <Grid item xs={12} className={classes.marginT}>
            <label>本文</label>
          </Grid>
          <Grid item xs={12}>
            <div dangerouslySetInnerHTML={{ __html: body }} className={classes.body}></div>
          </Grid>
          <Grid item xs={12} className={classes.marginT}>
            <label>添付ファイル名</label>
          </Grid>
          <Grid item xs={12} className={classes.marginT}>
            {fileList.map((file: FileLink) => (
              <React.Fragment key={file.attachmentName}>
                {/* <Link color={'error'} href={'https://' + file.attachmentName}> */}
                <div>
                  <Link color={'secondary'} href={`javascript:void(0)`}>
                    {file.attachmentName}
                  </Link>
                  <br />
                  <label>（添付ファイルサイズ： {file.fileSize}KB）</label>
                </div>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </React.Fragment>
    </Paper>
  )
}
export default MAAES040
