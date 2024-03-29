import React, { useEffect } from "react";
import Layout from "../Layout";
import MasyarakatList from "../../components/masyarakat/MasyarakatList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";

const Masyarakat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/backend/dashboard");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <MasyarakatList />
    </Layout>
  );
};

export default Masyarakat;
