import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const WA_NUMBER = "5519933005880"; // número com DDI
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleClick = () => {
    const message = encodeURIComponent("Olá! Quero ativar minha promoção de internet Black Friday 🔥");
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="page-root">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="red-neon">BLACK FRIDAY</span><br />
            <span className="yellow-neon">DESKTOP PROMOÇÃO</span>
          </h1>
        </div>
      </div>

      <div className="plans">
        <div className="plan-card">
          <h2>600 MEGA</h2>
          <ul>
            <li>HBO Max grátis por 2 meses</li>
            <li>Wi-Fi incluso</li>
            <li>600 Mega de download</li>
            <li>300 Mega de upload</li>
          </ul>
          <div className="price">R$ 99,99</div>
          <button className="whatsapp-btn" onClick={handleClick}>Quero ativar agora</button>
        </div>

        <div className="plan-card">
          <h2>1 GIGA</h2>
          <ul>
            <li>HBO Max grátis por 2 meses</li>
            <li>Wi-Fi incluso</li>
            <li>1 Giga de download</li>
            <li>500 Mega de upload</li>
          </ul>
          <div className="price">R$ 119,99</div>
          <button className="whatsapp-btn" onClick={handleClick}>Quero ativar agora</button>
        </div>
      </div>

      {/* Ícone fixo do WhatsApp */}
      <div className="whatsapp-bubble" onClick={handleClick}>
        <MessageCircle size={28} />
      </div>

      <style jsx>{`
        .page-root {
          background: #000;
          color: #fff;
          min-height: 100vh;
          padding: 30px 15px;
          font-family: 'Poppins', sans-serif;
          text-align: center;
        }

        .hero {
          margin-bottom: 30px;
        }

        .hero-title {
          font-size: 2rem;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1.4;
        }

        .red-neon {
          color: #ff003c;
          text-shadow: 0 0 10px #ff003c, 0 0 20px #ff003c, 0 0 40px #ff003c;
        }

        .yellow-neon {
          color: #ffd700;
          text-shadow: 0 0 10px #ffb700, 0 0 20px #ffcc00, 0 0 40px #ffcc00;
        }

        .plans {
          display: flex;
          flex-direction: column;
          gap: 30px;
          align-items: center;
        }

        .plan-card {
          background: rgba(25, 25, 25, 0.95);
          border: 2px solid gold;
          border-radius: 15px;
          padding: 25px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
        }

        .plan-card h2 {
          font-size: 1.6rem;
          color: #fff;
          margin-bottom: 15px;
        }

        .plan-card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 15px 0;
          color: #ccc;
          line-height: 1.6;
        }

        .price {
          font-size: 1.8rem;
          font-weight: bold;
          color: #fff;
          margin-bottom: 15px;
        }

        .whatsapp-btn {
          background: linear-gradient(90deg, #25d366, #128c7e);
          color: #fff;
          border: none;
          padding: 12px 20px;
          font-size: 1rem;
          font-weight: 700;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          box-shadow: 0 0 10px rgba(37, 211, 102, 0.5);
          transition: transform 0.2s;
        }

        .whatsapp-btn:hover {
          transform: scale(1.05);
        }

        .whatsapp-bubble {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #25d366, #128c7e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 0 15px rgba(37, 211, 102, 0.5);
          cursor: pointer;
          z-index: 1000;
          transition: transform 0.3s;
        }

        .whatsapp-bubble:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 1.6rem;
          }

          .plan-card {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
}
