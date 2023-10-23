import React from 'react';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import logo from '../tudy.png'
import logo1 from '../totu.JPEG'
import '../style/pages/propos.css'
import Card from 'react-bootstrap/Card';

const Propos = () => {
    return (
        <div className='prop'>
            <Navigation />
            <img className='tudy' src={logo} alt="Logo" />
            <img className='totu' src={logo1} alt="Logo" />
            <Card body className='txt'>À propos de Tudy et Thomas - Créateurs du Job Board <br></br>

Bienvenue sur notre plateforme dédiée à l'emploi et au recrutement ! Nous sommes Tudy et Thomas, les esprits créatifs derrière la conception et le développement de notre job board.
Notre passion pour les technologies de l'information et notre désir d'améliorer la façon dont les personnes trouvent des opportunités professionnelles nous ont poussés à créer cet espace en ligne unique. Notre parcours a commencé il y a quelques années lorsque nous avons décidé de poursuivre nos études en informatique à Epitech, une école renommée pour sa formation en développement informatique.Au fil des années, nous avons acquis des compétences techniques solides et une compréhension approfondie des besoins du marché de l'emploi. Forts de cette expérience, nous avons décidé de combiner nos compétences pour créer un job board novateur.
Notre job board a pour mission de connecter les candidats talentueux avec les employeurs qui recherchent des personnes exceptionnelles pour rejoindre leurs équipes. Nous sommes fiers de fournir une plateforme conviviale et efficace qui facilite la recherche d'emploi et le processus de recrutement.
En travaillant chez Epitech, nous avons eu l'opportunité de collaborer avec des professionnels de l'industrie, d'apprendre les meilleures pratiques de développement, et de développer des solutions informatiques avancées. Aujourd'hui, nous mettons en pratique ces compétences pour améliorer l'expérience de l'emploi et du recrutement pour tous.
Nous sommes convaincus que le job board que nous avons créé peut aider les personnes à réaliser leur potentiel professionnel et aider les entreprises à trouver les talents qui feront avancer leur mission. Nous sommes fiers de contribuer au monde de l'emploi et d'offrir des opportunités aux chercheurs d'emploi et aux employeurs.
N'hésitez pas à explorer notre job board, à découvrir des offres d'emploi passionnantes, et à soumettre vos candidatures. Nous sommes ravis de vous accompagner dans votre parcours professionnel et de vous aider à atteindre vos objectifs.
Si vous avez des questions, des suggestions ou des commentaires, n'hésitez pas à nous contacter. Nous sommes là pour vous et nous nous efforçons constamment de rendre notre job board encore meilleur.
Merci de faire partie de notre communauté et de contribuer à créer un avenir professionnel brillant.

Cordialement, <br></br>
Tudy et Thomas
        </Card>
            <Footer />
        </div>
    );
};

export default Propos;