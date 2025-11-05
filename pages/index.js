
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, you'd call an API route here to save the lead.
    console.log("Lead enviado:", formData);
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#000,#0f0f10)", color: "#fff", padding: 24 }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ background: "#f7b500", width: 44, height: 44, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#111", fontWeight: 800 }}>D</div>
            <div>
              <h1 style={{ margin: 0 }}>DESKTOP</h1>
              <div style={{ color: "#bfc3c7", fontSize: 13 }}>Internet residencial e empresarial</div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#bfc3c7", fontSize: 13 }}>Black Friday</div>
            <div style={{ fontWeight: 800, color: "#f7b500" }}>(19) 93300-5880</div>
          </div>
        </header>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 20, alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: 48, margin: "0 0 8px", lineHeight: 1 }}>Black <span style={{ color: "#ff2b2b" }}>Friday</span></h2>
            <p style={{ color: "#bfc3c7", marginTop: 8 }}>A maior oferta do ano — velocidade que você precisa e entretenimento incluso.</p>

            <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
              <div style={{ background: "rgba(255,255,255,0.03)", padding: 12, borderRadius: 10 }}>
                <strong style={{ display: "block", fontSize: 20 }}>600 Mega + 1 Giga</strong>
                <div style={{ color: "#bfc3c7", fontSize: 13 }}>Planos com tecnologia de fibra — estável para streaming, jogos e home office.</div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.03)", padding: 12, borderRadius: 10 }}>
                <strong style={{ display: "block", fontSize: 20 }}>2 meses de HBO Max</strong>
                <div style={{ color: "#bfc3c7", fontSize: 13 }}>Assista séries e filmes na qualidade que você merece.</div>
              </div>

              <div style={{ background: "#f7b500", color: "#111", padding: 12, borderRadius: 10, fontWeight: 700, textAlign: "center" }}>
                A PARTIR DE <div style={{ fontSize: 28, marginTop: 6 }}>R$ <span style={{ fontSize: 36 }}>99,99</span>/mês</div>
              </div>
            </div>
          </div>

          <aside style={{ background: "rgba(255,255,255,0.04)", padding: 18, borderRadius: 14 }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <h3 style={{ color: "#f7b500", textAlign: "center", margin: 0 }}>Garanta sua oferta exclusiva ⚡</h3>
                <input name="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome completo" style={{ padding: 10, borderRadius: 8, background: "#111", color: "#fff", border: "none" }} />
                <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="Seu WhatsApp" style={{ padding: 10, borderRadius: 8, background: "#111", color: "#fff", border: "none" }} />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensagem (opcional)" style={{ padding: 10, borderRadius: 8, background: "#111", color: "#fff", border: "none", minHeight: 80 }} />
                <button type="submit" style={{ background: "#ff2b2b", color: "#fff", padding: "10px 14px", borderRadius: 8, fontWeight: 700 }}>Enviar</button>
              </form>
            ) : (
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#6ee7b7", fontWeight: 700 }}>✅ Enviado com sucesso!</p>
                <p style={{ color: "#bfc3c7" }}>Obrigado! Vamos retornar pelo WhatsApp.</p>
              </div>
            )}

            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="https://wa.me/5519933005880?text=Ol%C3%A1!%20Tenho%20interesse%20na%20promo%C3%A7%C3%A3o%20Black%20Friday%20Desktop" target="_blank" rel="noreferrer" style={{ background: "#ff2b2b", color: "#fff", textDecoration: "none", padding: 10, borderRadius: 8, textAlign: "center", fontWeight: 700 }}>Chamar no WhatsApp</a>
              <a href="tel:+5519933005880" style={{ border: "2px solid #f7b500", color: "#f7b500", padding: 10, borderRadius: 8, textAlign: "center", fontWeight: 700, textDecoration: "none" }}>Ligar agora</a>
            </div>
          </aside>
        </motion.section>

        <footer style={{ textAlign: "center", color: "#9aa0a6", marginTop: 24, fontSize: 13 }}>
          © Desktop — Promoção válida por tempo limitado. Sujeito à disponibilidade técnica.
        </footer>
      </div>
    </div>
  );
}
