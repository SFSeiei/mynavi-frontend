import { Link } from 'react-router-dom'
import { Page, SubTitle } from 'components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { RootState } from 'reducers'
import { routeList } from 'routes/routes'
import { Button, Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputAdornment from '@material-ui/core/InputAdornment'
import { getApplicationDetail } from 'reducers/applicationReducer'
import history from 'utils/history'
import magiStyles from 'css/magiStyle'

const ApplicationDetail = () => {
  // 前画面から引き継ぐ申込ID
  const state = history.location.state
  let contractId = ''
  if (state) {
    contractId = history.location.state
  }

  // 申込IDよりDBに検索する
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getApplicationDetail(contractId))
  }, [dispatch])

  // DBから検索データを取得する
  const rawData = useSelector((state: RootState) => state.application.detailData)
  // cssを取得
  const magiClasses = magiStyles()

  return (
    <Page className={magiClasses.rootModify} title='MAADS020'>
      <Button
        component={Link}
        to={routeList.application}
        variant='contained'
        color='primary'
        className={magiClasses.back}>
        <ArrowBackIcon />
        申込情報一覧に戻る
      </Button>
      <SubTitle>申込情報参照</SubTitle>
      <Grid container justify='flex-start'>
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item></Grid>
            <Grid item xs={12} sm={5}>
              <div>企業ID</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'clientId'}
                disabled
                fullWidth
                value={rawData.clientId}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item></Grid>
            <Grid item xs={10}>
              <div>企業名</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'clientName'}
                disabled
                fullWidth
                value={rawData.clientName}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item></Grid>
            <Grid item xs={12} sm={5}>
              <div>営業担当</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'salesStaff'}
                disabled
                fullWidth
                value={rawData.salesStaff}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <div>営業担当部署</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'salesDepartmentName'}
                disabled
                fullWidth
                value={rawData.salesDepartmentName}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item></Grid>
            <Grid item xs={10}>
              <div>代理店名</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'agencyInformation'}
                disabled
                fullWidth
                value={rawData.agencyInformation}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item></Grid>
            <Grid item xs={10}>
              <div>企業担当者：部署</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'departmentClient'}
                disabled
                fullWidth
                value={rawData.departmentClient}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item></Grid>
            <Grid item xs={10}>
              <div>企業担当者：担当者名</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'staffNameClient'}
                fullWidth
                disabled
                value={rawData.staffNameClient}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item></Grid>
            <Grid item xs={10}>
              <div>企業担当者：電話番号</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'telClient'}
                fullWidth
                disabled
                value={rawData.telClient}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item></Grid>
            <Grid item xs={10}>
              <div>企業担当者：メールアドレス</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'mailAddressClient'}
                fullWidth
                disabled
                value={rawData.mailAddressClient}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item></Grid>
            <Grid item xs={10}>
              <div>企画種別</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'applicationType'}
                disabled
                fullWidth
                value={rawData.applicationTypeResult}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item></Grid>
            <Grid item xs={12} sm={5}>
              <div>利用開始日</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'startTime'}
                disabled
                fullWidth
                value={rawData.startTimeResult}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <div>利用終了日</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name={'endTime'}
                disabled
                fullWidth
                value={rawData.endTimeResult}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item></Grid>
            <Grid item xs={12} sm={5}>
              <div>ステータス</div>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'></InputAdornment>
                  ),
                }}
                name='state'
                disabled
                fullWidth
                value={rawData.statusResult}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </React.Fragment>
      </Grid>
      <Grid container>
        <Grid item>
          <Button
            component={Link}
            to={routeList.application}
            variant='contained'
            color='primary'
            className={magiClasses.back}>
            <ArrowBackIcon />
            申込情報一覧に戻る
          </Button>
        </Grid>
      </Grid>
    </Page>
  )
}

export default ApplicationDetail
