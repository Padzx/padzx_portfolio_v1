// ----> Aboutme Component <----


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './aboutme.scss';

const Aboutme = () => {
    return (
        <div className="aboutme">
            <Container>
                <Row>
                    <Col className="wrapper">
                        <div className="titleContainer">
                            <h2>About Me</h2>
                            <hr />
                        </div>
                        <div className='textContainer'>
                            <p>
                            Olá a todos! Me chamo Gabriel Padilha de Siqueira e tenho 21 anos, 
                            Atualmente, estou imerso no universo fascinante da <span className='purple-text'>Ciência de Dados</span>, 
                            Estudando na FIAP <span className='purple-text'>(Faculdade de Informática e Administração Paulista)</span> tenho tido a oportunidade, minha capacidade analítica, mergulhando fundo 
                            em áreas como Machine Learning e Deep Learning. Embora o meu foco recente
                            seja em dados, sou alguém que gosto de explorar diferentes facetas da tecnologia,
                            Atuo como <span className='purple-text'>DevOps</span> oque me proporcinou uma compreensão ampla e datalhada sobre o ciclo 
                            de desenvolvimento de software. Essa experiência me permitiu adquirir conhecimentos sobre 
                            sólidos em um ambiente de desenvolvimento e infraestrutura, como redução de falhas e automatização 
                            de tarefas, visando a eficiência e a entrega rápida Além disso, tenho me dedicado ao estudo de 
                            tecnologias de nuvem, especialmente na AWS <span className='purple-text'>(Amazon Web Services)</span> Acredito que compreender e dominar 
                            essas plataformas (cloud services) é essencial para construir soluções robustas e escaláveis. Sou uma 
                            pessoa analítica por natureza, sempre buscando compreender os dados de forma crítica e aprofundada. 
                            Acredito que essa abordagem minuciosa é fundamental para o desenvolvimento de aplicações eficazes e 
                            impactantes.

                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Aboutme;
