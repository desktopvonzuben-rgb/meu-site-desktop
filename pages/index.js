import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const WA_NUMBER = "5519933005880"; // número com DDI

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead enviado:", formData);
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="page-root">
      <div className="container">
        <header className="topbar">
          <div className="brand">
            <div className="logo">D</div>
            <div className="brand-text">
              <div className="brand-title">DESKTOP</div>
              <div className="brand-sub">Internet residencial e empresarial</div>
            </div>
          </div>
          <div className="contact-top">
            <div className="bf-label">
              🔥 <span className="neon-red-pulse">BLACK FRIDAY</span>
            </div>
            <div className="phone-top">(19) 93300-5880</div>
          </div>
        </header>

        <main>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-grid"
          >
            <div className="hero-left">
              <div className="neon-title">
                <span className="neon-red-pulse">BLACK FRIDAY</span>
                <div className="desktop-promo">
                  <span className="neon-yellow-fire">DESKTOP PROMO</span>
                </div>
              </div>

              <div className="banner-cta neon-border">
                <div className="banner-inner">
                  <div className="banner-title">
                    Planos de 600 Mega e 1 Giga — Oferta Black Friday
                  </div>
                  <div className="banner-sub">
                    HBO Max grátis por 2 meses + Wi-Fi incluso. Ativação rápida e suporte local.
                  </div>
                </div>
              </div>

              <div className="plans-wrap">
                {[
                  {
                    title: "600 MEGA",
                    features: [
                      "HBO Max grátis por 2 meses",
                      "Wi-Fi incluso",
                      "600 Mega de download",
                      "300 Mega de upload",
                    ],
                    price: "R$ 99,99",
                  },
                  {
                    title: "1 GIGA",
                    features: [
                      "HBO Max grátis por 2 meses",
                      "Wi-Fi 6 incluso",
                      "1 Giga de download",
                      "500 Mega de upload",
                    ],
                    price: "R$ 119,99",
                  },
                ].map((p, i) => (
                  <motion.article
                    key={i}
                    whileHover={{ scale: 1.04 }}
                    className="plan-card neon-border-plan"
                  >
                    <div className="badge">BLACK FRIDAY</div>
                    <h3 className="plan-title">{p.title}</h3>
                    <ul className="plan-features">
                      {p.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                    <div className="plan-price">{p.price}</div>
                    <a
                      className="plan-cta"
                      href={`https://wa.me/${WA_NUMBER}?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20${encodeURIComponent(
                        p.title
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Quero ativar agora
                    </a>
                  </motion.article>
                ))}
              </div>

              <div className="discovery neon-border">
                <strong>DESCUBRA O POTENCIAL</strong>
                <br />
                <span className="highlight">DA SUA INTERNET HOJE</span>{" "}
                <span className="muted">na sua região.</span>
              </div>
            </div>

            <aside className="hero-aside neon-border-form">
              {!submitted ? (
                <form className="lead-form" onSubmit={handleSubmit}>
                  <h4 className="form-title">🚀 Garanta já sua oferta exclusiva</h4>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Seu WhatsApp (ex: 19933005880)"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensagem (opcional)"
                  />
                  <button type="submit" className="submit-btn">
                    Enviar
                  </button>
                </form>
              ) : (
                <div className="sent-box">
                  <div className="sent-ok">✅ Enviado com sucesso!</div>
                  <div className="sent-txt">Vamos retornar pelo WhatsApp!</div>
                </div>
              )}

              <div className="side-actions">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Quero%20a%20promo%20Black%20Friday%20Desktop!`}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-link"
                >
                  💬 Falar no WhatsApp
                </a>
                <a href="tel:+5519933005880" className="call-link">
                  📞 Ligar agora
                </a>
              </div>
            </aside>
          </motion.section>
        </main>

        <footer className="footer">
          © Desktop — Promoção válida por tempo limitado.
        </footer>
      </div>

      <a
        className="float-cta"
        href={`https://wa.me/${WA_NUMBER}?text=Ol%C3%A1!%20Quero%20o%20Plano%20Black%20Friday`}
        target="_blank"
        rel="noreferrer"
      >
        💬 QUERO ATIVAR AGORA
      </a>

      <style jsx>{`
        :root {
          --accent: #ffbf00;
          --neon-red: #ff2b2b;
          --neon-yellow: #ffd000;
          --muted: #bfc3c7;
        }

        .page-root {
          min-height: 100vh;
          color: #fff;
          font-family: "Poppins", sans-serif;
          padding: 20px;
          background: radial-gradient(circle at top, #000 20%, #080808 90%);
        }

        .container { max-width: 1100px; margin: 0 auto; }

        .topbar {
          display:flex; justify-content:space-between; align-items:center;
          margin-bottom:18px; gap:12px;
        }
        .brand { display:flex; align-items:center; gap:12px; }
        .logo { width:48px; height:48px; border-radius:10px; background:linear-gradient(135deg,#111,var(--accent)); display:flex; align-items:center; justify-content:center; color:#111; font-weight:800; }
        .brand-title { font-weight:800; font-size:18px; }
        .brand-sub { color: var(--muted); font-size:13px; }

        .hero-grid {
          display:grid;
          grid-template-columns: 1fr 380px;
          gap:20px;
          align-items:start;
        }

        .neon-title {
          text-align:center;
          font-size:42px;
          margin-bottom:12px;
          text-transform: uppercase;
        }

        .neon-red-pulse {
          color: #ff3b3b;
          text-shadow: 0 0 10px #ff0000, 0 0 30px #ff0000, 0 0 60px #ff0000;
          animation: pulseRed 2s infinite;
        }
        @keyframes pulseRed {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .neon-yellow-fire {
          color: #ffbf00;
          text-shadow: 0 0 10px #ffbf00, 0 0 25px #ff6a00, 0 0 40px #ff4500;
          animation: pulseYellow 3s infinite alternate;
        }
        @keyframes pulseYellow {
          0% { text-shadow: 0 0 10px #ffbf00; }
          100% { text-shadow: 0 0 25px #ff6a00, 0 0 40px #ff4500; }
        }

        .neon-border { border:1px solid rgba(255,255,255,0.2); box-shadow:0 0 12px rgba(255,255,255,0.2); border-radius:10px; padding:10px; }
        .neon-border-plan {
          border: 2px solid rgba(255, 50, 50, 0.8);
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.6);
          border-radius: 16px;
          transition: 0.3s;
        }
        .neon-border-plan:hover {
          box-shadow: 0 0 25px rgba(255, 0, 0, 0.9);
        }

        .neon-border-form {
          border: 1px solid rgba(255,191,0,0.4);
          box-shadow: 0 0 20px rgba(255,191,0,0.4);
          border-radius: 12px;
        }

        .plan-card {
          width: 240px;
          padding: 18px;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          text-align:left;
        }

        .form-title {
          color: var(--accent);
          text-align: center;
          margin-bottom: 10px;
          font-weight: 800;
          text-shadow: 0 0 10px #ffbf00;
        }

        .lead-form input, .lead-form textarea {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          background: #111;
          color: #fff;
          border: 1px solid #ffbf00;
          margin-bottom: 8px;
        }
        .submit-btn {
          width:100%;
          padding:10px;
          border-radius:8px;
          background: linear-gradient(90deg,#ffbf00,#ff3838);
          color:#111;
          font-weight:800;
          border:none;
          cursor:pointer;
        }

        .float-cta {
          position:fixed;
          right:16px;
          bottom:18px;
          background: linear-gradient(90deg,#25D366,#128C7E);
          color:#fff;
          padding:14px 18px;
          border-radius:999px;
          font-weight:800;
          text-decoration:none;
          box-shadow:0 0 20px rgba(37,211,102,0.6);
          animation: pulse 2s infinite;
          z-index:999;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 10px rgba(37,211,102,0.6); }
          50% { box-shadow: 0 0 25px rgba(37,211,102,0.9); }
          100% { box-shadow: 0 0 10px rgba(37,211,102,0.6); }
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 16px; }
          .neon-title { font-size: 30px; }
          .plan-card { width: 100%; }
          .hero-aside { margin-top: 20px; }
        }
      `}</style>
    </div>
  );
}
