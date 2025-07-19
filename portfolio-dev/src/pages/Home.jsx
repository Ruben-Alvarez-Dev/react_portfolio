import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="intro">
                    <h1>Bienvenido a mi Portafolio</h1>
                    <p>Soy un desarrollador apasionado con experiencia en diversas tecnologías. Explora mis proyectos y no dudes en contactarme.</p>
                </section>
                <Portfolio />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Home;