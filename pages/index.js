export default function Home() {
  return (
    <div className="black-friday">
      <h1 className="titulo">
        <span className="red-neon">BLACK FRIDAY</span><br />
        <span className="yellow-neon">DESKTOP PROMO</span>
      </h1>

      <div className="planos">
        <div className="plano">
          <h2>600 MEGA</h2>
          <p>HBO Max de cortesia</p>
          <p>Wi-Fi incluso</p>
          <p>600 Mega de download</p>
          <p>300 Mega de upload</p>
          <h3>R$ 99,99</h3>
          <button>Assine já</button>
        </div>

        <div className="plano">
          <h2>1 GIGA</h2>
          <p>HBO Max de cortesia</p>
          <p>Wi-Fi 6 incluso</p>
          <p>1 Giga de download</p>
          <p>500 Mega de upload</p>
          <h3>R$ 119,99</h3>
          <button>Assine já</button>
        </div>

        <div className="plano">
          <h2>GIGA HOME OFFICE</h2>
          <p>HBO Max de cortesia</p>
          <p>1 Giga de velocidade</p>
          <p>Wi-Fi 6 incluso</p>
          <p>Roteador Mesh</p>
          <h3>R$ 169,99</h3>
          <button>Assine já</button>
        </div>
      </div>

      <p className="frase-final">
        DESCUBRA O POTENCIAL DA SUA INTERNET HOJE NA SUA REGIÃO
      </p>

      <style jsx>{`
        .black-friday {
          text-align: center;
          background-color: #0a0a0a;
          color: white;
          padding: 50px 20px;
          font-family: 'Poppins', sans-serif;
        }

        .titulo {
          margin-bottom: 40px;
        }

        .red-neon {
          color: #ff0000;
          text-shadow: 0 0 10px #ff0000, 0 0 20px #ff4444, 0 0 40px #ff0000;
          font-size: 2.8em;
          font-weight: bold;
        }

        .yellow-neon {
          color: #ffcc00;
          text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffaa00, 0 0 40px #ff8800;
          font-size: 2.4em;
          font-weight: bold;
        }

        .planos {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .plano {
          background-color: #f5f5f5;
          color: #111;
          padding: 20px;
          border-radius: 15px;
          width: 240px;
          box-shadow: 0 0 20px rgba(255, 200, 0, 0.2);
        }

        .plano h2 {
          color: #b30000;
        }

        .plano h3 {
          color: #000;
          font-size: 1.5em;
          margin: 15px 0;
        }

        .plano button {
          background-color: #ffcc00;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
        }

        .plano button:hover {
          background-color: #ffaa00;
        }

        .frase-final {
          margin-top: 50px;
          font-size: 1.2em;
          color: #ffcc00;
          text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffaa00;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}



           <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
  {/* Botão WhatsApp */}
  <a
    href="https://wa.me/5519933005880?text=Ol%C3%A1%21%20Tenho%20interesse%20na%20promo%C3%A7%C3%A3o%20Black%20Friday%20Desktop"
    target="_blank"
    rel="noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(90deg, #25D366, #128C7E)",
      color: "#fff",
      padding: "12px 18px",
      borderRadius: 50,
      fontWeight: 700,
      textDecoration: "none",
      fontSize: 15,
      boxShadow: "0 4px 10px rgba(37, 211, 102, 0.3)",
      transition: "transform 0.2s, box-shadow 0.2s",
    }}
    onMouseOver={(e) => {
      e.target.style.transform = "scale(1.05)";
      e.target.style.boxShadow = "0 6px 12px rgba(37, 211, 102, 0.5)";
    }}
    onMouseOut={(e) => {
      e.target.style.transform = "scale(1)";
      e.target.style.boxShadow = "0 4px 10px rgba(37, 211, 102, 0.3)";
    }}
  >
    💬 Falar no WhatsApp
  </a>

  {/* Botão de ligação */}
  <a
    href="tel:+5519933005880"
    style={{
      border: "2px solid #f7b500",
      color: "#f7b500",
      padding: 12,
      borderRadius: 50,
      textAlign: "center",
      fontWeight: 700,
      textDecoration: "none",
      transition: "background 0.2s, color 0.2s",
    }}
    onMouseOver={(e) => {
      e.target.style.background = "#f7b500";
      e.target.style.color = "#111";
    }}
    onMouseOut={(e) => {
      e.target.style.background = "transparent";
      e.target.style.color = "#f7b500";
    }}
  >
    📞 Ligar agora
  </a>
</div>

          </aside>
        </motion.section>

        <footer style={{ textAlign: "center", color: "#9aa0a6", marginTop: 24, fontSize: 13 }}>
          © Desktop — Promoção válida por tempo limitado. Sujeito à disponibilidade técnica.
        </footer>
      </div>
    </div>
  );
}
