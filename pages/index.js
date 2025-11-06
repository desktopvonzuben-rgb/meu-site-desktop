import { useState } from "react";
import { motion } from "framer-motion";

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

  const WA_NUMBER = "5519933005880";

  return (
    <div className="page-root">
      <div className="container">
        {/* Topo */}
        <header className="topbar">
          <div className="brand">
            <div className="logo">D</div>
            <div className="brand-text bordered">
              <div className="brand-title">DESKTOP</div>
              <div className="brand-sub">Internet residencial e empresarial</div>
            </div>
          </div>

          <div className="contact-top">
            <div className="speech-bubble">
              <div className="bf-label">🔥 BLACK FRIDAY</div>
              <div className="phone-top">(19) 93300-5880</div>
            </div>
          </div>
        </header>

        {/* Conteúdo principal */}
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
                  <span className="neon-red">BLACK FRIDAY</span>
                </div>
                <div className="desktop-promo">
                  <span className="neon-yellow">DESKTOP PROMO</span>
                </div>
              </div>

              <div className="banner-cta">
                <div className="banner-inner">
                  <div className="banner-title">
                    Planos com HBO Max grátis por 2 meses 🎬
                  </div>
                  <div className="banner-sub">
                    Velocidade, estabilidade e entretenimento na melhor oferta do ano.
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
                      "600 Mega download / 300 upload",
                    ],
                    price: "R$ 99,99",
                  },
                  {
                    title: "1 GIGA",
                    features: [
                      "HBO Max grátis por 2 meses",
                      "Wi-Fi 6 incluso",
                      "1 Giga download / 500 upload",
                    ],
                    price: "R$ 119,99",
                  },
                  {
                    title: "GIGA HOME OFFICE",
                    features: [
                      "HBO Max grátis por 2 meses",
                      "Wi-Fi 6 incluso",
                      "Roteador Mesh incluso",
                    ],
                    price: "R$ 169,99",
                  },
                ].map((p, i) => (
                  <article key={i} className="plan-card">
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
                  </article>
                ))}
              </div>
            </div>

            {/* Formulário */}
            <aside className="hero-aside">
              {!submitted ? (
                <form className="lead-form" onSubmit={handleSubmit}>
                  <h4>Garanta sua oferta exclusiva ⚡</h4>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome completo" required />
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Seu WhatsApp" required />
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensagem (opcional)" />
                  <button type="submit" className="submit-btn">Enviar</button>
                </form>
              ) : (
                <div className="sent-box">
                  <p className="sent-ok">✅ Enviado com sucesso!</p>
                  <p className="sent-txt">Vamos entrar em contato pelo WhatsApp.</p>
                </div>
              )}

              <div className="side-actions">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Ol%C3%A1!%20Quero%20ativar%20minha%20oferta%20da%20Black%20Friday%20Desktop!`}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-link"
                >
                  💬 Falar no WhatsApp
                </a>
                <a href="tel:+5519933005880" className="call-link">📞 Ligar agora</a>
              </div>
            </aside>
          </motion.section>
        </main>

        <footer className="footer">© Desktop — Black Friday válida por tempo limitado.</footer>
      </div>

      {/* Balão fixo lateral (abre direto WhatsApp) */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=Ol%C3%A1!%20Quero%20ativar%20minha%20oferta%20da%20Black%20Friday%20Desktop!`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-bubble"
      >
        💬
      </a>

      {/* Estilos */}
      <style jsx>{`
        :root {
          --bg-1: #000;
          --bg-2: #0c0c0d;
          --accent: #f7b500;
          --neon-red: #ff2b2b;
          --neon-yellow: #ffbf00;
          --muted: #bfc3c7;
        }

        body, .page-root {
          background: linear-gradient(180deg, var(--bg-1), var(--bg-2));
          color: #fff;
          font-family: Inter, Poppins, system-ui;
          padding: 18px;
          min-height: 100vh;
        }

        .brand-text.bordered {
          border: 2px solid var(--accent);
          padding: 6px 10px;
          border-radius: 10px;
        }

        .speech-bubble {
          background: rgba(247,181,0,0.1);
          border: 2px solid var(--accent);
          border-radius: 12px;
          padding: 8px 12px;
          display: inline-block;
          position: relative;
        }
        .speech-bubble::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 20px;
          border-width: 10px 10px 0;
          border-style: solid;
          border-color: var(--accent) transparent transparent transparent;
        }

        .neon-red { color: var(--neon-red); text-shadow: 0 0 18px rgba(255,43,43,0.8); }
        .neon-yellow { color: var(--neon-yellow); text-shadow: 0 0 18px rgba(255,191,0,0.8); }

        .plan-card {
          border: 2px solid var(--accent);
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          box-shadow: 0 0 20px rgba(247,181,0,0.15);
        }

        .whatsapp-bubble {
          position: fixed;
          right: 16px;
          top: 45%;
          transform: translateY(-50%);
          background: linear-gradient(90deg,#25D366,#128C7E);
          color: #fff;
          border: 3px solid var(--accent);
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          transition: 0.3s;
          z-index: 999;
        }
        .whatsapp-bubble:hover {
          transform: scale(1.1) translateY(-50%);
          box-shadow: 0 6px 30px rgba(37,211,102,0.6);
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; }
          .whatsapp-bubble { top: auto; bottom: 18px; right: 18px; width: 55px; height: 55px; font-size: 26px; }
        }
      `}</style>
    </div>
  );
}
