import { SubmitHandler, useForm } from 'react-hook-form'
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from './validation'
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../providers/UserContext/UserContext';

export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  repitPass: string;
}

const RegisterForm = () => {
  const { register, handleSubmit, reset ,formState: { errors } } = useForm<iRegisterFormData>({
    resolver: yupResolver(formSchema)
  })

  const { userRegister } = useContext(UserContext)

  const submit: SubmitHandler<iRegisterFormData> = (data) =>{
    userRegister(data)
    reset()
  }

  return(
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input  
        type='text'
        id='name' 
        label='Nome:' 
        register={register('name')} 
        error={errors.name?.message} 
      />

      <Input  
        type='text'
        id='email' 
        label='Email:' 
        register={register('email')} 
        error={errors.email?.message} 
      />

      <Input 
        type='password' 
        id='password' 
        label='Senha:' 
        register={register('password')} 
        error={errors.password?.message} 
      />

      <Input 
        type='password'  
        id='repitPass' 
        label='Repitir Senha:' 
        register={register('repitPass') } 
        error={errors.repitPass?.message}  
      />

      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
      
    </StyledForm>
  )
};

export default RegisterForm;
