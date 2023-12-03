// contexts/AuthContext.tsx

import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/apiClient';
import { destroyCookie, setCookie } from 'nookies';
import Router from 'next/router';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, '@nextauth.token');
    Router.push('/');
  } catch {
    console.log('erro ao deslogar');
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | undefined>();
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post('/autenticarAtendente', {
        email: email,
        senha: password,
      });
      console.log('Usuário logado:', user);

      // Se as credenciais são válidas, você pode prosseguir com o login
      const { id, name, token } = response.data;

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mês
        path: '/', // Quais caminhos terão acesso ao cookie
      });

      setUser({
        id,
        name,
        email,
      });

      // Passar para próximas requisições o nosso token
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      // Redirecionar o usuário para /dashboard
      Router.push('/dashboard');
    } catch (err) {
      console.log('ERRO AO ACESSAR ', err);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
