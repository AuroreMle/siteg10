<template>
  <header>
    <div class="header-content">
      <router-link to="/">
        <img src="@/assets/logotype.png" alt="Logo TheTipTop" class="logo" />
      </router-link>
      <nav>
        <router-link to="/jeu-concours">Jeu concours</router-link>
        <router-link to="/a-propos">À propos</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
      <div class="buttons">
        <!-- Afficher "Ma dashboard" si l'utilisateur est connecté, sinon "Se connecter" -->
        <router-link v-if="isLoggedIn" :to="dashboardLink">
          <button class="login-btn">Ma dashboard</button>
        </router-link>
        <router-link v-else to="/connexion">
          <button class="login-btn">Se connecter</button>
        </router-link>
        
        <!-- Afficher "Se déconnecter" si l'utilisateur est connecté, sinon "Participer" -->
        <button v-if="isLoggedIn" class="participate-btn" @click="logout">Se déconnecter</button>
        <router-link v-else to="/participer">
          <button class="participate-btn">Participer</button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isLoggedIn: false, // Etat de connexion de l'utilisateur
      dashboardLink: '' // Lien vers le dashboard en fonction du rôle
    };
  },
  methods: {
    checkAuth() {
      // Vérifiez l'état de connexion ici
      // vérifier la présence d'un token ou d'une info dans localStorage
      const userRole = localStorage.getItem('userRole'); // Peut être 'user' ou 'admin'
      this.isLoggedIn = !!userRole; // Détermine si l'utilisateur est connecté

      // Déterminez le lien vers le dashboard
      if (userRole === 'admin') {
        this.dashboardLink = '/admin-dashboard';
      } else if (userRole === 'user') {
        this.dashboardLink = '/user-dashboard';
      }
    },
    logout() {
      // Supprimer les informations de connexion
      localStorage.removeItem('userRole');
      this.isLoggedIn = false;
      this.dashboardLink = '';
      this.$router.push('/'); // Rediriger vers la page d'accueil ou page de connexion
    }
  },
  created() {
    this.checkAuth();
  }
};
</script>

<style scoped>
/* Header Styles */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  border-bottom: 2px solid black;
  background-color: #fff;
  width: 100%; /* Full width */
  margin: 0; /* Remove side margin */
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo {
  width: 200px; /* Adjust height if needed */
}

nav {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: black;
}

.buttons {
  display: flex;
}

.login-btn, .participate-btn {
  border: 1px solid;
  padding: 10px 20px;
  margin: 0 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.login-btn {
  background-color: #F3EDE0;
  color: black;
}

.participate-btn {
  background-color: #678D72;
}
</style>
