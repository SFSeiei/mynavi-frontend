import { getMessage } from 'common/messageUtil';

const initialValues = {
  clientName: '',
  clientNameFurigana: '',
  postalCode: '',
  streetAddress: '',
  tel: '',
  clientStaffDepartmentNameEmployment: '',
  clientStaffPositionNameEmployment: '',
  clientStaffNameEmployment: '',
  clientStaffNameFuriganaEmployment: '',
  clientStaffEmailEmployment: '',
  salesStaffEmployment: '',
  salesDepartmentNameEmployment: '',
  clientStaffDepartmentJobChange: '',
  clientStaffPositionJobChange: '',
  clientStaffNameJobChange: '',
  clientStaffNameFuriganaJobChange: '',
  clientStaffEmailJobChange: '',
  salesStaffJobChange: '',
  salesDepartmentNameJobChange: '',
  clientStaffDepartmentMagi: '',
  clientStaffPositionMagi: '',
  clientStaffNameMagi: '',
  clientStaffNameFuriganaMagi: '',
  clientStaffEmailMagi: '',
  salesStaffMagi: '',
  salesDepartmentNameMagi: '',
  loginPermissionIpAddress: '',
  loginPermissionIpAddressV6: '',
  remarks: '',
}

const textMap = {
  edit: {
    submit: '登録する',
    message: getMessage('MAACS020-001'),
  },
  cancel: {
    submit: 'キャンセルする',
    message: getMessage('MAACS020-002'),
  },
}

export { initialValues,textMap }
