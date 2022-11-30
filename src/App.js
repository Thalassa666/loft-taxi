import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import AuthProvider from "./pages/AuthContext";
import { pageNames } from "./components/constants";

export const AuthContext = React.createContext();

function App() {
  const [page, setPage] = useState(pageNames.REGISTRATION);

  const onPageChange = (pageName) => {
    setPage(pageName);
  };

  const isLoginPages =
    page === pageNames.LOGIN || page === pageNames.REGISTRATION;

  return (
    <AuthProvider changePage={setPage}>
      <div className="app" data-testid="app">
        {!isLoginPages && <Header onPageChange={onPageChange} />}
        {
          {
            [pageNames.LOGIN]: <Login onPageChange={onPageChange} />,
            [pageNames.REGISTRATION]: (
              <Registration onPageChange={onPageChange} />
            ),
            [pageNames.MAP]: <Map />,
            [pageNames.PROFILE]: <Profile />,
          }[page]
        }
      </div>
    </AuthProvider>
  );
}

export default App;
