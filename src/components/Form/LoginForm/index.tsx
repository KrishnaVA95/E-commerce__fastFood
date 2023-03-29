import {useForm, SubmitHandler} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';

import { formSchema } from './validation'

import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { UserContext } from '../../../providers/UserContext/UserContext';

export interface iLoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit, reset, formState: { errors }  } = useForm<iLoginFormData>({
    resolver: yupResolver(formSchema)
  })

  const { userLogin } = useContext(UserContext)

  const submit: SubmitHandler<iLoginFormData> = (data) =>{
    // console.log(data)
    userLogin(data)
    reset()
  }

  return(
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input 
        id='email'
        label='Email:'
        type='text'
        register={register('email')}
        error={errors.email?.message}
      />

      <Input 
        id='password'
        label='Senha:'
        type='password'
        register={register('password')}
        error={errors.password?.message}
      />

      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>

  )
}


export default LoginForm;
