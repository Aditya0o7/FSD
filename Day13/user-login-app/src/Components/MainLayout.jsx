import React from "react";
import {Link,Outlet} from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <link to="/login">Login</link>
                </li>
                <li>
                    <link to="/register">Register</link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  );
};

export default MainLayout;