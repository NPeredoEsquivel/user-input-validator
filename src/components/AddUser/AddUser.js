import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./AddUser.module.scss";
import Modal from "../../UI/Modal/Modal";

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
  const [renderErrorModal, setRenderErrorModal] = useState(false);
  const [errorModalContent, setErrorModalContent] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (value.trim().length > 0) {
      setIsFormValid((prevState) => {
        return { ...prevState, [name]: true };
      });
      setRenderErrorModal(false);
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

      if (!inputsValidation.username && inputsValidation.age) {
        setErrorModalContent({
          header: "Invalid username",
          body: "Check username value",
        });
      }

      if (inputsValidation.username && !inputsValidation.age) {
        setErrorModalContent({
          header: "Invalid age",
          body: "Check age value",
        });
      }

      if (!inputsValidation.username && !inputsValidation.age) {
        setErrorModalContent({
          header: "Invalid values",
          body: "Check input values",
        });
      }

      setRenderErrorModal(true);
      return;
    }
    let userId = Math.random().toString(36).substring(2, 9);
    setInputValue(defaultUserState);
    addUserHandler({ ...inputValue, userId });
  };

  const modalContent = {
    header: errorModalContent.header,
    body: errorModalContent.body,
    dismissModalHandler: () => setRenderErrorModal(false),
  };

  return (
    <>
      {renderErrorModal && <Modal modalContent={modalContent} />}
      <form onSubmit={onSubmitHandler}>
        <div className={classes["input"]}>
          <label htmlFor="username">Username</label>
          <input
            className={`${
              !isFormValid.username ? classes["invalid-input"] : ""
            }`}
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
          <Button type="submit">Add user</Button>
        </div>
      </form>
    </>
  );
}
