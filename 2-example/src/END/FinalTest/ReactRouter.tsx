// import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ListUser from "./ListUser";
// import FormUse1r from "./FormUse1r";
import FormUser from "./FormUser";
// import DetailsUser from "./DetailsUser";
import Home from "./Home";
import styles from "./styles.module.css";
import Login from "./Login";

function ReactRouter() {
  return (
    <div>
      <BrowserRouter>
        {/* NAVIGATION */}
        <ul className={styles.navigation}>
          <li className={styles.link}>
            <Link to="/home">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/listUser">List User</Link>
          </li>
          <li className={styles.link}>
            <Link to="/form">Form</Link>
          </li>
          <li className={styles.link}>

            <Link to="/" onClick={()=>setIsLogin(false)}>{ !Login ? 'Login' : 'Logout'}</Link>
          </li>
        </ul>

        {/* ROUTES SETTINGS */}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/listUser' element={<ListUser />} />
          <Route path='/form' element={<FormUser/>} />
          <Route path='/' element={<Login setIsLogin={setIsLogin}/>}/>

          {/* NO MATCH ROUTE */}
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ReactRouter;

function setIsLogin(arg0: boolean): void {
  throw new Error("Function not implemented.");
}
