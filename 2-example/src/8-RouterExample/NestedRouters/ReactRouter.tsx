import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import DetailsUser from "../../7-ApiDetailsExample/DetailsUser";
import FormUser from "../../7-ApiFormExample/FormUser";
import ListUser from "../../7-ApiListExample/ListUser";
import Home from "./Home";
import styles from "./styles.module.css";

function ReactRouter() {
  return (
    <div>
      <BrowserRouter>
        {/* NAVIGATION */}
        <ul className={styles.navigation}>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/listUser">List User</Link>
          </li>
          <li className={styles.link}>
            <Link to="/form">Form</Link>
          </li>
          {/* <li className={styles.link}>
            <Link to="/detail">Detail</Link>
          </li> */}
        </ul>

        {/* ROUTES SETTINGS */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listUser' element={<ListUser />} />
          <Route path='/form' element={<FormUser />} />
          <Route path='/form/:id' element={<FormUser />} />
          <Route path='detail/:id' element={<DetailsUser />} />

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