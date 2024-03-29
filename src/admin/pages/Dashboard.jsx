import React, { useEffect } from "react";
import Layout from "./Layout";
import Welcome from "../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LelangBList from "../components/lelangberlangsung/LelangBerlangsung";
import { getMe } from "../../features/authSlice";
import PemenangLelang from "../components/Pemeneng/PemenangLelang";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Layout>
     <Welcome />
     <LelangBList />
     {user && user.role === "petugas" && (
     <PemenangLelang/>
     )}
    </Layout>
    </>
  );
};
export default Dashboard;