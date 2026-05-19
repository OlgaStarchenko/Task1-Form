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

  const onEmailChange = ({ target }) => {
    setFormData({ ...formData, email: target.value });
    let error = null;

    if (target.value === "") {
      error = "Введите адрес электронной почты";
    }

    setInputError(error);
  };

  const onPasswordChange = ({ target }) => {
    setFormData({ ...formData, password: target.value });

    let error = null;

    if (target.value.length === "" || target.value.length < 6) {
      error = "Пароль должен быть не менее 6 символов";
    } else if (target.value.length > 10) {
      error = "Пароль должен быть не более 10 символов";
    }

    setInputError(error);
  };

  const onRepeatPasswordChange = ({ target }) => {
    setFormData({ ...formData, repeatPassword: target.value });

    let error = null;

    if (password !== target.value) {
      error = "Пароли должны совпадать";
    }

    setInputError(error);
  };

  return (
    <div className={styles.container}>
      {inputError && <div className={styles.error}>{inputError}</div>}
      <form className={styles.form} onSubmit={sendData}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={onPasswordChange}
        />
        <input
          type="password"
          placeholder="Повтор пароля"
          value={repeatPassword}
          onChange={onRepeatPasswordChange}
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
