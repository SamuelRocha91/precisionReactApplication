import client from '../assets/client.png';
import list from '../assets/list.png';
import thermometer from '../assets/thermometer.png'
import '../styles/home.css'

export default function Home() {

  return (
    <main>
      <section className='description-application'>
        <h1>API de medição de água e gás</h1>
        <p>Aproveite nosso serviço integrado a Inteligência Artificial para cadastrar medidores de consumo de água e de gás e manter um controle de gastos.</p>
      </section>
      <div className='routes-features'>
        <div className='route-container'>
          <img src={client} alt="imagem de pessoas" />
          <p>Não tem cadastro ainda? Cadastre agora mesmo seu usuário</p>
          <button className='btn-routes'>Cadastrar consumidor</button>
        </div>
         <div className='route-container' >
          <img id="thermometer" src={thermometer} alt="imagem de pessoas" />
          <p>Cadastre agora mesmo sua medição de consumo gratuitamente!</p>
          <button  className='btn-routes'>Medir consumo</button>
        </div>
         <div className='route-container'>
          <img src={list} alt="imagem de pessoas" />
          <p>Consulte agora mesmo seu histórico mensal de consumo!</p>
          <button  className='btn-routes'>Listar consumo mensal</button>
        </div>
      </div>
    </main> 
  )
}
