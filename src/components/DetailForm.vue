<template>
    <v-layout row wrap>
        <v-flex xs6>
            <v-card flat>
                <v-list two-line>
                    <v-list-tile v-if="data.phone">
                        <v-list-tile-action>
                            <v-icon color="indigo">phone</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ data.phone }}
                            </v-list-tile-title>
                            <v-list-tile-sub-title>Teléfono</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-list-tile v-if="data.gender">
                        <v-list-tile-action>
                            <v-icon color="indigo">perm_identity</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ data.gender }}
                            </v-list-tile-title>
                            <v-list-tile-sub-title>Género</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-list-tile v-if="data.country">
                        <v-list-tile-action>
                            <v-icon color="indigo">
                                place
                            </v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ data.country }}
                            </v-list-tile-title>
                            <v-list-tile-sub-title>País</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-list-tile v-if="data.type">
                        <v-list-tile-action>
                            <v-icon color="indigo">
                                subject
                            </v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ data.type }}
                            </v-list-tile-title>
                            <v-list-tile-sub-title>Tipo</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
        <v-flex xs6>
            <v-card flat>
                <v-list two-line>
                    <v-list-tile @click="" v-if="data.mobile_phone">
                        <v-list-tile-action>
                            <v-icon color="indigo">
                                phone_android
                            </v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ data.mobile_phone }}
                            </v-list-tile-title>
                            <v-list-tile-sub-title>Celular</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>


                    <v-list-tile v-if="data.year_of_birth">
                        <v-list-tile-action>
                            <v-icon color="indigo">
                                event
                            </v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ data.year_of_birth }}
                            </v-list-tile-title>
                            <v-list-tile-sub-title>
                                Año de nacimiento
                            </v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-list-tile v-if="data.address">
                        <v-list-tile-action>
                            <v-icon color="indigo">
                                my_location
                            </v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            {{data.address}}

                            <v-list-tile-sub-title>
                                Dirección
                            </v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-list-tile v-if="data.tags">
                        <v-list-tile-action>
                            <v-icon color="indigo">
                                label
                            </v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <div class="text-xs-center">
                                <v-chip label
                                        v-for="(item, index) in (splitTags(data.tags))"
                                        :key="index"
                                        :value="item">
                                    {{item}}
                                </v-chip>
                            </div>
                            <v-list-tile-sub-title>
                                Etiquetas
                            </v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "detail-form",
        props: {
            data: {
                required: true,
                type: Object
            }
        },
        methods: {
            splitTags(tags) {
                return tags.split(',')
            }
        }
    }
</script>

<style scoped>

</style>