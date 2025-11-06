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
    // placeholder: em produção você integraria com API/Sheets/CRM
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
                <div className="black-friday">BLACK <span className="neon-red">FRIDAY</span></div>
                <div className="desktop-promo"><span className="neon-yellow">DESKTOP</span> PROMO</div>
              </div>

              <div className="banner-cta">
                <div className="banner-inner">
                  <div className="banner-title">Planos de 600 Mega e 1 Giga — Oferta Black Friday</div>
                  <div className="banner-sub">Velocidade, estabilidade e entretenimento. Ativação rápida na sua região.</div>
                </div>
              </div>

              <div className="plans-wrap" aria-live="polite">
                {[
                  {
                    title: "600 MEGA",
                    features: ["HBO Max de cortesia", "Wi-Fi incluso", "600 Mega de download", "300 Mega de upload"],
                    price: "R$ 99,99",
                  },
                  {
                    title: "1 GIGA",
                    features: ["HBO Max de cortesia", "Wi-Fi 6 incluso", "1 Giga de download", "500 Mega de upload"],
                    price: "R$ 119,99",
                  },
                  {
                    title: "GIGA HOME OFFICE",
                    features: ["HBO Max de cortesia", "1 Giga de velocidade", "Wi-Fi 6 incluso", "Roteador Mesh"],
                    price: "R$ 169,99",
                  },
                ].map((p, i) => (
                  <article key={i} className="plan-card" role="article" aria-label={p.title}>
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

              <div className="discovery">
                <strong>DESCUBRA O POTENCIAL</strong>
                <br />
                <span className="highlight">DA SUA INTERNET HOJE</span> <span className="muted">na sua região.</span>
              </div>
            </div>

            {/* aside: mantém formulário e botões */}
            <aside className="hero-aside">
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
                  <button type="submit" className="submit-btn">Enviar</button>
                </form>
              ) : (
                <div className="sent-box">
                  <div className="sent-ok">✅ Enviado com sucesso!</div>
                  <div className="sent-txt">Obrigado! Vamos retornar pelo WhatsApp.</div>
                </div>
              )}

              <div className="side-actions">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Ol%C3%A1!%20Quero%20ativar%20a%20promo%C3%A7%C3%A3o%20Black%20Friday`}
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

        <footer className="footer">© Desktop — Promoção válida por tempo limitado.</footer>
      </div>

      {/* floating CTA bottom-right */}
      <a
        className="float-cta"
        href={`https://wa.me/${WA_NUMBER}?text=Ol%C3%A1!%20Quero%20o%20Plano%20Black`}
        target="_blank"
        rel="noreferrer"
        aria-label="Quero ativar agora Whatsapp"
      >
        💬 QUERO ATIVAR AGORA
      </a>

      <style jsx>{`
        :root {
          --bg-1: #000;
          --bg-2: #0f0f10;
          --accent: #f7b500;
          --neon-red: #ff2b2b;
          --neon-yellow: #ffbf00;
          --muted: #bfc3c7;
        }
        .page-root {
          min-height: 100vh;
          background: linear-gradient(180deg, var(--bg-1), var(--bg-2));
          color: #fff;
          font-family: Inter, Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          padding: 18px;
        }
        .container { max-width: 1100px; margin: 0 auto; }
        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .brand { display:flex; align-items:center; gap:12px; }
        .logo { width:48px; height:48px; border-radius:10px; background: linear-gradient(135deg, #111, var(--accent)); display:flex; align-items:center; justify-content:center; color:#111; font-weight:800; }
        .brand-title { font-weight:800; font-size:18px; }
        .brand-sub { color: var(--muted); font-size:13px; }
        .contact-top { text-align:right; }
        .bf-label { color: var(--muted); font-size:13px; }
        .phone-top { font-weight:800; color: var(--accent); }

        .hero-grid { display: grid; grid-template-columns: 1fr 380px; gap: 20px; align-items:start; }
        .neon-title { text-align:center; margin-bottom: 14px; }
        .black-friday { font-size: 36px; margin:0; line-height:1; color: #fff; }
        .neon-red { color: var(--neon-red); text-shadow: 0 6px 18px rgba(255,43,43,0.55), 0 0 36px rgba(255,43,43,0.35); font-weight:900; }
        .desktop-promo { font-size: 44px; margin-top:6px; letter-spacing: 1px; }
        .neon-yellow { color: var(--neon-yellow); text-shadow: 0 8px 30px rgba(255,176,0,0.7); font-weight:900; }

        .banner-cta { display:flex; justify-content:center; margin-bottom:18px; }
        .banner-inner { width:100%; max-width:760px; background: linear-gradient(90deg, rgba(247,181,0,0.06), rgba(255,255,255,0.02)); border: 1px solid rgba(247,181,0,0.12); padding:14px; border-radius:10px; text-align:center; }
        .banner-title { font-weight:700; }
        .banner-sub { color: var(--muted); margin-top:6px; font-size:14px; }

        .plans-wrap { display:flex; gap: 14px; justify-content:center; flex-wrap:wrap; margin: 8px 0 20px; }
        .plan-card { width: 220px; background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); padding:14px; border-radius:10px; border: 1px solid rgba(247,181,0,0.08); box-shadow: 0 10px 30px rgba(0,0,0,0.6); text-align:left; }
        .badge { display:inline-block; background: rgba(247,181,0,0.12); color: var(--accent); padding:6px 8px; border-radius:6px; font-weight:800; margin-bottom:8px; }
        .plan-title { color: var(--neon-red); margin:8px 0 6px; font-size:18px; }
        .plan-features { list-style:none; padding:0; margin:0 0 12px; color:#d6d6d6; font-size:13px; }
        .plan-features li { display:flex; gap:8px; margin-bottom:6px; align-items:flex-start; }
        .plan-features li::before { content:''; width:8px; height:8px; background:var(--accent); display:inline-block; margin-top:6px; border-radius:2px; }
        .plan-price { font-weight:900; color: var(--accent); font-size:18px; margin-bottom:8px; text-align:left; }
        .plan-cta { display:inline-block; background: var(--accent); color:#111; padding:10px 12px; border-radius:8px; font-weight:800; text-decoration:none; margin-top:8px; }

        .discovery { text-align:center; margin-top:8px; color:#d6d6d6; font-weight:700; margin-bottom:18px; }
        .discovery .highlight { color: var(--accent); font-weight:900; }

        .hero-aside { background: rgba(255,255,255,0.03); padding:16px; border-radius:12px; }
        .lead-form h4 { margin:0 0 8px; color:var(--accent); text-align:center; }
        .lead-form input, .lead-form textarea { width:100%; padding:10px; border-radius:8px; background:#111; color:#fff; border:none; margin-bottom:8px; }
        .submit-btn { width:100%; padding:10px; border-radius:8px; background: var(--neon-red); color:#fff; font-weight:800; border:none; cursor:pointer; }

        .side-actions { margin-top:12px; display:flex; flex-direction:column; gap:10px; }
        .whatsapp-link { display:block; text-align:center; background: linear-gradient(90deg,#25D366,#128C7E); color:#fff; padding:12px; border-radius:50px; font-weight:800; text-decoration:none; }
        .call-link { text-align:center; border:2px solid var(--accent); color:var(--accent); padding:10px; border-radius:50px; text-decoration:none; font-weight:800; display:block; }

        .footer { text-align:center; color:#9aa0a6; margin-top:26px; font-size:13px; }

        .float-cta { position:fixed; right:16px; bottom:18px; background: linear-gradient(90deg, var(--neon-yellow), #ffb200); color:#111; padding:14px 18px; border-radius:999px; font-weight:800; text-decoration:none; box-shadow:0 8px 30px rgba(0,0,0,0.6); z-index:999; }

        /* responsive */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-aside { order: 2; margin-top:16px; }
          .hero-left { order: 1; }
          .desktop-promo { font-size: 32px; }
          .black-friday { font-size: 28px; }
          .plans-wrap { gap:12px; }
          .plan-card { width: 92%; }
        }
      `}</style>
    </div>
  );
}
