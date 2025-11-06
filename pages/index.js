<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Black Friday Desktop Promo</title>
<style>
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 20px;
  }

  /* Cabeçalho */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0a0a0a;
    padding: 15px;
    border-radius: 12px;
    flex-wrap: wrap;
  }

  .logo-box {
    border: 2px solid #ffcc00;
    border-radius: 10px;
    padding: 8px 12px;
  }

  .logo-box h1 {
    margin: 0;
    font-size: 20px;
    color: #fff;
  }

  .logo-box p {
    margin: 0;
    font-size: 14px;
    color: #ccc;
  }

  /* Balão de fala */
  .call-box {
    position: relative;
    background: linear-gradient(90deg, #ff4b2b, #ffcc00);
    color: #000;
    font-weight: bold;
    border-radius: 25px;
    padding: 10px 15px;
    margin-top: 8px;
  }

  .call-box::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 30px;
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: #ff4b2b transparent;
  }

  .call-box a {
    color: #000;
    text-decoration: none;
  }

  /* Título principal */
  .title {
    margin-top: 25px;
    font-size: 26px;
    font-weight: 700;
  }

  .title span.red {
    color: #ff1e56;
    text-shadow: 0 0 8px #ff0033;
  }

  .title span.yellow {
    color: #ffcc00;
    text-shadow: 0 0 8px #ffcc00;
  }

  /* Seção de planos */
  .plan {
    background: #111;
    border: 2px solid #ff1e56;
    border-radius: 20px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 0 15px rgba(255, 30, 86, 0.5);
  }

  .plan h2 {
    color: #fff;
    margin-bottom: 10px;
  }

  .plan ul {
    list-style: none;
    padding: 0;
    color: #ddd;
  }

  .plan ul li {
    margin: 5px 0;
  }

  .price {
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0;
  }

  .btn {
    display: inline-block;
    background: linear-gradient(90deg, #ffcc00, #ff1e56);
    color: #000;
    padding: 12px 25px;
    border-radius: 30px;
    font-weight: bold;
    text-decoration: none;
    margin-top: 10px;
    transition: transform 0.3s;
  }

  .btn:hover {
    transform: scale(1.05);
  }

  /* Responsividade */
  @media (max-width: 600px) {
    .title {
      font-size: 22px;
    }
    .plan {
      padding: 15px;
    }
    .btn {
      padding: 10px 20px;
    }
  }
</style>
</head>
<body>

<header>
  <div class="logo-box">
    <h1>DESKTOP</h1>
    <p>Internet residencial e empresarial</p>
  </div>
  <div class="call-box">
    🔥 Black Friday <a href="https://wa.me/5519933005880">(19) 93300-5880</a>
  </div>
</header>

<h2 class="title">
  <span class="red">BLACK FRIDAY</span> <span class="yellow">DESKTOP PROMO</span>
</h2>

<div class="plan">
  <h2>600 MEGA</h2>
  <ul>
    <li>HBO Max grátis por 2 meses</li>
    <li>Wi-Fi incluso</li>
    <li>600 Mega de download</li>
    <li>300 Mega de upload</li>
  </ul>
  <div class="price">R$ 99,99</div>
  <a href="https://wa.me/5519933005880" class="btn">Quero ativar agora</a>
</div>

<div class="plan">
  <h2>1 GIGA</h2>
  <ul>
    <li>HBO Max grátis por 2 meses</li>
    <li>Wi-Fi incluso</li>
    <li>1 Giga de download</li>
    <li>500 Mega de upload</li>
  </ul>
  <div class="price">R$ 119,99</div>
  <a href="https://wa.me/5519933005880" class="btn">Quero ativar agora</a>
</div>

</body>
</html>
