<template>
    <div class="grid grid-nogutter">
        <div class="col-4">
            <div class="card flex justify-content-center">
                <Image src="/img/loginImg.jpg" alt="Image" width="250" />
            </div>
        </div>

        <div class="col-8">
            <Card>
                <template #title>
                    <Image src="/img/logo_sin_fondo.png" alt="Image" width="250" />
                    {{ $t('login.welcome') }}
                </template>
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
    </div>
</template>

<script>
import Card from 'primevue/card'
import Image from 'primevue/image';
import Button from 'primevue/button'
import InputText from 'primevue/InputText'


import loginService from '../../services/login'

export default {
    components: { Card, Button, InputText, Image },
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