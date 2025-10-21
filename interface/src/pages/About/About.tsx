import * as React from 'react';

export const About = () => {
    return (
        <div className="about-page-container">
            <div className="about-page">
                <h1 className="about-page-text" style={{textAlign: "justify", marginLeft: "100px", marginRight: "100px"}}>
                    Обучающая диалоговая экспертная система <b>GORESLAVA</b> (<b>G</b>oreslava is an intelligent kn<b>O</b>wl<b>RE</b>dge-<b>S</b>riven <b>LA</b>ssist<b>VA</b>nt),
                    разработанный на основе технологии{' '}
                        <a href="http://ims.ostis.net/" className="text">
                          OSTIS
                        </a>
                    . Обучающая диалоговая экспертная ostis-система GORESLAVA полностью заменяет участие Обучающей
                    диалоговой экспертной системы ЭКО в образовательном процессе по обучению студентов
                    специальностей Белорусского государственного университета информатики и радиоэлектроники
                    интеллектуальным экспертным системам. Новый вариант реализации системы такого класса позволяет
                    расширить круг решаемых задач, устраняет недостатки ранее использованного своего аналога и
                    упрощает и автоматизирует процесс обучения студентов специальностей Белорусского
                    государственного университета информатики и радиоэлектроники в контексте дисциплин, в которых
                    изучаются интеллектуальные экспертные системы.
                </h1>
                <h1 className="about-page-text">
                    Разработано{' '}
                        <a href="https://sem.systems/" className="text">
                          Intelligent Semantic Systems LLC
                        </a>
                    , Все права отсуствуют.{' '}
                </h1>
            </div>
        </div>
    );
}
