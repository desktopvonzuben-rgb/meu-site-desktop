import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const WA_NUMBER = "5519933005880"; // +55 19 93300-5880

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
            <div className="bf-label">Black Friday</div>
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
                <div className="black-friday">
                  BLACK <span className="neon-red">FRIDAY</span>
                </div>
                <div className="desktop-promo">
                  <span className="neon-yellow">DESKTOP</span> PROMO
                </div>
              </div>

              <div className="banner-cta">
                <div className="banner-inner">
                  <div className="banner-title">Planos de 600 Mega e 1 Giga — Oferta Black Friday</div>
                  <div className="banner-sub">
                    HBO Max grátis por 2 meses + Wi-Fi incluso. Ativação rápida na sua região.
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
                    whileHover={{ scale: 1.03 }}
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
                      href={`https://wa.me/${WA_NUMBER}?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20${encodeURIComponent(
                        p.title
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={18} /> Quero ativar agora
                    </a>
                  </motion.article>
                ))}
              </div>

              <div className="discovery">
                <strong>DESCUBRA O POTENCIAL</strong>
                <br />
                <span className="highlight">DA SUA INTERNET HOJE</span> <span className="muted">na sua região.</span>
              </div>
            </div>

            <aside className="hero-aside">
              {!submitted ? (
                <form className="lead-form" onSubmit={handleSubmit}>
                  <h4>Garanta sua oferta exclusiva ⚡</h4>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome completo" required />
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Seu WhatsApp (ex: 19933005880)" required />
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensagem (opcional)" />
                  <button type="submit" className="submit-btn">Enviar</button>
                </form>
              ) : (
                <div className="sent-box">
                  <div className="sent-ok">✅ Enviado com sucesso!</div>
                  <div className="sent-txt">Obrigado! Vamos retornar pelo WhatsApp.</div>
                </div>
              )}

              <div className="side-actions">
                <a href={`https://wa.me/${WA_NUMBER}?text=Quero%20a%20promo%20Black%20Friday%20Desktop!`} target="_blank" rel="noreferrer" className="whatsapp-link">
                  💬 Falar no WhatsApp
                </a>
                <a href="tel:+5519933005880" className="call-link">📞 Ligar agora</a>
              </div>
            </aside>
          </motion.section>
        </main>

        <footer className="footer">© Desktop — Promoção válida por tempo limitado.</footer>
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
          --neon-red: #ff3838;
          --neon-yellow: #ffd000;
          --muted: #bfc3c7;
        }

        .page-root {
          min-height: 100vh;
          background: radial-gradient(circle at top, #060606, #000);
          color: #fff;
          font-family: "Poppins", sans-serif;
          padding: 18px;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 20px;
        }

        .plan-card {
          position: relative;
          border-radius: 18px;
          padding: 18px;
          background: rgba(20, 20, 20, 0.7);
          border: 2px solid transparent;
          background-image: linear-gradient(#111, #000),
            linear-gradient(135deg, #ffbf00, #ff3838);
          background-origin: border-box;
          background-clip: content-box, border-box;
          animation: pulse 2.5s infinite alternate;
          box-shadow: 0 0 15px rgba(255, 191, 0, 0.3);
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 15px rgba(255, 191, 0, 0.4);
          }
          100% {
            box-shadow: 0 0 30px rgba(255, 56, 56, 0.7);
          }
        }

        .plan-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(90deg, #ffbf00, #ff3838);
          color: #111;
          padding: 12px 18px;
          border-radius: 30px;
          font-weight: 700;
          text-decoration: none;
          margin-top: 8px;
        }

        .whatsapp-link {
          background: linear-gradient(90deg, #25d366, #128c7e);
          border-radius: 40px;
          padding: 12px;
          color: #fff;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
        }

        .float-cta {
          position: fixed;
          right: 16px;
          bottom: 18px;
          background: linear-gradient(90deg, #ffbf00, #ff3838);
          color: #111;
          padding: 14px 18px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
          z-index: 999;
        }

        /* 🔹 MOBILE OTIMIZAÇÃO */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-aside {
            order: 2;
            margin-top: 20px;
          }
          .hero-left {
            order: 1;
          }
          .plan-card {
            width: 100%;
          }
          .neon-title {
            text-align: center;
            font-size: 26px;
          }
          .banner-inner {
            text-align: center;
          }
          .plan-cta {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
