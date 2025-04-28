import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const textoOK = "Chegou";
  const textoNOk = "Não chegou";

  const funcaoOK = () => alert("Obrigad(o) pelo feedback!");
  const funcaoNOK = () => alert("Verificaremos!");

  const componenteFeedback = (
    <Feedback 
    textoOK={textoOK}
      textoNOk={textoNOk}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  )

  return (
    <div className="container border">

      <div className="row">
        <div className="col-12">
          <div>
            <p>Meus Hippos</p>
            <i className="fa-solid fa-hippo fa-3x"></i>
            <i className="fa-solid fa-hippo fa-3x fa-flip-horizontal"></i>
            <i className="fa-solid fa-hippo fa-2x fa-flip-horizontal"></i>
            <i className="fa-solid fa-hippo fa-2x fa-flip-horizontal"></i>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-3 col-md-6">
          <Cartao cabecalho="22/04/2024">
            <Pedido 
              titulo="Café quente"
              descricao="cafzinho"
              icone="mug-hot"
            />
            { componenteFeedback }
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-3 col-md-6">
          <Cartao cabecalho="14/04/2025">
            <Pedido
              titulo="Cookie"
              descricao="Cookie Suculento"
              icone="cookie"
            />
            { componenteFeedback }
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-3 col-md-6">
          <Cartao cabecalho="14/01/2025">
            <Pedido
              titulo="Mobi"
              descricao="Carro pequeno"
              icone="car"
            />
            { componenteFeedback }
          </Cartao>
        </div>

        <div className="col-sm-12 col-lg-3 col-md-6">
          <Cartao cabecalho="14/05/2025">
            <Pedido
              titulo="Bicicleta"
              descricao="Bicicletinha"
              icone="bicycle"
            />
            { componenteFeedback }
          </Cartao>
        </div>

      </div>
    </div>
  )
}

export default App