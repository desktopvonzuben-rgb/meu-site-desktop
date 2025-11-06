import { useState } from "react";

export default function Home() {
  const WA_NUMBER = "5519933005880"; // seu número com DDI
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  }

  function openWhatsApp(text) {
    const message = encodeURIComponent(text || "Olá! Tenho interesse na promoção Black Friday Desktop Promoção.");
    const url = `https://wa.me/${WA_NUMBER}?text=${message}`;
    // abre numa nova aba/janela
    window.open(url, "_blank");
  }

  function handleSubmit(e) {
    e.preventDefault();
    // aqui você pode integrar com API / salvar lead
    setSent(true);
    setFormData({ name: "", phone: "", message: "" });
    // abre whatsapp com texto rápido (opcional)
    openWhatsApp("Olá! Quero ativar minha promoção Black Friday — favor me contatar.");
  }

  return (
    <div className="page-root">
      <main className="container">
        <header className="topbar">
          <div className="brand">
            <div className="logo">D</div>
            <div className="brand-text">
              <div className="brand-title">DESKTOP</div>
              <div className="brand-sub">Internet residencial e empresarial</div>
            </div>
          </div>

          <div className="contact">
            <div className="bubble">🔥 <span className="bf-text">Black Friday</span></div>
            <a className="phone" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">
              (19) 93300-5880
            </a>
          </div>
        </header>

        <section className="hero">
          <h1 className="hero-title">
            <span className="black-text">BLACK <span className="neon-red">FRIDAY</span></span>
            <br />
            <span className="desktop-text"><span className="neon-yellow">DESKTOP</span> PROMOÇÃO</span>
          </h1>

          <p className="hero-sub">Planos de 600 Mega e 1 Giga — Oferta Black Friday. Ativação rápida na sua região.</p>
        </section>

        <section className="plans" aria-label="Planos">
          <article className="plan-card">
            <div className="badge">BLACK FRIDAY</div>
            <h2>600 MEGA</h2>
            <ul>
              <li>HBO Max grátis por 2 meses</li>
              <li>Wi-Fi incluso</li>
              <li>600 Mega de download</li>
              <li>300 Mega de upload</li>
            </ul>
            <div className="price">R$ 99,99</div>
            <button className="cta" onClick={() => openWhatsApp("Quero ativar o plano 600 MEGA — Desktop Promoção")}>Quero ativar agora</button>
          </article>

          <article className="plan-card">
            <div className="badge">BLACK FRIDAY</div>
            <h2>1 GIGA</h2>
            <ul>
              <li>HBO Max grátis por 2 meses</li>
              <li>Wi-Fi 6 incluso</li>
              <li>1 Giga de download</li>
              <li>500 Mega de upload</li>
            </ul>
            <div className="price">R$ 119,99</div>
            <button className="cta" onClick={() => openWhatsApp("Quero ativar o plano 1 GIGA — Desktop Promoção")}>Quero ativar agora</button>
          </article>
        </section>

        <section className="discovery">
          <strong>DESCUBRA O POTENCIAL</strong>
          <div className="discovery-sub">DA SUA INTERNET HOJE <span className="muted">na sua região.</span></div>
        </section>

        <aside className="form-wrap" aria-label="Formulário de contato">
          {!sent ? (
            <form onSubmit={handleSubmit} className="lead-form">
              <h3>Garanta sua oferta exclusiva ⚡</h3>
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome completo" required />
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Seu WhatsApp (ex: 19933005880)" required />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensagem (opcional)" />
              <div className="form-actions">
                <button type="submit" className="submit">Enviar</button>
                <button type="button" className="open-wa" onClick={() => openWhatsApp("Quero ativar agora — prefiro whatsapp")}>Abrir WhatsApp</button>
              </div>
            </form>
          ) : (
            <div className="sent-ok">
              ✅ Enviado com sucesso! Vamos te responder no WhatsApp.
            </div>
          )}
        </aside>
      </main>

      {/* Floating WhatsApp fixed lateral (abre direto) */}
      <button className="whatsapp-float" onClick={() => openWhatsApp("Quero ativar a promoção Black") } aria-label="Abrir WhatsApp">
        {/* SVG do ícone WhatsApp simples */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M20.52 3.48A11.92 11.92 0 0012 0C5.373 0 .001 5.373 0 12c0 2.118.56 4.148 1.62 5.94L0 24l6.18-1.62A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.16-3.48-8.52z" fill="#25D366"/>
          <path d="M17.6 14.2c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.48-1.78-1.65-2.08-.17-.3-.02-.46.12-.61.12-.12.27-.3.4-.45.13-.15.17-.25.27-.42.1-.17.04-.31-.02-.46-.07-.15-.67-1.6-.92-2.19-.24-.57-.49-.49-.67-.5l-.57-.01c-.18 0-.46.07-.7.31-.24.24-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.18 1.85 2.98 4.49 4.17 3.13 1.42 3.13 0.95 3.69.9.55-.05 1.76-.72 2.01-1.42.24-.7.24-1.3.17-1.43-.07-.13-.26-.2-.56-.35z" fill="#fff"/>
        </svg>
      </button>

      <style jsx>{`
        :root {
          --bg: #060607;
          --card: rgba(30,30,30,0.9);
          --gold: #d9b54a;
          --neon-red: #ff003c;
          --neon-yellow: #ffd700;
          --muted: #bfc3c7;
          --wa-start: #25d366;
          --wa-end: #128c7e;
        }

        * { box-sizing: border-box; }
        body, html { margin:0; padding:0; }

        .page-root {
          background: linear-gradient(180deg, var(--bg), #0b0b0b);
          color: #fff;
          min-height: 100vh;
          font-family: Inter, Poppins, Arial, sans-serif;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 28px 16px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 28px;
        }

        .topbar {
          grid-column: 1 / -1;
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom: 6px;
        }
        .brand { display:flex; gap:12px; align-items:center; }
        .logo { width:48px; height:48px; border-radius:10px; background: linear-gradient(135deg,#111,var(--gold)); color:#111; font-weight:800; display:flex; align-items:center; justify-content:center; }
        .brand-title { font-weight:800; font-size:18px; }
        .brand-sub { color: var(--muted); font-size:13px; }

        .contact { text-align:right; display:flex; flex-direction:column; align-items:flex-end; gap:6px; }
        .bubble { background: rgba(255,255,255,0.06); padding:8px 12px; border-radius:10px; color:#fff; font-weight:700; display:inline-block; }
        .phone { color: var(--wa-start); text-decoration:underline; font-weight:700; }

        .hero { grid-column: 1 / 2; text-align:center; padding:18px 6px; }
        .hero-title { margin: 4px 0 8px; font-size:36px; line-height:1.05; font-weight:900; text-transform:uppercase; }
        .neon-red { color: var(--neon-red); text-shadow: 0 8px 24px rgba(255,0,60,0.25); }
        .neon-yellow { color: var(--neon-yellow); text-shadow: 0 8px 28px rgba(255,215,0,0.2); }
        .hero-sub { color: var(--muted); margin-top:6px; }

        .plans { grid-column: 1 / 2; display:flex; gap:20px; flex-wrap:wrap; justify-content:center; margin-top:8px; }
        .plan-card {
          background: var(--card);
          border: 2px solid rgba(217,181,74,0.9);
          border-radius: 14px;
          padding: 18px;
          width: 320px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.6);
        }
        .badge { display:inline-block; background: rgba(217,181,74,0.08); color: var(--gold); padding:6px 10px; border-radius:8px; font-weight:800; margin-bottom:10px; }
        .plan-card h2 { margin:8px 0; font-size:22px; color:#fff; }
        ul { margin:0 0 12px 0; padding-left:18px; color:#dcdcdc; }
        .price { font-size:20px; font-weight:900; color:#fff; margin-bottom:12px; }
        .cta { width:100%; padding:12px; background: linear-gradient(90deg,var(--wa-start),var(--wa-end)); color:#fff; border:none; border-radius:10px; font-weight:800; cursor:pointer; }

        .discovery { grid-column: 1 / 2; text-align:center; margin-top:10px; color:#d6d6d6; font-weight:700; }

        .form-wrap { grid-column: 2 / 3; background: rgba(255,255,255,0.03); padding:16px; border-radius:12px; height:fit-content; }
        .lead-form input, .lead-form textarea { width:100%; padding:10px; margin-bottom:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.03); background:#0b0b0b; color:#fff; }
        .form-actions { display:flex; gap:8px; }
        .submit { flex:1; padding:10px; border-radius:8px; background:var(--neon-red); border:none; color:#fff; font-weight:800; cursor:pointer; }
        .open-wa { flex:1; padding:10px; border-radius:8px; border:2px solid var(--gold); background:transparent; color:var(--gold); font-weight:800; cursor:pointer; }

        .sent-ok { text-align:center; padding:20px; font-weight:700; color:#6fe7b2; }

        /* Floating WA */
        .whatsapp-float {
          position: fixed;
          right: 20px;
          top: 40%;
          transform: translateY(-50%);
          z-index: 9999;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display:flex;
          align-items:center;
          justify-content:center;
          background: linear-gradient(135deg,var(--wa-start),var(--wa-end));
          border: 3px solid rgba(255,255,255,0.08);
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
          cursor:pointer;
        }
        .whatsapp-float svg { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.35)); }

        /* responsive */
        @media (max-width: 980px) {
          .container { grid-template-columns: 1fr; padding: 16px; }
          .form-wrap { grid-column: 1 / -1; order: 3; }
          .plans { justify-content:center; }
          .hero { order: 1; }
          .discovery { order: 2; }
        }
      `}</style>
    </div>
  );
}
