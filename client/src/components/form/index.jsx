import React, { useState } from 'react';
import axios from 'axios';

import './styles.css';

export function Form() {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [date, setDate] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [gender, setGender] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [tel1, setTel1] = useState('');
    const [tel2, setTel2] = useState('');
    const [cel, setCel] = useState('');
    const [email, setEmail] = useState('');
    const [identity, setIdentity] = useState('');
    const [cpf, setCpf] = useState('');
    const [haveVehicle, setVehicle] = useState('');
    const [driverLisence, setLisence] = useState('');

    async function submitForm(e) {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:5000/register', {
                name,
                profession,
                date,
                maritalStatus,
                gender,
                cep,
                address,
                number,
                neighborhood,
                city,
                state,
                tel1,
                tel2,
                cel,
                email,
                identity,
                cpf,
                haveVehicle,
                driverLisence
            });
            alert('Formulário enviado com sucesso!')
        } catch (err) {
            console.log(err);
        }
    }

    async function findCep() {
        try {
            const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setNeighborhood(result.data.bairro);
            setAddress(result.data.logradouro);
            setCity(result.data.localidade);
            setState(result.data.uf);
        } catch (err) {
            console.log('CEP INVÁLIDO');
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="formPage" >

            <form onSubmit={submitForm} id="form">

                {/* Name Complete */}
                <div>
                    <label>Nome</label>
                    <input name="name" label={`Nome Completo *`} required
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>


                {/* Job Pretended */}
                <div>
                    <label> Cargo pretendido </label>
                    <input name="profession"  required
                        onChange={e => setProfession(e.target.value)}
                        value={profession}
                    />
                </div>

                {/* Birth Date */}
                <div>
                    <label>Data de nascimento</label>
                    <input type="date" name="date" label="Data de Nascimento *" required
                        onChange={e => setDate(e.target.value)}
                        value={date}
                    />
                </div>

                {/* Marital Status */}
                <div>
                    <label>Estado civil</label>
                    <select id="" name="matrialStatus" label="Estado Civil" required
                        onChange={e => setMaritalStatus(e.target.value)}
                        value={maritalStatus}
                    >
                        <option disabled value="">Selecione</option>
                        <option>Solteiro</option>
                        <option>Casado</option>
                    </select>
                </div>

                {/* Gender */}
                <div>
                    <label>Sexo</label>
                    <select id="" name="gender" label="Sexo" required
                        onChange={e => setGender(e.target.value)}
                        value={gender}
                    >
                        <option value="">Selecione..</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </select>
                </div>

                {/* Cep */}
                <div>
                    <label>CEP</label>
                    <input name="cep" required
                        onChange={e => setCep(e.target.value)}
                        onBlur={() => findCep()}
                        maxLength={8}
                        value={cep}
                    />
                </div>

                {/* Neighborhood */}
                <div>
                    <label>Bairro</label>
                    <input label="Bairro *" required
                        onChange={e => setNeighborhood(e.target.value)}
                        value={neighborhood}
                    />
                </div>

                {/* Address */}
                <div>
                    <label>Logradouro</label>
                    <input label="Logradouro *" required
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                    />
                </div>

                {/* Number */}
                <div>
                    <label>Número</label>
                    <input label="numero" required
                        onChange={e => setNumber(e.target.value)}
                        value={number}
                    />
                </div>

                {/* City */}
                <div>
                    <label>Cidade</label>
                    <input label="Cidade *" required
                        onChange={e => setCity(e.target.value)}
                        value={city}
                    />
                </div>

                {/* State */}
                <div>
                    <label>Estado</label>
                    <input label="Estado *" required
                        onChange={e => setState(e.target.value)}
                        value={state}
                    />
                </div>

                {/* Tel Fix 1 */}
                <div>
                    <label>Telefone Fixo 1</label>
                    <input name="tel1" type="number" 
                        onChange={e => setTel1(e.target.value)}
                        value={tel1}
                    />
                </div>

                {/* Tel Fix 2 */}
                <div>
                    <label>Telefone Fixo 2</label>
                    <input name="tel2" type="number" 
                        onChange={e => setTel2(e.target.value)}
                        value={tel2}
                    />
                </div>

                {/* Cel */}
                <div>
                    <label>Cel</label>
                    <input name="cel" type="number" 
                        onChange={e => setCel(e.target.value)}
                        value={cel}
                    />
                </div>

                {/* E-mail */}
                <div>
                    <label>E-mail</label>
                    <input name="name" type="email" label={`Nome Completo *`} required
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                
                {/* Identity */}
                <div>
                    <label>Identidade</label>
                    <input name="identity" label="Identidade *" 
                     onChange={e => setIdentity(e.target.value)}
                     value={identity}/>
                </div>

                {/* CPF */}
                <div>
                    <label>CPF</label>
                    <input name="cpf" label="CPF *" 
                    onChange={e => setCpf(e.target.value)}
                    value={cpf} />
                </div>

                {/* Have Vehicle */}
                <div>
                    <label>Possui Veículo</label>
                    <select name="haveVehicle" label="Possui Veículo" 
                    onChange={e => setVehicle(e.target.value)}
                    value={haveVehicle} >
                        <option selected disabled value="">Selecione</option>
                        <option>Sim</option>
                        <option>Não</option>
                    </select>
                </div>

                {/* Driver Lisence */}
                <div>
                    <label>Habilitação</label>
                    <input name="driverLicense" label="Habilitação" 
                    onChange={e => setLisence(e.target.value)}
                    value={driverLisence} />
                </div>

                <div>
                    <input type="submit" value="submit" />
                </div>
                {name}
                {profession}
                {date}
                {cep}
            </form>
        </div>
    )
}
