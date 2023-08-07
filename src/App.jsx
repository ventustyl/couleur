import React, { useState } from "react";
import Bouton from "./Bouton";
import Resultat from "./Resultat";
import "./App.css";

const App = () => {
  const [couleurPrincipale, setCouleurPrincipale] = useState("#FFFFFF");
  const [couleurSecondaire, setCouleurSecondaire] = useState("#000000");
  const [couleurComplementaire, setCouleurComplementaire] = useState("#000000");

  const genererCouleurs = () => {
    const nouvelleCouleurPrincipale =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    const nouvelleCouleurSecondaire = invertColor(nouvelleCouleurPrincipale);
    const nouvelleCouleurComplementaire = calculateComplementaryColor(
      nouvelleCouleurPrincipale
    );

    setCouleurPrincipale(nouvelleCouleurPrincipale);
    setCouleurSecondaire(nouvelleCouleurSecondaire);
    setCouleurComplementaire(nouvelleCouleurComplementaire);
  };

  const invertColor = (hex) => {
    hex = hex.slice(1);
    const num = parseInt(hex, 16);
    const invertedNum = 0xffffff ^ num;
    const invertedHex = "#" + invertedNum.toString(16).padStart(6, "0");
    return invertedHex;
  };

  const calculateComplementaryColor = (hex) => {
    const num = parseInt(hex.slice(1), 16);
    const invertedNum = 0x999999 ^ num;
    const invertedHex = "#" + invertedNum.toString(16).padStart(6, "0");
    return invertedHex;
  };

  return (
    <div>
      <h1 style={{ background: `${couleurSecondaire}` }}>
        Projet Générateur de couleur
      </h1>

      <div className="container">
        <div className="main-content">
          <Bouton
            onGenerate={genererCouleurs}
            style={{ background: `${couleurSecondaire}` }}
          />
          <Resultat
            couleurPrincipale={couleurPrincipale}
            couleurSecondaire={couleurSecondaire}
            couleurComplementaire={couleurComplementaire}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
