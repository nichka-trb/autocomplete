import { TableRow, TableCell, TableBody, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../../store/actions/usersAction";

export const UsersTableBody = ({ users }) => {
    const dispatch = useDispatch();
    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id))
    }
    return (
        <TableBody>
        {
            users.map(({ id, firstName, lastName, email }) => 
            <TableRow>
                <TableCell>{firstName}</TableCell>
                <TableCell>{lastName}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>
                    <Button variant="contained" color="error" onClick={() => handleDeleteUser(id)}>Delete</Button>
                </TableCell>
            </TableRow>
            )
        }
    </TableBody>
    );
};