import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const WA_NUMBER = "5519933005880";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <div className="bf-label">🔥 Black Friday</div>
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
                <span className="neon-red">BLACK FRIDAY</span>
                <div className="desktop-promo">
                  <span className="neon-yellow">DESKTOP PROMO</span>
                </div>
              </div>

              <div className="banner-cta">
                <div className="banner-inner">
                  <div className="banner-title">
                    Planos de 600 Mega e 1 Giga — Oferta Black Friday
                  </div>
                  <div className="banner-sub">
                    HBO Max grátis por 2 meses + Wi-Fi incluso. Ativação rápida e suporte local.
                  </div>
                </div>
              </div>

              {/* Planos */}
              <div className="plans-wrap">
                {[
                  {
                    title: "600 MEGA",
                    features: [
                      "600 Mega de download",
                      "300 Mega de upload",
                      "HBO Max grátis por 2 meses",
                      "Wi-Fi incluso",
                    ],
                    price: "R$ 99,99/mês",
                  },
                  {
                    title: "1 GIGA",
                    features: [
                      "1 Giga de download",
                      "500 Mega de upload",
                      "HBO Max grátis por 2 meses",
                      "Wi-Fi 6 incluso",
                    ],
                    price: "R$ 119,99/mês",
                  },
                ].map((p, i) => (
                  <motion.article
                    key={i}
                    whileHover={{ scale: 1.04 }}
                    className="plan-card"
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
                      href={`https://wa.me/${WA_NUMBER}?text=Quero%20assinar%20o%20plano%20${encodeURIComponent(
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

              <div className="discovery">
                <strong>DESCUBRA O POTENCIAL</strong>
                <br />
                <span className="highlight">DA SUA INTERNET HOJE</span>{" "}
                <span className="muted">na sua região.</span>
              </div>
            </div>

            {/* Formulário */}
            <aside className="hero-aside">
              {!submitted ? (
                <form className="lead-form" onSubmit={handleSubmit}>
                  <h4>Garanta já sua oferta ⚡</h4>
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
            </aside>
          </motion.section>
        </main>

        <footer className="footer">
          © Desktop — Promoção válida por tempo limitado.
        </footer>
      </div>

      {/* Botão flutuante */}
      <a
        className="float-cta"
        href={`https://wa.me/${WA_NUMBER}?text=Olá!%20Quero%20a%20promo%20Black%20Friday%20Desktop!`}
        target="_blank"
        rel="noreferrer"
      >
        💬 QUERO ATIVAR AGORA
      </a>

      <style jsx>{`
        :root {
          --accent: #ffbf00;
          --neon-red: #ff1a1a;
          --neon-yellow: #ffd700;
          --muted: #bfc3c7;
        }

        .page-root {
          min-height: 100vh;
          color: #fff;
          font-family: "Poppins", sans-serif;
          padding: 20px;
          background: linear-gradient(270deg, #000, #0a0a0a, #111);
          background-size: 600% 600%;
          animation: bgFlow 12s ease infinite;
        }

        @keyframes bgFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: linear-gradient(135deg, #111, var(--accent));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-weight: 800;
        }

        .brand-title {
          font-weight: 800;
          font-size: 18px;
        }

        .brand-sub {
          color: var(--muted);
          font-size: 13px;
        }

        .neon-title {
          text-align: center;
          font-size: 38px;
          margin-bottom: 8px;
        }

        .neon-red {
          color: var(--neon-red);
          text-shadow: 0 0 25px var(--neon-red);
          font-weight: 900;
        }

        .neon-yellow {
          color: var(--neon-yellow);
          text-shadow: 0 0 25px var(--neon-yellow);
          font-weight: 900;
        }

        .plans-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .plan-card {
          width: 250px;
          border-radius: 14px;
          padding: 18px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          border: 2px solid #ff1a1a; /* 🔥 BORDA NEON VERMELHA */
          box-shadow: 0 0 20px #ff1a1a55;
          text-align: left;
        }

        .badge {
          display: inline-block;
          background: rgba(255, 26, 26, 0.2);
          color: var(--neon-red);
          padding: 5px 8px;
          border-radius: 6px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .plan-cta {
          display: block;
          text-align: center;
          background: linear-gradient(90deg, #ffbf00, #ff1a1a);
          color: #111;
          padding: 10px 12px;
          border-radius: 10px;
          font-weight: 800;
          text-decoration: none;
          border: 2px solid #111; /* 🟡 BORDA NO BOTÃO */
        }

        .lead-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: rgba(255, 26, 26, 0.08);
          border: 1px solid rgba(255, 26, 26, 0.2);
          padding: 16px;
          border-radius: 12px;
        }

        .lead-form h4 {
          margin: 0 0 8px;
          color: var(--accent);
          text-align: center;
        }

        .lead-form input,
        .lead-form textarea {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          background: #111;
          color: #fff;
          border: none;
        }

        .submit-btn {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          background: var(--neon-red);
          color: #fff;
          font-weight: 800;
          border: none;
          cursor: pointer;
        }

        .float-cta {
          position: fixed;
          right: 16px;
          bottom: 18px;
          background: linear-gradient(90deg, #ffbf00, #ff1a1a);
          color: #111;
          padding: 14px 18px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
          z-index: 999;
        }

        @media (max-width: 900px) {
          .hero-grid {
            display: flex;
            flex-direction: column;
          }

          .plans-wrap {
            flex-direction: column;
            align-items: center;
          }

          .plan-card {
            width: 100%;
            max-width: 330px;
          }

          .lead-form {
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
}
