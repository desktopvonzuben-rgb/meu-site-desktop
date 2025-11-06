import React from "react";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        color: "white",
      }}
    >
      {/* Banner centralizado */}
      <div
        style={{
          background: "rgba(255, 215, 0, 0.1)",
          border: "2px solid gold",
          borderRadius: "20px",
          padding: "25px 30px",
          boxShadow: "0 0 25px rgba(255,215,0,0.7)",
          marginBottom: "40px",
          maxWidth: "400px",
        }}
      >
        <h1
          style={{
            color: "gold",
            fontSize: "1.9rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          🔥 BLACK FRIDAY DESKTOP PROMO 🔥
        </h1>
        <p
          style={{
            color: "#fff",
            fontSize: "1.1rem",
            marginBottom: "20px",
          }}
        >
          Planos com <strong>HBO Max grátis por 2 meses!</strong>
        </p>
        <a
          href="https://wa.me/5519933005880?text=Quero%20ativar%20minha%20promo%C3%A7%C3%A3o%20Black%20Friday"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#25d366",
            color: "white",
            padding: "12px 25px",
            borderRadius: "50px",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 0 10px rgba(0,0,0,0.4)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Quero ativar agora
        </a>
      </div>

      {/* Plano Gamer */}
      <div
        style={{
          border: "2px solid gold",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 0 15px rgba(255,215,0,0.5)",
          width: "90%",
          maxWidth: "400px",
          marginBottom: "20px",
          background: "rgba(255,255,255,0.05)",
        }}
      >
        <h2 style={{ color: "gold" }}>💻 Plano Gamer</h2>
        <p style={{ marginBottom: "15px" }}>
          Internet super rápida + HBO Max grátis por 2 meses
        </p>
        <a
          href="https://wa.me/5519933005880?text=Quero%20ativar%20o%20Plano%20Gamer"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#25d366",
            color: "white",
            padding: "10px 20px",
            borderRadius: "50px",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          }}
        >
          Quero ativar agora
        </a>
      </div>

      {/* BOTÃO FIXO DO WHATSAPP */}
      <a
        href="https://wa.me/5519933005880?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20saber%20mais!"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          backgroundColor: "#25d366",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 15px rgba(0,0,0,0.4)",
          zIndex: 1000,
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          style={{ width: "35px", height: "35px" }}
        />
      </a>
    </div>
  );
}
