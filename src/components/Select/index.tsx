import React, { CSSProperties, HTMLAttributes,useState } from 'react'
import clsx from 'clsx'
import { FormControl } from '@material-ui/core'
import { useErrorStyle } from 'components'
import { FieldProps } from 'formik';
import {
  createStyles,
  emphasize,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles'
import { MenuItem, Typography, Paper, Chip } from '@material-ui/core'
import TextField, { BaseTextFieldProps } from '@material-ui/core/TextField'
import CancelIcon from '@material-ui/icons/Cancel'
import CreatableSelect from 'react-select/creatable'
import { ValueContainerProps } from 'react-select/src/components/containers'
import { ControlProps } from 'react-select/src/components/Control'
import { MenuProps, NoticeProps } from 'react-select/src/components/Menu'
import { MultiValueProps } from 'react-select/src/components/MultiValue'
import { OptionProps } from 'react-select/src/components/Option'
import { PlaceholderProps } from 'react-select/src/components/Placeholder'
import { SingleValueProps } from 'react-select/src/components/SingleValue'
import { Omit } from '@material-ui/types'

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
      width:'20%',
      display: 'inline-block',
      position :'relative' ,top:'25px',left:'10px'
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

type MuiPlaceholderProps = Omit<PlaceholderProps<OptionType>, 'innerProps'> &
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
  options: OptionType[]
}
export function IntegrationReactSelect({ field, form, options }: Props) {
  const [departmentName, setDepartmentName] = useState('')
  const { errors, touched } = form
  const {name} = field
  const handleChange = (e: any) => {
    form.setFieldValue(name, e.label)
    form.setFieldValue('adminId', e.value)
    setDepartmentName(e.departmentName)
  }
  const classes = useStyles()
  const errorclasses = useErrorStyle()
  const theme = useTheme()

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
  <FormControl>
    <div className={classes.dateContainer}>
      <div className={classes.datetext}>
      <CreatableSelect
        classes={classes}
        styles={selectStyles}
        placeholder=''
        options={options}
        components={components}
        onChange={handleChange}
        isSearchable={true}
      />
      </div>
      <div className={classes.datelable}>
        <Typography variant='h5' >
          {departmentName}
        </Typography>
      </div>
    </div>
    {errors[name] && touched[name] ? (
        <p className={errorclasses.helperText}>{errors[name]}</p>
      ) : null}
  </FormControl> 
  )
}