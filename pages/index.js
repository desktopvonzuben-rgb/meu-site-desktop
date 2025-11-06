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
            {/* HEADER: BLACK FRIDAY em vermelho neon */}
            <div className="bf-label"><span className="neon-red">🔥 BLACK FRIDAY</span></div>
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
  <span className="neon-red">BLACK FRIDAY</span>{" "}
  <span className="neon-yellow">DESKTOP PROMO</span>
</div>


              <div className="banner-cta">
                <div className="banner-inner">
                  <div className="banner-title">
                    Planos de 600 Mega e 1 Giga — <span className="neon-red">Black Friday</span>
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
                  <motion.article key={i} whileHover={{ scale: 1.04 }} className="plan-card">
                    {/* BADGE com BLACK FRIDAY em vermelho neon */}
                    <div className="badge"><span className="neon-red">BLACK FRIDAY</span></div>
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

              <div className="discovery">
                <strong>DESCUBRA O POTENCIAL</strong>
                <br />
                <span className="highlight">DA SUA INTERNET HOJE</span>{" "}
                <span className="muted">na sua região.</span>
              </div>
            </div>

            <aside className="hero-aside">
              {!submitted ? (
                <form className="lead-form" onSubmit={handleSubmit}>
                  {/* H4 com borda dourada conforme pedido */}
                  <div className="h4-border">
                    <h4 className="form-title">Garanta sua oferta exclusiva ⚡</h4>
                  </div>

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
                  href={https://wa.me/${WA_NUMBER}?text=Quero%20a%20promo%20Black%20Friday%20Desktop!}
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
        href={https://wa.me/${WA_NUMBER}?text=Ol%C3%A1!%20Quero%20o%20Plano%20Black%20Friday}
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
          --gold: #d4af37;
        }

        .page-root {
          min-height: 100vh;
          background: #000; /* fundo preto sólido */
          color: #fff;
          font-family: "Poppins", sans-serif;
          padding: 20px;
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
          gap: 12px;
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

        .bf-label {
          font-size: 14px;
        }

        .phone-top {
          font-weight: 800;
          color: var(--neon-yellow);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 20px;
          align-items: start;
        }

        .neon-title {
          text-align: center;
          font-size: 40px;
          margin-bottom: 8px;
        }

        .neon-red {
          color: var(--neon-red);
          text-shadow: 0 0 12px var(--neon-red), 0 0 25px rgba(255, 43, 43, 0.25);
          font-weight: 900;
        }

        .neon-yellow {
          color: var(--neon-yellow);
          text-shadow: 0 0 12px var(--neon-yellow), 0 0 25px rgba(255, 176, 0, 0.25);
          font-weight: 900;
        }

        .big { font-size: 40px; }

        .banner-cta {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }

        .banner-inner {
          width: 100%;
          max-width: 760px;
          background: linear-gradient(90deg, rgba(247, 181, 0, 0.04), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(247, 181, 0, 0.08);
          padding: 12px;
          border-radius: 10px;
          text-align: center;
        }

        .banner-sub {
          color: var(--muted);
          margin-top: 6px;
          font-size: 14px;
        }

        .plans-wrap {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin: 8px 0 18px;
        }

        .plan-card {
          width: 220px;
          border-radius: 14px;
          padding: 18px;
          background: rgba(15, 15, 15, 0.95);
          border: 2px solid #d4af37; /* borda dourada nos planos */
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
          text-align: left;
        }

        .badge {
          display: inline-block;
          background: rgba(255, 191, 0, 0.12);
          color: var(--accent);
          padding: 6px 8px;
          border-radius: 6px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .plan-title {
          color: var(--neon-red);
          margin: 8px 0 6px;
          font-size: 18px;
        }

        .plan-features {
          list-style: disc;
          padding-left: 18px;
          margin: 0 0 12px;
          color: #d6d6d6;
          font-size: 13px;
        }

        .plan-price {
          font-weight: 900;
          color: var(--accent);
          font-size: 18px;
          margin-bottom: 8px;
          text-align: left;
        }

        .plan-cta {
          display: block;
          text-align: center;
          background: linear-gradient(90deg, #ffbf00, #ff3838);
          color: #111;
          padding: 10px 12px;
          border-radius: 10px;
          font-weight: 800;
          text-decoration: none;
          border: 2px solid #d4af37;
        }

        .discovery {
          text-align: center;
          margin-top: 12px;
          color: #d6d6d6;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .highlight {
          color: var(--neon-yellow);
          font-weight: 900;
        }

        .hero-aside {
          background: rgba(255, 255, 255, 0.03);
          padding: 16px;
          border-radius: 12px;
        }

        /* BORDA DOURADA AO REDOR DO H4 pedido */
        .h4-border {
          border: 2px solid var(--gold);
          border-radius: 10px;
          padding: 6px;
          display: inline-block;
          margin-bottom: 12px;
          background: rgba(0,0,0,0.25);
        }

        .form-title {
          margin: 0;
          color: var(--neon-yellow);
          font-weight: 800;
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
          margin-bottom: 8px;
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

        .side-actions {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .whatsapp-link {
          display: block;
          text-align: center;
          background: linear-gradient(90deg, #25D366, #128C7E);
          color: #fff;
          padding: 12px;
          border-radius: 50px;
          font-weight: 800;
          text-decoration: none;
        }

        .call-link {
          text-align: center;
          border: 2px solid var(--neon-yellow);
          color: var(--neon-yellow);
          padding: 10px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 800;
          display: block;
        }

        .footer {
          text-align: center;
          color: #9aa0a6;
          margin-top: 26px;
          font-size: 13px;
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

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .neon-title {
            font-size: 28px;
          }
          .plan-card {
            width: 94%;
            margin: 0 auto;
          }
           .h4-border { display:block; width:100%; }

  .neon-red {
    color: #ff0000;
    text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000;
    font-weight: 900;
  }

  .neon-yellow {
    color: #ffd000;
    text-shadow: 0 0 10px #ffd000, 0 0 20px #ffd000;
    font-weight: 900;
  }

`}</style>

        }
      `}</style>
    </div>
  );
}
