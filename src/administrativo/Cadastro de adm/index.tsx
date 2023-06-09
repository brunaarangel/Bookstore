import React, { useState } from 'react';
import Header from '../../components/Header';
import { Div, Title, Form } from './styles'

const AdminRegistrationPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch('https://api-ecommerce-livraria.onrender.com/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {

        console.log('Admin cadastrado com sucesso');
      } else {
        // Tratar erro de cadastro
        console.error('Erro ao cadastrar admin');
      }
    } catch (error) {
      console.error('Erro de conexão', error);
    }
  };

  return (
    <div>
     <Header userLoggedIn={true} />
      <Div>
        <Title>Cadastro de Administrador</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit">Cadastrar</button>
        </Form>
      </Div>
    </div>
  );
};

export default AdminRegistrationPage;
