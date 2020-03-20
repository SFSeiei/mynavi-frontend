import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, FastField } from 'formik'
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
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Page, Label } from 'components'
import { routeList } from 'routes/routes'
import { initialValues, itemList, textMap } from './formConfig'
import history from 'utils/history'
import { Checkbox, TextField } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { createAccount,getAccountCreateInit } from 'reducers/accountReducer'
import { RootState } from 'reducers'
import schemaList from 'validations/MAABS030CreateRequestValidation'
import magiStyles from 'css/magiStyle'
import { magiContants } from 'utils/contants'

const AccountCreate = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAccountCreateInit())
  }, [dispatch])
  const magiClasses = magiStyles()
  const [open, setOpen] = useState(false)
  const [account, setAccount] = useState<any>(null)
  const [type, setType] = useState<keyof typeof textMap>('create')
  const dataCreateInit = useSelector((state: RootState) => state.account.accountCreateInit)
  const { permissions } = useSelector((state: RootState) => state.globalMenu)
  const backToHome = () => {
    history.push(routeList.account)
  }

  const handleSubmit = (values: any) => {
    setType('create')
    setOpen(true)
    setAccount(values)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCreate = () => {
    dispatch(createAccount(account))
    handleClose()
  }

  return (
    <Page
      className={magiClasses.rootModify}
      title='社内アカウント登録 - 株式会社マイナビ'>
      <Button
        component={Link}
        to={routeList.account}
        variant='contained'
        color='primary'
        className={magiClasses.back}>
        <ArrowBackIcon />
        一覧に戻る
      </Button>
      <Card>
        <Formik
          initialValues={ initialValues }
          validationSchema={schemaList}         
          onSubmit={handleSubmit}
          render={() => (
            <Form>
              <CardContent>
                <Typography gutterBottom variant='h3'>
                  社内アカウント登録
                </Typography>
                <Grid container alignItems='center' justify='space-around'>
                  {itemList(type).map(i => (
                    <React.Fragment key={i.name}>
                      <Label>{i.label}</Label>
                      <Grid item xs={9} className={magiClasses.formGroup}>
                        <FastField
                          name={i.name}
                          label={i.label}
                          component={TextField}
                        />
                      </Grid>
                    </React.Fragment>
                  ))}
                  <React.Fragment key='permissions'>
                  <Label >権限</Label>
                  <Grid item xs={9} className={magiClasses.formGroup}>
                    {
                      dataCreateInit
                      ?                         
                      <div>
                     {dataCreateInit.authSystemFlag === '1' 
                      && permissions.includes(magiContants.AUTHORITYID_10)
                      ? (
                      <FastField key={'authoritySystem'}
                      name={'authoritySystem'}
                      label={'システム管理'}
                      component={Checkbox}/>
                      )
                      :''
                     }
                     {dataCreateInit.authAccountFlag === '1'
                      ? (
                      <FastField key={'authorityAccount'}
                      name={'authorityAccount'}
                      label={'アカウント管理'}
                      component={Checkbox}/>
                      )
                      :''
                     }
                     {dataCreateInit.authannounceForCompanyFlag === '1'
                      ? (
                        <FastField key={'authorityannounceForCompany'}
                        name={'authorityannounceForCompany'}
                        label={'企業向けアナウンス'}
                        component={Checkbox}/>
                      )
                      :''
                     } 
                     {dataCreateInit.authCompanyFlag === '1'
                      ? (
                        <FastField key={'authorityCompany'}
                            name={'authorityCompany'}
                            label={'企業管理'}
                            component={Checkbox}/>
                      )
                      :''
                     }
                     {dataCreateInit.authSupportFlag === "1"
                      ? (
                        <FastField key={'authoritySupport'}
                            name={'authoritySupport'}
                            label={'企業サポート'}
                            component={Checkbox}/>
                      )
                      :''
                     }
                     {dataCreateInit.authSalesFlag === '1'
                      ? (
                        <FastField key={'authoritySales'}
                            name={'authoritySales'}
                            label={'営業'}
                            component={Checkbox}/>
                      )
                      :''
                     }                      
                    </div>
                      :''
                    }
                  </Grid>
                  </React.Fragment>
                </Grid>
              </CardContent>
              <CardActions className={magiClasses.buttonGroup}>
                <Button
                  className={magiClasses.cancel}
                  onClick={backToHome}
                  variant='contained'>
                  キャンセルする
                </Button>
                <Button
                  type='submit'
                  variant='contained'
                  className={magiClasses.confirmButton}>
                  登録する
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

export default AccountCreate
