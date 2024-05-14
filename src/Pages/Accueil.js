import {useEffect, useState} from "react";
import axios from 'axios';
import Banner from "../Components/Banner/Banner";
import Cards from "../Components/Cards/Cards";
import {Link} from 'react-router-dom';


function Accueil() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/Data.json').then((res) => setData(res.data));
    }, []);

    return (
        <section className="Home">
            <Banner />
            <div className="cards_container">
            {data.map((appart, id) => (
                <div className="card_logement" key={id}>
                <Link className="link_card_logement" to={`/logement/${appart.id}`}>
                    <Cards cover={appart.cover} title={appart.title} />
                </Link>
            </div>
            ))} 
            </div>
        </section>
    );
}

export default Accueil;