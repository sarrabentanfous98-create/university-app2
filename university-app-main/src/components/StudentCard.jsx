
import './StudentCard.css';
import { useState } from 'react';

function StudentCard(props) {
 
  const [coordonneesVisibles, setCordonneesVisibles] = useState(false);

  const toggle = () => {
    setCordonneesVisibles(!coordonneesVisibles);
  }
  

  return (
    <div className='container'>
      <div>
       <img src={props.image} alt="Image de l'étudiant" />
        <h1>Fiche Étudiant</h1>
      </div>

      <div>
          <p>Nom & Prenom : {props.nom + " " + props.prenom}</p>
          {coordonneesVisibles && ( 
            <>
              <p>Email : {props.email}</p>
              <p>Téléphone : {props.tel}</p>
            </>
          )
          }
          <p>Filière : {props.filiere}</p>
          <p>Année d'etude : {props.annee}</p>
          <p>Groupe : {props.groupe}</p>
          <p>Ville : {props.ville}</p>
          

        <button onClick={toggle}>{coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}</button>
        <button onClick={() => props.supprimer(props.email)}>Supprimer</button>
        <button onClick={() => props.modifier(props.email)}>Modifier</button>
        <a href={"mailto: "+props.email}>
          <button>Contacter</button>
        </a>
      </div>
    </div>
    
  )
}

export default StudentCard;