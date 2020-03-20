import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button,Collapse,Typography, Grid, Card} from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, FastField, Field } from 'formik'
import { initialValues, hourList } from './formConfig'
import { TextField, Label,Checkbox, DatePicker,LabelShort,LabelUp } from 'components'
import { searchOperationLogList,setOperationLogSearchDate } from 'reducers/operationLogReducer'
import {Selects } from 'components/Selects'
import validationSchema from 'validations/MAAFS010QueryRequestValidation'
import { RootState } from 'reducers'
import magiStyles from 'css/magiStyle'
import {IntegrationReactSelect} from '../MAAFS010/Select'

const useStyles = makeStyles(theme => ({
  formContainer: {
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  formGroup: {
    paddingLeft: theme.spacing(8),
    padding: theme.spacing(1),
  },
  formGroupCheck: {
    paddingLeft: theme.spacing(8),
    padding: theme.spacing(4),
  },
  formGroupDate: {
    alignSelf: 'center',
    display: 'flex',
    paddingLeft: theme.spacing(4.5),
    padding: theme.spacing(1),
  },
  dateContainer:{
    width:'100%',
    padding: theme.spacing(1),
    marginTop:theme.spacing(-2),
    marginRight: theme.spacing(-1),
    marginLeft: theme.spacing(-1),
    marginBottom:theme.spacing(-4),
  },
  datelableDiv:{
    display:'none'
  },
  datelable:{
    paddingLeft: '25px',
    width:'19%',
    display: 'inline-block',
  },
  datetime:{
    paddingLeft: '8px',
    width:'5%',
    display: 'inline-block',
    position :'relative' ,top:'4px',
  },
  datetimeSpan:{
    paddingLeft: '20px',
    width:'5%',
    display: 'inline-block',
    position :'relative' ,top:'-1px',
  },
  datetextFrom:{
    width:'25%',
    display: 'inline-block',
    paddingLeft: '63px',
    position :'relative' ,top:'1px',
  },
  datetextTo:{
    width:'19%',
    display: 'inline-block',
    paddingLeft: '26px',
    position :'relative' ,top:'3px',
  },
  dateline:{
    marginTop: '33px',
    marginLeft: '1px',
    marginRight: '1px',
    width:'1%',
    display: 'inline-block',
  },
  overflowCheck:{
    display: 'inline-block',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    wordBreak: 'break-all',
    whiteSpace:'normal',
  },
}))

const Filter = () => {
  const classes = useStyles()
  const magiClasses = magiStyles() 
  const [expandProject, setExpandProject] = useState(true)
  const dispatch = useDispatch()
  
  const handleSubmit = (values: any) => {
    dispatch(searchOperationLogList(values))
    dispatch(setOperationLogSearchDate(values))
  }

  const handleToggleProject = () => {
    setExpandProject(!expandProject)
  }

  // 検索条件を取得する
  const operationLogPrim = useSelector((state: RootState) => state.operationLog.operationLogPrim)
　// 検索条件を取得する
  const option = useSelector((state: RootState) => state.operationLog.suggestList)
  return (
    <Card>
      <Formik
        initialValues={operationLogPrim}
        validationSchema={validationSchema}
        validate={values => {
          const errors = {
            usagePeriodFromYMD: '',
            usagePeriodToYMD: '',
          }
          if(values.usagePeriodFromYMD !== '' && values.usagePeriodToYMD !== '' ) {
            if (values.usagePeriodFromYMD > values.usagePeriodToYMD) {
              errors.usagePeriodToYMD = "対象期間From（年月日）は、対象期間To（年月日）を超えてはならない"
              return errors;
            }
          }
        }
      }
        enableReinitialize
        onSubmit={handleSubmit}>
        <Form className={magiClasses.rootList}>
          <div className={magiClasses.content}>
            <div
              className={magiClasses.contentSectionHeader}
              onClick={handleToggleProject}>
              <Typography variant='h5'>検索条件の設定</Typography>
              {expandProject ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Collapse in={expandProject}>
              <Grid
                container
                alignItems='center'
                justify='space-around'
                className={classes.formContainer}>
                <React.Fragment key='clientId'>
                  <Label>企業ID</Label>
                  <Grid item xs={9} className={classes.formGroup}>
                    <FastField
                      name={'clientId'}
                      label={'企業ID'}
                      component={TextField}
                      disabled
                    />
                  </Grid>
                </React.Fragment>
                <React.Fragment key='clientName'>
                  <Label>企業名</Label>
                  <Grid item xs={9} className={classes.formGroup}>
                    <FastField
                      name={'clientName'}
                      label={'企業名'}
                      component={TextField}
                      disabled
                    />
                  </Grid>
                </React.Fragment>
                <React.Fragment key='fullName'>
                  <Label>操作者</Label>
                  <Grid item xs={9} sm={3} className={classes.formGroup}>
                    <Field
                      name={'fullName'}
                      label={'操作者'}
                      options = {option}
                      component={ IntegrationReactSelect }
                    />
                  </Grid>
                  <div className={classes.datelableDiv}>
                    <FastField
                      name={'loginId'}
                      type={'hidden'}
                      component={ TextField }
                    />
                  </div>
                </React.Fragment>
                <Grid item xs={9} sm={6} >
                </Grid>
                <React.Fragment key='ipAddress'>
                  <Label>IPアドレス</Label>
                  <Grid item xs={9} sm={8} className={classes.formGroup}>
                    <FastField
                      name={'ipAddress'}
                      label={'IPアドレス'}
                      component={TextField}
                    />
                  </Grid>
                </React.Fragment>
                <Grid item xs={9} sm={1} >
                  <div>
                <span >※完全一致</span></div>
                </Grid>
              </Grid>
              <div className={classes.dateContainer}>
                <React.Fragment key='usagePeriodFromYMD'>
                  <div className={classes.datelable}>                  
                  <LabelShort>対象期間</LabelShort>
                  </div>
                  <div className={classes.datetextFrom}>
                    <FastField
                      name={'usagePeriodFromYMD'}
                      label={'対象期間From（年月日）'}
                      component={DatePicker}
                    />
                   </div>
                </React.Fragment>
                <React.Fragment key='usagePeriodFromH'>
                  <div className={classes.datetime}>
                    <FastField
                      name={'usagePeriodFromH'}
                      label={'対象期間From（時）'}
                      component={Selects}
                      codelist={hourList} 
                    />
                  </div>
                </React.Fragment>
                  <div className={classes.datetimeSpan}>
                     <span >時</span>
                  </div>
                  <div className={classes.dateline}>～</div>
                <React.Fragment key='usagePeriodToYMD'>
                <div className={classes.datetextTo}>
                    <FastField
                      name={'usagePeriodToYMD'}
                      label={'対象期間To（年月日）'}
                      component={DatePicker}
                    />
                  </div>
                </React.Fragment>
                <React.Fragment key='usagePeriodToH'>
                <div className={classes.datetime}>
                    <FastField
                      name={'usagePeriodToH'}
                      label={'対象期間To（時）'}
                      component={Selects}
                      codelist={hourList} 
                    />
                  </div>
                </React.Fragment>
                <div className={classes.datetimeSpan}>
                   <span>時</span>
                 </div>
              </div>
            <Grid
                container
                alignItems='center'
                justify='space-around'
                className={classes.formContainer}>
                <LabelUp>操作種別</LabelUp>
                <Grid item xs={9} className={classes.formGroupCheck}>
                  <Grid container>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeMagiCompanyLogin'>
                      <FastField
                        name={'manipulationTypeMagiCompanyLogin'}
                        label={"Magi 企業ログイン"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeMagiCompanyLogout'>
                      <FastField
                        name={'manipulationTypeMagiCompanyLogout'}
                        label={"Magi 企業ログアウト"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeTermsAgree'>
                      <FastField
                        name={'manipulationTypeTermsAgree'}
                        label={"利用規約への同意"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeCoordinationComanyAccount'>
                      <FastField
                        name={'manipulationTypeCoordinationComanyAccount'}
                        label={"追加アカウント連携"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    </Grid>
                    <Grid container>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeEntryUpload'>
                      <FastField
                        name={'manipulationTypeEntryUpload'}
                        label={"エントリー情報アップロード"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3}>
                    <React.Fragment key='manipulationTypeEntrySearch'>
                      <FastField
                        name={'manipulationTypeEntrySearch'}
                        label={"エントリー検索"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeEntryImport'>
                      <FastField
                        name={'manipulationTypeEntryImport'}
                        label={"エントリ－情報取込"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeEntryView'>
                      <FastField
                        name={'manipulationTypeEntryView'}
                        label={"エントリー情報閲覧"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    </Grid>
                    <Grid container>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeEntryUpdate'>
                      <FastField
                        name={'manipulationTypeEntryUpdate'}
                        label={"エントリー情報更新"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeEntryDelete'>
                      <FastField
                        name={'manipulationTypeEntryDelete'}
                        label={"エントリー情報添付ファイル削除"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeEntryBulkCsvOutput'>
                      <FastField
                        name={'manipulationTypeEntryBulkCsvOutput'}
                        label={"エントリー情報一括CSV出力"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeEntryPdfOutput'>
                      <FastField
                        name={'manipulationTypeEntryPdfOutput'}
                        label={"エントリー情報PDF出力"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                  </Grid>
                  <Grid container>
                  <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeEntryBulkPdfOutput'>
                      <FastField
                        name={'manipulationTypeEntryBulkPdfOutput'}
                        label={"エントリー情報一括PDF出力"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeMessageSend'>
                      <FastField
                        name={'manipulationTypeMessageSend'}
                        label={"メッセージ送信"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeBulkMessageSend'>
                      <FastField
                        name={'manipulationTypeBulkMessageSend'}
                        label={"メッセージ一括送信"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeFileDownload'>
                      <FastField
                        name={'manipulationTypeFileDownload'}
                        label={"添付ファイルダウンロード"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                  </Grid>
                  <Grid container>
                  <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeMessageDelete'>
                      <FastField
                        name={'manipulationTypeMessageDelete'}
                        label={"メッセージ削除"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeMessageSendApi'>
                      <FastField
                        name={'manipulationTypeMessageSendApi'}
                        label={"メッセージ送信（API）"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeMessageReceiveApi'>
                      <FastField
                        name={'manipulationTypeMessageReceiveApi'}
                        label={"メッセージ受信（API）"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeMessageCancel'>
                      <FastField
                        name={'manipulationTypeMessageCancel'}
                        label={"予約メッセージキャンセル"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                  </Grid>
                  <Grid container>
                  <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeProgressUpdate'>
                      <FastField
                        name={'manipulationTypeProgressUpdate'}
                        label={"進捗更新"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeBulkProgressUpdate'>
                      <FastField
                        name={'manipulationTypeBulkProgressUpdate'}
                        label={"一括進捗更新"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeInformalOfferOutput'>
                      <FastField
                        name={'manipulationTypeInformalOfferOutput'}
                        label={"内定通知書出力"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                    <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeLoginSso'>
                      <FastField
                        name={'manipulationTypeLoginSso'}
                        label={"連携サイトアカウントでのログイン（シングルサインオン）"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                  </Grid>
                  <Grid container>
                  <Grid item xs={3} className={classes.overflowCheck}>
                    <React.Fragment key='manipulationTypeSubmissionRequestMcb'>
                      <FastField
                        name={'manipulationTypeSubmissionRequestMcb'}
                        label={"マイキャリアボックス提出依頼"}
                        component={Checkbox}
                      />
                    </React.Fragment>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify='center' className={magiClasses.action}>
                <Grid item>
                  <Button type='submit' variant='contained'>
                    <SearchIcon className={magiClasses.selectButton} />
                    検索する
                  </Button>
                </Grid>
              </Grid>
            </Collapse>
          </div>
        </Form>
      </Formik>
    </Card>
  )
}

export default Filter