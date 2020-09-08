import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// import { Container } from './styles';

function Policy() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="content">
                        <h2 className="title">Política Privacidade</h2>
                        <p className="texts">A sua privacidade é importante para nós.
                        É política do Dev4U respeitar a sua privacidade
                        em relação a qualquer informação sua que possamos coletar no site <Link className="link" to="/">Dev4U</Link>, 
                          e outros sites que possuímos e operamos.</p>
                        <p className="texts">Solicitamos informações pessoais apenas quando realmente precisamos
                        delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais,
                        com o seu conhecimento e consentimento. Também informamos por que estamos
            coletando e como será usado.</p>
                        <p className="texts">Apenas retemos as informações coletadas pelo tempo
                        necessário para fornecer o serviço solicitado.
                        Quando armazenamos dados, protegemos dentro
                        de meios comercialmente aceitáveis ​​para evitar perdas
            e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
                        <p className="texts">Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
                exceto quando exigido por lei.</p>
                        <p className="texts">O nosso site pode ter links para sites externos que não são operados por nós.
                        Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e
                não podemos aceitar responsabilidade por suas respectivas Políticas de Privacidade.</p>
                        <p className="texts">Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez
                não possamos fornecer alguns dos serviços desejados.</p>
                        <p className="texts">O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno
                        de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados
            do usuário e informações pessoais, entre em contacto connosco.</p>
                        <h3 className="title">Mais informações</h3>
                        <p className="texts">Esperemos que esteja esclarecido e, como mencionado anteriormente,
                        se houver algo que você não tem certeza se precisa ou não,
                        geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa
                em nosso site.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Policy;