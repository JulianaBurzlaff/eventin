import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../Logo';
import { useUsers } from '../../Hooks/useUsers';
import * as S from './styles';

function AuthTemplate({ children }) {
  const { user } = useUsers();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push('/list');
    }
  }, [user]);

  return (
    <S.Container>
      <S.Header>
        <Logo />
      </S.Header>

      <S.Form>{children}</S.Form>
    </S.Container>
  );
}

export default AuthTemplate;
