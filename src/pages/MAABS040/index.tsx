import React, { useState } from 'react'
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
import { initialValuesD, itemList, textMap } from './formConfig'
import history from 'utils/history'
import { Checkbox,Toggle, TextField } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccount } from 'reducers/accountReducer'
import { RootState } from 'reducers'
import schemaList from 'validations/MAABS040UpdateRequestValidation'
import magiStyles from 'css/magiStyle'


const AccountDetail = () => {
  const magiClasses = magiStyles()
  const [open, setOpen] = useState(false)
  const [account, setAccount] = useState<any>(null)
  const [type, setType] = useState<keyof typeof textMap>('edit')
  const { managerId } = useSelector((state: RootState) => state.globalMenu)

  const state = history.location.state;
  let params  = -1;
  if (state) {
    params = history.location.state.accountInfo.managerId;
  }
  const dispatch = useDispatch()
  const rawData = useSelector((state: RootState) => state.account.accountDetailResults)

  const backToHome = () => {
    history.push(routeList.account)
  }

  const handleSubmit = (values: any) => {
    setType('edit')
    setOpen(true)
    setAccount(values)
  }

  const handleCancelButton = () => {
    setType('cancel')
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCreate = () => {
    if (type === 'cancel') {
      backToHome()
    }
    else {
      dispatch(updateAccount(account))
    }

    handleClose()
  }



  return (
    <Page
      className={magiClasses.rootModify}
      title='社内アカウント編集 - 株式会社マイナビ'>
      <Button
        variant='contained'
        color='primary'
        onClick={handleCancelButton}
        className={magiClasses.back}>
        <ArrowBackIcon />
        一覧に戻る
      </Button>
      <Card>
        <Formik
          initialValues={
            rawData
              ? rawData
              :
              initialValuesD
          }
          enableReinitialize
          validationSchema={schemaList}
          onSubmit={handleSubmit}
          render={() => (
            <Form>
              <CardContent>
                <Typography gutterBottom variant='h3'>
                  社内アカウント編集
                </Typography>
                <Grid container alignItems='center' justify='space-around'>
                  {itemList(type).map(i => (
                    <React.Fragment key={i.name}>
                      <Label>{i.label}</Label>
                      <Grid item xs={9} className={magiClasses.formGroup}>
                        <FastField
                          disabled={i.name === 'managerId' ? true
                            : (i.name === 'permissions' ? (managerId === rawData.managerId.toString() ? true : false)
                              : (i.name === 'status' ? (managerId === rawData.managerId.toString() ? true : false)
                              :false)
                            )
                          }
                          name={i.name}
                          label={i.label}
                          component={
                            i.name === 'status'
                              ? Toggle
                              : TextField
                          }
                        />
                      </Grid>
                    </React.Fragment>
                  ))}

                    <React.Fragment key='permissions'>
                      <Label >権限</Label>
                      <Grid item xs={9} className={magiClasses.formGroup}>
                        
                        {
                          rawData
                          ?                         
                          <div>
                         {rawData.authSystemFlag === '1'
                          ? (
                          <FastField key={'authoritySystem'}
                          disabled={ managerId === rawData.managerId.toString() ? true : false }
                          name={'authoritySystem'}
                          label={'システム管理'}
                          component={Checkbox}/>
                          )
                          :''
                         }
                         {rawData.authAccountFlag === '1'
                          ? (
                          <FastField key={'authorityAccount'}
                          disabled={ managerId === rawData.managerId.toString() ? true : false }
                          name={'authorityAccount'}
                          label={'アカウント管理'}
                          component={Checkbox}/>
                          )
                          :''
                         }
                         {rawData.authannounceForCompanyFlag === '1'
                          ? (
                            <FastField key={'authorityannounceForCompany'}
                            disabled={ managerId === rawData.managerId.toString() ? true : false }
                            name={'authorityannounceForCompany'}
                            label={'企業向けアナウンス'}
                            component={Checkbox}/>
                          )
                          :''
                         } 
                         {rawData.authCompanyFlag === '1'
                          ? (
                            <FastField key={'authorityCompany'}
                                disabled={ managerId === rawData.managerId.toString() ? true : false }
                                name={'authorityCompany'}
                                label={'企業管理'}
                                component={Checkbox}/>
                          )
                          :''
                         }
                         {rawData.authSupportFlag === "1"
                          ? (
                            <FastField key={'authoritySupport'}
                                disabled={ managerId === rawData.managerId.toString() ? true : false }
                                name={'authoritySupport'}
                                label={'企業サポート'}
                                component={Checkbox}/>
                          )
                          :''
                         }
                         {rawData.authSalesFlag === '1'
                          ? (
                            <FastField key={'authoritySales'}
                                disabled={ managerId === rawData.managerId.toString() ? true : false }
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
                  type='submit'
                  variant='contained'
                  className={magiClasses.confirmButton}>
                  更新する
                </Button>
                <Button
                  className={magiClasses.cancel}
                  onClick={handleCancelButton}
                  variant='contained'>
                  キャンセルする
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
          <Button
            onClick={handleCreate}
            color='primary'>
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  )

}

export default AccountDetail
