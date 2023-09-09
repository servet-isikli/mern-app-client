import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserRegister = () => {
  const dispatch = useDispatch();
  const registerUser = useSelector((state) => state.users.registerUser);

  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return <div>UserRegister</div>;
};

export default UserRegister;
