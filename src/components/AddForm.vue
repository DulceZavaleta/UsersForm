<template>
    <v-card>
        <form>
            <v-text-field
                    v-validate="'required|max:10'"
                    v-model="name"
                    :counter="10"
                    :error-messages="errors.collect('name')"
                    label="Name"
                    data-vv-name="name"
                    required
            ></v-text-field>
            <v-text-field
                    v-validate="'required|email'"
                    v-model="email"
                    :error-messages="errors.collect('email')"
                    label="E-mail"
                    data-vv-name="email"
                    required
            ></v-text-field>
            <v-select
                    v-validate="'required'"
                    :items="items"
                    v-model="select"
                    :error-messages="errors.collect('select')"
                    label="Select"
                    data-vv-name="select"
                    required
            ></v-select>
            <v-checkbox
                    v-validate="'required'"
                    v-model="checkbox"
                    :error-messages="errors.collect('checkbox')"
                    value="1"
                    label="Option"
                    data-vv-name="checkbox"
                    type="checkbox"
                    required
            ></v-checkbox>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn flat @click="menu = false">Cancel</v-btn>
                <v-btn color="primary" flat @click="menu = false">Save</v-btn>
            </v-card-actions>
        </form>

    </v-card>
</template>

<script>
    export default {
        name: "add-form"
    }
</script>

<style scoped>

</style>