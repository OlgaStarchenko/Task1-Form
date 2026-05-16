import { useState } from "react";
import styles from "./App.module.css";

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const formData = {
    email: email,
    password: password,
    repeatPassword: repeatPassword,
  };
  const sendData = (event) => {
    event.preventDefault();
    console.log(formData);
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.error}>Ошибка</div>
      <form className={styles.form} onSubmit={sendData}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(submit) => setEmail(submit.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(submit) => setPassword(submit.target.value)}
        />
        <input
          type="password"
          placeholder="Повтор пароля"
          value={repeatPassword}
          onChange={(submit) => setRepeatPassword(submit.target.value)}
        />
        <button type="submit" className={styles.btn}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
