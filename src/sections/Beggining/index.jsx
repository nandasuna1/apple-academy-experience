import React, { useRef, useState } from 'react';
import Map from '../../component/Map';
import { ComputerBox, Container } from './styled';
import { NavLink } from 'react-router-dom';

// import { Container } from './styles';

function Beggining() { 
    const inputRef = useRef(null)
    const [hasSetPassword, setHasSetPassword] = useState(false)

    function handleAnswer(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const valorInput = inputRef.current.value
            console.log('Valor do input:', valorInput);
            setHasSetPassword(true)
            // Adicione aqui a ação que você deseja realizar ao pressionar "Enter"
        }
    }
    return (
        <Container>
            <NavLink to='/main'>{'<'} Voltar</NavLink>
            <div>
            {!hasSetPassword && 
            <ComputerBox>
            <p>C:\User\Recifense\orgulhosa{'>'} Aperte Enter para enviar a senha</p>
            <p>C:\User\Recifense\orgulhosa{'>'} Senha:*****</p>
            <p>C:\User\Recifense\orgulhosa{'>'} {'[Error]'} Dica: Capital do país Pernambuco</p>
            <form onSubmit={handleAnswer}>
            <p>C:\User\Recifense\orgulhosa{'>'} Senha:</p>
                <input placeholder='___________' onKeyDown={handleAnswer} ref={inputRef}/>
            </form>

            </ComputerBox>
            }
            {hasSetPassword && 
                <ComputerBox>
                    <p>ConfFile{'>'}ARQUIVO CONFIDENCIAL</p>
                    <p>ConfFile{'>'} Nome: Fernanda Barbosa de Pinho</p>
                    <p>ConfFile{'>'} Filiação: M° Alice V. Barbosa Pinho & Antônio Fernanda Monteiro de Pinho</p>
                    <p>ConfFile{'>'} Nascimento: Recife, PE</p>
                    <p>ConfFile{'>'} Atividade suspeita: Estudo de diversas tecnologias {'[f309 - Demasiado interesse por informações]'}</p>
                </ComputerBox>
            }
            </div>
        </Container>
    );
}

export default Beggining;