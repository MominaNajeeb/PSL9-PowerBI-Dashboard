* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #f5f7fa;
  color: #222;
  line-height: 1.6;
}

.hero {
  background: linear-gradient(135deg, #0b3d2e, #168f5a);
  color: white;
  text-align: center;
  padding: 70px 20px;
}

.hero h1 {
  font-size: 42px;
  margin-bottom: 15px;
}

.hero p {
  font-size: 18px;
  max-width: 800px;
  margin: auto;
}

.buttons {
  margin-top: 30px;
}

.btn {
  display: inline-block;
  margin: 8px;
  padding: 12px 22px;
  background: white;
  color: #0b3d2e;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
}

.btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.section {
  max-width: 1100px;
  margin: 50px auto;
  padding: 0 20px;
}

.section h2 {
  font-size: 30px;
  margin-bottom: 20px;
  color: #0b3d2e;
}

.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.gallery img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}

.card h3 {
  margin-bottom: 10px;
  color: #0b3d2e;
}

footer {
  text-align: center;
  padding: 25px;
  background: #0b3d2e;
  color: white;
  margin-top: 50px;
}

@media (max-width: 768px) {
  .gallery,
  .cards {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 30px;
  }
}
