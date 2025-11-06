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
              {/* DESKTOP em vermelho neon */}
              <div className="brand-title neon-red">DESKTOP</div>
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
                {/* TITULO PRINCIPAL: BLACK FRIDAY vermelho neon */}
                <div><span className="neon-red big">BLACK FRIDAY</span></div>

                {/* DESKTOP PROMO em vermelho neon */}
                <div className="desktop-promo">
                  <span className="neon-red big">DESKTOP PROMO</span>
                </div>
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
          --gold: #d4af37;
        }

        .neon-red {
          color: var(--neon-red);
          text-shadow: 0 0 12px var(--neon-red), 0 0 25px rgba(255, 43, 43, 0.25);
          font-weight: 900;
        }
      `}</style>
    </div>
  );
}
