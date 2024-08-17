
# Criando Uma Calculadora Com React

Este é um projeto de uma calculadora que foi desenvolvido para atender o desafio do curso - XP Inc. - Full Stack Developer - Módulo: Introdução a Front End com React.


## Foram realizadas as seguinte modificações no código base.


## Adição de Botões e Funcionalidades

Botões Adicionados:

< (Backspace): Remove o último dígito do número atual.

0 (Zero): Adiciona o dígito zero ao número atual.

, (Vírgula): Adiciona uma vírgula (ou ponto) ao número atual, para suportar números decimais.

= (Equals): Realiza a operação matemática baseada na operação selecionada.


## Funções Correspondentes:

handleBack: Remove o último caractere do currentNumber ou redefine o número para '0' se for um único caractere.

handleAddNumber: Adiciona o número ou ponto (,), conforme o botão pressionado.

handleEquals: Executa a operação matemática baseada na operação selecionada e atualiza o resultado no display.


## Operações Matemáticas:

Soma (+): Calcula a soma de dois números. Se firstNumber estiver vazio, é definido o número atual como firstNumber e a operação é definida como soma. Caso contrário, a soma é calculada e exibida.

Subtração (-): Calcula a subtração entre dois números. Funciona de forma semelhante à soma.

Multiplicação (*): Calcula o produto de dois números. Se firstNumber estiver vazio, o número atual é definido como firstNumber e a operação é definida como multiplicação. Caso contrário, o produto é calculado e exibido.

Divisão (/): Calcula a divisão entre dois números. O processo é análogo às operações de soma e subtração.


## Funções Avançadas

PI (π): Adiciona o valor de π ao display do resultado. Implementado com a função handlePi.

Raiz Quadrada (√): Calcula a raiz quadrada do número atual e atualiza o display. Implementado com a função handleSquareRoot.


# Eventos do Teclado

Captura de Teclas: Adiciona suporte para teclas do teclado físico:

Enter: Executa a operação (handleEquals).

Backspace: Remove o último caractere do número (handleBack).

Delete: Limpa a calculadora (handleOnClear).

Operações matemáticas (+, -, *, /): Executa a operação correspondente.

Números (0-9): Adiciona o número ao display.

Vírgula (,): Adiciona um ponto decimal.

π e √: Executa as funções correspondentes para π e raiz quadrada.


# Hooks e Cleanup

useEffect: Adiciona um listener para eventos de teclado (keydown) e remove-o quando o componente é desmontado, garantindo que o evento seja limpo corretamente.

Essas mudanças transformaram a calculadora em uma ferramenta mais completa, com suporte para operações matemáticas básicas e avançadas, além da funcionalidade de teclado.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




