<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title to="/">HOME</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title to="/">ABOUT</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title to="/">USERS</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title to="/users/login">LOGIN</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        ECNEXUS
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <v-card-title>
        <v-btn fab small class="mx-2" color="white" href="https://twitter.com/xxxxxx">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn fab small class="mx-2" color="white" href="https://www.facebook.com/xxxxxxx">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn fab small class="mx-2" color="white" href="https://www.instagram.com/xxxxxx/">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <p>Copyright © ECNEXUS</p>
      </v-card-text>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
