export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#0d0d0d", // fundo escuro
        color: "#fff",
        minHeight: "100vh",
        width: "100%",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Cabeçalho Black Friday */}
      <div
        style={{
          background: "linear-gradient(145deg, #111, #222)",
          borderRadius: "15px",
          padding: "15px",
          marginBottom: "25px",
          boxShadow: "0 0 25px #FFD700",
          display: "inline-block",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            textShadow:
              "0 0 10px #ff2b2b, 0 0 20px #ff2b2b, 0 0 30px #ff2b2b",
          }}
        >
          🔥 <span style={{ color: "#ff2b2b" }}>BLACK FRIDAY</span>{" "}
          <span style={{ color: "#FFD700" }}>DESKTOP PROMO</span>
        </h2>
        <a
          href="https://wa.me/5519933005880"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#25D366",
            fontSize: "20px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          (19) 93300-5880
        </a>
      </div>

      {/* Planos */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
        }}
      >
        {[
          {
            nome: "PLANO BÁSICO",
            preco: "R$ 99,90",
            beneficio: "HBO Max grátis por 2 meses",
          },
          {
            nome: "PLANO TURBO",
            preco: "R$ 129,90",
            beneficio: "HBO Max grátis por 2 meses",
          },
          {
            nome: "PLANO GAMER",
            preco: "R$ 149,90",
            beneficio: "HBO Max grátis por 2 meses",
          },
        ].map((plano, i) => (
          <div
            key={i}
            style={{
              background: "linear-gradient(145deg, #111, #1c1c1c)",
              border: "2px solid #FFD700",
              borderRadius: "20px",
              width: "90%",
              maxWidth: "350px",
              padding: "25px",
              boxShadow: "0 0 25px rgba(255,215,0,0.4)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 0 35px rgba(255,215,0,0.8)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 25px rgba(255,215,0,0.4)";
            }}
          >
            <h3 style={{ color: "#FFD700" }}>{plano.nome}</h3>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>{plano.preco}</p>
            <p style={{ fontSize: "16px", color: "#ccc" }}>{plano.beneficio}</p>
            <a
              href="https://wa.me/5519933005880?text=Quero%20ativar%20meu%20plano%20agora!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "15px",
                backgroundColor: "#25D366",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 0 15px rgba(37,211,102,0.5)",
              }}
            >
              Quero ativar agora
            </a>
          </div>
        ))}
      </div>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5519933005880?text=Olá!%20Quero%20saber%20sobre%20a%20promoção%20Black%20Friday."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "65px",
          height: "65px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 20px rgba(0,0,0,0.4)",
          zIndex: 999,
        }}
      >
        <span style={{ fontSize: "30px", color: "white" }}>💬</span>
      </a>
    </div>
  );
}
