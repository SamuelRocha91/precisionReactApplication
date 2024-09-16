
# MeasureApp Frontend

![Status: Em Desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

## Descrição

O **MeasureApp Frontend** é uma aplicação que oferece uma interface amigável para o gerenciamento de medições de consumo de água e gás. Integrada com Inteligência Artificial, a aplicação permite que os usuários cadastrem medidores, façam o acompanhamento do consumo e mantenham um controle detalhado de gastos. A aplicação faz parte de um sistema completo para otimizar a gestão de recursos de água e gás.

## Funcionalidades

- **Cadastro de Usuários**: Permite que novos consumidores se registrem na plataforma.
- **Medição de Consumo**: Cadastro de medições de água e gás diretamente na interface.
- **Histórico de Consumo**: Consulta do histórico mensal de consumo com gráficos e detalhamentos.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a criação da interface de usuário.
- **Vite**: Ferramenta de construção rápida para desenvolvimento web.
- **React Router**: Navegação entre as rotas da aplicação.
- **SweetAlert2**: Biblioteca para exibição de alertas interativos e amigáveis.

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

1. Clone o repositório:

   ```bash
   git clone https://github.com/SamuelRocha91/measureappfront.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd measureappfront
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse a aplicação no seu navegador no endereço `http://localhost:5173`.

## Estrutura de Pastas

```bash
measureappfront/
├── assets/          # Imagens e recursos visuais da aplicação
├── components/      # Componentes React reutilizáveis
├── styles/          # Arquivos de estilo CSS
├── public/          # Arquivos públicos
├── src/             # Código-fonte da aplicação
└── README.md        # Documentação do projeto
```


Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. Toda ajuda é apreciada!

---

Feito com 💻 por [SamuelRocha91](https://github.com/SamuelRocha91/)