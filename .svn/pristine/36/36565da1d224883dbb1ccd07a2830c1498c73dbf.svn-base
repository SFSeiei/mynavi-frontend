import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Collapse, Typography, Grid, Card } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { Formik, Form, FastField,Field } from 'formik'
import MAADS010QueryRequestValidation from 'validations/MAADS010QueryRequestValidation'
import { TextField,Checkbox, DatePicker, CheckboxNoLable } from 'components'
import {
  searchApplicationList,
  setAppSearchList,
  setClientId,
} from 'reducers/applicationReducer'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { Label,LabelShort } from 'components'
import history from 'utils/history'
import magiStyles from 'css/magiStyle'
import {IntegrationReactSelect} from './Select'

const useStyles = makeStyles(theme => ({
  formContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
  formGroup: {
    padding: theme.spacing(1),  
    paddingLeft: theme.spacing(7),
  },
  formGroupAppType: {
    padding: theme.spacing(1),  
    paddingLeft: theme.spacing(6),
  },
  dateContainer:{
    width:'100%',
    padding: theme.spacing(0),
  },
  datelable:{
    paddingLeft: '25px',
    width:'12%',
    display: 'inline-block',
  },
  datetext:{
    width:'17%',
    display: 'inline-block',
    paddingLeft: '26px',
  },
  dateline:{
    marginTop: '33px',
    marginLeft: '20px',
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
    marginTop: '12px',
  },
}))

const Filter = () => {
  const appSearchDate = useSelector(
    (state: RootState) => state.application.searchDate
  )
  //「企業ID」によると申込情報一覧を取得
  const dispatch = useDispatch()
  const state = history.location.state
  useEffect(() => {
    if (state) {
      dispatch(setClientId(state))
    }
  }, [dispatch,state])
  const classes = useStyles()
  const magiClasses = magiStyles()
  const [expandProject, setExpandProject] = useState(true)
  const option = useSelector((state: RootState) => state.company.adminDate) 

  // 自分が担当を初期化
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
        validationSchema={MAADS010QueryRequestValidation}
        // 相関項目チェック
        validate={values => {
          const errors = {
            startDateFrom: '',
            startDateTo: '',
            endDateFrom: '',
            endDateTo: '',
          }
          let errFlg = false
          if (
            values.startDateTo &&
            values.startDateFrom > values.startDateTo
          ) {
            errors.startDateTo =
              '利用開始日_fromは、利用開始日_toを超えてはならない'
              errFlg = true
          } 
          if (
            values.endDateTo &&
            values.endDateFrom > values.endDateTo
          ) {
            errors.endDateTo =
              '利用終了日_fromは、利用終了日_toを超えてはならない'
              errFlg = true
          }
          if (errFlg){
            return errors
          }
        }}
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
                <div>
                <FastField
                    name={'salesStaff'}
                    type={'hidden'}
                    component={ TextField }
                  />
                  </div>
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
                <Label>申込種別</Label>
                <Grid item xs={9} className={classes.formGroupAppType}>
                <React.Fragment key='applicationTypeNormal'>
                    <FastField
                      name={'applicationTypeNormal'}
                      label={"通常"}
                      placeholder={'申込種別_通常'}
                      component={CheckboxNoLable}
                    />
                    <div className={classes.Normal}>通常</div>
                </React.Fragment>
                <React.Fragment key='applicationTypeEmploymentNaviPre'>
                    <FastField
                      name={'applicationTypeEmploymentNaviPre'}
                      placeholder={'申込種別_就職ナビ(プレ)'}
                      component={CheckboxNoLable}
                    />
                    <div className={classes.Employment}>就職ナビ(プレ)</div>
                </React.Fragment>
                <React.Fragment key='applicationTypeEmploymentNaviMain'>
                    <FastField
                      name={'applicationTypeEmploymentNaviMain'}
                      placeholder={'申込種別_就職ナビ(本サイト)'}
                      component={CheckboxNoLable}
                    />
                    <div className={classes.Employment}>就職ナビ(本サイト)</div>
                </React.Fragment>
                <React.Fragment key='applicatiionTypeJobChangeNavi'>
                    <FastField
                      name={'applicatiionTypeJobChangeNavi'}
                      placeholder={'申込種別_転職ナビ'}
                      component={CheckboxNoLable}
                    />
                    <div className={classes.JobChange}>転職ナビ</div>
                </React.Fragment>
                </Grid>
                <Label>ステータス</Label>
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