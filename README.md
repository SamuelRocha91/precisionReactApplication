# <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Full Stack Projects" width="52" height="40" />  MeasureApp Frontend <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Java Projects Logo" width="52" height="40" /> 

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md)

![Status: Em Desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

![Demonstração da Aplicação](./gifs/apiMeasure.gif)


🤖 [Repositório Backend Node](https://github.com/SamuelRocha91/apiMeasureWaterAndGas)


## Descrição

O **MeasureApp Frontend** é uma aplicação web que fornece uma interface amigável para o gerenciamento de medições de consumo de água e gás. Integrada com Inteligência Artificial, permite que os usuários registrem medições, acompanhem o consumo e mantenham um controle detalhado de seus gastos. Esta aplicação faz parte de um sistema completo voltado para a otimização da gestão de recursos de água e gás.

## Funcionalidades

- **Cadastro de Usuários**: Registre novos consumidores na plataforma de forma simples.
- **Medição de Consumo**: Permite a inserção de medições de água e gás diretamente pela interface.
- **Histórico de Consumo**: Exibe o histórico mensal de consumo, com gráficos detalhados.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Vite**: Ferramenta para desenvolvimento web rápido e eficiente.
- **React Router**: Gerenciamento de rotas para navegação entre páginas.
- **SweetAlert2**: Biblioteca para exibição de alertas interativos e customizáveis.

## Dependências

```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.1",
  "sweetalert2": "^11.12.4"
},
"devDependencies": {
  "@eslint/js": "^9.9.0",
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react-swc": "^3.5.0",
  "eslint": "^9.9.0",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.9",
  "globals": "^15.9.0",
  "typescript": "^5.5.3",
  "typescript-eslint": "^8.0.1",
  "vite": "^5.4.1"
}
```

## Como Rodar o Projeto Localmente

### Usando Docker

1. Clone os repositórios:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   git clone git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git
   ```

2. Baixe o arquivo `docker-compose.yml`.
   [Acessar no Google Drive](https://drive.google.com/file/d/1p5MKW3YB5En05Jp5ETWxNbmHllinihiH/view?usp=sharing)

3. Coloque o arquivo `docker-compose.yml` na seguinte estrutura de pastas:
   
   ![Hierarquia de Pastas](./public/pastasDocker.png)

4. Construa as imagens e suba os containers:

   ```bash
   docker-compose up --build
   ```

### Sem Docker

1. Clone o repositório:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd precisionReactApplication
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse a aplicação no seu navegador através do endereço `http://localhost:5173`.

## Estrutura de Pastas

```bash
precisionReactApplication/
├── assets/          # Imagens e recursos visuais
├── components/      # Componentes React reutilizáveis
├── styles/          # Arquivos de estilo CSS
├── public/          # Arquivos estáticos públicos
├── src/             # Código-fonte da aplicação
└── README.md        # Documentação do projeto
```

## Funcionalidades Futuras

- **Responsividade**: Garantir que a interface se ajuste a diferentes tamanhos de tela.
- **Paginação**: Implementação de paginação em telas de consulta de dados.
- **Melhorias de CSS**: Ajustes de estilo para uma interface mais agradável.
- **Testes Unitários e de Integração**: Garantir a qualidade do código com testes automatizados.

## Outros projetos:

- 💎 [Delivery BackEnd](https://github.com/SamuelRocha91/delivery_back) - Backend Ruby On Rails
- 🛒 [Consumy Application](https://github.com/SamuelRocha91/consumy) - Aplicação do consumidor
- 👨‍💼 [Seller Application](https://github.com/SamuelRocha91/seller_application) - Aplicação do vendedor
- 💲 [Paymenty API](https://github.com/SamuelRocha91/paymenty) - API de pagamento

---
