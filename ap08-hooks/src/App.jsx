import Busca from './components/Busca'

// const itens = [
//   {
//     titulo: 'Java',
//     conteudo: 'Linguagem compilada e interpretada.'
//   },
//   {
//     titulo: 'Python',
//     conteudo: 'Linguagem interpretada e dinamicamente tipada.'
//   },
//   {
//     titulo: 'JavaScript',
//     conteudo: 'Interpretada. Executa do lado cliente e do lado servidor também.'
//   }
// ]

const App = () => {
  const expressaoJXS = <Busca />
  return (
    <div>
      { expressaoJXS }
    </div>
  )
}

export default App;