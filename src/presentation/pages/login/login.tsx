import React, { useState } from 'react';
import Styles from './login-styles.scss';
import Context from '@/presentation/contexts/form/form-context';

import {
  LoginHeader,
  Footer,
  Input,
  FormStatus,
} from '@/presentation/components';

type StateProps = {
  isLoading: boolean;
  errorMessage: boolean;
};

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: false,
  });

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>

          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <button
            className={Styles.submit}
            type="submit"
            data-testid="submit"
            disabled
          >
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />
    </div>
  );
};

export default Login;
