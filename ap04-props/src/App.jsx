import Pedido from "./Pedido"

const App = () => {
  return (
    <div className="container border">

      <div className="row">
        <div className="col-12">
          <div>
            <p>Meus Hippos</p>
            <i className="fa-solid fa-hippo fa-3x"></i>
            <i className="fa-solid fa-hippo fa-3x fa-flip-horizontal"></i>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-3 col-md-6">
          <Pedido 
            data="22/04/2024"
            titulo="Café quente"
            descricao="cafzinho"
            icone="mug-hot"
          />
        </div>

        <div className="col-sm-12 col-lg-3 col-md-6">
          <Pedido
            data="14/04/2025"
            titulo="Cookie"
            descricao="Cookie Suculento"
            icone="cookie"
          />
        </div>

        <div className="col-sm-12 col-lg-3 col-md-6">
          <Pedido
            data="14/01/2025"
            titulo="Mobi"
            descricao="Carro pequeno"
            icone="car"
          />
        </div>

        <div className="col-sm-12 col-lg-3 col-md-6">
          <Pedido
            data="14/01/2025"
            titulo="Bicicleta"
            descricao="Bicicletinha"
            icone="bicycle"
          />
        </div>

      </div>
    </div>
  )
}

export default App