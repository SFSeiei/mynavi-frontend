import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Collapse, Typography, Grid, Card } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { Formik, Form, FastField, Field } from 'formik'
import { initialSeachData } from './formConfig'
import { Label, TextField, IntegrationReactSelect,Checkbox } from 'components'
import { setCompanySearchDate, searchCompanyList } from 'reducers/companyReducer'
import { useDispatch } from 'react-redux'
import schemaList from 'validations/MAACS010QueryRequestValidation';
import { useSelector } from 'react-redux'
import { RootState } from 'reducers'
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
    paddingLeft: theme.spacing(8),  
  },
  formBorder: { 
    border: 0,
  },
}))

const Filter = () => {
  const classes = useStyles()
  const magiClasses = magiStyles()
  const [expandProject, setExpandProject] = useState(true)
  const companySearchDate = useSelector((state: RootState) => state.company.searchDate)
  const option = useSelector((state: RootState) => state.company.adminDate) 
  const [initialSeach] = useState(Object.keys(companySearchDate).length !== 0 ? companySearchDate :initialSeachData)
  const dispatch = useDispatch()
  const handleSubmit = (values: any) => {
    dispatch(setCompanySearchDate(values))
    dispatch(searchCompanyList(values))
  }
  const handleToggleProject = () => {
    setExpandProject(!expandProject)
  }
  return (
    <Card>
      <Formik
        initialValues={initialSeach}
        enableReinitialize
        validationSchema={schemaList}
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
                className={classes.formContainer}
                >
                <React.Fragment key='clientId'>
                <Label>企業ID</Label>
                <Grid item xs={3} className={classes.formGroup}>
                <FastField
                    name={'clientId'}
                    label={'企業ID'}
                    component={ TextField }
                  />
                </Grid>
                </React.Fragment> 
                <React.Fragment key='clientName'>
                <Grid item xs={1}>
                     ※完全一致
                </Grid>
                <Label>企業名</Label>
                <Grid item xs={4} className={classes.formGroup}>
                <FastField
                    name={'clientName'}
                    label={'企業名'}
                    component={ TextField }
                  />
                </Grid>
                </React.Fragment> 
                <React.Fragment key='adminId'>
                <Label>営業担当者</Label>
                <Grid item xs={10} className={classes.formGroup}>
                <Field
                    name={'adminId'}
                    label={'営業担当者'}
                    options = {option}
                    component={ IntegrationReactSelect }
                  />
                </Grid>
                <FastField
                    name={'salesStaffName'}
                    type={'hidden'}
                    component={ TextField }
                  />
                </React.Fragment> 
                <React.Fragment key='mailAddressClient'>
                <Label>メールアドレス（企業）</Label>
                <Grid item xs={5} className={classes.formGroup}>
                <FastField
                    name={'mailAddressClient'}
                    component={ TextField }
                  />
                </Grid>
                <Grid item xs={5}>
                   ※前方一致
                </Grid>
                </React.Fragment> 
                <React.Fragment key='status'>
                  <Label>ステータス</Label>
                    <Grid item xs={10} className={classes.formGroup}>
                        <FastField
                          name={'statusValid'}
                          label={'有効'}
                          component={Checkbox}
                        />
                        <FastField
                          name={'statusInvalid'}
                          label={'無効'}
                          component={Checkbox}
                        />
                    </Grid>
                </React.Fragment>
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