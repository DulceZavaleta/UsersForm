<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-2">
                <v-toolbar dark color="primary" class="elevation-0">
                    <v-toolbar-title>Iniciar sesión</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <form>
                        <v-text-field
                                prepend-icon="person"
                                data-vv-name="usuario"
                                :error-messages="errors.collect('usuario')"
                                v-model="form.user"
                                v-validate="formRules.email"
                                label="Usuario"
                                type="text"
                                required>
                        </v-text-field>
                        <v-text-field prepend-icon="lock"
                                      data-vv-name="contraseña"
                                      :error-messages="errors.collect('contraseña')"
                                      v-model="form.password"
                                      v-validate="formRules.password"
                                      label="Contraseña"
                                      type="password"
                                      required>
                        </v-text-field>
                    </form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="authenticate">Aceptar</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                form: {
                    user: '',
                    password: ''
                },
                formRules: {
                    email: 'required|email|max:50',
                    password: 'required'
                }
            }
        },
        methods: {
            authenticate() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.sendRequest();
                        return false;
                    }
                }).catch(() => {

                });
            },
            sendRequest() {
                this.$axios({
                    method: 'post',
                    url: '/authenticate',
                    data: this.form
                }).then((response) => {
                    window.alert(response.data.token);
                });
            }
        }
    }
</script>

<style scoped>

</style>