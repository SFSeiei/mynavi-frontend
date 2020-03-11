import React, { CSSProperties, HTMLAttributes,useState } from 'react'
import clsx from 'clsx'
import { FormControl, Grid } from '@material-ui/core'
import { FieldProps } from 'formik';
import {
  createStyles,
  emphasize,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField, { BaseTextFieldProps } from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import MenuItem from '@material-ui/core/MenuItem'
import CreatableSelect from 'react-select'
import CancelIcon from '@material-ui/icons/Cancel'
import { ValueContainerProps } from 'react-select/src/components/containers'
import { ControlProps } from 'react-select/src/components/Control'
import { MenuProps, NoticeProps } from 'react-select/src/components/Menu'
import { MultiValueProps } from 'react-select/src/components/MultiValue'
import { OptionProps } from 'react-select/src/components/Option'
import { PlaceholderProps } from 'react-select/src/components/Placeholder'
import { SingleValueProps } from 'react-select/src/components/SingleValue'
import { Omit } from '@material-ui/types'
import { LabelC } from 'components/Label'
import magiStyles from 'css/magiStyle'

export interface OptionType {
  label: string
  value: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 250,
      minWidth: 290,
    },
    input: {
      display: 'flex',
      padding: theme.spacing(0.5, 1),
      height: 'auto',
      width: 300,
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden',
    },
    chip: {
      margin: theme.spacing(0.5, 0.25),
    },
    chipFocused: {
      backgroundColor: emphasize(
        theme.palette.type === 'light'
          ? theme.palette.grey[300]
          : theme.palette.grey[700],
        0.08
      ),
    },
    noOptionsMessage: {
      padding: theme.spacing(1, 2),
    },
    singleValue: {
      fontSize: 16,
    },
    placeholder: {
      position: 'absolute',
      left: 2,
      bottom: 6,
      fontSize: 16,
    },
    paper: {
      position: 'absolute',
      zIndex: 2,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0,
    },
    divider: {
      height: theme.spacing(2),
    },
    dateContainer:{
      width:'100%',
    },
    datetext:{
      width:'80%',
      display: 'inline-block',
    },
    datelable:{
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    formGroup: {
      paddingRight: theme.spacing(6),
    },
    formGroupText:{
      padding: theme.spacing(0),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      // paddingRight: theme.spacing(6),
      width: '30%',
      verticalAlign: 'middle',
    },
    formGroupLabel:{
      width:'35%',
      display: 'inline-block',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(8),
      // position :'relative' ,top:'25px',left:'10px'
    },
  })
)

function NoOptionsMessage(props: NoticeProps<OptionType>) {
  return (
    <Typography
      color='textSecondary'
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}>
      {props.children}
    </Typography>
  )
}

type InputComponentProps = Pick<BaseTextFieldProps, 'inputRef'> &
  HTMLAttributes<HTMLDivElement>

function inputComponent({ inputRef, ...props }: InputComponentProps) {
  return <div ref={inputRef} {...props} />
}

function Control(props: ControlProps<OptionType>) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props

  return (
    <TextField
      fullWidth
      variant='outlined'
      margin='normal'
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  )
}

function Option(props: OptionProps<OptionType>) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component='div'
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}>
      {props.children}
    </MenuItem>
  )
}

type Select = Omit<PlaceholderProps<OptionType>, 'innerProps'> &
  Partial<Pick<PlaceholderProps<OptionType>, 'innerProps'>>

function SingleValue(props: SingleValueProps<OptionType>) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}>
      {props.children}
    </Typography>
  )
}

function ValueContainer(props: ValueContainerProps<OptionType>) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  )
}

function MultiValue(props: MultiValueProps<OptionType>) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  )
}

function Menu(props: MenuProps<OptionType>) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}>
      {props.children}
    </Paper>
  )
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  SingleValue,
  ValueContainer,
}

interface Props extends FieldProps {
  options: OptionType[],
  department: string,
  managerName: string,
  initId: string,
  initName: string,
  initDepartment: string,
  labelName: string,
}
export function CompanySelect({ field, form, options,department,managerName,initId,initName,initDepartment,labelName }: Props) {
  console.log("initName : "+initName)
  const [departmentName, setDepartmentName] = useState(initDepartment)
  const {name} = field
  const handleChange = (e: any) => {
    form.setFieldValue(name, e.value)
    form.setFieldValue(managerName, e.label)
    form.setFieldValue(department, e.departmentName)
    setDepartmentName(e.departmentName)
  }
  const classes = useStyles()
  const theme = useTheme()
  const init = {
    label: initName,
    value: initId,
    dapartmentName: initDepartment,
  }

  const selectStyles = {
    input: (base: CSSProperties) => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  }

  return (
    <FormControl className={classes.dateContainer}>
      <div className={classes.dateContainer}>
    <Grid container>
          <Grid item xs={4} className={classes.formGroup}>
            <CreatableSelect
              defaultValue={init}
              classes={classes}
              styles={selectStyles}
              placeholder=''
              options={options}
              components={components}
              onChange={handleChange}
              isSearchable={true}
              // open={true}
            />
          </Grid>
          <div className={classes.formGroupLabel}>
            <LabelC>{labelName}</LabelC>
          </div>
          <div className={classes.formGroupText}>
            <Typography variant='h5' className={classes.datelable}>
              {departmentName}
            </Typography>
          </div>
      </Grid>
      </div>
    </FormControl>
  // </Grid>
  )
}