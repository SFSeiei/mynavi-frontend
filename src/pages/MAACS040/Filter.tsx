import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Collapse, Typography, Grid, Card } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { Formik, Form, FastField } from 'formik'
import { initialValues } from './formConfig'
import {TextField, Label, Checkbox } from 'components'
import { useSelector } from 'react-redux'
import { RootState } from 'reducers'
import MAACS040QueryRequestValidation from 'validations/MAACS040QueryRequestValidation'
import magiStyles from 'css/magiStyle'

const useStyles = makeStyles(theme => ({
  formContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    
  },
  formGroup: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  formGroupOfName:{
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(6),
  },
}))

interface Props {
  onFilter: (query: object) => void
}

const Filter = ({ onFilter }: Props) => {
  const classes = useStyles()
  const magiClasses = magiStyles()
  
  const [expandProject, setExpandProject] = useState(true)

  const handleToggleProject = () => {
    setExpandProject(!expandProject)
  }

  const companyAccountSearchCondition = useSelector(
    (state: RootState) => state.company.companyAccountSearchCondition
  )
  const [initialValue] = useState(
    Object.keys(companyAccountSearchCondition).length !== 0 ? companyAccountSearchCondition : initialValues
  )

  return (
    <Card>
      <Formik
        initialValues={initialValue}
        validationSchema={MAACS040QueryRequestValidation}
        onSubmit={onFilter}>
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
                className={classes.formContainer}
              >
                <React.Fragment key='clientId'>

                  <Label >企業ID</Label>
                  <Grid item xs={4} className={classes.formGroup}>
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
                  <Grid item xs={4} className={classes.formGroup}>
                    <FastField
                      name={'clientName'}
                      label={'企業名'}
                      component={TextField}
                      disabled
                    />
                  </Grid>
                </React.Fragment>
                
                <React.Fragment key='fullName'>
                  <Label>氏名</Label>
                  <Grid item xs={9} className={classes.formGroupOfName}>
                    <FastField
                      name={'fullName'}
                      label={'氏名'}
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={1}>
                   ※前方一致
                  </Grid>
                </React.Fragment>
                <Label>アカウント種別</Label>
                <Grid item xs={9} className={classes.formGroup}>
                <React.Fragment key='accountTypeSupervising'>  
                    <FastField
                      name={'accountTypeSupervising'}
                      label={"統括"}
                      placeholder={'アカウント種別_統括'}
                      component={Checkbox}
                    />
                </React.Fragment>
                <React.Fragment key='accountTypeAdministrator'>
                    <FastField
                      name={'accountTypeAdministrator'}
                      label={"管理者"}
                      placeholder={'アカウント種別_管理者'}
                      component={Checkbox}
                    />
                </React.Fragment>
                <React.Fragment key='accountTypeSemiManager'>
                    <FastField
                      name={'accountTypeSemiManager'}
                      label={"準管理者"}
                      placeholder={'アカウント種別_準管理者'}
                      component={Checkbox}
                    />
                </React.Fragment>
                <React.Fragment key='accountTypeGeneralUser'>
                    <FastField
                      name={'accountTypeGeneralUser'}
                      label={"一般ユーザ"}
                      placeholder={'アカウント種別_一般ユーザ'}
                      component={Checkbox}
                    />
                </React.Fragment>
                <React.Fragment key='accountTypeLimitUser'>
                    <FastField
                      name={'accountTypeLimitUser'}
                      label={"制限ユーザ"}
                      placeholder={'アカウント種別_制限ユーザ'}
                      component={Checkbox}
                    />
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
