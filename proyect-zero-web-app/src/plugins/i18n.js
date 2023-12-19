import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
    legacy: false, 
    locale: 'es', // Se específica que la web va a ser por defecto, en español
    allowComposition: true,
    globalInjection: true,
    fallbackLocale: 'es',
    availableLocales: ['es','en'],
    messages: messages
})

export default i18n