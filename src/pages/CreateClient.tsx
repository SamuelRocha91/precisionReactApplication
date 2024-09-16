import { ChangeEvent, useState } from 'react';
import '../styles/register.css'
import Swal from 'sweetalert2';
import { loading } from '../utils/swal';

const URL = import.meta.env.VITE_API_URL;

export default function CreateClient() {

  const [cep, setCep] = useState('');
  const [dataAddress, setDataAddress] = useState({
    address: "",
    state: "",
    city: "",
    neighborhood: ""
  })
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleCep = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setCep(cepMask(value || ''));
  };
    
  const cepMask = (value: string) => {
    if (!value) return '';
    value = value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, -1);
    value = value.replace(/(\d)(\d{3})$/, '$1-$2');
    return value;
  };
    
  const isDisable = () => {
      if (cep && email && name && dataAddress.state) {
        return false
      } else {
        return true
    }
  }
    
  const searchCep = () => {
    event?.preventDefault()
    const formatedCep = cep.replace('-', '');
    fetch(`https://viacep.com.br/ws/${formatedCep}/json/`)
        .then((data) => data.json().then((json) => {
          setDataAddress({
            address: json.logradouro,
            state:  json.uf,
            city: json.localidade,
            neighborhood: json.bairro
          })
        
      })).catch(() => console.log("erro"));
  };
    
  const handleSubmit = () => {
    event?.preventDefault();
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) return Swal.fire("Por favor, preencha um email válido!")
    const data = {
      name: name,
      cep: cep,
      email: email,
      state: dataAddress.state,
      city: dataAddress.city
    }

    loading();
  
    fetch(`${URL}/customer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
     },
      body: JSON.stringify(data)
    }).then((respose) => respose.json())
      .then((info) => {
        Swal.close();
        console.log(info)
      })
      .catch((error) => {
        Swal.close();
        console.error(error);
        Swal.fire("Erro no cadastro do Customer. Tente novamente mais tarde")
      })
  }
  return (
      <form onSubmit={handleSubmit}>
        <h3>Cadastrar Usuário</h3>
        <label htmlFor="name">Nome</label>
        <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="cep">CEP</label>
        <div className='cep-search'>
          <input
          type="text"
          id="cep"
          placeholder="Digite o CEP"
          onChange={(event) => handleCep(event)}
          value={cep}
          />
          <div>
            <button onClick={searchCep} id="cep-search">
              <i className="bi bi-search"></i>
            </button>
          </div>
      </div>
      <label htmlFor="city">Cidade</label>
      <input
      type="text" 
      id="city" 
      value={dataAddress.city}        
      readOnly
      />
      <label htmlFor="state">Estado</label>
      <input 
      type="text"
      id="state" 
      value={dataAddress.state}        
      readOnly
      />
      <label htmlFor="address">Endereço</label>
      <input
      type="text"
      id="address"
      value={dataAddress.address}        
      readOnly
       />
      <label htmlFor="neighborhood">Bairro</label>
      <input 
      type="text"
      id="neighborhood"
      value={dataAddress.neighborhood}        
      readOnly
      />
      <label htmlFor="numberAddress">Número</label>
      <input 
      type="text"
      id="numberAddress"
      />
      <label htmlFor="email">Email</label>
      <input
      type="email" 
      id="email" 
      onChange={ (event) => setEmail(event.target.value)}
      value={email}
      />    
      <button
        type="submit"
        className='btn btn-dark'
        disabled={isDisable()}
        >
        Registrar
      </button>
    </form>
  )
}
