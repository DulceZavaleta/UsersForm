<template>
    <v-container>
        <v-layout row wrap>
            <v-flex mr-3>
                <v-text-field
                        v-validate="'required|max:40'"
                        v-model="data.name"
                        :counter="40"
                        :error-messages="errors.collect('nombre')"
                        label="Nombre"
                        placeholder="Nombre Apellidos"
                        data-vv-name="nombre"
                        box
                        required
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-validate="'required|email'"
                        v-model="data.email"
                        :error-messages="errors.collect('email')"
                        label="E-mail"
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
                        v-validate="'required|numeric'"
                        v-model="data.phone"
                        :error-messages="errors.collect('phone')"
                        label="Teléfono"
                        placeholder="1235213"
                        data-vv-name="phone"
                        required
                        box
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-validate="'required|numeric'"
                        v-model="data.mobile_phone"
                        :error-messages="errors.collect('mobile_phone')"
                        label="Teléfono celular"
                        placeholder="1235213"
                        data-vv-name="mobile_phone"
                        required
                        box
                ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex mr-3>
                <v-text-field
                        v-validate="'required|decimal:4'"
                        v-model="data.year_of_birth"
                        :error-messages="errors.collect('year_of_birth')"
                        label="Año de nacimiento"
                        placeholder="1990"
                        data-vv-name="año de nacimiento"
                        box
                        required
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-validate="'required'"
                        v-model="data.type"
                        :error-messages="errors.collect('type')"
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
                        v-validate="'required'"
                        v-model="data.gender"
                        :error-messages="errors.collect('gender')"
                        label="Género"
                        placeholder="25"
                        data-vv-name="género"
                        box
                        required
                ></v-select>
            </v-flex>
            <v-flex>
                <v-text-field
                        v-validate="'required'"
                        v-model="data.country"
                        :error-messages="errors.collect('select')"
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
                    v-validate="'required'"
                    v-model="data.address"
                    :error-messages="errors.collect('address')"
                    label="Dirección"
                    placeholder="Calle número, colonia, ciudad"
                    data-vv-name="Dirección"
                    box
                    required
            ></v-text-field>
        </v-flex>
        <v-flex>
            <v-text-field
                    v-validate="'required'"
                    v-model="data.tags"
                    :error-messages="errors.collect('tags')"
                    label="Etiquetas"
                    placeholder="uno,dos,tres"
                    data-vv-name="tags"
                    box
                    required
            ></v-text-field>
        </v-flex>
        <v-checkbox
                v-validate="'required'"
                v-model="data.active"
                :error-messages="errors.collect('checkbox')"
                value=""
                label="Activo"
                data-vv-name="checkbox"
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