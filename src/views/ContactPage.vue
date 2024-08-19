<template>
  <div class="contact-page">
    <section class="intro">
      <h1>Contactez-nous</h1>
      <p>Vous avez une question par rapport au concours, à la boutique ou vous voulez juste parler de thé? Nous sommes à votre écoute !</p>
    </section>

    <section class="contact-form-section">
      <div class="contact-container">
        <div class="teabag-image">
          <img src="@/assets/teabag.png" alt="Teabag Image">
        </div>
        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" id="name" v-model="name" placeholder="Nom et Prénom" required>
            </div>
            <div class="form-group">
              <input type="email" id="email" v-model="email" placeholder="Email" required>
            </div>
            <div class="form-group">
              <input type="text" id="subject" v-model="subject" placeholder="Objet" required>
            </div>
            <div class="form-group">
              <textarea id="message" v-model="message" placeholder="Message" rows="6" required></textarea>
            </div>
            <div class="submit-container">
              <button type="submit" class="submit-btn">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      alert(`Merci pour votre message, ${this.name}!`);
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.intro {
  text-align: center;
  margin-bottom: 40px;
}

.intro h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.intro p {
  font-size: 1.2rem;
  color: #555;
}

/* Updated Contact Form Section Styling */
.contact-form-section {
  display: flex;
  justify-content: center;
}

.contact-container {
  display: flex;
  align-items: center;
  background-color: #F3EDE0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom:30px;
  width: 95%;
  max-width: 900px;
  gap: 20px; /* Gap between image and form */
}

.teabag-image {
  flex: 1;
}

.teabag-image img {
  width: 100%; 
  border-radius: 10px;
}

.contact-form {
  flex: 2;
}

.form-group {
  margin-bottom: 20px;
  padding-right: 20px; /* Ajoute un padding à droite pour éviter que les inputs touchent la bordure */
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #243B3B;
  font-size: 1rem;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #AEAEAE;
  font-weight: normal;
}

.submit-container {
  display: flex;
  justify-content: flex-end;
}

.submit-btn {
  background-color: #678D72;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 10px;
}

.submit-btn:hover {
  background-color: #567A5E;
}
</style>