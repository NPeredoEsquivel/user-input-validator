import React, { useState } from "react";
import classes from "./AddUser.module.scss";

const defaultUserState = {
  username: "",
  age: "",
};

const defaultValidationState = {
  username: true,
  age: true,
};

export default function AddUser({ addUserHandler }) {
  const [inputValue, setInputValue] = useState(defaultUserState);
  const [isFormValid, setIsFormValid] = useState(defaultValidationState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (value.trim().length > 0) {
      setIsFormValid((prevState) => {
        return { ...prevState, [name]: true };
      });
    }
    setInputValue((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const validateForm = () => {
    let inputsValidation = defaultValidationState;
    Object.entries(inputValue).forEach((value) => {
      if (value[1].trim().length === 0) {
        inputsValidation = {
          ...inputsValidation,
          [value[0]]: false,
        };
      }
    });
    return inputsValidation;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const inputsValidation = validateForm();
    const isValid = Object.values(inputsValidation).every(
      (value) => value === true
    );
    if (!isValid) {
      setIsFormValid(inputsValidation);
      return;
    }
    let userId = Math.random().toString(36).substring(2, 9);
    addUserHandler({ ...inputValue, userId });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes["input"]}>
        <label htmlFor="username">Username</label>
        <input
          className={`${!isFormValid.username ? classes["invalid-input"] : ""}`}
          type="text"
          name="username"
          value={inputValue.username}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes["input"]}>
        <label htmlFor="years">Years</label>
        <input
          className={`${!isFormValid.age ? classes["invalid-input"] : ""}`}
          type="number"
          name="age"
          value={inputValue.age}
          onChange={handleInputChange}
          min="0"
          max="100"
          step="1"
        />
      </div>
      <div className={classes["submit-button"]}>
        <button type="submit">Add user</button>
      </div>
    </form>
  );
}
