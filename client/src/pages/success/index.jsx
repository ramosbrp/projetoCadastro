
import React from 'react';
import * as S from './styled';

import { useHistory } from 'react-router-dom';




export function Success () {
    
    const history = useHistory();
    const home = ()=> {
        history.push('/home');
    }
    
    return(
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column' }} >

                <h1>Olá</h1>

                <S.Button onClick={()=> { home }} >Home</S.Button>
            </div>
        </>

    );
}

