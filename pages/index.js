import React from "react";

export default function BlackFridayDesktopPromo() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Cabeçalho */}
      <header className="w-full max-w-5xl flex justify-between items-center mb-8">
        <div className="text-left">
          <h1 className="text-xl font-bold text-white">DESKTOP</h1>
          <p className="text-sm text-gray-400">
            A internet que evolui com você!
          </p>
        </div>
        <div className="text-right text-sm">
          <span className="neon-red font-bold">BLACK FRIDAY</span>
          <br />
          <span className="text-white">(19) 92000-5880</span>
        </div>
      </header>

      {/* Título principal */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          <span className="neon-red">BLACK FRIDAY</span>{" "}
          <span className="neon-yellow">DESKTOP PROMO</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Planos de 600 Mega e 1 Giga — com HBO Max grátis por 2 meses!
        </p>
      </div>

      {/* Cards de planos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-10">
        {/* Plano 600 Mega */}
        <div className="bg-neutral-900 p-6 rounded-2xl shadow-xl border border-gray-700 text-center">
          <h3 className="text-lg font-bold neon-red mb-2">BLACK FRIDAY</h3>
          <h4 className="text-2xl font-extrabold text-white mb-4">600 MEGA</h4>
          <ul className="text-gray-300 text-sm mb-6 space-y-1">
            <li>🎬 HBO Max grátis por 2 meses</li>
            <li>📶 Wi-Fi grátis</li>
            <li>⚡ 600 Mega de download</li>
            <li>📞 Suporte técnico especializado</li>
          </ul>
          <p className="text-2xl font-bold mb-4">R$ 99,99</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition">
            Quero ativar agora
          </button>
        </div>

        {/* Plano 1 Giga */}
        <div className="bg-neutral-900 p-6 rounded-2xl shadow-xl border border-gray-700 text-center">
          <h3 className="text-lg font-bold neon-red mb-2">BLACK FRIDAY</h3>
          <h4 className="text-2xl font-extrabold text-white mb-4">1 GIGA</h4>
          <ul className="text-gray-300 text-sm mb-6 space-y-1">
            <li>🎬 HBO Max grátis por 2 meses</li>
            <li>📶 Wi-Fi grátis</li>
            <li>⚡ 1 Giga de download</li>
            <li>📞 Suporte técnico especializado</li>
          </ul>
          <p className="text-2xl font-bold mb-4">R$ 119,99</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition">
            Quero ativar agora
          </button>
        </div>
      </div>

      {/* Formulário de oferta */}
      <div className="w-full max-w-4xl text-center border border-gray-700 rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">
          Garanta sua oferta exclusiva ⚡
        </h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
          <input
            type="text"
            placeholder="Nome completo"
            className="p-3 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Telefone"
            className="p-3 rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="p-3 rounded-lg w-full md:col-span-2"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full w-full md:col-span-2 transition"
          >
            QUERO ATIVAR AGORA
          </button>
        </form>
      </div>
    </div>
  );
}

/* ESTILOS NEON */
<style jsx>{`
  .neon-red {
    color: #ff0000;
    text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000;
  }

  .neon-yellow {
    color: #ffd700;
    text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700;
  }
`}</style>
