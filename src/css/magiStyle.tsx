import { makeStyles } from '@material-ui/core/styles'
import {
  colors,
} from '@material-ui/core'
import { NonceProvider } from 'react-select'

const magiStyles = makeStyles(theme => ({
  //一覧画面root
  rootList: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#deecf2',
    boxSizing: 'content-box',
    mozBoxSizing: 'inherit',
    webkitBoxSizing: 'inherit',
  },
  //登録、編集画面root
  rootModify: {
    padding: theme.spacing(3),
    boxSizing: 'content-box',
    mozBoxSizing: 'inherit',
    webkitBoxSizing: 'inherit',
  },
  rootEnhancedTableHead: {
    borderTop: '1px solid #eeeeee',
    backgroundColor: '#f2f2f2',
    boxSizing: 'content-box',
    mozBoxSizing: 'inherit',
    webkitBoxSizing: 'inherit',
  },
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
    width: '50%',
    marginTop: theme.spacing(1),
  },

  //フォームと上部の距離
  formContainer: {
    paddingTop: theme.spacing(2),
  },
  //フォーム
  formGroup: {
    padding: theme.spacing(1),
  },  
  //「一覧に戻る」ボタン
  back: {
    margin: theme.spacing(0, 0, 3),
  },
  //「キャンセル」ボタン
  cancel: {
    color: (theme.palette as any).white,
    backgroundColor: 'darkgray',
    '&:hover': {
      backgroundColor: '#d5d5d5',
    },
  },
  //削除ボタン
  deleteButton: {
    color: (theme.palette as any).white,
    backgroundColor: '#d95e49',
    '&:hover': {
      backgroundColor: '#b71c1c',
    },
  },
  //更新、登録ボタン
  buttonGroup: {
    justifyContent: 'space-around',
  },
  //更新、登録ボタン
  confirmButton: {
    color: (theme.palette as any).white,
    backgroundColor: '#43a047',
    '&:hover': {
      backgroundColor: '#1b5e20',
    },
  },
  //検索ボタン
  selectButton: {
    marginRight: theme.spacing(1),
  },
  //一覧画面コンテント
  content: {
    flexGrow: 1,
  },
  //画面ヘッダ
  header: {
    whiteSpace: 'nowrap',
  },
  //一覧画面コンテントヘッダ
  contentSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    color: 'white',
    '& h5': {
      color: 'white',
    },
  },
  //イベント発生時
  action: {
    margin: theme.spacing(1, 0, 3),
  },
  //検索結果
  results: {
    marginTop: theme.spacing(3),
  },
  //項目
  field: {
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: 'white',
  },



  

  //時間
  hours: {
    alignSelf: 'center',
    display: 'flex',
    paddingLeft: theme.spacing(0.01),
    padding: theme.spacing(1),
  },
  
  selectGroup: {
    height: '38px',
  },


  /*お知らせ登録、編集画面*/
  dateSelector: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '70%',
    minWidth: 200,
  },
  textField: {
    marginTop: theme.spacing(2),
    width: '40%',
    minWidth: 200,
  },
  newsTargetCompany: {
    marginTop: theme.spacing(2),
    // padding: '4px 8px',
    width: '70%',
    minWidth: 200,
    minHeight: 106,
  },
  bodyTextArea: {
    marginTop: theme.spacing(2),
    padding: '4px 8px',
    width: '100%',
    minWidth: 200,
    minHeight: 274,
  },
  formContorl: {
    paddingTop: theme.spacing(2),
  },
  areaIcon: {
    fontSize: 64,
    marginTop: 20,
  },
  dateConnector: {
    alignSelf: 'center',
  },
  wave: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(8),
  },
    /*お知らせ登録、編集画面*/


    /*企業情報登録、編集画面*/
    formContainerCompany: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      
    },
    formInnerContainerCompany: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
    },
    formGroupCompany: {
      padding: theme.spacing(1),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    hidden:{
      display: 'none',
    },
    card:{
      backgroundColor: '#deecf2',
    }
}))

export default magiStyles