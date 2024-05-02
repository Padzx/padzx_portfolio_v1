// ----> Aboutme Component <----


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './aboutme.scss';

const Aboutme = () => {
    return (
        <section className="aboutme">
            <Container>
                <Row>
                    <Col className="my-4">
                        <div className="title-container">
                            <h2>About Me</h2>
                            <hr />
                        </div>
                        <p>Olá a todos! Me chamo Gabriel Padilha de Siqueira e tenho 21 anos, Atualmente, estou imerso no universo fascinante da Ciência de Dados, estudando na FIAP
                            <span className='purple-text'>(Faculdade de Informática e Administração Paulista)</span> Aqui, tenho tido a oportunidade,minha capacidade analítica, mergulhando fundo em áreas como
                            machine learning e deep learning. Embora o meu foco principal seja <span className='purple-text'>Data Science</span>, sou  sou alguém que gosta de explorar diferentes facetas da tecnologia.
                            Auto como <span className='purple-text'>DevOps</span>, oque me proporcinou uma compreensão ampla e datalhada sobre o ciclo de desenvolvimento de software. Essa experiência me permitiu
                            adquirir conhecimentos sobre sólidos em um ambiente de desenvolvimento e infraestrutura, como redução de falhas e automatização de tarefas, visando a eficiência
                            e a entrega rápida.
                            Além disso, tenho me dedicado ao estudo de tecnologias de nuvem, especialmente na <span className="purple-text">AWS (Amazon Web Services)</span>. Acredito que compreender e dominar essas plataformas (cloud services) é essencial para construir soluções robustas e escaláveis.
                            Sou uma pessoa analítica por natureza, sempre buscando compreender os dados de forma crítica e aprofundada. Acredito que essa abordagem minuciosa é fundamental para o desenvolvimento de aplicações eficazes e impactantes.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Aboutme;
