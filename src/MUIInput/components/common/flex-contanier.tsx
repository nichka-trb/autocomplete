import { makeStyles } from '@mui/styles';
import React from "react";


const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const FlexContaier: React.FC = ({ children }) => {
const classes = useStyles();
  return (
    <div className={classes.container}>
        {children}
    </div>
  );
}
