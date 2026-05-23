import { useState } from "react";
import styles from "./App.module.css";

export function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [inputError, setInputError] = useState(null);

  const { email, password, repeatPassword } = formData;

  const sendData = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
      repeatPassword: "",
    });
  };
  console.log(inputError);

  const onBlur = () => {
    if (password.length < 6) {
      setInputError("Пароль должен быть не менее 6 символов");
    }
  };

  const onChange = ({ target }) => {
    const { name, value } = target;

    const newFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(newFormData);

    let error = null;

    if (name === "email" && value === "") {
      error = "Введите адрес электронной почты";
    }

    if (name === "password") {
      if (value.length > 10) {
        error = "Пароль должен быть не более 10 символов";
      }
    }

    if (
      newFormData.password !== "" &&
      newFormData.repeatPassword !== "" &&
      newFormData.password !== newFormData.repeatPassword
    ) {
      {
        error = "Пароли должны совпадать";
      }
    }
    setInputError(error);
  };

  return (
    <div className={styles.container}>
      <div className={styles.error}>{inputError}</div>
      <form className={styles.form} onSubmit={sendData}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          value={password}
          onBlur={onBlur}
          onChange={onChange}
        />
        <input
          name="repeatPassword"
          type="password"
          placeholder="Повтор пароля"
          value={repeatPassword}
          onBlur={onBlur}
          onChange={onChange}
        />
        <button
          type="submit"
          className={styles.btn}
          disabled={
            inputError !== null || !email || !password || !repeatPassword
          }
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
