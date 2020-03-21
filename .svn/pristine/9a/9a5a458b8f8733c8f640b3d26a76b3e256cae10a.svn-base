import React from 'react'
import { connect } from 'react-redux'
import { Avatar, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'
import { Formik, Form, FastField } from 'formik'
import { TextField, Page, SubmitButton } from 'components'
import { login } from 'reducers/loginReducer'
import validationSchema from 'validations/MAAAS010LoginRequestValidation'
import { fieldList, initialValues } from './formConfig'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '40%',
    marginTop: theme.spacing(1),
  },
}))
interface Props {
  login: (values: any) => void
}

const Login = ({ login }: Props) => {
  const classes = useStyles()

  return (
    <Page title='ログイン'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>ログイン</Typography>
        <Formik
          onSubmit={login}
          validationSchema={validationSchema}
          initialValues={initialValues}
          render={() => (
            <Form className={classes.form}>
              {fieldList.map(i => (
                <FastField key={i.name} 
                {...i} 
                placeholder={i.label}
                component={TextField} />
              ))}
              <SubmitButton>ログイン</SubmitButton>
            </Form>
          )}
        />
      </div>
    </Page>
  )
}

const mapDispatchToProps = {
  login,
}

export default connect(
  null,
  mapDispatchToProps
)(Login)
