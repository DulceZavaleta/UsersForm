<template>
    <div id="app">
        <v-app>
            <v-navigation-drawer
                    v-model="drawer"
                    dark
                    app
            >
                <v-list dense>
                    <v-list-tile v-bind:to="'/home'">
                        <v-list-tile-action>
                            <v-icon>home</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Inicio</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-bind:to="'/users'">
                        <v-list-tile-action>
                            <v-icon>contact_mail</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Usuarios</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar color="primary" class="elevation-2" dark fixed app>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title>E-learning app</v-toolbar-title>
            </v-toolbar>
            <v-content>
                <v-container fluid fill-height class="grey lighten-4">
                    <router-view></router-view>
                </v-container>
            </v-content>
            <v-footer color="primary" app inset>
                <span class="white--text">&copy; 2017</span>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                drawer: false
            }
        }
    }
</script>

<style>
    #app {

    }
</style>
