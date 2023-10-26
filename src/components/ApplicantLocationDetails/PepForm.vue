<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'

const { pepRelationship, pepDuration, pepPosition, pepRegion } = useFormStore()
</script>

<template>
  <div class="formContainer">
    <div class="row w-100">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Relationship to the PEP"
          aria-label="Relationship to the PEP"
          v-bind="pepRelationship"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="PEP region"
          aria-label="PEP region"
          v-bind="pepRegion"
        />
      </div>
    </div>
    <div class="row w-100">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="PEP Position"
          aria-label="PEP Position"
          v-bind="pepPosition"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Duration as PEP or related to PEP"
          aria-label="Duration as PEP or related to PEP"
          v-bind="pepDuration"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
}
</style>
