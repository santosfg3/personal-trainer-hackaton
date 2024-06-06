// pages/signup.js

import style from '../styles/signup.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Novo estado para mensagem de sucesso
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(''); // Reseta a mensagem de sucesso

    // Validação no frontend
    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Se o usuário for criado com sucesso, define a mensagem de sucesso
        setSuccess('Signup successful! You will be redirected to your profile.');
        // Limpa os campos do formulário
        setName('');
        setEmail('');
        setPassword('');

        // Redireciona para a página de perfil após um curto atraso
        setTimeout(() =>
          router.push('/profile')
          , 2000) // 2 segundos de atraso
      } else {
        // Se ocorrer algum erro durante a criação do usuário, defina a mensagem de erro
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
        <button className={style.button2} onClick={() => router.push('/login')}>
          Voltar para o login
        </button>
      </div>
    </div>
  );
}
