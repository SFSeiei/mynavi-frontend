import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, FastField } from 'formik';
import {
  Button,
  Typography,
  CardContent,
  CardActions,
  Grid,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@material-ui/core';

import { initialValues, schemaList, itemList, textMap } from './formConfig';
import { Toggle, TextField } from 'components';
import { GroupOptions } from 'components/GroupOptions';
import { useDispatch } from 'react-redux';
import { createAccount } from 'reducers/accountReducer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  back: {
    margin: theme.spacing(0, 0, 3),
  },
  actions: {
    justifyContent: 'flex-end',
  },
  formGroup: {
    paddingBottom: theme.spacing(1),
  },
}));

interface Props {
  formModal: boolean;
  setFormModal: (state: boolean) => void;
}

const DemoModal = ({ formModal, setFormModal }: Props) => {
  const type = 'create';
  const classes = useStyles();

  const [verificationModal, setVerificationModal] = useState(false);
  const [account, setAccount] = useState<any>(null);
  const dispatch = useDispatch();

  const handleSubmit = (values: any) => {
    setVerificationModal(true);
    setAccount(values);
  };

  const handleCreate = () => {
    dispatch(createAccount(account));
    setVerificationModal(false);
    setFormModal(false);
  };

  const handleClose = (modalType: string) => () => {
    modalType === 'form' ? setFormModal(false) : setVerificationModal(false);
  };

  return (
    <>
      <Dialog onClose={handleClose('form')} open={formModal}>
        <Formik
          initialValues={initialValues}
          validationSchema={schemaList}
          onSubmit={handleSubmit}
          render={({ values }) => (
            <Form>
              <CardContent>
                <Typography gutterBottom variant="h3">
                  {textMap[type].title}
                </Typography>
                <Grid container alignItems="center" justify="space-around">
                  <Grid item xs={10}>
                    {itemList(type).map(i => (
                      <Grid
                        key={i.name}
                        container
                        className={classes.formGroup}>
                        <FastField
                          name={i.name}
                          label={i.label}
                          margin="normal"
                          component={
                            i.name === 'status'
                              ? Toggle
                              : i.name === 'permissions'
                              ? GroupOptions
                              : TextField
                          }
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions className={classes.actions}>
                <Button onClick={handleClose('form')} variant="contained">
                  キャンセルする
                </Button>
                <Button type="submit" color="primary" variant="contained">
                  {textMap[type].submit}
                </Button>
              </CardActions>
            </Form>
          )}
        />
      </Dialog>
      <Dialog onClose={handleClose('verification')} open={verificationModal}>
        <DialogTitle>{textMap[type].message}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose('verification')}>いいえ</Button>
          <Button onClick={handleCreate} color="primary">
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DemoModal;
