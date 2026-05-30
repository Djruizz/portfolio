<script setup lang="ts">
const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

function handleSubmit() {
  console.log('Form submitted:', form)
}
</script>

<template>
  <UCard
    :ui="{
      root: 'bg-elevated/50 border-default',
      body: 'p-6 sm:p-8'
    }"
  >
    <form class="space-y-6" @submit.prevent="handleSubmit">
      <div class="grid sm:grid-cols-2 gap-6">
        <UFormField :label="t('contact.form.name')">
          <UInput
            v-model="form.name"
            :placeholder="t('contact.form.name_placeholder')"
            icon="i-lucide-user"
            size="lg"
            class="w-full"
          />
        </UFormField>

        <UFormField :label="t('contact.form.email')">
          <UInput
            v-model="form.email"
            type="email"
            :placeholder="t('contact.form.email_placeholder')"
            icon="i-lucide-mail"
            size="lg"
            class="w-full"
          />
        </UFormField>
      </div>

      <UFormField :label="t('contact.form.subject')">
        <UInput
          v-model="form.subject"
          :placeholder="t('contact.form.subject_placeholder')"
          icon="i-lucide-message-square"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UFormField :label="t('contact.form.message')">
        <UTextarea
          v-model="form.message"
          :placeholder="t('contact.form.message_placeholder')"
          :rows="5"
          autoresize
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UButton
        type="submit"
        :label="t('contact.form.send')"
        icon="i-lucide-send"
        size="lg"
        block
        class="glow-primary-hover"
      />
    </form>
  </UCard>
</template>
