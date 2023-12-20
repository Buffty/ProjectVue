<template>
    <div>
        <Card>
            <template #title>{{ $t('login.welcome') }}</template>
            <template #content>
                <InputText type="text" v-model="dDataLogin.user" :placeholder="dLabelInput.username" />
                <InputText type="password" v-model="dDataLogin.password" :placeholder="dLabelInput.password" />    
            </template>
            <template #footer>
                <Button @click="fConsola">
                    {{ $t('login.insert') }}
                </Button>
            </template>
        </Card>
    </div>
</template>

<script>
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/InputText'

import loginService from '../../services/login'

export default {
    components: { Card, Button, InputText },
    data() {
        return {
            dDataLogin: {
                user: '',
                password: ''
            },
            dLabelInput:{
                username: this.$t('input.username'),
                password: this.$t('input.password')
            }
        }
    },
    methods: {
        fConsola() {
           this.$store.commit('insertInfoUser', this.dDataLogin)
           console.log(this.$store.getters.getInfoUser)
        },
        fGetHTTP(){
            loginService.fGetUserInfo()
        }
    },
}
</script>