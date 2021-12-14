import React, { useState } from "react";
import { Button, Grid, TableRow, TextField } from '@mui/material';
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/actions/usersAction";

export const AddUserForm = () => {
    const dispatch = useDispatch();
    const [addedUser, setAddedUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (e) => {
        setAddedUser({
            ...addedUser,
            [e.target.name]: e.target.value,
        })
    }

    const handelSubmit = () => {
        const { firstName, lastName, email } = addedUser;
        if(firstName !== '' && lastName !== '' && email !== '') {
            dispatch(addUser(addedUser));
        }
    }
    
    return (
        <TableRow>
            <Grid container spacing={1} alignItems="center" >
                <Grid item xs={2}>
                    <Button variant="contained" color="info" onClick={handelSubmit}>Add user</Button>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        name="firstName"
                        label="First name"
                        variant="outlined"
                        value={addedUser.firstName}
                        onChange={handleChange}

                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        name="lastName"
                        label="Second name"
                        variant="outlined"
                        value={addedUser.lastName}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        value={addedUser.email}
                        onChange={handleChange}
                    />
                </Grid>

                
            </Grid>
        </TableRow>
    );
}