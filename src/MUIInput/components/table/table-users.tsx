import { Paper, TableContainer, Table } from "@mui/material";
import React from "react";
import { UsersTableBody } from "./table-user-body/table-user-body";
import { UsersTableHeader } from './table-user-header/table-user-header';

export const UsersTable = ({ users }) => {
    return (
      <TableContainer component={Paper}>
          <Table>
                <UsersTableHeader />
                <UsersTableBody users={users} />
          </Table>
      </TableContainer>
    );
};