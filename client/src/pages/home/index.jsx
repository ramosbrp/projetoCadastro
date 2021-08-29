import React from 'react';
import * as S from '../../components/style/styled';
import { useHistory } from 'react-router-dom';




export function Home ()  {
    const history = useHistory();
    const register = ()=> {
        history.push('/register');
    }

    return(
        <>
            <h1>Home</h1>
            <S.Button onClick={register} >Registrar </S.Button>
        </>
    )
}