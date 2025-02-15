import { FormEvent, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import Alert from '../../components/Alert';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubTitle,
  CardTitle,
  Container,
  StyledLink,
  Wrapper,
} from './styles';

type ShowAlert = {
  type: 'error' | 'success';
  message: string;
  isVisible: boolean;
};

type AuthPros = {
  type: 'signin' | 'signup';
};

export default function Auth({ type }: AuthPros) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState<ShowAlert>({
    type: 'error',
    message: '',
    isVisible: false,
  });

  const { handleSignIn, handleSignUp } = useAuth();

  const navigate = useNavigate();

  async function handleOnClick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if ((type === 'signup' && !name) || !email || !password) {
      setShowAlert({
        type: 'error',
        message: 'Preencha todos os campos!',
        isVisible: true,
      });
      return;
    }

    let request: boolean | string;

    if (type === 'signin') {
      request = await handleSignIn({ email, password });
    } else {
      request = await handleSignUp({ name, email, password });
    }

    if (request !== true) {
      let message: string | undefined;

      if (
        request.includes(
          'Input does not meet minimum length requirement of 8 characters'
        )
      ) {
        message = 'A senha precisa ter no mínimo 8 caracteres.';
      }

      if (
        request.includes(
          'Weak password detected. Please use at least 1 letters.'
        )
      ) {
        message = 'A senha precisa ter no mínimo 1 letra.';
      }

      if (request.includes('This account is already in use.')) {
        message = 'Este email já está em uso.';
      }

      setShowAlert({
        type: 'error',
        message:
          typeof request === 'string'
            ? message ?? request
            : 'Erro desconhecido',
        isVisible: true,
      });
      return;
    }

    // redirect user after authentication
    navigate('/');
  }

  useEffect(() => {
    setShowAlert({ type: 'error', message: '', isVisible: false });
  }, [type]);

  return (
    <Wrapper>
      <Container>
        <Alert
          type={showAlert.type}
          isVisible={showAlert.isVisible}
          setIsVisible={(isVisible) =>
            setShowAlert({ ...showAlert, isVisible })
          }
          title={showAlert.message}
        />

        <Card>
          <CardHeader>
            <CardTitle>
              {type === 'signin' ? 'Entre na sua conta!' : 'Criar uma conta!'}
            </CardTitle>
            <CardSubTitle>Insira as informações necessárias!</CardSubTitle>
          </CardHeader>

          <CardBody>
            <form onSubmit={handleOnClick}>
              {type === 'signup' && (
                <TextInput
                  value={name}
                  placeholder="Digite seu nome"
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <TextInput
                value={email}
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextInput
                value={password}
                placeholder="Digite sua senha"
                isTypePassword
                onChange={(e) => setPassword(e.target.value)}
              />

              <CardFooter>
                <Button type="submit" size="md">
                  {type === 'signin' ? 'Entrar' : 'Regstrar-se'}
                </Button>

                {type === 'signin' ? (
                  <StyledLink to="/signup">
                    Não tem uma conta? Clique aqui para criar uma
                  </StyledLink>
                ) : (
                  <StyledLink to="/signin">Já tem conta? Entrar</StyledLink>
                )}
              </CardFooter>
            </form>
          </CardBody>
        </Card>
      </Container>
    </Wrapper>
  );
}
