import { getMessage } from 'common/messageUtil';
import { magiContants } from 'utils/contants';

const initialValues = {
  updateByMyself: '0',
  subject: '',
  publicStartDateFrom: '',
  publicStartDateTo: '',
  categoryFaultReport: '0',
  categoryMaintenance: '0',
  categoryRelease: '0',
  categoryInformation: '0',
  publicFlagPublic: '0',
  publicFlagNoPublic: '0',
  publicStatusBefore: '0',
  publicStatusIn: '0',
  publicStatusAfter: '0',
};

const messageMap: { [key: string]: string } = {
  public: getMessage(magiContants.MESSAGECODE_MAAES010_002),
  noPublic: getMessage(magiContants.MESSAGECODE_MAAES010_003),
};

export { initialValues, messageMap };
