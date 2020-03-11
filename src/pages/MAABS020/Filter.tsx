import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Collapse, Typography, Grid, Card } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { Formik, Form, FastField } from 'formik'
import { initialValues, itemList, permissionList } from './formConfig'
import { schemaList } from 'validations/MAABS020QueryRequestValidation'
import {  Checkbox, TextField, Label } from 'components'
import { useSelector } from 'react-redux'
import { RootState } from 'reducers'
import magiStyles from 'css/magiStyle'

const useStyles = makeStyles(theme => ({
  // root: {
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
  // formContainer: {
  //   paddingTop: theme.spacing(2),
  // },
  // formGroup: {
  //   padding: theme.spacing(1),
  // },
  formGroup1: {
    marginLeft: -50,
    padding: theme.spacing(1),   
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
}))

interface Props {
  onFilter: (query: object) => void
}

const Filter = ({ onFilter }: Props) => {
  const classes = useStyles()
  const magiClasses = magiStyles()
  const [expandProject, setExpandProject] = useState(true)
  const accountSearchDate = useSelector((state: RootState) => state.account.accountListSearchCondition)
  const [initialSeach] = useState(Object.keys(accountSearchDate).length !== 0 ? accountSearchDate : initialValues)

  const handleToggleProject = () => {
    setExpandProject(!expandProject)
  }


  return (
    <Card>
      <Formik
        initialValues={initialSeach}
        validationSchema={schemaList}
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
                className={magiClasses.formContainer}>
                {itemList.map(i => (
                  <React.Fragment key={i.name}>
                    <Label>{i.label}</Label>
                    <Grid item xs={8} className={magiClasses.formGroup}>
                      <FastField
                        name={i.name}
                        label={'無効ユーザを含む'}
                        codelist={permissionList}
                        component={
                          i.name === 'invalidUser'
                            ? Checkbox
                            : TextField
                        }
                      />
                    </Grid>
                    <Grid item xs={1} className={classes.formGroup1}>
                      {i.name === 'loginId'
                        ? '※完全一致'
                        :
                        (
                          i.name === 'mailAddress' ? '※前方一致' : ''
                        )
                      }
                    </Grid>
                  </React.Fragment>
                ))}

                  <React.Fragment key='permissions'>

                  <Label >権限</Label>
                  <Grid item xs={8} className={magiClasses.formGroup}>
                    <FastField
                      name={'authoritySystem'}
                      label={'システム管理'}
                      component={Checkbox}
                    />
                    <FastField
                      name={'authorityAccount'}
                      label={'アカウント管理'}
                      component={Checkbox}
                    />
                    <FastField
                      name={'authorityannounceForCompany'}
                      label={'企業向けアナウンス'}
                      component={Checkbox}
                    />
                    <FastField
                      name={'authorityCompany'}
                      label={'企業管理'}
                      component={Checkbox}
                    />
                    <FastField
                      name={'authoritySupport'}
                      label={'企業サポート'}
                      component={Checkbox}
                    />
                    <FastField
                      name={'authoritySales'}
                      label={'営業'}
                      component={Checkbox}
                    />                                                                                
                  </Grid>
                  
                  <Grid item xs={1} className={classes.formGroup1}>
                      {''}
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
