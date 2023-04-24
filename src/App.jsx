import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import HomeScreen from "./pages/homescreen/HomeScreen";
import SearchScreen from "./pages/searchScreen/SearchScreen";
import { Container } from "react-bootstrap";
import "./App.scss";
import LoginScreen from "./pages/loginScreen/LoginScreen";
import {  Route, Routes, useNavigate  } from "react-router-dom";
import { useSelector } from "react-redux";
import WatchScreen from "./pages/watchScreen/watchScreen";
const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />

      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container className="app__main">{children}</Container>
      </div>
    </>
  );
};
const App = () => {
 
   const  data = useSelector(state => state.auth)

   console.log(data);
   const navigate = useNavigate()

   useEffect(()=> {
        
    if(!data.loading && !data.accessToken) {
     navigate('/auth')      
    }
    
   }, [data.accessToken, data.loading])



  return (
    <Routes>
      <Route path="/auth" element={<LoginScreen />} />
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />

      <Route
        path="/search/:query"
        element={
          <Layout>
            <SearchScreen />
          </Layout>
        }
      />

      <Route
        path="/watch/:id"
        element={
          <Layout>
            <WatchScreen />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
