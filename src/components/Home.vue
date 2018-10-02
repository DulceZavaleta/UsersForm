<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-2">
                <v-toolbar dark color="primary" class="elevation-0">
                    <v-toolbar-title>Iniciar sesión</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field
                                prepend-icon="person"
                                name="user"
                                label="Usuario"
                                type="text">
                        </v-text-field>
                        <v-text-field prepend-icon="lock"
                                      name="password"
                                      label="Contraseña"
                                      id="password"
                                      type="password">
                        </v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary">Aceptar</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>