import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup.string().required('campo obrigatório'),
    email: yup.string().required('campo obrigatório').email('Email inválido'),
    password: yup.string().required('campo obrigatório').matches(/(\d)/, 'Deve conter ao menos um número').matches(/[a-z]/, 'Deve conter ao menos uma letra minúscula').matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula').matches(/(\W|_)/, 'Deve conter ao menos um caracter especial').matches(/.{8,}/, 'Deve conter oito ou mais caracteres'),
    repitPass: yup.string().required('campo obrigatório').oneOf([yup.ref('password')], 'As senhas devem coincidir'),
})