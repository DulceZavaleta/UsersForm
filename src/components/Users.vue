<template>
    <v-layout align-center justify-center>
        <v-layout row wrap>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <add-form></add-form>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container>
                <v-data-table
                        :headers="headers"
                        :items="users"
                        :search="search"
                        :pagination.sync="pagination"
                        hide-actions
                        class="elevation-1"
                >
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
                                <v-icon class="mr-2">
                                    edit
                                </v-icon>
                                <v-icon>
                                    delete
                                </v-icon>
                            </td>
                        </tr>
                    </template>
                    <template slot="expand" slot-scope="props">
                        <detail-form :data="props.item">
                        </detail-form>
                    </template>
                </v-data-table>
                <div class="text-xs-center pt-2">
                    <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
                </div>
            </v-container>
        </v-layout>
    </v-layout>
</template>

<script>
    import VListTileAction from "vuetify/src/components/VList/VListTileAction";
    import AddForm from "@/components/AddForm"
    import DetailForm from "@/components/DetailForm"

    export default {
        components: {VListTileAction, AddForm, DetailForm},
        name: "users",
        data() {
            return {
                search: '',
                pagination: {},
                selected: [],
                headers: [
                    {
                        text: 'Avatar',
                        align: 'left',
                        sortable: false,
                        value: 'avatar'
                    },
                    {text: 'Name', value: 'name'},
                    {text: 'Email', value: 'email'},
                    {text: 'Active', value: 'active'},
                    {text: 'Acciones', value: '', sortable: false}
                ],
                users: [
                    {
                        "id": 63,
                        "name": "Test",
                        "email": "correo@test.com",
                        "avatar": null,
                        "type": "user",
                        "address": null,
                        "country": 0,
                        "gender": null,
                        "year_of_birth": null,
                        "phone": "",
                        "mobile_phone": "",
                        "active": true,
                        "tags": "",
                        "last_login": "2018-09-27 19:42:58",
                        "ip": "",
                        "created_at": "2018-09-27 19:42:58",
                        "updated_at": "2018-09-27 19:42:58",
                        "deleted_at": null
                    },
                    {
                        "id": 64,
                        "name": "Nombre Completo",
                        "email": "usuario@email.com",
                        "avatar": null,
                        "type": "user",
                        "address": "Dirección",
                        "country": 0,
                        "gender": null,
                        "year_of_birth": null,
                        "phone": "5555555555",
                        "mobile_phone": "5555555555",
                        "active": true,
                        "tags": "",
                        "last_login": "2018-10-01 21:57:08",
                        "ip": "",
                        "created_at": "2018-10-01 21:57:08",
                        "updated_at": "2018-10-01 21:57:08",
                        "deleted_at": null
                    },
                    {
                        "id": 65,
                        "name": "Nombre Completo",
                        "email": "usuario323@email.com",
                        "avatar": null,
                        "type": "user",
                        "address": "Dirección",
                        "country": 0,
                        "gender": null,
                        "year_of_birth": null,
                        "phone": "5555555555",
                        "mobile_phone": "5555555555",
                        "active": true,
                        "tags": "",
                        "last_login": "2018-10-01 21:58:44",
                        "ip": "",
                        "created_at": "2018-10-01 21:58:44",
                        "updated_at": "2018-10-01 21:58:44",
                        "deleted_at": null
                    },
                    {
                        "id": 66,
                        "name": "Nombre Completo",
                        "email": "usuariowew323@email.com",
                        "avatar": null,
                        "type": "user",
                        "address": "Dirección",
                        "country": 0,
                        "gender": null,
                        "year_of_birth": null,
                        "phone": "5555555555",
                        "mobile_phone": "5555555555",
                        "active": true,
                        "tags": "",
                        "last_login": "2018-10-01 22:06:37",
                        "ip": "",
                        "created_at": "2018-10-01 22:06:37",
                        "updated_at": "2018-10-01 22:06:37",
                        "deleted_at": null
                    }
                ]
            }
        },
        computed: {
            pages() {
                if (this.pagination.rowsPerPage == null ||
                    this.pagination.totalItems == null
                ) return 0

                return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
            }
        },
        methods: {
            makeTags(tags) {
                return tags.split(',');
            }
        }
    }
</script>

<style scoped>

</style>