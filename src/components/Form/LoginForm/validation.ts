import * as yup from 'yup';

export const formSchema = yup.object().shape({
    email: yup.string().required('campo obrigatório').email('Email invalido'),
    password: yup.string().required('campo obrigatório')
})