<template>
  <header>
      <nav>
        <router-link to="/" class="imgLink">
          <img src="@/assets/logo-abbr.png" alt="">
        </router-link> 

        <div class="links-wrapper">
          <router-link to="/painel">Painel</router-link> 

          <router-link to="/totem">Totem</router-link>
        </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'MyHeader'
  }
</script>

<style lang="scss" scoped>
  nav {
    padding: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 8rem;
    }

    a {
      font-weight: bold;
      color: var(--abbr-gray-900);
      text-decoration: none;
      transition: 0.2s ease;
      border-bottom: 0.125rem solid transparent;
      &.router-link-exact-active {
        border-bottom-color: var(--abbr-green-500);
      }
      
      &:hover {
        color: var(--abbr-green-500);
      }
    }
  }
  .links-wrapper {
    display: flex;
    gap: 1rem;
  }

  .imgLink {
    border: none !important;
    line-height: 0;
  }

  @media (display-mode: fullscreen) {
    header {
      position: absolute;
      display: none;
    }
  }
</style>