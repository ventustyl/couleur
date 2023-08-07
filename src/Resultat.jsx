import React, { useState } from "react";
import "./Resultat.css";

const Resultat = ({
  couleurPrincipale,
  couleurSecondaire,
  couleurComplementaire,
}) => {
  const hexToRgb = (hex) => {
    hex = hex.slice(1);
    const num = parseInt(hex, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `RGB(${r}, ${g}, ${b})`;
  };

  const [alertMessage, setAlertMessage] = useState("");

  const copyToClipboard = (codeHex) => {
    navigator.clipboard.writeText(codeHex).then(() => {
      setAlertMessage(`Code Hex ${codeHex} copié dans le presse-papiers.`);
      setTimeout(() => {
        setAlertMessage("");
      }, 2000);
    });
  };

  return (
    <div>
      <div
        style={{
          margin: "10px auto",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: couleurPrincipale,
        }}
        onClick={() => copyToClipboard(couleurPrincipale)}
      >
        {couleurPrincipale === "#FFFFFF" ? (
          <>
            <h2 style={{ color: "black" }}>Couleur Aléatoire</h2>
            <p style={{ color: "black" }}>Code Hex: {couleurPrincipale}</p>
            <p style={{ color: "black" }}>
              Code RGB: {hexToRgb(couleurPrincipale)}
            </p>
          </>
        ) : (
          <>
            <h2 style={{ color: "white" }}>Couleur Aléatoire</h2>
            <p>Code Hex: {couleurPrincipale}</p>
            <p>Code RGB: {hexToRgb(couleurPrincipale)}</p>
          </>
        )}
      </div>
      <div
        style={{
          margin: "10px auto",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: couleurSecondaire,
        }}
        onClick={() => copyToClipboard(couleurSecondaire)}
      >
        <h2>Couleur Opposée</h2>
        <p>Code Hex: {couleurSecondaire}</p>
        <p>Code RGB: {hexToRgb(couleurSecondaire)}</p>
      </div>
      <div
        style={{
          margin: "10px auto",
          padding: "10px",
          borderRadius: "20px",
          backgroundColor: couleurComplementaire,
        }}
        onClick={() => copyToClipboard(couleurComplementaire)}
      >
        <h2>Couleur Complémentaire</h2>
        <p>Code Hex: {couleurComplementaire}</p>
        <p>Code RGB: {hexToRgb(couleurComplementaire)}</p>
      </div>
      <div className={`alert ${alertMessage && "show"}`}>{alertMessage}</div>
    </div>
  );
};

export default Resultat;
