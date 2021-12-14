import { TableHead, TableRow, TableCell } from "@mui/material";
import React from "react";

export const UsersTableHeader = () => {

    return (
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
    );
};