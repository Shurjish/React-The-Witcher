import { useState } from "react";
import { login } from "./auth/auth";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigator from "./core/Navigator";
import Home from "./pages/Home/Home";
import CardSets from "./pages/CardSets/CardSets";
import Login from "./pages/Login/Login";
import RequiredAuth from "./components/RequiredAuth";
import { ContextProvider } from "./context/context";
import NotFound from "./core/NotFound";

function App() {
  const [user, setUser] = useState(null);

  const authenticated = user != null;

  const loginUser = ({ email, password }) =>
    setUser(login({ email, password }));

  const logoutUser = () => setUser(null);

  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Navigator authenticated={authenticated} logoutUser={logoutUser} />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/cardSets"
              element={
                <RequiredAuth authenticated={authenticated}>
                  <CardSets />
                </RequiredAuth>
              }
            />
            <Route path="/login" element={<Login loginUser={loginUser} loginError={login}/>} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
