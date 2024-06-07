import style from '../styles/signup.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); 
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(''); 

    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      const res = await fetch('/api/auth/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        setSuccess('Signup successful! You will be redirected to your profile.');
        setName('');
        setEmail('');
        setPassword('');

        setTimeout(() =>
          router.push('/home')
          , 2000) // 2 segundos de atraso
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <img className={style.logo} src="/assets/logo.png" alt="Logo da empresa" />
      </div>

      <div className={style.content}>
        <div className={style.form}>
          <h3 className={style.subTitle}>Crie sua conta</h3>
          <input
            className={style.input}
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={style.input}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={style.input}
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className={style.error}>{error}</p>}
          <button className={style.button} type="button" onClick={handleSignup}>
            Criar e acessar
          </button>
        </div>
      </div>

      <div className={style.blackBackground}></div>
      <div className={style.footer}>
        <button className={style.buttonCreate} onClick={() => router.push('/login')}>
          Voltar para o login
        </button>
      </div>
    </div>
  );
}
