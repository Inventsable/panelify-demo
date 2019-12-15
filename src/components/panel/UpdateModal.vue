<template>
  <q-dialog :value="state" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar
          class="q-pr-sm"
          icon="mdi-download"
          color="primary"
          text-color="white"
        />
        <div class="dialog-contents">
          <span class="q-ml-md"
            >The newest ZXP should download automatically!</span
          >
          <span class="q-ml-md">Install it and restart After Effects</span>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Neat" color="primary" @click="$emit('close')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    state: Boolean
  }
};
</script>

<style></style>
