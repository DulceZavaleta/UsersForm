<template>
    <div
            id="e3"
            style="max-width: 600px; margin: auto;"
            class="grey lighten-3"
    >

    <v-layout align-center justify-center>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card color="purple" class="white--text">
                    <v-card-title primary-title>
                        <div class="headline">Bienvenidos a E-learning app</div>
                        <div>Esta es una aplicación de prueba de CRUD, para realizarla, haz clic en iniciar sesión y posteriormente acude al módulo usuarios para efectuar las acciones CRUD.</div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat dark v-bind:to="'/login'">Inicia sesión</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-layout>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>