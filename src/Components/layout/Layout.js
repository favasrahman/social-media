import Sidenav from "components/sidebar/Sider";
import { useAuth } from "hooks/Auth";
import { LOGIN } from "lib/Routes";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {user, isLoading} = useAuth();
  
useEffect(() => {
    if (pathname.startsWith('/protected') && !user){
        navigate(LOGIN)
    }
}, [pathname, user])
  
if (isLoading) return "Loading...";
  return (
    <>
     <Sidenav />
     <Outlet />
    </>
  );
}

export default Layout;
