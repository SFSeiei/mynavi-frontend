import React, { useEffect }  from 'react';
import { FieldProps } from 'formik';
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props extends FieldProps {
  label: string
  chargeValue: string
}

const useStyles = makeStyles(theme => ({
  checkboxA: {
    paddingLeft: '0',
  },
}));
const CheckboxA = ({ field, form, label, ...others }: Props) => {
  const { name, value } = field;
  const handleChange = (e: any) => {
    form.setFieldValue(name, e.target.checked ? '1' : '0');
  };
  const classes = useStyles()

  return (
    <FormControl>
          <MuiCheckbox
            name = {name}
            checked={value === '1' ? true : false}
            onChange={handleChange}
            {...others}
            className={classes.checkboxA}
          />
    </FormControl>
  );
};

export { CheckboxA} ;