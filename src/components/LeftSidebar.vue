<template>
  <div class="left-sidebar">
    <nav class="left-sidebar__nav nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link
            tag="a"
            to="/"
            class="nav__link"
            active-class="nav__link--active"
            exact
          >
            <span class="nav__link-img nav__link-img--home"></span>
            <span class="nav__link-text">Главная</span>
          </router-link>
        </li>
        <li class="nav__item">
          <router-link
            tag="a"
            to="/settings"
            class="nav__link"
            active-class="nav__link--active"
          >
            <span class="nav__link-img nav__link-img--settings"></span>
            <span class="nav__link-text">Опции</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'LeftSidebar',
}
</script>

<style lang="scss" scoped>
@import '../scss/_vars.scss';

.left-sidebar {
  position: fixed;
  top: $headerHeight;
  left: 0;
  width: $leftSidebarWidth;
  height: calc(100vh - #{$headerHeight});
  background: linear-gradient(90deg, #413968 0%, rgba(65, 57, 104, 0.99) 100%);
  z-index: 9;
}
.nav__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav__item {
  height: 105px;
}
.nav__link {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 18px 0 22px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.2s linear;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #161420 0%, #413968 82%);
    transition: transform 0.2s linear;
    z-index: -1;
  }

  // nav__link--active
  &:hover,
  &--active {
    &::before {
      transform: translateX(100%);
    }
  }

  // nav__link-img
  &-img {
    display: block;
    width: 35px;
    height: 35px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  // nav__link-img--home
  &-img--home {
    background-image: url('../assets/icons/home.svg');
  }

  // nav__link-img--settings
  &-img--settings {
    background-image: url('../assets/icons/settings.svg');
  }
}
</style>
