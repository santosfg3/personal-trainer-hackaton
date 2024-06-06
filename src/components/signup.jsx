
import style from '../styles/signup.module.css';
 
export default function SignUp() {
    
  return (
    <div className={style.container}>
   
        <div className={style.logoContainer}>
          <img className={style.logo} src="/assets/logo.png" alt="Logo da empresa" />
          
        </div>
   
      <div className={style.content}>
        <div className={style.form}>
          <h3 className={style.subTitle}>Crie sua conta</h3>
         
          <input className={style.input} type="name" placeholder="Nome" />
          <input className={style.input} type="email" placeholder="E-mail" />
          <input className={style.input} type="password" placeholder="Senha" />
          <button className={style.button} type="submit" >Criar e acessar</button>
        </div>
      </div>
      <div className={style.blackBackground}>


      </div>
        <div className={style.footer}>
         
          <button className={style.button2}>Voltar para o login</button>
        </div>
    </div>
    
  );
}





