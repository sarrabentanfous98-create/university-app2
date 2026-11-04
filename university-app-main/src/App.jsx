import './App.css'
import StudentCard from './components/StudentCard.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import image1 from './assets/photo.jpg';
import image2 from './assets/photo1.jpg';
import { useState } from 'react'

function App() {
 const [etudients, setEtudient] = useState([
  {
  prenom : "sarra",
  nom : "tanfous",
  email : "sarrabentanfous98@gmail.com",
  tel : "52216223",
  filiere : "Génie Logiciel et systèmes d'information",
  annee : "2026/2027",
  groupe : "GLSI 2",
  ville : "djerba",
   image: image1
  
  },
  {
  prenom : "tasnim",
  nom : "touinsi",
  email : "tasnimtouinsi@gmail.com",
  tel : "99999999",
  filiere : "Génie Logiciel et systèmes d'information",
  annee : "2026/2027",
  groupe : "GLSI 2",
  ville : "mahdia",
 image: image2
  },
  ]);

  const ajouterEtudient = () => {
    const newStudent = {...etudients.at(-1)};
    newStudent.email = newStudent.email + "m";
    setEtudient([...etudients, newStudent]);
  }

  const supprimerEtudient = (email) => {
    setEtudient(etudients.filter((etudient) => etudient.email !== email));
  }
  
  const modifierEtudient = (email) => {
    const nouvPrenom = prompt("Entrer le nouvel prenom : ");
    let nouvEtudients = [];

    etudients.map((etudient) => {
      if (etudient.email === email){
        etudient.prenom = nouvPrenom;
      }
      nouvEtudients = [...nouvEtudients, etudient];
    })
    setEtudient([...nouvEtudients])
  }
  const [rech,setRech] = useState("");
  const filtredEtudients = etudients.filter((etudient) => 
    etudient.prenom.toLowerCase().includes(rech.toLowerCase()) ||
    etudient.nom.toLowerCase().includes(rech.toLowerCase()) ||
    etudient.filiere.toLowerCase().includes(rech.toLowerCase())
    );


  return (
    <div className='container'>
      <Header />
      <Navbar />
      <div>
        <label>recherche : </label>
        <input type="text" onChange={(e) => setRech(e.target.value)}/>
        <button onClick={ajouterEtudient}>Ajouter Etudient</button>
      </div>
      {filtredEtudients.map((etudient) => (
        <StudentCard
          prenom={etudient.prenom}
          nom={etudient.nom}
          email={etudient.email}
          tel={etudient.tel}
          filiere={etudient.filiere}
          annee={etudient.annee}
          groupe={etudient.groupe}
          ville={etudient.ville}
          image={etudient.image}
          age={etudient.age}
          supprimer={supprimerEtudient}
          modifier={modifierEtudient}
          key={etudient.email}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App;