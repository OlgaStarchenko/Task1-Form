import { useState } from "react";
import styles from "./App.module.css";

export function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

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

  return (
    <div className={styles.container}>
      <div className={styles.error}>Ошибка</div>
      <form className={styles.form} onSubmit={sendData}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => {
            setFormData({ ...formData, email: target.value });
          }}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={({ target }) => {
            setFormData({ ...formData, password: target.value });
          }}
        />
        <input
          type="password"
          placeholder="Повтор пароля"
          value={repeatPassword}
          onChange={({ target }) => {
            setFormData({ ...formData, repeatPassword: target.value });
          }}
        />
        <button type="submit" className={styles.btn}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
