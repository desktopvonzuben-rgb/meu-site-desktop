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
              <div className="brand-title with-gold">DESKTOP</div>
              <div className="brand-sub">Internet residencial e empresarial</div>
            </div>
          </div>
          <div className="contact-top">
            <div className="bf-label neon-small"><span className="neon-red">🔥 Black Friday</span></div>
            <div className="phone-top">(19) 93300-5880</div>
          </div>
        </header>

        <main>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="hero-grid"
          >
            <div className="hero-left">
              <div className="neon-title">
                <div className="black-line">
                  <span className="black-text">BLACK </span>
                  <span className="neon-red big">FRIDAY</span>
                </div>
                <div className="desktop-promo">
                  <span className="neon-yellow big">DESKTOP</span>
                  <span className="promo-text"> PROMO</span>
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

              <div className="plans-wrap" role="list">
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
                    role="listitem"
                  >
                    <div className="badge">BLACK FRIDAY</div>
                    <div className="plan-inner">
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
                    </div>
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
                  <h4 className="form-title">Garanta já sua oferta</h4>
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

      {/* Botão fixo do WhatsApp */}
      <a
        className="float-cta"
        href={`https://wa.me/${WA_NUMBER}?text=Ol%C3%A1!%20Quero%20o%20Plano%20Black%20Friday`}
        target="_blank"
        rel="noreferrer"
        aria-label="Quero ativar agora Whatsapp"
      >
        💬 <span>QUERO ATIVAR AGORA</span>
      </a>

      <style jsx>{`
        :root{
          --bg-1: #000;
          --bg-2: #0a0a0a; /* fundo bem escuro */
          --gold: #d4af37;
          --neon-red: #ff2b2b;
          --neon-yellow: #ffbf00;
          --highlight-btn: #00ffc3; /* cor destacada do botão flutuante */
          --muted: #bfc3c7;
        }
        .page-root{
          min-height:100vh;
          color:#fff;
          font-family: "Poppins", Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          padding:20px;
          background: linear-gradient(180deg, var(--bg-1), var(--bg-2)); /* fundo escuro */
        }
        .container{ max-width:1100px; margin:0 auto; }

        .topbar{ display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:18px;}
        .brand{ display:flex; align-items:center; gap:12px; }
        .logo{ width:48px; height:48px; border-radius:10px; background: linear-gradient(135deg,#111,var(--neon-yellow)); display:flex; align-items:center; justify-content:center; color:#111; font-weight:800; }
        .brand-text{ display:flex; flex-direction:column; }
        .brand-title{ font-weight:800; font-size:18px; padding:6px 10px; border-radius:8px; }
        .with-gold { box-shadow: 0 0 0 3px rgba(212,175,55,0.08), 0 6px 20px rgba(212,175,55,0.06); border: 2px solid rgba(212,175,55,0.18); background: linear-gradient(90deg, rgba(212,175,55,0.03), transparent); color: var(--neon-yellow); }
        .brand-sub{ color:var(--muted); font-size:13px; }

        .contact-top { text-align:right; }
        .bf-label { color: var(--muted); font-size:13px; }
        .phone-top { font-weight:800; color: var(--neon-yellow); }

        .hero-grid{ display:grid; grid-template-columns: 1fr 380px; gap:20px; align-items:start; }

        .neon-title{ text-align:center; margin-bottom:12px; }
        .black-line{ font-size:40px; line-height:1; display:flex; align-items:center; justify-content:center; gap:8px; }
        .black-text{ color:#fff; font-weight:700; }
        .neon-red.big{ color: var(--neon-red); text-shadow: 0 6px 18px rgba(255,43,43,0.55), 0 0 36px rgba(255,43,43,0.25); font-weight:900; padding-left:6px; }
        .desktop-promo{ margin-top:6px; font-size:42px; font-weight:900; display:flex; align-items:center; justify-content:center; gap:8px; }
        .neon-yellow.big{ color: var(--neon-yellow); text-shadow: 0 8px 30px rgba(255,176,0,0.55); }

        .promo-text{ color:#fff; font-weight:700; text-shadow: 0 2px 10px rgba(0,0,0,0.6); }

        .banner-cta{ display:flex; justify-content:center; margin-bottom:16px; }
        .banner-inner{ width:100%; max-width:760px; background: rgba(255,255,255,0.05); border-radius:10px; padding:12px; border:1px solid rgba(247,181,0,0.1); text-align:center; }
        .banner-title{ font-weight:700; }
        .banner-sub{ color:var(--muted); margin-top:6px; font-size:14px; }

        .plans-wrap{ display:flex; gap:18px; justify-content:center; flex-wrap:wrap; margin:10px 0 18px; }
        .plan-card{
          width: 260px;
          border-radius: 14px;
          padding: 6px;
          background: none;
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
          position: relative;
        }
        .plan-inner{
          background: #111; /* fundo interno escuro */
          color:#fff;
          border-radius: 10px;
          padding:18px;
          min-height: 320px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
          border: 3px solid rgba(212,175,55,0.95);
        }
        .badge{ display:inline-block; background: var(--neon-yellow); color:#111; padding:8px 10px; border-radius:8px; font-weight:800; margin-bottom:10px; font-size:13px; text-align:center; }
        .plan-title{ color: var(--neon-red); margin:8px 0 10px; font-size:22px; text-align:center; font-weight:900; }
        .plan-features{ list-style:disc; padding-left:18px; margin:0 0 14px; color:#ddd; font-size:14px; }
        .plan-features li{ margin-bottom:8px; }
        .plan-price{ font-weight:900; color: var(--neon-yellow); font-size:20px; margin-bottom:12px; text-align:center; }
        .plan-cta{ display:block; text-align:center; background: linear-gradient(90deg,var(--neon-yellow), var(--neon-red)); color:#111; padding:12px 14px; border-radius:10px; font-weight:800; text-decoration:none; margin-top:10px; width:100%; }

        .discovery{ text-align:center; margin-top:12px; color:#d6d6d6; font-weight:700; margin-bottom:18px; }
        .discovery .highlight{ color: var(--neon-yellow); font-weight:900; }

        .hero-aside{ background: rgba(255,255,255,0.05); padding:16px; border-radius:12px; }
        .form-title{ margin:0 0 12px; color: var(--neon-yellow); text-align:center; font-weight:800; }
        .lead-form input, .lead-form textarea{ width:100%; padding:10px; border-radius:8px; background:#000; color:#fff; border:1px solid rgba(255,255,255,0.04); margin-bottom:8px; }
        .submit-btn{ width:100%; padding:10px; border-radius:8px; background: var(--neon-red); color:#fff; font-weight:800; border:none; cursor:pointer; }

        .side-actions{ margin-top:12px; display:flex; flex-direction:column; gap:10px; }
        .whatsapp-link{ display:block; text-align:center; background: linear-gradient(90deg,#25D366,#128C7E); color:#fff; padding:12px; border-radius:50px; font-weight:800; text-decoration:none; }
        .call-link{ text-align:center; border:2px solid var(--neon-yellow); color:var(--neon-yellow); padding:10px; border-radius:50px; text-decoration:none; font-weight:800; display:block; }

        .footer{ text-align:center; color:#9aa0a6; margin-top:26px; font-size:13px; }

        /* botão flutuante destacado */
        .float-cta{
          position: fixed;
          right: 18px;
          top: 45%;
          transform: translateY(-50%);
          background: var(--highlight-btn);
          color:#000;
          padding:14px 20px;
          border-radius: 999px;
          font-weight:900;
          text-decoration:none;
          box-shadow: 0 0 30px var(--highlight-btn);
          z-index: 9999;
        }

        @media (max-width: 900px){
          .hero-grid{ grid-template-columns: 1fr; }
          .plan-card{ width: 94%; margin: 10px auto; }
          .float-cta{ right: 12px; top: auto; bottom: 18px; transform:none; }
        }
      `}</style>
    </div>
  );
}

