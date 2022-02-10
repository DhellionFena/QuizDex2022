import { BoxQuiz, BoxResultado } from "../Base/styled";


const perguntas = [
    '1 - País que tem vontade de conhecer 👀',
    '2 - Bebida preferida 🥤',
    '3 - Comida preferida 🌮',
    '4 - Valor que mais se identifica ✨',
    '5 - Em uma reunião eu sou...',
    '6 - Em um Reg sou...',
    '7 - Em dia de RG sou... ',
    '8 - Em um momento de lazer eu...',
    '9 - Se eu fosse comprar algo em promoção na shopee...',
    '10 - Por má sorte da vida faria um projeto para um cliente...',
    '11 - Na EDL eu seria...',
    '12 - Se eu não estivesse em engenharia cursaria...',
]

//Angelica: 1
// Tonho: 2
// Kinha: 3
// Jojo: 4
// Rod: 5
const options = [
    {
        opt: ['França', 'Croácia', 'Japão', 'Canadá', 'Holanda'],
        values: [1, 3, 2, 5, 4]
    },
    {
        opt: ['Café', 'Iogurte de Frutas', 'Cerveja', 'Chá de Pêssego', 'Suco de Goiaba'],
        values: [1, 4, 3, 2, 5]
    },
    {
        opt: ['Pizza', 'Haclette', 'Brócolis', 'Lasanha', 'Tortas (doces ou salgadas)'],
        values: [5, 3, 1, 4, 2]
    },
    {
        opt: ['União', 'Resiliência', 'Energia', 'Projetos', 'Qualidade'],
        values: [4, 5, 1, 2, 3]
    },
    {
        opt: ['Quem media a reunião', 'Do contra', 'Quem escuta a maior parte do tempo', 'Quem fala pá porra', 'Quem viaja'],
        values: [5, 3, 2, 1, 4]
    },
    {
        opt: ['Quer dar selinho em todo mundo ', 'Quem bebe e começa a dar risada até do poste', 'O que ingere 0 álcool', 'Quem embebeda os outros', 'Observador(a)'],
        values: [2, 4, 5, 3, 1]
    },
    {
        opt: ['Quem pede carona', 'Quem mora na pqp', 'Quem se atrasa', 'Quem participa de todas as pautas', 'Quem ama o momento de chamada e o "1, 2, 3 FLUXO DE CAIXA"'],
        values: [3, 1, 2, 5, 4]
    },
    {
        opt: ['Fico vendo anime/bbb', 'Amo ir na praia pra ouvir o mar', 'Fico assistindo Casimiro', 'Gosto de ficar na paz, bem de boa', 'Jogo uns video-games'],
        values: [2, 3, 4, 1, 5]
    },
    {
        opt: ['Produtos tecnologicos', 'Itens de papelaria', 'Uma esteira de academia', 'Produtos +18', 'Ficaria apenas olhando até desistir de comprar'],
        values: [4, 1, 5, 2, 3]
    },
    {
        opt: ['Sonivan', 'Arita', 'SDW for All', 'Seringas', 'Odonto'],
        values: [5, 4, 3, 1, 2]
    },
    {
        opt: ['Quem manteve a sanidade mental e dormiu cedo', 'Quem deu PT', 'Que dorme cedo pra conseguir treinar no dia seguinte', 'Quem caçou um benchlove', 'Quem tem curiosidade atacada e quer fazer de tudo ao mesmo tempo'],
        values: [1, 4, 3, 2, 5]
    },
    {
        opt: ['Artes Cênicas', 'Arquitetura', 'Medicina', 'Psicologia', 'Streamer'],
        values: [2, 3, 4, 1, 5]
    },
]

export const Quiz = (props) => {

    const handleEscolha = (e) => {
        props.escolher(e.target.value);
    }

    if (props.pagina === 0) {
        return (
            <>
                <h2>Instruções:</h2>
                <ul>
                    <li>Aperte o botão abaixo deste card para começar 💅</li>
                    <li>Irão surgir umas perguntas e você deve marcar com base nos seus gostos 😈</li>
                    <li>Quando receber o resultado final, mande um print no grupão para darmos umas risadas 😎</li>
                    <li>Divirta-se e Pra cima! 💙💖🚀</li>
                </ul>
            </>
        )
    }
    else if (props.pagina === 13) {
        let result = props.result()
        props.setTitle("Parabéns! Você se parece com " + result.nome +"!")

        return (
            <>
                <BoxResultado>
                    <img src={result.foto} alt="foto de kinha" />
                </BoxResultado>
            </>
        )
    }
    else {
        props.setTitle(perguntas[props.pagina - 1])
        return (
            <>
                <BoxQuiz>
                    <label for="Escolha1">
                        <input type="radio" id="Escolha1"
                            name="options" value={options[props.pagina - 1].values[0]} onChange={handleEscolha} />
                        {options[props.pagina - 1].opt[0]}
                    </label>

                    <label for="Escolha2">
                        <input type="radio" id="Escolha2"
                            name="options" value={options[props.pagina - 1].values[1]} onChange={handleEscolha} />
                        {options[props.pagina - 1].opt[1]}
                    </label>
                    <label for="Escolha3">
                        <input type="radio" id="Escolha3"
                            name="options" value={options[props.pagina - 1].values[2]} onChange={handleEscolha} />
                        {options[props.pagina - 1].opt[2]}
                    </label>
                    <label for="Escolha4">
                        <input type="radio" id="Escolha4"
                            name="options" value={options[props.pagina - 1].values[3]} onChange={handleEscolha} />
                        {options[props.pagina - 1].opt[3]}
                    </label>
                    <label for="Escolha5">
                        <input type="radio" id="Escolha5"
                            name="options" value={options[props.pagina - 1].values[4]} onChange={handleEscolha} />
                        {options[props.pagina - 1].opt[4]}
                    </label>
                </BoxQuiz>
            </>
        )
    }
}