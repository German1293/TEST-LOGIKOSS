<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.logikoss.com/assets/images/logo_tm.png"
          transition="scale-transition"
          width="150"
        />

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="logout">
        <span class="mr-2">Cerrar sesión</span>
        <v-icon>logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer absolute permanent left>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>account_box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Cuenta</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div>
      <div v-if="proyects">
        <div v-for="(item, index) in proyects" :key="index">
          <list-items :item="item"></list-items>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { http } from "../mixins/http-client";
import ListItems from "../components/ListItem.vue";
export default {
  name: "Home",
  mixins: [http],
  components: { ListItems },
  data() {
    return {
      name: "home",
      user: {},
      proyects: {},
    };
  },
  created() {},
  mounted() {
    if (localStorage.getItem("token")) {
      this.getData();
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    async logout() {
            localStorage.removeItem("token");
      this.$router.push("/login");
      await this.logoutUser().then((res) => {
        console.dir(res);
      });

    },
    async getData() {
      await this.getUser().then((res) => {
        this.user = res;
      });
      await this.getProyects().then(({ items }) => {
        console.dir(items);
        this.proyects = items;
      });
    },
  },
};
</script>
