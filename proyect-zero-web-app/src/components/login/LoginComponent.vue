<template>
    <div>
        <Card>
            <template #title>{{ $t('login.welcome') }}</template>
        </Card>
    </div>
</template>

<script>
import Card from 'primevue/card';

export default {
    components: { Card }
}
</script>