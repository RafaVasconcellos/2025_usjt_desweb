const App = () => {
  return (
    <div className="container border">
      <div className="row">
        <div className="col-12">
          <div>
            <p>Meu Hippo</p>
            <i className="fa-solid fa-hippo"></i>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-3 col-md-6">
          <p className="border border-dark">pedido 1</p>
        </div>

        <div className="col-sm-12 col-lg-3 col-md-6">
          <p className="border border-dark">pedido 2</p>
        </div>

        <div className="col-sm-12 col-lg-3 col-md-6">
          <p className="border border-dark">pedido 3</p>
        </div>

        <div className="col-sm-12 col-lg-3 col-md-6">
          <p className="border border-dark">pedido 4</p>
        </div>
      </div>
    </div>
  )
}

export default App