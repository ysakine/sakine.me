import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Développement Backend",
        description:
            "Développer des APIs fiables et bien structurées, intégrer des systèmes (Kafka, Redis, RabbitMQ, etc.) et automatiser les processus clés",
    },
    {
        id: 2,
        image: Image2,
        title: "Accompagnement d’équipes",
        description:
            "Encadrer des développeurs, améliorer les pratiques de l’équipe (revues, CI/CD, TDD...), et faciliter la collaboration avec les autres métiers",
    },
    {
        id: 3,
        image: Image3,
        title: "Architecture & Scalabilité",
        description:
            "Concevoir des architectures solides et évolutives (monolithes clairs ou microservices) adaptées aux besoins métier et aux contraintes techniques",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services