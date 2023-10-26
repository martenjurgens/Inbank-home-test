<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'

import { ref } from 'vue'
import EditView from './EditView.vue'

const { storeValues } = useFormStore()

const editMode = ref(false)

const toggleEditMode = () => {
  editMode.value = !editMode.value
}
</script>

<template>
  <div class="mainContainer">
    <div class="innerSection">
      <div class="nameSection d-flex justify-content-center align-items-center">
        <div>{{ storeValues.name }}</div>

        <button
          v-if="!editMode"
          class="btn editButton d-flex justify-content-center align-items-center"
          @click="toggleEditMode"
        >
          <i class="bi bi-pencil-fill"></i>
        </button>
      </div>
      <div
        class="infoSection d-flex flex-row align-items-center justify-content-center"
        :class="{ 'bg-secondary': editMode }"
      >
        <div
          v-if="!editMode"
          class="d-flex flex-row align-items-center justify-content-center editClass"
        >
          <div class="iconContainer">
            <i class="bi bi-person"></i>
            {{ storeValues.identificationCode }}
          </div>
          <div class="iconContainer">
            <i class="bi bi-telephone"></i>
            <span>{{ storeValues.phone }}</span>
          </div>
          <div class="iconContainer">
            <i class="bi bi-envelope"></i>
            <span>{{ storeValues.email }}</span>
          </div>
        </div>

        <div
          v-if="editMode"
          class="d-flex flex-row align-items-center justify-content-between w-100"
        >
          <EditView @apply-changes="toggleEditMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 105px;
  border: 5px solid #f3eefb;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0;
}

.editClass {
  gap: 42px;
}

.iconContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
}

.iconContainer .form-control:hover {
  border-color: #2b0a57;
}

.innerSection {
  flex-grow: 1;
  width: 100%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
}

.nameSection {
  flex: 1;
  background-color: #f8f5fc;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  padding-right: 17px;
  position: relative;
}

.infoSection {
  flex: 1;
  background-color: white;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-right: 15px;
  padding-left: 30px;
}

.editButton {
  background-color: white;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  position: absolute;
  right: 17px;
}

.editButton:hover {
  background-color: #2b0a57;
  color: white;
}

.bg-secondary {
  background-color: #f8f5fc !important;
}
</style>
