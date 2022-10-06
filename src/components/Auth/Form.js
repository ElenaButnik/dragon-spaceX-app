import { useState } from "react";
import s from "./Auth.module.css";

export function Form({ title, handleClick }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  return (
    <div className={s.Form}>
      <input
        className={s.Input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
      />
      <input
        className={s.Input}
        type="password"
        minLength={5}
        maxLength={30}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
        required
      />
      <button className={s.Btn} onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
}
