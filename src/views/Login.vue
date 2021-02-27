<template>
  <div style="width:100%">
    <v-row>
      <v-col></v-col>
      <v-col style="padding-top: 117px;">
        <v-card elevation="1" width="400">
              <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
         <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="user.email"
              :rules="emailRules"
              label="Email"
              required
            ></v-text-field>

            <v-text-field
              v-model="user.password"
              label="Contraseña"
              required
            ></v-text-field>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Iniciar sesión
            </v-btn>
          </v-form>
         </v-card-text>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>
<script>
import { http } from "../mixins/http-client";
export default {
  mixins: [http],
  data: () => ({
    alignments: ["start", "center", "end"],
    user: {
      email: "test@logikoss.com",
      password: "12345678",
    },
    valid: true,
    nameRules: [
      (v) => !!v || "La contraseña es requerido",
      (v) =>
        (v && v.length >= 3) || "El contraseña de ser mayor a 3 caracteres",
    ],
    emailRules: [
      (v) => !!v || "El email es requerida",
      (v) => /.+@.+\..+/.test(v) || "E-mail invalido",
    ],
  }),

  methods: {
    async validate() {
      //   this.$refs.form.validate();
      await this.login(this.user).then((res) => {
        console.dir(res);

        this.$router.push("/");
      });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
