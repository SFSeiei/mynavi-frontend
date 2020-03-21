import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FieldArray, FieldProps } from 'formik';
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Grid } from '@material-ui/core'
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
});

interface Props extends FieldProps {
  label: string;
  codelist:{
    name: string; 
    label:string;
    id: string;
  }[];
}
const GroupOptions = ({ field, form, label,codelist,...others }: Props) => {
  const classes = useStyles();
  const { errors, touched } = form;
  const { name, value } = field;

  return (
    <FormControl error={Boolean(errors[name] && touched[name])}>
      <FieldArray
        name={name}
        render={arrayHelpers => (
          <FormGroup row>
            {codelist.map(i => (
              <FormControlLabel
                key={i.name}
                value={i.name}
                control={
                  <Checkbox
                    onChange={(e: any) => {
                      if (e.target.checked) {
                        arrayHelpers.push(i.name);
                      } else {
                        const idx = value.indexOf(i.name);
                        arrayHelpers.remove(idx);
                      }
                    }}
                    checked={value.indexOf(i.name) !== -1}
                    {...others}
                  />
                }
                label={i.label}
              />
            ))}
          </FormGroup>
        )}
      />
      {errors[name] && touched[name] ? (
        <p className={classes.helperText}>{errors[name]}</p>
      ) : null}
    </FormControl>
  );
};
const GroupOptionsAlign = ({ field, form, label,codelist,...others }: Props) => {
  const classes = useStyles();
  const { errors, touched } = form;
  const { name, value } = field;

  return (
    <FormControl error={Boolean(errors[name] && touched[name])}>
      <FieldArray
        name={name}
        render={arrayHelpers => (
          <FormGroup row>
            {codelist.map(i => (
               <Grid item sm={3}>
              <FormControlLabel
                key={i.name}
                value={i.name}
                control={
                  <Checkbox
                    onChange={(e: any) => {
                      if (e.target.checked) {
                        arrayHelpers.push(i.name);
                      } else {
                        const idx = value.indexOf(i.name);
                        arrayHelpers.remove(idx);
                      }
                    }}
                    checked={value.indexOf(i.name) !== -1}
                    {...others}
                  />
                }
                label={i.label}
              />
              </Grid>
            ))}
          </FormGroup>
        )}
      />
      {errors[name] && touched[name] ? (
        <p className={classes.helperText}>{errors[name]}</p>
      ) : null}
    </FormControl>
  );
};
export  {GroupOptions ,GroupOptionsAlign};
