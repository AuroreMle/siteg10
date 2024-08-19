<template>
  <footer>
    <div class="footer-content">
      <img src="@/assets/logotype.png" alt="Logo TheTipTop" class="footer-logo" />
      <nav>
        <router-link to="/jeu-concours">Jeu concours</router-link>
        <router-link to="/a-propos">À propos</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/mentionslegales">Mentions Legales</router-link>
        <router-link to="/conditionsgenerales">CGU</router-link>
      </nav>
      <div class="social-media">
        <a href="https://www.instagram.com" target="_blank"><img src="@/assets/igicon.png" alt="Instagram logo icon" /></a>
        <a href="https://www.facebook.com" target="_blank"><img src="@/assets/fbicon.png" alt="Facebook logo icon" /></a>
        <a href="https://www.x.com" target="_blank"><img src="@/assets/icon.png" alt="X / Twitter logo icon " /></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top: 2px solid black;
  background-color: #fff;
  width: 100%; /* Full width */
  margin: 0; /* Remove side margin */
}

.footer-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.footer-logo {
  height: 80px; /* Adjust height as needed */
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

.social-media img {
  margin-left: 15px;
  height: 30px; /* Adjust as needed */
  cursor: pointer;
}
</style>
