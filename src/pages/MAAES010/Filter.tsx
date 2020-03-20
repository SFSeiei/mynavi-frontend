import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Collapse, Typography, Grid, Card } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import { Formik, Form, FastField } from 'formik'
import { TextField, Checkbox, DatePicker, Label } from 'components'
import { useSelector } from 'react-redux'
import { RootState } from 'reducers'
import MAAES010QueryRequestValidation from 'validations/MAAES010QueryRequestValidation'
import magiStyles from 'css/magiStyle'

// css個別定義
const useStyles = makeStyles(theme => ({
  formContainer: {
    justifyContent: 'flex-start',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
  formGroup: {
    padding: theme.spacing(1),
  },
}))
// 属性個別定義
interface Props {
  onFilter: (query: object) => void
}

const Filter = ({ onFilter }: Props) => {
  const initialValues = useSelector(
    (state: RootState) => state.notification.notiListSearchCondition
  )
  const classes = useStyles()
  const magiClasses = magiStyles()
  const [expandProject, setExpandProject] = useState(true)

  // カードスイッチ
  const handleToggleProject = () => {
    setExpandProject(!expandProject)
  }

  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={MAAES010QueryRequestValidation}
        // 相関チェック
        validate={values => {
          const errors = {
            publicStartDateFrom: '',
            publicStartDateTo: '',
          }
          if (
            values.publicStartDateFrom &&
            values.publicStartDateTo &&
            values.publicStartDateFrom > values.publicStartDateTo
          ) {
            errors.publicStartDateFrom = '公開開始日範囲指定不正（From＞To）'
            errors.publicStartDateTo = '公開開始日範囲指定不正（From＞To）'
            return errors
          }
        }}
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
                spacing={4}
                alignItems='center'
                justify='space-around'
                className={classes.formContainer}>
                <React.Fragment key='updateByMyself'>
                  <Label>自分が更新</Label>
                  <Grid item xs={9} className={classes.formGroup}>
                    <FastField
                      name={'updateByMyself'}
                      label={'自分が更新したもののみを対象とする'}
                      component={Checkbox}
                    />
                  </Grid>
                </React.Fragment>
                <React.Fragment key='subject'>
                  <Label>タイトル</Label>
                  <Grid item xs={4} className={classes.formGroup}>
                    <FastField
                      name={'subject'}
                      label={'タイトル'}
                      component={TextField}
                    />
                  </Grid>
                </React.Fragment>
                <Grid item xs={5}></Grid>
                <React.Fragment key='publicStartDateFrom'>
                  <Label>公開開始日</Label>
                  <Grid item xs={2} className={classes.formGroup}>
                    <FastField
                      name={'publicStartDateFrom'}
                      label={'公開開始日_from'}
                      component={DatePicker}
                    />
                  </Grid>
                </React.Fragment>
                <Grid item xs={1} style={{ flexBasis: 0 }}>
                  ～
                </Grid>
                <React.Fragment key='publicStartDateTo'>
                  <Grid item xs={2} className={classes.formGroup}>
                    <FastField
                      name={'publicStartDateTo'}
                      label={'公開開始日_to'}
                      component={DatePicker}
                    />
                  </Grid>
                </React.Fragment>
                <Grid item xs={5}></Grid>
                <React.Fragment key='category'>
                  <Label>分類</Label>
                  <Grid item xs={10} className={classes.formGroup}>
                    <FastField
                      name={'categoryFaultReport'}
                      label={'障害報告'}
                      component={Checkbox}
                    />
                    <FastField
                      name={'categoryMaintenance'}
                      label={'メンテナンス'}
                      component={Checkbox}
                    />
                    <FastField
                      name={'categoryRelease'}
                      label={'リリース'}
                      component={Checkbox}
                    />
                    <FastField
                      name={'categoryInformation'}
                      label={'インフォメーション'}
                      component={Checkbox}
                    />
                  </Grid>
                </React.Fragment>
                <React.Fragment key='publicFlag'>
                  <Label>公開状態</Label>
                  <Grid item xs={10} className={classes.formGroup}>
                    <FastField
                      name={'publicFlagPublic'}
                      label={'公開'}
                      component={Checkbox}
                    />
                    <FastField
                      name={'publicFlagNoPublic'}
                      label={'非公開'}
                      component={Checkbox}
                    />
                  </Grid>
                </React.Fragment>
                <React.Fragment key='publicStatus'>
                  <Label>公開ステータス</Label>
                  <Grid item xs={10} className={classes.formGroup}>
                    <FastField
                      name={'publicStatusBefore'}
                      label={'公開前'}
                      component={Checkbox}
                    />
                    <FastField
                      name={'publicStatusIn'}
                      label={'公開中'}
                      component={Checkbox}
                    />
                    <FastField
                      name={'publicStatusAfter'}
                      label={'公開終了'}
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
