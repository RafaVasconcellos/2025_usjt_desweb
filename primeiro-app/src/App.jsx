import './styles.css'

const App = () => {
    const estilosBotao = {
        marginTop: 12,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: 'blueviolet',
        borderRadius: 8,
        width: '100%',
        color: 'white',
        cursor: 'pointer',
        borderStyle: 'none'
    };

    const textoDoRotulo = 'Nome:';

    const textoBotao = () => 'Enviar';

    const onBotaoClicado = () => alert('ok, clicou')

    return (
        <div style={{
            margin:'auto',
            width: 768,
            backgroundColor: '#EEE',
            padding: 12,
            borderRadius: 8
        }}>
            <label htmlFor='nome' style={{
                display: 'block',
                marginBottom: 4,
            }}>{ textoDoRotulo }</label>
            <input type="text" style={{
                paddingTop: 8,
                paddingBottom: 8,
                borderStyle: 'hidden',
                outline: 'none',
                width: '100%',
                borderRadius: 8
            }}/>
            <button
                type='button'
                style={ estilosBotao }
                onClick={ onBotaoClicado }
            >
                { textoBotao() }
            </button>

        </div>
    )
}

export default App








// function oi1(nome){
//     console.log('oi' + nome)
//     return nome[0]
// };

// console.log('seu nome começa com: ' + oi1('rafa'));

// // arrow functions
// const oi2 = () => {};
// oi2();

// const oi3 = nome => console.log('Oi, ' + nome);
// oi3();

// const dobro = (n) => {return 2 * n};
// const resultado = dobro(5);
// console.log(resultado);
