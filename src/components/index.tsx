import { makeStyles } from '@material-ui/core/styles'
export const useErrorStyle = makeStyles({
  helperText: {
    fontSize: '11px',
    marginTop: '8px',
    minHeight: '1em',
    textAlign: 'left',
    fontFamily:
      'Noto Sans SC,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontWeight: 400,
    lineHeight: '1em',
    letterSpacing: '0.33px',
    color: '#e53935',
    margin: '8px 14px 0',
  },
})
export { default as Page } from './Page'
export { default as TextField } from './TextField'
export {IntegrationReactSelect } from './Select'
export { default as Checkbox } from './Checkbox'
export { default as Toggle } from './Toggle'
export { default as SubmitButton } from './SubmitButton'
export { default as FilesDropzone } from './FilesDropzone'
export { LabelShort, Label, LabelUp } from './Label'
export { default as SubTitle } from './SubTitle'
export { default as Paginate } from './Paginate'
export { default as Footer } from './Footer'
export { default as TaskApp } from './TaskApp'
export { default as DatePicker } from './DatePicker'
export { default as Loading } from './Loading'
export {CompanySelect} from './CompanySelect'
export {CheckboxNoLable} from './CheckboxNoLable'