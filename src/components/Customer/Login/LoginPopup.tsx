import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button, TextField } from '@mui/material';
type Props = {
  classes: { [key: string]: string };
  handleClose: () => void;
  toggleToSignup: () => void;
};

export default function LoginPopup({
  classes,
  handleClose,
  toggleToSignup,
}: Props) {
  return (
    <React.Fragment>
      <div className={classes.LoginHeaderWithBox}>
        <h1 className={classes.LoginHeader}>Log in</h1>
        <CloseIcon className={classes.CloseIcon} onClick={handleClose} />
      </div>
      <label className={classes.Tagline}>Get inside the soul!</label>
      <div className={classes.HorizontalLine}></div>
      <br />

      <TextField
        className={classes.TextField}
        label={'Email Address'}
        size='small'
      />
      <br />
      <TextField
        className={classes.TextField}
        label={'Enter Password'}
        type={'password'}
        size='small'
      />
      <label className={classes.ForgotPassword}>Forgot Password?</label>
      <Button className={[classes.SmallButton, 'ThemeButtonYellow'].join(' ')}>
        Login
      </Button>
      <p className={classes.Tagline}>
        Don&apos;t have an account?
        <span className={classes.ForgotPassword} onClick={toggleToSignup}>
          {' '}
          Sign Up
        </span>
      </p>
    </React.Fragment>
  );
}
