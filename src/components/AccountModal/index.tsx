import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form, FastField } from 'formik'
import {
  Button,
  Typography,
  CardContent,
  CardActions,
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
  colors,
} from '@material-ui/core'

import { initialValues, itemList, textMap } from './formConfig'
import { Toggle, TextField, Label } from 'components'
import { GroupOptions } from 'components/GroupOptions'
import { useDispatch } from 'react-redux'
import { createAccount } from 'reducers/accountReducer'
import { convertToAccountDto } from 'utils/misc'
import accountRequestValidation from 'validations/accountRequestValidation'

const useStyles = makeStyles(theme => ({
  back: {
    margin: theme.spacing(0, 0, 3),
  },
  actions: {
    justifyContent: 'flex-end',
  },
  formGroup: {
    padding: theme.spacing(1),
  },
  confirmButton: {
    color: (theme.palette as any).white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
}))

interface Props {
  formModal: boolean
  setFormModal: (state: boolean) => void
}

const AccountModal = ({ formModal, setFormModal }: Props) => {
  const type = 'create'
  const classes = useStyles()

  const [verificationModal, setVerificationModal] = useState(false)
  const [account, setAccount] = useState(initialValues)
  const dispatch = useDispatch()

  const handleSubmit = (values: any) => {
    setVerificationModal(true)
    setAccount(values)
  }

  const handleCreate = () => {
    dispatch(createAccount(convertToAccountDto(account)))
    setVerificationModal(false)
    setFormModal(false)
  }

  const handleClose = (modalType: string) => () => {
    modalType === 'form' ? setFormModal(false) : setVerificationModal(false)
  }

  return (
    <>
      <Dialog maxWidth='md' onClose={handleClose('form')} open={formModal}>
        <Formik
          initialValues={initialValues}
          validationSchema={accountRequestValidation}
          onSubmit={handleSubmit}
          render={({ values }) => (
            <Form>
              <CardContent>
                <Typography gutterBottom variant='h3'>
                  {textMap[type].title}
                </Typography>
                <Grid container alignItems='center' justify='space-around'>
                  {itemList(type).map(i => (
                    <React.Fragment key={i.name}>
                      <Label>{i.label}</Label>
                      <Grid item xs={9} className={classes.formGroup}>
                        <FastField
                          name={i.name}
                          label={i.label}
                          component={
                            i.name === 'status'
                              ? Toggle
                              : i.name === 'permissions'
                              ? GroupOptions
                              : TextField
                          }
                        />
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </CardContent>
              <CardActions className={classes.actions}>
                <Button onClick={handleClose('form')} variant='contained'>
                  キャンセルする
                </Button>
                <Button
                  type='submit'
                  className={classes.confirmButton}
                  variant='contained'>
                  {textMap[type].submit}
                </Button>
              </CardActions>
            </Form>
          )}
        />
      </Dialog>
      <Dialog onClose={handleClose('verification')} open={verificationModal}>
        <DialogTitle>{textMap[type].message}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose('verification')}>いいえ</Button>
          <Button onClick={handleCreate} color='primary'>
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AccountModal
