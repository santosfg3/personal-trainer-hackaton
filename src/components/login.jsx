import Head from 'next/head';
import Image from 'next/image';
import style from '../styles/login.module.css';

function Login() {
  return (
    <div className={style.container}>
   
        <div className={style.logoContainer}>
          <img className={style.logo} src="/assets/logo.png" alt="Logo da empresa" />
          
        </div>
   
      <div className={style.content}>
        <div className={style.form}>
          <h3 className={style.subTitle}>Acesse sua conta</h3>
          <input className={style.input} type="email" placeholder="E-mail" />
         
          <input className={style.input} type="password" placeholder="Senha" />
          <button className={style.button} type="submit" onClick={handleLogin}>Acessar</button>
        </div>
      </div>
      <div className={style.blackBackground}>


      </div>
        <div className={style.footer}>
          <p>Ainda não tem acesso?</p>
          <button className={style.button2}>Criar uma conta</button>
        </div>
    </div>
  );
}

function handleLogin() {
  // Lógica para processar o login do usuário
}

export default Login;
