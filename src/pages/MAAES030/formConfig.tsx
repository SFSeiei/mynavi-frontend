import { getMessage } from "common/messageUtil"
import { magiContants } from "utils/contants"

const permissionList = [
  { name: 'system', label: 'システム管理' },
  { name: 'accout', label: 'アカウント管理' },
  { name: 'company', label: '企業管理' },
  { name: 'support', label: '企業サポート' },
  { name: 'sales', label: '営業' },
]

const initialValues = {
  newsId: -1,
  newsSysVersionNumber: -1,
  category: '0',
  subject: '',
  body: '',
  companyId: [],
  publicFlag: '0',
  publicStartDate: '',
  publicEndDate: '',
  file: [],
}

const categoryRadioList = [
  { id: 'categoryFaultReport', label: '障害報告', value: '0' },
  { id: 'categoryMaintenance', label: 'メンテナンス', value: '1' },
  { id: 'categoryRelease', label: 'リリース', value: '2' },
  { id: 'categoryInformation', label: 'インフォメーション', value: '3' }
]

const publicRadioList = [
  { id: 'publicFlagPublic', label: '公開', value: '0' },
  { id: 'publicFlagNoPublic', label: '非公開', value: '1' }
]

const textMap = {
  update: {
    submit: '更新する',
    message: getMessage(magiContants.MESSAGECODE_MAAES030_002),
  },
  cancel: {
    submit: 'キャンセルする',
    message: getMessage(magiContants.MESSAGECODE_MAAES030_004),
  },
}

export { permissionList, textMap, categoryRadioList, publicRadioList, initialValues }
