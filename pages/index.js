// pages/index.js
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const WA_NUMBER = "5519933005880"; // seu WhatsApp com DDI
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const plans = [
    {
      id: "600",
      title: "600 MEGA",
      features: ["HBO Max grátis por 2 meses", "Wi-Fi incluso", "600 Mbps download", "300 Mbps upload"],
      price: "R$ 99,99",
    },
    {
      id: "1g",
      title: "1 GIGA",
      features: ["HBO Max grátis por 2 meses", "Wi-Fi 6 incluso", "1 Gbps download", "500 Mbps upload"],
      price: "R$ 119,99",
    },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Em produção integre com sua API/CRM. Aqui só simula envio.
    console.log("Lead enviado:", formData);
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
  }

  return (
    <div className="page-root">
      <div className="container">
        <header className="topbar">
          <div className="brand">
            <div className="logo">D</div>
            <div className="brand-text">
              <div className="brand-title neon-red">DESKTOP</div>
              <div className="brand-sub">Internet residencial e empresarial</div>
            </div>
          </div>

          <div className="contact-top">
            <div className="bf-bubble"><span className="neon-red">🔥 BLACK FRIDAY</span></div>
            <div className="phone-top">
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">(19) 93300-5880</a>
            </div>
          </div>
        </header>

        <main>
          <motion.section
            className="hero-grid"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="hero-left">
              <div className="neon-title">
                <span className="neon-red big">BLACK FRIDAY</span>
                <div className="desktop-promo">
                  <span className="neon-yellow big">DESKTOP</span> <span className="promo-small">PROMO</span>
                </div>
              </div>

              <div className="banner-cta">
                <div className="banner-inner">
                  <div className="banner-title">
                    Planos 600 Mega e 1 Giga — <span className="neon-red">Black Friday</span>
                  </div>
                  <div className="banner-sub">HBO Max grátis por 2 meses + Wi-Fi incluso. Ativação rápida na sua região.</div>
                </div>
              </div>

              <div className="plans-wrap" role="list">
                {plans.map((p) => (
                  <motion.article key={p.id} className="plan-card" whileHover={{ scale: 1.02 }} role="listitem">
                    <div className="card-top">
                      <div className="card-badge">BLACK FRIDAY</div>
                    </div>

                    <h3 className="plan-title">{p.title}</h3>

                    <ul className="plan-features">
                      {p.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>

                    <div className="plan-price">{p.price}</div>

                    <a
                      className="plan-cta"
                      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá! Tenho interesse no plano " + p.title)}`}
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
                <span className="highlight">DA SUA INTERNET HOJE</span> <span className="muted">na sua região.</span>
              </div>
            </div>

            <aside className="hero-aside">
              {!submitted ? (
                <form className="lead-form" onSubmit={handleSubmit}>
                  <div className="h4-border">
                    <h4 className="form-title">Garanta sua oferta exclusiva ⚡</h4>
                  </div>

                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome completo" required />
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Seu WhatsApp (ex: 19933005880)" required />
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensagem (opcional)" />
                  <button type="submit" className="submit-btn">Enviar</button>
                </form>
              ) : (
                <div className="sent-box">
                  <div className="sent-ok">✅ Enviado com sucesso!</div>
                  <div className="sent-txt">Obrigado — vamos te responder pelo WhatsApp.</div>
                </div>
              )}

              <div className="side-actions">
                <a className="whatsapp-link" href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Quero a promoção Black Friday Desktop!")}`} target="_blank" rel="noreferrer">💬 Falar no WhatsApp</a>
                <a className="call-link" href={`tel:+55${WA_NUMBER.slice(2)}`}>📞 Ligar agora</a>
              </div>
            </aside>
          </motion.section>
        </main>

        <footer className="footer">© Desktop — Promoção válida por tempo limitado.</footer>
      </div>

      <a className="float-cta" href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Quero ativar agora")}`} target="_blank" rel="noreferrer" aria-label="Quero ativar agora">
        💬 QUERO ATIVAR AGORA
      </a>

      <style jsx>{`
        :root{
          --bg: #070707;
          --card-bg: rgba(18,18,18,0.96);
          --gold: #d4af37;
          --neon-red: #ff2b2b;
          --neon-yellow: #ffd000;
          --muted: #bfc3c7;
        }

        * { box-sizing: border-box; }

        .page-root {
          min-height: 100vh;
          background: radial-gradient(circle at 10% 10%, rgba(40,40,40,0.5), transparent 20%), linear-gradient(180deg,var(--bg), #050505 60%);
          color: #fff;
          font-family: Inter, Poppins, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          padding: 28px;
        }

        .container { max-width: 1100px; margin: 0 auto; }

        /* header */
        .topbar { display:flex; justify-content:space-between; align-items:center; gap:14px; margin-bottom:22px; }
        .brand { display:flex; align-items:center; gap:12px; }
        .logo { width:52px; height:52px; border-radius:10px; background: linear-gradient(135deg,#111,var(--gold)); display:flex; align-items:center; justify-content:center; color:#111; font-weight:900; }
        .brand-title { font-weight:900; font-size:18px; }
        .brand-sub { color:var(--muted); font-size:13px; margin-top:4px; }

        .contact-top { text-align:right; }
        .bf-bubble { display:inline-block; background: rgba(255,255,255,0.02); padding:8px 12px; border-radius:12px; border:1px solid rgba(255,255,255,0.02); margin-bottom:6px; }
        .phone-top a { color: var(--neon-yellow); font-weight:800; text-decoration:none; }

        /* hero */
        .hero-grid { display:grid; grid-template-columns: 1fr 380px; gap:20px; align-items:start; }
        .neon-title { text-align:center; margin-bottom:12px; }
        .neon-red { color: var(--neon-red); text-shadow: 0 6px 18px rgba(255,43,43,0.35), 0 0 36px rgba(255,43,43,0.15); font-weight:900; }
        .neon-yellow { color: var(--neon-yellow); text-shadow: 0 6px 18px rgba(255,176,0,0.45), 0 0 30px rgba(255,176,0,0.12); font-weight:900; }
        .big { font-size:48px; letter-spacing:1px; display:block; }
        .desktop-promo { margin-top:6px; font-size:40px; opacity:0.98; }
        .promo-small { font-size:40px; font-weight:900; color:var(--neon-yellow); text-shadow: 0 6px 18px rgba(255,176,0,0.35); }

        .banner-cta { display:flex; justify-content:center; margin-bottom:18px; }
        .banner-inner { width:100%; max-width:780px; background: rgba(255,255,255,0.02); border: 1px solid rgba(247,181,0,0.06); padding:14px; border-radius:12px; text-align:center; }
        .banner-title { font-weight:700; }
        .banner-sub { color: var(--muted); margin-top:6px; font-size:14px; }

        /* plans */
        .plans-wrap { display:flex; gap:18px; flex-wrap:wrap; justify-content:center; margin:12px 0 20px; }
        .plan-card {
          width: 260px;
          border-radius: 14px;
          padding: 18px;
          background: var(--card-bg);
          border: 3px solid var(--gold); /* borda dourada */
          box-shadow: 0 14px 40px rgba(0,0,0,0.6);
          text-align:left;
          position: relative;
          overflow: hidden;
        }
        .card-top { display:flex; justify-content:flex-end; }
        .card-badge { background: rgba(255,255,255,0.03); padding:6px 10px; border-radius:8px; margin-bottom:10px; border: 1px solid rgba(255,255,255,0.03); }
        .badge-text { font-weight:800; color: var(--gold); }

        .plan-title { color: var(--neon-red); font-size:22px; font-weight:900; margin:8px 0; text-align:center; }
        .plan-features { list-style: none; padding:0; margin: 10px 0 12px; color:#e6e6e6; font-size:14px; }
        .plan-features li { display:flex; gap:10px; align-items:flex-start; margin-bottom:8px; padding-left:6px; }
        .plan-price { font-weight:900; color:#fff; font-size:20px; margin-bottom:10px; text-align:center; }

        .plan-cta {
          display:block;
          text-align:center;
          background: linear-gradient(90deg,#ffbf00,#ff3838);
          color:#111;
          padding:12px 14px;
          border-radius:12px;
          font-weight:900;
          text-decoration:none;
          border: 2px solid var(--gold);
          box-shadow: 0 8px 20px rgba(0,0,0,0.5);
        }

        .discovery { text-align:center; margin-top:6px; color:#cfcfcf; font-weight:700; }

        /* aside/form */
        .hero-aside { background: rgba(255,255,255,0.02); padding:16px; border-radius:12px; border: 1px solid rgba(255,255,255,0.03); }
        .h4-border { border: 2px solid var(--gold); border-radius:10px; padding:8px; display:inline-block; margin-bottom:12px; background: rgba(0,0,0,0.25); }
        .form-title { margin:0; color: var(--neon-yellow); font-weight:900; text-align:center; }
        .lead-form input, .lead-form textarea { width:100%; padding:10px; border-radius:8px; background:#111; color:#fff; border:none; margin-bottom:10px; }
        .submit-btn { width:100%; padding:12px; border-radius:10px; background: var(--neon-red); color:#fff; font-weight:900; border:none; cursor:pointer; }

        .side-actions { margin-top:12px; display:flex; flex-direction:column; gap:10px; }
        .whatsapp-link { display:block; text-align:center; background: linear-gradient(90deg,#25D366,#128C7E); color:#fff; padding:12px; border-radius:50px; font-weight:800; text-decoration:none; }
        .call-link { text-align:center; border:2px solid var(--neon-yellow); color:var(--neon-yellow); padding:10px; border-radius:50px; text-decoration:none; font-weight:800; display:block; }

        .footer { text-align:center; color:#9aa0a6; margin-top:26px; font-size:13px; }

        /* float CTA */
        .float-cta {
          position: fixed;
          right: 18px;
          bottom: 18px;
          background: linear-gradient(90deg,var(--neon-yellow),var(--neon-red));
          color:#111;
          padding:12px 18px;
          border-radius:999px;
          font-weight:900;
          text-decoration:none;
          box-shadow: 0 12px 30px rgba(0,0,0,0.6);
          z-index: 999;
        }

        /* responsive */
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr; }
          .big { font-size:36px; }
          .desktop-promo { font-size:28px; }
          .plan-card { width: 92%; margin:0 auto; }
          .h4-border { display:block; width:100%; }
        }
        @media (max-width: 420px) {
          .big { font-size:26px; }
          .desktop-promo { font-size:20px; }
          .plan-title { font-size:18px; }
        }
      `}</style>
    </div>
  );
}
