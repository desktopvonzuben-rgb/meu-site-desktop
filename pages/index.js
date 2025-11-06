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
            <div className="bf-label neon-border">🔥 <span className="neon-red">Black Friday</span></div>
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
              <div className="neon-title neon-border">
                BLACK <span className="neon-red">FRIDAY</span>
                <div className="desktop-promo">
                  <span className="neon-yellow">DESKTOP</span> PROMO
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
                    className="plan-card neon-border"
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

            <aside className="hero-aside neon-border">
              {!submitted ? (
                <form className="lead-form" onSubmit={handleSubmit}>
                  <h4>Garanta sua oferta exclusiva ⚡</h4>
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

        .neon-border {
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.2),
            0 0 20px rgba(255, 0, 0, 0.4), 0 0 30px rgba(255, 0, 0, 0.3);
          border-radius: 10px;
          padding: 6px;
        }

        .page-root {
          min-height: 100vh;
          color: #fff;
          font-family: "Poppins", sans-serif;
          padding: 20px;
          background: linear-gradient(270deg, #000, #080808, #111);
          background-size: 600% 600%;
          animation: bgFlow 12s ease infinite;
        }
        @keyframes bgFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .container { max-width: 1100px; margin: 0 auto; }
        .topbar { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; gap:12px; }
        .brand { display:flex; align-items:center; gap:12px; }
        .logo { width:48px; height:48px; border-radius:10px; background: linear-gradient(135deg,#111,var(--accent)); display:flex; align-items:center; justify-content:center; color:#111; font-weight:800; }
        .brand-title { font-weight:800; font-size:18px; }
        .brand-sub { color: var(--muted); font-size:13px; }

        .hero-grid { display:grid; grid-template-columns: 1fr 380px; gap:20px; align-items:start; }

        .neon-title { text-align:center; font-size:40px; margin-bottom:8px; text-transform: uppercase; }
        .neon-red { color: var(--neon-red); text-shadow: 0 0 10px var(--neon-red), 0 0 30px var(--neon-red), 0 0 60px var(--neon-red); font-weight:900; }
        .neon-yellow { color: var(--neon-yellow); text-shadow: 0 0 25px var(--neon-yellow); font-weight:900; }

        .plan-card.neon-border { transition: 0.3s; }
        .plan-card.neon-border:hover { box-shadow: 0 0 25px rgba(255, 0, 0, 0.6); }

        .float-cta { position:fixed; right:16px; bottom:18px; background: linear-gradient(90deg,#25D366,#128C7E); color:#fff; padding:14px 18px; border-radius:999px; font-weight:800; text-decoration:none; box-shadow:0 0 20px rgba(37,211,102,0.6); animation: pulse 2s infinite; }
        @keyframes pulse {
          0% { box-shadow: 0 0 10px rgba(37,211,102,0.6); }
          50% { box-shadow: 0 0 25px rgba(37,211,102,0.9); }
          100% { box-shadow: 0 0 10px rgba(37,211,102,0.6); }
        }
      `}</style>
    </div>
  );
}
