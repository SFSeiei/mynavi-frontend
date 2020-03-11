import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FieldArray, FieldProps } from 'formik';
import {
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core'

const useStyles = makeStyles({
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
  selectGroup: {
    height: '38px',
  },
});

interface Props extends FieldProps {
  label: string;
  codelist:{
    name: string; 
    label:string;
    id: string;
  }[];
}

const Selects = ({ field, form, label,codelist,...others }: Props) => {
  const classes = useStyles();
  const { name, value } = field;
  const [usagePeriodFrom, setUsagePeriodFrom] = React.useState(value)

  const handleChange = (e: any) => {
    setUsagePeriodFrom(e.target.value)
    form.setFieldValue(name, e.target.value);
  }

  return (
        <FormControl > 
        <Select
          variant='outlined'
          className={classes.selectGroup}
          id = {name}
          onChange={handleChange}
          value={usagePeriodFrom}
          {...others}>
            {codelist.map(i => (
              <MenuItem value={i.name}>{i.label}</MenuItem>
            ))} 
        </Select>
       </FormControl> 
  );
};

export  {Selects} ;
