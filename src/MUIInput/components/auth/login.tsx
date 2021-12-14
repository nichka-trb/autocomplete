import React, { useEffect } from "react";
import { Button, Grid, TextField, Typography } from '@mui/material';
import { FlexContaier } from "../common/flex-contanier";
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/actions/authAction";
import { selectAuthError, selectCurrentUser } from "../../../store/selectors/authSelectors";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  form: {
   padding: '20px',
   marginTop: '30px',
  },
  label: {
      marginBottom: 15,
  },
});

export const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const user = useSelector(selectCurrentUser);
    const error = useSelector(selectAuthError);
    const disptach = useDispatch();
    const [authState, setAuthState] = useState({
        email: '',
        password: '',
    })

    useEffect(() => {
        if(user) {
            history.push('/');
        }
    }, [user])

    const handleChange = (e) => {
        setAuthState({
            ...authState,
            [e.target.name]: e.target.value,
        })
    }

    const checkUser = () => {
        disptach(loginUser(authState));
    }

    const showError = error ? <Typography>{error}</Typography> : null

    return (
        <FlexContaier>
        <form className={classes.form} autoComplete="off">
        <Typography variant="h3" component="h4" className={classes.label}>Login</Typography>
            <Grid container flexDirection="column" spacing={2} >
                <Grid item>
                    <TextField
                        name="email"
                        variant="outlined"
                        value={authState.email}
                        onChange={handleChange}
                        label="Email"
                    />
                </Grid>
                <Grid item>
                <TextField
                        name="password"
                        variant="outlined"
                        value={authState.password}
                        onChange={handleChange}
                        label="Password"
                    />
                </Grid>
                <Grid item alignSelf="center">
                <Button color="primary" variant="contained" onClick={checkUser}>
                        Log in
                </Button>
                </Grid>
                {showError}
            </Grid>
        </form>
      </FlexContaier>
    );
}