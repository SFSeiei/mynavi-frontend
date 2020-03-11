import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'reducers'
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  makeStyles,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { routeList } from 'routes/routes'
import { Formik, Form, FastField, Field } from 'formik'
import history from 'utils/history'
import { Page, Label, SubTitle, FilesDropzone, DatePicker, Toggle } from 'components'
import {
  categoryRadioList,
  publicRadioList,
  textMap,
  initialValues,
} from './formConfig'
import InputWithCounter from './InputWithCounter'
import MultiTextWithCounter from './MultiTextWithCounter'
import Preview from './Preview'
import MarkDownEditor from './MarkDownEditor'
import TextareaAutosize from './TextareaAutosize'
import MAAES020CreateRequestValidation from 'validations/MAAES020CreateRequestValidation'
import {
  setNotificationCreateValues,
  createNotification,
  initialCreate,
} from 'reducers/notificationReducer'
import magiStyles from 'css/magiStyle'

const useStyles = makeStyles(theme => ({
  dateline: {
    paddingLeft: theme.spacing(6),
  },
  previewButton: {
    padding: theme.spacing(1),
  },
  body: {
    paddingTop: theme.spacing(2),
  },
}))

const MAAES020 = () => {
  const classes = useStyles()
  const magiClasses = magiStyles()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [type, setType] = useState<keyof typeof textMap>('create')
  const dispatch = useDispatch()
  const formValue = useSelector(
    (state: RootState) => state.notification.notiRegisterForm
  )

  // 前画面から引き継ぐお知らせID
  const state = history.location.state
  let newsId = -1
  if (state) {
    newsId = history.location.state.notiInfo.newsId
  }
  useEffect(() => {
    if (newsId !== -1) {
      dispatch(initialCreate(newsId))
    }
    return () => {
      dispatch(setNotificationCreateValues(initialValues))
    }
  }, [newsId, dispatch])

  // 「登録する」ボタンクリック
  const handleSubmit = (values: any) => {
    setDialogOpen(true)
    setType('create')
    dispatch(setNotificationCreateValues(values))
  }

  // 「キャンセルする」かつ「一覧に戻る」ボタンクリック
  const handleCancel = () => {
    setType('cancel')
    setDialogOpen(true)
  }

  // 「いいえ」ボタンクリック
  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  // 「はい」ボタンクリック
  const handleDialogConfirm = () => {
    if (type === 'create') {
      submitToApi()
    } else if (type === 'cancel') {
      backToNotification()
    }
    setDialogOpen(false)
  }

  const backToNotification = () => {
    setDialogOpen(false)
    history.push(routeList.notification)
  }

  const submitToApi = () => {
    dispatch(createNotification(formValue))
    backToNotification()
    // setFormValue(values);
  }

  return (
    <Page className={magiClasses.rootModify} title='お知らせ情報登録'>
      <Button
        variant='contained'
        color='primary'
        className={magiClasses.back}
        onClick={handleCancel}>
        <ArrowBackIcon />
        一覧に戻る
      </Button>
      <Card>
        <Formik
          initialValues={formValue}
          validationSchema={MAAES020CreateRequestValidation}
          enableReinitialize
          onSubmit={handleSubmit}>
          <Form>
            <CardContent>
              <SubTitle>お知らせ情報登録</SubTitle>
              <Grid container alignItems='center' justify='space-around'>
                <React.Fragment key='category'>
                  <Grid item xs={12} className={magiClasses.formGroup}>
                    <Label>分類</Label>
                    <FastField
                      name='category'
                      label='分類'
                      component={Toggle}
                      radioList={categoryRadioList}
                      className={magiClasses.formContorl}
                    />
                  </Grid>
                </React.Fragment>
                <React.Fragment key='subject'>
                  <Grid item xs={12} className={magiClasses.formGroup}>
                    <Label>タイトル</Label>
                    <Grid item xs={6}>
                      <FastField
                        name='subject'
                        label=''
                        component={InputWithCounter}
                        className={magiClasses.textField}
                        maxAmount={10}
                      />
                    </Grid>
                  </Grid>
                </React.Fragment>
                <React.Fragment key='body'>
                  <Grid item xs={12} className={magiClasses.formGroup}>
                    <Label>本文</Label>
                    <Grid item xs={11} className={classes.body}>
                      <FastField
                        name='body'
                        label='本文'
                        // className={magiClasses.bodyTextArea}
                        component={MarkDownEditor}
                        maxAmount={20000}
                      />
                    </Grid>
                  </Grid>
                </React.Fragment>
                <React.Fragment key='newsTargetCompany'>
                  <Grid item xs={12} className={magiClasses.formGroup}>
                    <Label>公開対象</Label>
                    <Grid container alignItems='center'>
                      <Grid item xs={6} className={magiClasses.formGroup}>
                        <FastField
                          name='newsTargetCompany'
                          label='公開対象'
                          component={TextareaAutosize}
                          className={magiClasses.newsTargetCompany}
                        />
                      </Grid>
                      <Grid item xs={5} className={magiClasses.formGroup}>
                        <Typography>※公開対象</Typography>
                        <Typography>
                          　指定しない場合はすべての企業に表示されます。
                        </Typography>
                        <Typography>
                          　指定する場合は、企業IDを入力してください。
                        </Typography>
                        <Typography>
                          　複数の企業IDに適用する場合は、企業IDごとに改行してください。
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </React.Fragment>
                <React.Fragment key='publicFlagPublic'>
                  <Grid item xs={12} className={magiClasses.formGroup}>
                    <Label>公開状態</Label>
                    <FastField
                      name='publicFlagPublic'
                      label='公開状態'
                      component={Toggle}
                      radioList={publicRadioList}
                      className={magiClasses.formContorl}
                    />
                  </Grid>
                </React.Fragment>
                <Grid item xs={12} className={magiClasses.formGroup}>
                  <Grid container alignItems='center'>
                    <Label>公開開始日</Label>
                    <Grid item xs={1}></Grid>
                    <Label>公開終了日</Label>
                  </Grid>
                  <Grid container alignItems='center'>
                    <React.Fragment key='publicStartDate'>
                      <Grid item xs={2} className={magiClasses.formGroup}>
                        <FastField
                          name={'publicStartDate'}
                          label={'公開開始日'}
                          component={DatePicker}
                        />
                      </Grid>
                    </React.Fragment>
                    <Grid item xs={1} className={classes.dateline}>
                      ～
                    </Grid>
                    <React.Fragment key='publicEndDate'>
                      <Grid item xs={2} className={magiClasses.formGroup}>
                        <FastField
                          name={'publicEndDate'}
                          label={'公開終了日'}
                          component={DatePicker}
                        />
                      </Grid>
                    </React.Fragment>
                  </Grid>
                </Grid>
                <Grid item xs={12} className={magiClasses.formGroup}>
                  <Label>ファイル選択</Label>
                  <Grid container alignItems='center'>
                    <Grid item xs={8}>
                      <FastField
                        component={FilesDropzone}
                        name='fileSelected'
                        label='ファイル選択'
                      />
                    </Grid>
                    <Grid item xs={4} className={magiClasses.formGroup}>
                      <Typography>※添付ファイル数上限　　：10件</Typography>
                      <Typography>　添付ファイルサイズ上限：10MB/件</Typography>
                      <Typography>　対応拡張子は下記の通りです。</Typography>
                      <Typography>　doc,gif,jpg,jpeg,pdf,png,pps</Typography>
                      <Typography>　,ppt,pptx,txt,xls,docx,xlsx</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom variant='h3'>
                    プレビュー表示
                  </Typography>
                  <Grid container alignItems='center' spacing={1}>
                    <Grid item xs={10} className={magiClasses.formGroup}>
                      <Typography>
                        ※プレビュー内容を最新化する場合には、再度プレビューボタンを押下してください。
                      </Typography>
                      <Grid item xs={11}>
                        <Field component={Preview} name='preview' />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                type='submit'
                variant='contained'
                className={magiClasses.confirmButton}>
                登録する
              </Button>
              <Button
                variant='contained'
                className={magiClasses.cancel}
                onClick={handleCancel}>
                キャンセルする
              </Button>
            </CardActions>
          </Form>
        </Formik>
      </Card>
      <Dialog onClose={handleDialogClose} open={dialogOpen}>
        <DialogTitle>{textMap[type].message}</DialogTitle>
        <DialogActions>
          <Button onClick={handleDialogClose}>いいえ</Button>
          <Button onClick={handleDialogConfirm} color='primary'>
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  )
}

export default MAAES020
