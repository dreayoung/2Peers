import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
  RouteComponentProps,
} from 'react-router-dom';
import NavBar from './Reusable/Navbar';
import ProtectedRoute from './AuthRoutes/ProtectedRoute';
import TwoPeersProvider from './context/TwoPeersProvider';
import routes from './config/pubRoute';
import Classroom from './Classroom/Classroom';
import Teacher from './Teacher/Teacher';
import Student from './Student/Student';

const App: React.FC<{}> = () => (
  <BrowserRouter>
    <TwoPeersProvider>
      <div className="App">
        <NavBar />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            />
          ))}
          <ProtectedRoute exact path="/classrooms/:id" component={Classroom} computedMatch />
          <ProtectedRoute exact path="/teachers/:id" component={Teacher} computedMatch />
          <ProtectedRoute exact path="/student/:id" component={Student} computedMatch />
        </Switch>
      </div>
    </TwoPeersProvider>
  </BrowserRouter>
);

export default App;
