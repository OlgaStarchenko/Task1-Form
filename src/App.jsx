import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <div className={styles.error}>Ошибка</div>
      <form className={styles.form}>
        <input type="email" placeholder="Почта" />
        <input type="password" placeholder="Пароль" />
        <input type="password" placeholder="Повтор пароля" />
        <button type="submit" className={styles.btn}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
