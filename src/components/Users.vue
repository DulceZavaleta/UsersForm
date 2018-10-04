<template>
    <v-layout align-center justify-center>
        <v-layout row wrap>
            <v-container>
                <v-btn
                        color="blue-grey"
                        class="white--text"
                        @click="dialog=true"
                >
                    Agregar usuario
                    <v-icon right dark>add</v-icon>
                </v-btn>
            </v-container>
            <v-container>
                <v-data-table
                        :headers="headers"
                        :items="users"
                        :search="search"
                        :loading="loader"
                        hide-actions
                        class="elevation-1"
                >
                    <v-progress-linear slot="progress" color="blue" :indeterminate="loader"></v-progress-linear>
                    <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                        <span slot="activator">
                            {{ props.header.text }}
                        </span>
                            <span>
                            {{ props.header.text }}
                        </span>
                        </v-tooltip>
                    </template>
                    <template slot="items" slot-scope="props">
                        <tr>
                            <td class="py-2">
                                <v-list-tile-avatar size="70" v-if="props.item.avatar">
                                    <img :src="props.item.avatar">
                                </v-list-tile-avatar>
                                <div v-else>
                                    <v-avatar size="70" color="indigo">
                                        <v-icon dark>account_circle</v-icon>
                                    </v-avatar>
                                </div>
                            </td>
                            <td class="text-xs-left">{{ props.item.name }}</td>
                            <td class="text-xs-left">{{ props.item.email }}</td>
                            <td class="text-xs-left">
                                <v-checkbox v-model="props.item.active" disabled>
                                </v-checkbox>
                            </td>
                            <td>
                                <v-icon class="mr-2" @click="props.expanded = !props.expanded">
                                    description
                                </v-icon>
                                <v-icon class="mr-2" @click="editItem(props.item)">
                                    edit
                                </v-icon>
                                <v-icon @click="deleteUser(props.item)">
                                    delete
                                </v-icon>
                            </td>
                        </tr>
                    </template>
                    <template slot="expand" slot-scope="props">
                        <detail-form :data="props.item">
                        </detail-form>
                    </template>
                    <template slot="no-data">
                        <v-alert :value="true" color="error" icon="warning">
                            No hay datos de usuarios
                        </v-alert>
                    </template>
                </v-data-table>
            </v-container>
        </v-layout>
        <v-dialog v-model="dialog" scrollable max-width="90%">

            <v-card>
                <v-toolbar
                        color="pink"
                        dark
                >
                    <v-toolbar-title>Detalles del usuario</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-divider></v-divider>
                <v-card-text style="height: 300px;">
                    <add-form :data="editedItem">
                    </add-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="blue darken-1" flat @click="close()">Cancelar
                    </v-btn>
                    <v-btn color="blue darken-1" flat @click="saveUser()">Guardar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import VListTileAction from "vuetify/src/components/VList/VListTileAction";
    import AddForm from "@/components/AddForm"
    import DetailForm from "@/components/DetailForm"

    export default {
        components: {VListTileAction, AddForm, DetailForm},
        name: "users",
        mounted() {
            this.getAllUsers();
        },
        data() {
            return {
                search: '',
                selected: [],
                users: [],
                loader: true,
                dialog: false,
                editedIndex: -1,
                editedItem: {
                    id: 0,
                    name: '',
                    email: '',
                    avatar: '',
                    type: '',
                    address: null,
                    country: 0,
                    gender: '',
                    year_of_birth: '',
                    phone: '',
                    mobile_phone: 0,
                    active: true,
                    tags: ''
                },
                defaultItem: {
                    id: 0,
                    name: '',
                    email: '',
                    avatar: '',
                    type: '',
                    address: null,
                    country: 0,
                    gender: '',
                    year_of_birth: '',
                    phone: '',
                    mobile_phone: 0,
                    active: true,
                    tags: ''
                },
                headers: [
                    {
                        text: 'Avatar',
                        align: 'left',
                        sortable: false,
                        value: 'avatar'
                    },
                    {text: 'Nombre', value: 'name'},
                    {text: 'Correo', value: 'email'},
                    {text: 'Activo', value: 'active'},
                    {text: 'Acciones', value: '', sortable: false}
                ]
            }
        },
        methods: {
            getAllUsers() {
                this.$axios({
                    method: 'get',
                    url: '/users',
                    params: {
                        token: this.$cookie.get('authToken')
                    }
                }).then((response) => {
                    this.users = response.data.data;
                    this.loader = false;
                });
            },
            deleteUser(item) {
                let dialog = confirm('¿Desea eliminar este elemento?');

                if (dialog) {
                    this.$axios({
                        method: 'delete',
                        url: '/users/' + item.id,
                        params: {
                            token: this.$cookie.get('authToken')
                        }
                    }).then((response) => {
                        const index = this.users.indexOf(item);
                        this.users.splice(index, 1);
                        window.alert('Usuario eliminado');
                    });
                }
            },
            saveUser() {
                if (this.editedIndex > -1) {
                    this.updateUser();
                } else {
                    this.addUser();
                }

            },
            addUser(){
                this.$axios({
                    method: 'post',
                    url: '/users',
                    params: {
                        token: this.$cookie.get('authToken')
                    },
                    data: this.editedItem
                }).then((response) => {
                    this.users.push(response.data.data);
                    this.close();
                    window.alert('Usuario agregado');
                }).catch(() => {
                    this.close();
                });
            },
            updateUser(){
                if (this.users[this.editedIndex].email === this.editedItem.email) {
                    delete this.editedItem.email;
                }
                this.$axios({
                    method: 'put',
                    url: '/users/' + this.editedItem.id,
                    params: {
                        token: this.$cookie.get('authToken')
                    },
                    data: this.editedItem
                }).then((response) => {
                    Object.assign(this.users[this.editedIndex], response.data.data);
                    this.close();
                    window.alert('Usuario modificado satisfactoriamente');
                }).catch(() => {
                    this.close();
                });
            },
            editItem(item) {
                this.editedIndex = this.users.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true;
            },
            close() {
                this.dialog = false;
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1
            },
            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            }
        }
    }
</script>

<style scoped>

</style>