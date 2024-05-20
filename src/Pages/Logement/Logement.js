import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carrousel from '../../Components/Carrousel/Carrousel';
import Rating from '../../Components/Rating/Rating';
import Tags from '../../Components/Tags/Tags';
import Collapse from '../../Components/Collapse/Collapse';
import { useParams, useNavigate } from 'react-router-dom';

function Logement() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);
    const [firstName, lastName] = logement ? logement.host.name.split(' ') : ['', ''];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/Data.json'); 
                const selectedLogement = response.data.find(logement => logement.id === id);

                if (selectedLogement) {
                    setLogement(selectedLogement);
                } else {
                    navigate('*');
                }
                
            } catch (error) {
                console.error('Error fetching data:', error);
                navigate('*');
            }
        };

        fetchData();
    }, [id]); 

    return (
        <div>
            <div className="logement">
                <Carrousel slides={logement ? logement.pictures : []} />
                <div className="logement-info-tags-rating-host">
                    <div className="logement-info-tags">
                        {logement && (
                            <>
                            <div className='logement-info-container'>
                                <h2 className="logement-title">{logement.title}</h2>
                                <p className="logement-location">{logement.location}</p>
                            </div>
                            </>
                        )}
                        <div className="tags-container">
                            {logement && logement.tags && logement.tags.map((tag) => (
                                <Tags key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>
            
                    <div className="rating-host-wrapper">
                        <div className="host-wrapper">
                            <div className="host-name">
                                {firstName}
                                <br />
                                {lastName}
                            </div>
                            <img
                                className="host-picture"
                                src={logement ? logement.host.picture : ''}
                                alt="Host"
                            />
                        </div>
                        <div className="rating">
                            <Rating rating={logement ? logement.rating : []} />
                        </div>
                    </div>

                </div>
            </div> 
            <div className='logement-collapse'>
                {logement && (
                    <>
                        <Collapse
                            aproposTitle="Description"
                            aproposText={<p>{logement.description}</p>}
                            aproposStyle="description-style" 
                        />
                        {logement.equipments && logement.equipments.length > 0 && (
                            <Collapse
                                aproposTitle="Équipements"
                                aproposText={
                                    <ul className="equip-list">
                                        {logement.equipments.map((equipment, index) => (
                                            <li key={index}>{equipment}</li>
                                        ))}
                                    </ul>
                                }
                                aproposStyle="equipments-style" 
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Logement;
