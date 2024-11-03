import styled from "styled-components";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const SignUp = () => {
    const schema = yup.object().shape({
        email: yup.string().email("이메일을 정확히 입력해 주세요."),
        password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required(),
    })
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log('폼 데이터 제출')
        console.log(data);
    }
    return (
        <Signup>
            <SingnupContainer>
                <h1>로그인</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input type={'email'} {...register("email")} placeholder='이메일을 입력해주세요!'/>
                    <p style={{color: 'red'}}>{errors.email?.message}</p>
                    <Input type={'password'} {...register("password")} placeholder='비밀번호를 입력해주세요!'/>
                    <p style={{color: 'red'}}>{errors.password?.message}</p>
                    <Submit type={'submit'} value='로그인' isValid={isValid}/>
                </Form>
            </SingnupContainer>
        </Signup>
    );
};

export default SignUp;

const Signup = styled.div`
    height: 90vh;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 2rem;
    color:white;
`
const SingnupContainer = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Form = styled.form `
    margin-top: 1rem;
    width: 100%;
`
const Input = styled.input`
    display: flex;
    width: 100%;
    border-radius: 15px;
    padding: 1rem;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 1rem;
`
const Submit = styled.input`
    width: 100%;
    border-radius: 15px;
    padding: 1rem;
    border: none;
    background-color: ${props => props.isValid ? '#FC2D61':'grey'};
    color: white;
    font-weight: bold;
    font-size: 1rem;
    &:hover {
        background-color: white;
        color: black;
    }
`