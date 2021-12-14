import React, { useEffect } from "react";
import "./App.css";
import { Container, Button } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import { Main } from "./MUIInput/main";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./MUIInput/components/auth/login";
import { selectCurrentUser } from "./store/selectors/authSelectors";
import { useHistory } from "react-router-dom";
import { logoutUser } from "./store/actions/authAction";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const history = useHistory();

  useEffect(() => {
    if(!user) {
      history.push('/login');
    } else {
      history.push('/');
    }
  }, [user]);

  const handleClick = () => {
    dispatch(logoutUser());
  }

  return (
     <Container>
       {
         user ? 
          <Button variant="contained" onClick={handleClick}>
              Logout
          </Button>  : null
       }
       <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/login' component={Login} />
          </Switch>
      </Container>
  );
}

export default App;
