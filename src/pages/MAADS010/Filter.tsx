import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Collapse, Typography, Grid, Card } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { Formik, Form, FastField,Field } from 'formik'
import MAADS010QueryRequestValidation from 'validations/MAADS010QueryRequestValidation'
import { TextField,Checkbox, DatePicker } from 'components'
import {CheckboxA} from './CheckboxA'
import {
  searchApplicationList,
  setAppSearchList,
  setClientId,
} from 'reducers/applicationReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { Label,LabelShort } from 'components'
import history from 'utils/history'
import magiStyles from 'css/magiStyle'
import {IntegrationReactSelect} from './Select'

const useStyles = makeStyles(theme => ({
  // root: {
  //   width: '100%',
  //   height: '100%',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   backgroundColor: '#deecf2',
  // },
  // select: {
  //   marginBottom: theme.spacing(4),
  // },
  // selectInput: {
  //   marginTop: theme.spacing(2),
  // },
  // buttonIcon: {
  //   marginRight: theme.spacing(1),
  // },
  // content: {
  //   flexGrow: 1,
  // },
  // contentSectionHeader: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   cursor: 'pointer',
  //   backgroundColor: theme.palette.primary.main,
  //   padding: theme.spacing(1),
  //   color: 'white',
  //   '& h5': {
  //     color: 'white',
  //   },
  // },
  formContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
  // field: {
  //   marginTop: 0,
  //   marginBottom: 0,
  //   backgroundColor: 'white',
  // },
  // fieldName: {
  //   marginTop: theme.spacing(1),
  // },
  // action: {
  //   margin: theme.spacing(1, 0, 3),
  // },
  formGroup: {
    padding: theme.spacing(1),  
    paddingLeft: theme.spacing(8),
  },
  dateContainer:{
    width:'100%',
    padding: theme.spacing(0),
    // marginTop:theme.spacing(-2),
    // marginRight: theme.spacing(-1),
    // marginLeft: theme.spacing(-1),
    // marginBottom:theme.spacing(-4),
  },
  datelable:{
    paddingLeft: '25px',
    width:'12%',
    display: 'inline-block',
  },
  // datelable2:{
  //   paddingLeft: '25px',
  //   width:'12%',
  //   display: 'inline-block',
  // },
  datetext:{
    width:'17%',
    display: 'inline-block',
    paddingLeft: '26px',
    // boxSizing: 'content-box',
    // mozBoxSizing: 'inherit',
    // webkitBoxSizing: 'inherit',
  },
  dateline:{
    marginTop: '33px',
    marginLeft: '20px',
    // marginRight: '-10px',
    width:'1%',
    display: 'inline-block',
  },
  Normal: {
    alignItems: 'center',
    backgroundColor: '#97d077',
    display:'inline-flex',
    fiexBasis: '150px',
    justifyContent: 'center',
    margin: '10px',
    fontColor: 'inherit',
    fontFamily: 'inherit',
    fontSize:'15px',
    fontStyle:'inherit',
    fontVariant:'inherit',
    fontWeight:'inherit',
    lineHeight:'inherit',
    marginLeft: '0',
    width: '100px',
  },
  Employment: {
    alignItems: 'center',
    backgroundColor: '#ff8000',
    display:'inline-flex',
    fiexBasis: '150px',
    justifyContent: 'center',
    margin: '10px',
    fontColor: 'inherit',
    fontFamily: 'inherit',
    fontSize:'15px',
    fontStyle:'inherit',
    fontVariant:'inherit',
    fontWeight:'inherit',
    lineHeight:'inherit',
    marginLeft: '0',
    width: '150px',
  },
  JobChange: {
    alignItems: 'center', 
    backgroundColor: '#3399ff',
    display:'inline-flex',
    fiexBasis: '150px',
    justifyContent: 'center',
    margin: '10px',
    fontColor: 'inherit',
    fontFamily: 'inherit',
    fontSize:'15px',
    fontStyle:'inherit',
    fontVariant:'inherit',
    fontWeight:'inherit',
    lineHeight:'inherit',
    marginLeft: '0',
    width: '100px',
  },
}))

const Filter = () => {
  //「企業ID」によると申込情報一覧を取得
  const dispatch = useDispatch()
  const state = history.location.state
  useEffect(() => {
    if (state !== null && state !== '') {
      setChargeValue('0')
      dispatch(setClientId(state))
    }
  }, [dispatch,state])
  const classes = useStyles()
  const magiClasses = magiStyles()
  const [expandProject, setExpandProject] = useState(true)
  const option = useSelector((state: RootState) => state.company.adminDate) 
  const appSearchDate = useSelector(
    (state: RootState) => state.application.searchDate
  )
  //営業担当者情報を初期化
  // const managerIdList = useSelector(
  //   (state: RootState) => state.application.initDateList
  // )
  // 自分が担当を初期化
  const [chargeValue,setChargeValue] = useState('1')
  const handleSubmit = (values: any) => {
    dispatch(setAppSearchList(values))
    dispatch(searchApplicationList(values))
  }
  const handleToggleProject = () => {
    setExpandProject(!expandProject)
  }
  return (
    <Card>
      <Formik
        //初期化
        initialValues={appSearchDate}
        enableReinitialize={true}
        // バリデーションチェックを実施する
        validationSchema={MAADS010QueryRequestValidation}
        // 相関項目チェック
        validate={values => {
          const errors = {
            startDateFrom: '',
            startDateTo: '',
            endDateFrom: '',
            endDateTo: '',
          }

          if (
            values.startDateTo !== '' &&
            values.startDateFrom > values.startDateTo
          ) {
            errors.startDateTo =
              '利用開始日_fromは、利用開始日_toを超えてはならない'
            return errors
          } else if (
            values.endDateTo !== '' &&
            values.endDateFrom > values.endDateTo
          ) {
            errors.endDateTo =
              '利用終了日_fromは、利用終了日_toを超えてはならない'
            return errors
          }
        }}
        // Submit Form
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
                <React.Fragment key='charge'>
                  <Label>担当</Label>
                  <Grid item xs={10} className={classes.formGroup}>
                    <FastField
                      name={'charge'}
                      chargeValue={chargeValue}
                      label={'自分が担当'}
                      component={Checkbox}
                    />
                  </Grid>
                </React.Fragment>
                <React.Fragment key='managerId'>
                  <Label>営業担当</Label>
                  <Grid item xs={10} className={classes.formGroup}>
                  <Field
                    name={'managerId'}
                    label={'営業担当者'}
                    options = {option}
                    component={ IntegrationReactSelect }
                  />
                  </Grid>
                </React.Fragment>
                <React.Fragment key='salesStaff'>
                <FastField
                    name={'salesStaff'}
                    type={'hidden'}
                    component={ TextField }
                  />
                </React.Fragment>
                <React.Fragment key='agency'>
                  <Label>代理店</Label>
                  <Grid item xs={10} className={classes.formGroup}>
                    <FastField
                      name={'agency'}
                      label={'代理店'}
                      component={TextField}
                    />
                  </Grid>
                </React.Fragment>
                <React.Fragment key='clientId'>
                  <Label>企業ID</Label>
                  <Grid item xs={3} className={classes.formGroup}>
                    <FastField
                      name={'clientId'}
                      label={'企業ID'}
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={1}>
                     ※完全一致
                    </Grid>
                </React.Fragment>
                <React.Fragment key='clientName'>
                  <Label>企業名</Label>
                  <Grid item xs={4} className={classes.formGroup}>
                    <FastField
                      name={'clientName'}
                      label={'企業名'}
                      component={TextField}
                    />
                  </Grid>
                </React.Fragment>
                </Grid>
                <div className={classes.dateContainer}>
              <React.Fragment key='startDateFrom'>
                <div className={classes.datelable}>
                  <LabelShort>利用開始日</LabelShort>
                </div>
                <div className={classes.datetext}>
                    <FastField
                      name={'startDateFrom'}
                      label={'利用開始日_from'}
                      component={DatePicker}
                    />
                 </div>
                </React.Fragment>
                <div className={classes.dateline}>～</div>
                <React.Fragment key='startDateTo'>
                <div className={classes.datetext}>
                    <FastField
                      label={'利用開始日_to'}
                      name={'startDateTo'}
                      component={DatePicker}
                    />
                </div>
                </React.Fragment>
                <React.Fragment key='endDateFrom'>
                <div className={classes.datelable}>
                  <LabelShort>利用終了日</LabelShort>
                  </div>
                  <div className={classes.datetext}>
                    <FastField
                      name={'endDateFrom'}
                      label={'利用終了日_from'}
                      component={DatePicker}
                    />
                </div>
                </React.Fragment>
                <div className={classes.dateline}>～</div>
                <React.Fragment key='endDateTo'>
                <div className={classes.datetext}>
                    <FastField
                      name={'endDateTo'}
                      label={'利用終了日_to'}
                      component={DatePicker}
                    />
                </div>
                </React.Fragment>
              </div>
                <Grid
                container
                alignItems='center'
                justify='space-around'
                className={classes.formContainer}>
                {/* <React.Fragment key='applicationTypes'> */}
                  <Label>申込種別</Label>
                  {/* <Grid item xs={9} className={classes.formGroup}>
                    <FastField
                      name={'applicationTypes'}
                      label={'申込種別'}
                      codelist={applicationTypeList}
                      component={GroupOptions}
                    />
                  </Grid>
                </React.Fragment> */}
                <Grid item xs={9} className={classes.formGroup}>
                <React.Fragment key='applicationTypeNormal'>
                    <FastField
                      name={'applicationTypeNormal'}
                      label={"通常"}
                      placeholder={'申込種別_通常'}
                      component={CheckboxA}
                    />
                    <div className={classes.Normal}>通常</div>
                </React.Fragment>
                <React.Fragment key='applicationTypeEmploymentNaviPre'>
                    <FastField
                      name={'applicationTypeEmploymentNaviPre'}
                      // label={"就職ナビ(プレ)"}
                      placeholder={'申込種別_就職ナビ(プレ)'}
                      component={CheckboxA}
                    />
                    <div className={classes.Employment}>就職ナビ(プレ)</div>
                </React.Fragment>
                <React.Fragment key='applicationTypeEmploymentNaviMain'>
                    <FastField
                      name={'applicationTypeEmploymentNaviMain'}
                      // label={"就職ナビ(本サイト)"}
                      placeholder={'申込種別_就職ナビ(本サイト)'}
                      component={CheckboxA}
                    />
                    <div className={classes.Employment}>就職ナビ(本サイト)</div>
                </React.Fragment>
                <React.Fragment key='applicatiionTypeJobChangeNavi'>
                    <FastField
                      name={'applicatiionTypeJobChangeNavi'}
                      // label={"転職ナビ"}
                      placeholder={'申込種別_転職ナビ'}
                      component={CheckboxA}
                    />
                    <div className={classes.JobChange}>転職ナビ</div>
                </React.Fragment>
                </Grid>
                {/* <React.Fragment key='status'> */}
                  <Label>ステータス</Label>
                  {/* <Grid item xs={9} className={classes.formGroup}>
                    <FastField
                      name={'status'}
                      label={'ステータス'}
                      codelist={statusList}
                      component={GroupOptions}
                    />
                  </Grid>
                </React.Fragment> */}
                <Grid item xs={9} className={classes.formGroup}>
                <React.Fragment key='statusValid'>
                    <FastField
                      name={'statusValid'}
                      label={"有効"}
                      placeholder={'ステータス_有効'}
                      component={Checkbox}
                    />
                </React.Fragment>
                <React.Fragment key='statusInvalid'>
                    <FastField
                      name={'statusInvalid'}
                      label={"無効"}
                      placeholder={'ステータス_無効'}
                      component={Checkbox}
                    />
                </React.Fragment>
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