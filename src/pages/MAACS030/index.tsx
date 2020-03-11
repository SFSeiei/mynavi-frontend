import React, { useState ,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Formik, Form, FastField,Field } from 'formik'
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
  colors,
  Collapse,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import { Page, Label } from 'components'
import { routeList } from 'routes/routes'
import { textMap } from './formConfig'
import history from 'utils/history'
import { Toggle, TextField } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanyDetail, updateCompany, contractCheck,setContractCount} from 'reducers/companyReducer'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MAACS030UpdateRequestValidation from 'validations/MAACS030UpdateRequestValidation'
import { RootState } from 'reducers';
import magiStyles from 'css/magiStyle'
import { CompanySelect } from 'components'

const useStyles = makeStyles(theme => ({
  // root: {
  //   padding: theme.spacing(3),
  // },
  // back: {
  //   margin: theme.spacing(0, 0, 3),
  // },
  // cancel: {
  //   color: (theme.palette as any).white,
  //   backgroundColor: 'darkgray',
  // },
  // formContainer: {
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   paddingTop: theme.spacing(2),
  //   paddingLeft: theme.spacing(3),
    
  // },
  // formInnerContainer: {
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   paddingTop: theme.spacing(2),
  // },
  // formGroup: {
  //   padding: theme.spacing(1),
  //   paddingTop: theme.spacing(2),
  //   paddingBottom: theme.spacing(2),
  //   paddingLeft: theme.spacing(6),
  //   paddingRight: theme.spacing(6),
  // },
  // buttonGroup: {
  //   justifyContent: 'space-around',
  // },
  // confirmButton: {
  //   color: (theme.palette as any).white,
  //   backgroundColor: '#43a047',
  //   '&:hover': {
  //     backgroundColor: colors.green[900],
  //   },
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
}))

const CompanyDetail = () => {

  const magiClasses = magiStyles()
  const [open, setOpen] = useState(false)
  const [company,setCompany] = useState<any>(null)
  const [type, setType] = useState<keyof typeof textMap>('cancel')
  const textIpAddress = '※ログイン許可IPアドレス<br/>CIDR表記可能<br/>複数のIPアドレスを入力する場合は、<br/>IPアドレスごとに改行してください';
  const textIpAddressV6 = '※ログイン許可IPアドレスV6<br/>CIDR表記可能<br/>複数のIPアドレスを入力する場合は、<br/>IPアドレスごとに改行してください';
  const contractCount = useSelector((state: RootState) => state.company.contractCount)
  const [expandProjectEmployment, setExpandProjectEmployment] = useState(true)
  const option = useSelector((state: RootState) => state.company.adminDate)

  const handleToggleProjectEmployment = () => {
    setExpandProjectEmployment(!expandProjectEmployment)
  }

  const [expandProjectJobChange, setExpandProjectJobChange] = useState(true)

  const handleToggleProjectJobChange = () => {
    setExpandProjectJobChange(!expandProjectJobChange)
  }

  const [expandProjectMagi, setExpandProjectMagi] = useState(true)

  const handleToggleProjectMagi = () => {
    setExpandProjectMagi(!expandProjectMagi)
  }

  // 前画面から引き継ぐ企業ID
  const state = history.location.state
  let companyId = ''
  if (state) {
    companyId = history.location.state
  }

  const dispatch = useDispatch()
  // useEffect(() => {
  // dispatch(getCompanyDetail(companyId))
  // }, [dispatch,companyId])

  const rawData  = useSelector((state: RootState) => state.company.companyDetailResults)
  const statusFlag = rawData.status === 1? 1 : 0

  const backToHome = () => {
    dispatch(setContractCount(0))
    history.push(routeList.company)
  }

  const handleSubmit = (values: any) => {
    setType('update')
    setOpen(true)
    setCompany(values)
    if(statusFlag === 1 && values.status === '0'){
      //無効チェック
      dispatch(contractCheck(companyId))
    }
  }

  const handleCancelButton = () => {
    setType('cancel')
    setOpen(true)
  }

  const handleCancel = () => {
    dispatch(setContractCount(0))
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
    // backToHome()
  }

  const handleCreate = () => {
    if(type === 'cancel'){
      backToHome()
    }
    else if(type === 'check'){
      dispatch(updateCompany(company))
      handleClose()
    }
    else if(type === 'update'){

      //無効チェック 有効な申込情報が存在しない場合
      if(contractCount === 0){
        dispatch(updateCompany(company))
        handleClose()
      }
      //無効チェック 有効な申込情報が存在する場合
      else{
        setType('check')
      }
    }
  }

  return (
    <Page
      className={magiClasses.rootModify}
      title='企業情報編集 - 株式会社マイナビ'>
      <Button
        variant='contained'
        color='primary'
        className={magiClasses.back}
        onClick={handleCancelButton}>
        <ArrowBackIcon />
        一覧に戻る
      </Button>
      <Card>
        <Formik
          initialValues={
            rawData     
          }
          enableReinitialize
          validationSchema={MAACS030UpdateRequestValidation}
          validate={values => {
            const errors = {
              clientStaffNameMagi: '',
              clientStaffEmailEmployment: '',
              clientStaffEmailJobChange: '',
              clientStaffEmailMagi: '',
            }
            if(values.sysVersionNumberMagi !== '' && values.clientStaffNameMagi === ''){
              errors.clientStaffNameMagi = "Magi担当者の企業担当者名が入力されておりません。"
              return errors;
            }
            else if(values.clientStaffNameEmployment !== '' && values.clientStaffEmailEmployment === ''){
              errors.clientStaffEmailEmployment = 'メールアドレスが入力されておりません。'
              return errors;
            }
            else if(values.clientStaffNameJobChange !== '' && values.clientStaffEmailJobChange === '' ){
              errors.clientStaffEmailJobChange = 'メールアドレスが入力されておりません。'
              return errors;
            }
            else if(values.clientStaffNameMagi !== '' && values.clientStaffEmailMagi === '' ){
              errors.clientStaffEmailMagi = 'メールアドレスが入力されておりません。'
              return errors;
            }
          }}
          onSubmit={handleSubmit}
          render={({ values }) => (
            <Form>
              <CardContent>
                <Typography gutterBottom variant='h3'>
                  企業情報編集
                </Typography>
                <Grid container alignItems='center' justify='space-around' className={magiClasses.formContainerCompany}>
                  <React.Fragment key={'clientId'}>
                    <Label>{'企業ID'}</Label>
                    <Grid item xs={9} className={magiClasses.formGroupCompany}>
                    <FastField
                        disabled
                        name={'clientId'}
                        label={'企業ID'}
                        component={TextField}/>
                    </Grid>
                  </React.Fragment>
                  <React.Fragment key={'clientName'}>
                    <Label>{'企業名'}</Label>
                    <Grid item xs={4} className={magiClasses.formGroupCompany}>
                    <FastField
                        name={'clientName'}
                        label={'企業名'}
                        component={TextField}/>
                    </Grid>
                  </React.Fragment>
                  <React.Fragment key={'clientNameFurigana'}>
                    <Label>{'企業名カナ'}</Label>
                    <Grid item xs={4} className={magiClasses.formGroupCompany}>
                    <FastField
                        name={'clientNameFurigana'}
                        label={'企業名カナ'}
                        component={TextField}/>
                    </Grid>
                  </React.Fragment>
                  <React.Fragment key={'postalCode'}>
                    <Label>{'郵便番号'}</Label>
                    <Grid item xs={9} className={magiClasses.formGroupCompany}>
                    <FastField
                        name={'postalCode'}
                        label={'郵便番号'}
                        component={TextField}/>
                    </Grid>
                  </React.Fragment>
                  <React.Fragment key={'streetAddress'}>
                    <Label>{'住所'}</Label>
                    <Grid item xs={9} className={magiClasses.formGroupCompany}>
                    <FastField
                        name={'streetAddress'}
                        label={'住所'}
                        component={TextField}/>
                    </Grid>
                  </React.Fragment>
                  <React.Fragment key={'tel'}>
                    <Label>{'電話番号'}</Label>
                    <Grid item xs={9} className={magiClasses.formGroupCompany}>
                    <FastField
                        name={'tel'}
                        label={'電話番号'}
                        component={TextField}/>
                    </Grid>
                  </React.Fragment>
                  <React.Fragment key={'mainAccountId'}>
                    <Label>{'メインアカウントID'}</Label>
                    <Grid item xs={9} className={magiClasses.formGroupCompany}>
                    <FastField
                        disabled
                        name={'mainAccountId'}
                        label={'メインアカウントID'}
                        component={TextField}/>
                    </Grid>
                  </React.Fragment>
                  <div className={magiClasses.back}></div>
                  <Grid item xs={12}>
                    <div className={magiClasses.content}>
                    <div
                      className={magiClasses.contentSectionHeader}
                      onClick={handleToggleProjectEmployment}>
                      <Typography variant='h5'>就職担当者</Typography>
                      {expandProjectEmployment ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                      <Collapse in={expandProjectEmployment}>
                        <Grid container alignItems='center' justify='space-around' className={magiClasses.formInnerContainerCompany}>
                          <React.Fragment key={'clientStaffDepartmentNameEmployment'}>
                            <Label>{'企業担当者：部署'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                              name={'clientStaffDepartmentNameEmployment'}
                              label={'企業担当者：部署'}
                              component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffPositionNameEmployment'}>
                            <Label>{'企業担当者：役職'}</Label>
                              <Grid item xs={4} className={magiClasses.formGroupCompany}>
                              <FastField
                                name={'clientStaffPositionNameEmployment'}
                                label={'企業担当者：役職'}
                                component={TextField}/>
                              </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffNameEmployment'}>
                            <Label>{'企業担当者：担当者名'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffNameEmployment'}
                                label={'企業担当者：担当者名'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffNameFuriganaEmployment'}>
                            <Label>{'企業担当者：担当者名カナ'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffNameFuriganaEmployment'}
                                label={'企業担当者：担当者名カナ'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffEmailEmployment'}>
                            <Label>{'企業担当者：メールアドレス'}</Label>
                            <Grid item xs={9} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffEmailEmployment'}
                                label={'企業担当者：メールアドレス'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'managerIDEmployment'}>
                            <Label>{'営業担当者'}</Label>
                            {/* <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'salesStaffEmployment'}
                                label={'営業担当者'}
                                component={TextField}/>
                            </Grid> */}
                            <Grid item xs={10} className={magiClasses.formGroupCompany}>
                              <Field
                                name={'managerIDEmployment'}
                                label={'営業担当者'}
                                initId={rawData.managerIDEmployment}
                                initName={rawData.salesStaffEmployment}
                                initDepartment={rawData.salesDepartmentNameEmployment}
                                department={'salesDepartmentNameEmployment'}
                                managerName={'salesStaffEmployment'}
                                options = {option}
                                labelName={'営業部署名'}
                                component={ CompanySelect }
                              />
                            </Grid>
                            <FastField
                              name={'salesStaffEmployment'}
                              type={'hidden'}
                              component={ TextField }
                            />
                            <FastField
                              name={'salesDepartmentNameEmployment'}
                              type={'hidden'}
                              component={ TextField }
                            />
                          </React.Fragment>
                          {/* <React.Fragment key={'salesDepartmentNameEmployment'}>
                            <Label>{'営業部署名'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                disabled
                                name={'salesDepartmentNameEmployment'}
                                label={'営業部署名'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment> */}
                        </Grid>
                      </Collapse>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={magiClasses.back}></div>
                    <div className={magiClasses.content}>
                      <div
                        className={magiClasses.contentSectionHeader}
                        onClick={handleToggleProjectJobChange}>
                        <Typography variant='h5'>転職担当者</Typography>
                        {expandProjectJobChange ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </div>
                      <Collapse in={expandProjectJobChange}>
                        <Grid container alignItems='center' justify='space-around' className={magiClasses.formInnerContainerCompany}>
                          <React.Fragment key={'clientStaffDepartmentJobChange'}>
                            <Label>{'企業担当者：部署'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffDepartmentJobChange'}
                                label={'企業担当者：部署'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffPositionJobChange'}>
                            <Label>{'企業担当者：役職'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffPositionJobChange'}
                                label={'企業担当者：役職'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffNameJobChange'}>
                            <Label>{'企業担当者：担当者名'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffNameJobChange'}
                                label={'企業担当者：担当者名'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffNameFuriganaJobChange'}>
                            <Label>{'企業担当者：担当者名カナ'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffNameFuriganaJobChange'}
                                label={'企業担当者：担当者名カナ'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffEmailJobChange'}>
                            <Label>{'企業担当者：メールアドレス'}</Label>
                            <Grid item xs={9} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffEmailJobChange'}
                                label={'企業担当者：メールアドレス'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'managerIDJobChange'}>
                            <Label>{'営業担当者'}</Label>
                            {/* <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'salesStaffJobChange'}
                                label={'営業担当者'}
                                component={TextField}/>
                            </Grid> */}
                            <Grid item xs={10} className={magiClasses.formGroupCompany}>
                              <Grid container>
                                <Grid item xs={12}>
                                  <Field
                                    name={'managerIDJobChange'}
                                    label={'営業担当者'}
                                    initId={rawData.managerIDJobChange}
                                    initName={rawData.salesStaffJobChange}
                                    initDepartment={rawData.salesDepartmentNameJobChange}
                                    department={'salesDepartmentNameJobChange'}
                                    managerName={'salesStaffJobChange'}
                                    options = {option}
                                    labelName={'営業部署名'}
                                    component={ CompanySelect }
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <FastField
                              name={'salesStaffJobChange'}
                              type={'hidden'}
                              component={ TextField }
                            />
                            <FastField
                              name={'salesDepartmentNameJobChange'}
                              type={'hidden'}
                              component={ TextField }
                            />
                          </React.Fragment>
                          {/* <React.Fragment key={'salesDepartmentNameJobChange'}>
                            <Label>{'営業部署名'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                disabled
                                name={'salesDepartmentNameJobChange'}
                                label={'営業部署名'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment> */}
                        </Grid>
                      </Collapse>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={magiClasses.back}></div>
                    <div className={magiClasses.content}>
                      <div
                        className={magiClasses.contentSectionHeader}
                        onClick={handleToggleProjectMagi}>
                        <Typography variant='h5'>Magi担当者</Typography>
                        {expandProjectMagi ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </div>
                      <Collapse in={expandProjectMagi}>
                        <Grid container alignItems='center' justify='space-around' className={magiClasses.formInnerContainerCompany}>
                          <React.Fragment key={'clientStaffDepartmentMagi'}>
                            <Label>{'企業担当者：部署'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffDepartmentMagi'}
                                label={'企業担当者：部署'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffPositionMagi'}>
                            <Label>{'企業担当者：役職'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffPositionMagi'}
                                label={'企業担当者：役職'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffNameMagi'}>
                            <Label>{'企業担当者：担当者名'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffNameMagi'}
                                label={'企業担当者：担当者名'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffNameFuriganaMagi'}>
                            <Label>{'企業担当者：担当者名カナ'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffNameFuriganaMagi'}
                                label={'企業担当者：担当者名カナ'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'clientStaffEmailMagi'}>
                            <Label>{'企業担当者：メールアドレス'}</Label>
                            <Grid item xs={9} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'clientStaffEmailMagi'}
                                label={'企業担当者：メールアドレス'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment>
                          <React.Fragment key={'managerIDMagi'}>
                            <Label>{'営業担当者'}</Label>
                            {/* <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                name={'salesStaffMagi'}
                                label={'営業担当者'}
                                component={TextField}/>
                            </Grid> */}
                            <Grid item xs={10} className={magiClasses.formGroupCompany}>
                              <Grid container>
                                <Grid item xs={12}>
                                  <Field
                                    name={'managerIDMagi'}
                                    label={'営業担当者'}
                                    initId={rawData.managerIDMagi}
                                    initName={rawData.salesStaffMagi}
                                    initDepartment={rawData.salesDepartmentNameMagi}
                                    department={'salesDepartmentNameMagi'}
                                    managerName={'salesStaffMagi'}
                                    options = {option}
                                    labelName={'営業部署名'}
                                    component={ CompanySelect }
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <FastField
                              name={'salesStaffMagi'}
                              type={'hidden'}
                              component={ TextField }
                            />
                            <FastField
                              name={'salesDepartmentNameMagi'}
                              type={'hidden'}
                              component={ TextField }
                            />
                          </React.Fragment>
                          {/* <React.Fragment key={'salesDepartmentNameMagi'}>
                            <Label>{'営業部署名'}</Label>
                            <Grid item xs={4} className={magiClasses.formGroupCompany}>
                            <FastField
                                disabled
                                name={'salesDepartmentNameMagi'}
                                label={'営業部署名'}
                                component={TextField}/>
                            </Grid>
                          </React.Fragment> */}
                        </Grid>
                      </Collapse>
                    </div>
                  </Grid>
                  <div className={magiClasses.back}></div>
                  <React.Fragment key={'loginPermissionIpAddress'}>
                    <Label>{'ログイン許可IPアドレス'}</Label>
                    <Grid item xs={6} className={magiClasses.formGroupCompany}>
                    <FastField
                        name={'loginPermissionIpAddress'}
                        label={'ログイン許可IPアドレス'}
                        multiline
                        rows="4"
                        component={TextField}/>
                    </Grid>
                    <Card><div dangerouslySetInnerHTML={{__html:textIpAddress}} /></Card>
                  </React.Fragment>
                  <div className={magiClasses.back}></div>
                  <React.Fragment key={'loginPermissionIpAddressV6'}>
                    <Label>{'ログイン許可IPアドレスv6'}</Label>
                    <Grid item xs={6} className={magiClasses.formGroupCompany}>
                    <FastField
                        name={'loginPermissionIpAddressV6'}
                        label={'ログイン許可IPアドレスv6'}
                        multiline
                        rows="4"
                        component={TextField}/>
                    </Grid>
                    <Card><div dangerouslySetInnerHTML={{__html:textIpAddressV6}} /></Card>
                  </React.Fragment>
                  <div className={magiClasses.back}></div>
                  <React.Fragment key={'remarks'}>
                    <Label>{'備考'}</Label>
                    <Grid item xs={6} className={magiClasses.formGroupCompany}>
                    <FastField
                        name={'remarks'}
                        label={'備考'}
                        multiline
                        rows="4"
                        component={TextField}/>
                    </Grid>
                    <Card></Card>
                  </React.Fragment>

                  <div className={magiClasses.back}></div>
                  <Grid container alignItems='center' justify='space-around' className={magiClasses.formInnerContainerCompany}>
                    <React.Fragment key={'status'}>
                      <Label>{'ステータス'}</Label>
                      <Grid item xs={6} className={magiClasses.formGroupCompany}>
                      <FastField
                        name={'status'}
                        label={'ステータス'}
                        multiline
                        rows="4"
                        component={Toggle}/>
                    </Grid>
                    </React.Fragment>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions className={magiClasses.buttonGroup}>
                <Button
                  className={magiClasses.cancel}
                  onClick={handleCancelButton}
                  variant='contained'>
                  キャンセルする
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  className={magiClasses.confirmButton}>
                  更新する
                </Button>
              </CardActions>
            </Form>
          )}
        />
      </Card>
      <Dialog onClose={handleCancel} open={open}>
        <DialogTitle>{textMap[type].message}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCancel}>いいえ</Button>
          <Button onClick={handleCreate} color='primary'>
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  )
}

export default CompanyDetail
