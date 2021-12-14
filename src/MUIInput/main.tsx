import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../store/selectors/usersSelectors";
import { MUInput } from "./components/autocomplete/autocomplete-search";
import { AddUserForm } from "./components/form/add-user-form";
import { UsersTable } from "./components/table/table-users";

export const Main: React.FC = () => {
  const allUsers = useSelector(selectUsers);

  return (
    <Grid container justifyContent="flex-start" flexDirection="column" spacing={4}>
      <Grid item alignSelf="center">
        <AddUserForm />
      </Grid>
      <Grid item>
        <UsersTable users={allUsers} />
      </Grid>
      <Grid item alignSelf="center">
        <MUInput />
      </Grid>
    </Grid>
  );
}
