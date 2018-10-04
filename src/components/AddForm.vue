<template>
    <v-container>
        <v-layout row wrap>
            <v-flex mr-3>
                <v-text-field
                        v-validate="'required'"
                        v-model="data.name"
                        data-vv-name="nombre"
                        :error-messages="errors.collect('name')"
                        :counter="40"
                        label="Nombre"
                        placeholder="Nombre Apellidos"
                        box
                        required
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-validate="'required|email'"
                        v-model="data.email"
                        :error-messages="errors.collect('email')"
                        label="Email"
                        placeholder="hola@ejemplo.com"
                        data-vv-name="email"
                        required
                        box
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex mr-3>
                <v-text-field
                        v-validate="'required'"
                        v-model="data.phone"
                        :error-messages="errors.collect('phone')"
                        label="Teléfono"
                        placeholder="1235213"
                        data-vv-name="telefono"
                        required
                        box
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-validate="'required'"
                        v-model="data.mobile_phone"
                        :error-messages="errors.collect('mobile_phone')"
                        label="Teléfono celular"
                        placeholder="1235213"
                        data-vv-name="celular"
                        required
                        box
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex mr-3>
                <v-text-field
                        v-validate="'digits:4'"
                        v-model="data.year_of_birth"
                        :error-messages="errors.collect('año')"
                        label="Año de nacimiento"
                        placeholder="1990"
                        data-vv-name="año"
                        box
                        required
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-model="data.type"
                        label="Tipo"
                        placeholder="user"
                        data-vv-name="type"
                        box
                        required
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex mr-3>
                <v-select
                        :items="genderList"
                        v-model="data.gender"
                        label="Género"
                        placeholder="25"
                        data-vv-name="género"
                        box
                        required
                ></v-select>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-validate="'numeric'"
                        v-model="data.country"
                        :error-messages="errors.collect('país')"
                        label="País"
                        placeholder="25"
                        data-vv-name="país"
                        box
                        required
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-flex>
            <v-text-field
                    v-model="data.address"
                    label="Dirección"
                    placeholder="Calle número, colonia, ciudad"
                    data-vv-name="direccion"
                    box
                    required
            ></v-text-field>
        </v-flex>
        <v-flex>
            <v-text-field
                    v-validate="{  }"
                    v-model="data.tags"
                    :error-messages="errors.collect('etiquetas')"
                    label="Etiquetas"
                    placeholder="uno,dos,tres"
                    data-vv-name="etiquetas"
                    box
                    required
            ></v-text-field>
        </v-flex>
        <v-checkbox
                v-validate="'required'"
                v-model="data.active"
                :error-messages="errors.collect('activo')"
                value=""
                label="Activo"
                data-vv-name="activo"
                type="checkbox"
                required
        ></v-checkbox>
    </v-container>
</template>

<script>
    export default {
        name: "add-form",
        props: {
            data: {
                required: true,
                type: Object
            }
        },
        data() {
            return {
                genderList: [
                    {value: 'F', text: 'Femenino'},
                    {value: 'M', text: 'Masculino'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>