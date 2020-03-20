import React, { useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { Avatar } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Formik, Form, FastField } from 'formik'
import { TextField, Page, SubTitle, SubmitButton } from 'components'
import { updatePassword } from 'reducers/accountReducer'
import { fieldList, initialValues } from './formConfig'
import { validationSchemaAll, validationSchemaMo } from 'validations/MAABS010PasswordRequestValidation'
import { RootState } from 'reducers'
import { routeList } from 'routes/routes'
import { getSysVersionNumberInit } from 'reducers/accountReducer'
import history from 'utils/history'
import { getToken } from 'utils/auth'
import { magiContants } from 'utils/contants'
import magiStyles from 'css/magiStyle'

interface Props {
  updatePassword: typeof updatePassword
}

const AccountUpdatePassword = ({ updatePassword }: Props) => {
  const state = history.location.state;
  const [validationSchema, setvalidationSchema] = useState(validationSchemaAll)
  //遷移元フラグの初期値
  let transitionSourceFlag = magiContants.TRANSITIONSOURCEFLAG_1;
  if (state) {
    transitionSourceFlag = state.transitionSourceFlag;
  }
  const dispatch = useDispatch()
  useEffect(() => {
    //遷移元フラグが0の場合に強制変更
    if (transitionSourceFlag === magiContants.TRANSITIONSOURCEFLAG_0) {
      setvalidationSchema(validationSchemaMo);
    }else {
      dispatch(getSysVersionNumberInit())
    }
  }, [dispatch,transitionSourceFlag]);
  if (!getToken() && transitionSourceFlag !== magiContants.TRANSITIONSOURCEFLAG_0) {
    history.push(routeList.login)
  }
  const sysVersionDate = useSelector((state: RootState) => state.account.sysVersion)
  const magiClasses = magiStyles()

  const userInfo = useSelector((state: RootState) => state.globalMenu)

  const handleSubmit = (data: any, event: any) => {
    const { currentPassword, newPassword, newPasswordConfirm } = data
    updatePassword({
      transitionSourceFlag: transitionSourceFlag,
      managerId: userInfo.managerId ? userInfo.managerId : state.managerId,
      currentPassword: currentPassword ? currentPassword : newPassword,
      newPassword,
      newPasswordConfirm,
      sysVersion:sysVersionDate.sysVersionNumber
    })
  }
  return (
    <Page className={magiClasses.rootModify} title='パスワード変更 - マイナビ'>
      <SubTitle>パスワード変更</SubTitle>
        <div className={magiClasses.paper}>
          <Avatar className={magiClasses.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {
            transitionSourceFlag === magiContants.TRANSITIONSOURCEFLAG_0 ? <Formik
              enableReinitialize
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              initialValues={initialValues}
	            render={() => (
                <Form className={magiClasses.form}>
                {
                  fieldList.filter(temp => temp.name !== 'currentPassword').map(i => (
                  <FastField key={i.name} {...i} 
                    placeholder={i.label}
                    component={TextField}/>
                ))}
                <SubmitButton>パスワードを変更する</SubmitButton>
                </Form>
              )}
              /> : <Formik
                     onSubmit={handleSubmit}
                     validationSchema={validationSchema}
                     initialValues={initialValues}
                     enableReinitialize
	                   render={() => (
                      <Form className={magiClasses.form}>
                        {fieldList.map(i => (
                          <FastField key={i.name} {...i} 
                          placeholder={i.label}
                          component={TextField}/>
                        ))}
                     <SubmitButton>パスワードを変更する</SubmitButton>
                     </Form>
                   )}
                   /> 
          }
        </div>
    </Page>
  )
}
const mapDispatchToProps = {
  updatePassword,
}

export default connect(
  null,
  mapDispatchToProps
)(AccountUpdatePassword)
