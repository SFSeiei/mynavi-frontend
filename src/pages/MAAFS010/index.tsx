import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Page, SubTitle } from 'components';
import Filter from './Filter'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import Results from './Results'
import { initialValues} from './formConfig'
import { Button,
  Dialog,
  DialogTitle,
  DialogActions,
 } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { routeList } from 'routes/routes';
import { searchOperationLogList } from 'reducers/operationLogReducer';
import { getMessage } from 'common/messageUtil';
import magiStyles from 'css/magiStyle'

  const OperationLog = () => {
  const magiClasses = magiStyles();
  const [open, setOpen] = useState(false)
  const [query] = useState(initialValues)
  const dispatch = useDispatch()

  // 検索条件を取得する
  const operationLogPrim = useSelector((state: RootState) => state.operationLog.operationLogPrim)
  useEffect(() => {
    // 画面初期表示
    dispatch(searchOperationLogList(operationLogPrim))
  }, [dispatch])

  // 検索結果を取得する
  const operationList = useSelector((state: RootState) => state.operationLog.searchresult)
  const companyId = useSelector((state: RootState) => state.operationLog.operationLogPrim.clientId);

  const backToHome = () => {
  }
  const handleClick = () => {
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false)
  }
  const handleClose = () => {
    setOpen(false)
    backToHome()
  }

  const handleDialog = () => {
    // CSV出力
    exportCvs()
    handleClose()
  }

  // CSV出力
  const exportCvs = () => {
    const title = "companyManipulationLog_"+companyId+"_";
    const csvObj = {
      title:["操作日時","企業ID","操作者ID","操作者名","連携元媒体名","操作種別","操作概要","IPアドレス","User Agent","ホスト名"],
      titleForKey:["manipulationTime","companyId","loginId","fullName","coordinationFormerMedia","manipulationType","manipulationDetail","ipAddress","userAgent","hostName"],
      data:operationList,
    }
    const titleForKey = csvObj.titleForKey;
    const data = csvObj.data;
    const day = new Date();
    var curr_date = day.getDate()+"";
    var curr_month = (day.getMonth() + 1)+""; 
    const curr_year = day.getFullYear();
    var curr_hour = day.getHours()+"";
    var curr_minutue = day.getMinutes()+"";
    curr_month = curr_month.length < 2 ? "0" + curr_month: curr_month;
    curr_date = curr_date.length < 2 ? "0" + curr_date: curr_date;
    curr_hour = curr_hour.length < 2 ? "0" + curr_hour: curr_hour;
    curr_minutue = curr_minutue.length < 2 ? "0" + curr_minutue: curr_minutue;
    const yyyyMMdd = curr_year + curr_month + curr_date + "_" + curr_hour + curr_minutue;
    const fileName = title + yyyyMMdd +".csv";

    //IE or Edge
    if (navigator.msSaveBlob) {
      var d = csvObj.title.join(",")+"\n";
      for(var i=0;i<data.length;i++){
        var temp1 = "";
        for(var j=0;j<titleForKey.length;j++){
            temp1 = temp1 + data[i][titleForKey[j]];
            if(j < titleForKey.length-1){
              temp1  = temp1 + ",";
            }
        }
        d = d + temp1 + "\n";
      }
    
      const blobObject = new Blob(['\uFEFF'+d], {type:'data:text/csv;charset=utf-8'});
      return navigator.msSaveBlob(blobObject, fileName);
    }

    //other Browseres
    const str = [];
    str.push(csvObj.title.join(",")+"\n");
    for(var i=0;i<data.length;i++){
        var temp = [];
        for(var j=0;j<titleForKey.length;j++){
            temp.push(data[i][titleForKey[j]]);
        }
        str.push(temp.join(",")+"\n");
    }
    const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str.join(""));
    
    const downloadLink = document.createElement("a");
    downloadLink.href = uri;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <Page className={magiClasses.rootModify} title="企業情報管理 - マイナビ">
        <Button
        component={Link}
        variant='contained'
        color='primary'
        className={magiClasses.back}
        to={routeList.company}
        >
        <ArrowBackIcon />
        企業情報一覧に戻る
      </Button>
      <SubTitle>企業操作ログ照会</SubTitle>
      <Filter　
      />
      <Button
        onClick={handleClick}
        variant='contained'
        color='primary'
        className={magiClasses.results}>
        <AddIcon />
        CSV出力する
      </Button>
      {operationList.length > 0 && (
        <Results
          className={magiClasses.results}
          accounts={operationList
            .filter(i =>
              Object.keys(query)
              )
            }
        />
      )}
     <Dialog onClose={handleCancel} open={open}>
        <DialogTitle>{getMessage('MAAFS010-004')}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCancel}>いいえ</Button>
          <Button onClick={handleDialog} color='primary'>
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
};
export default OperationLog;