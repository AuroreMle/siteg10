<template>
  <div class="participer-page">
    <img src="@/assets/logotype.png" alt="Logo TheTipTop" class="logotype-image"/>
    <p class="instruction-text">Inscrivez-vous en tant qu'administrateur</p>
    
    <button class="signup-button facebook-button">S’inscrire avec Facebook</button>
    <button class="signup-button google-button">S’inscrire avec Google</button>
    
    <div class="divider">
      <span>OU</span>
    </div>
    
    <form class="signup-form" @submit.prevent="signupAdmin">
      <input v-model="fullName" type="text" placeholder="Prénom et Nom" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      
      <p class="terms-text">En vous inscrivant, vous acceptez nos Conditions générales</p>
      
      <button type="submit" class="submit-button">S’inscrire</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ParticiperAdminPage',
  data() {
    return {
      fullName: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async signupAdmin() {
      try {
        const response = await fetch('http://localhost:3000/signup/admin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.fullName,
            email: this.email,
            password: this.password,
            role: 'admin' // Spécifie que c'est un admin
          })
        });

        const data = await response.json();
        if (response.ok) {
          alert('Inscription administrateur réussie!');
          this.$router.push('/admin/connexion'); // Redirection vers la page de connexion admin
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    }
  }
};
</script>


<style scoped>
/* Use the same style as the user `ParticiperPage` */
.participer-page {
  width: 95%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #F3EDE0;
  border-radius: 10px;
  text-align: center;
  min-height: 620px;
}

.logotype-image {
  width: 360px; 
  margin-bottom: 20px;
}

.instruction-text {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.signup-button {
  background-color: #A3BFAB;
  color: white;
  border: none;
  padding: 10px 20px;
  font-family: Lato;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  max-width: 500px;
}

.google-button {
  margin-top: 20px;
}

.divider {
  margin: 20px 0;
  border-top: 5px solid #A3BFAB;
  position: relative;
  text-align: center;
}

.divider span {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #F3EDE0;
  padding: 0 10px;
  font-size: 1rem;
  color: black;
}

.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.signup-form input {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #243B3B;
  border-radius: 5px;
}

.terms-text {
  font-size: 0.9rem;
  color: black;
  margin: 10px 0;
}

.submit-button {
  background-color: #678D72;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 500px;
  font-size: 1rem;
}
</style>
