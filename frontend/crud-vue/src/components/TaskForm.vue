<template>
  <div class="col-md-4 offset-md-4">
    <form class="card card-body">
      <h1 class="text-center h3 mb-3">Create Task</h1>
      <input
        type="text"
        class="form-control mb-3"
        placeholder="Write title"
        v-model="task.title"
        autofocus
      />
      <textarea
        rows="3"
        class="form-control mb-3"
        placeholder="Write description"
        v-model="task.description"
      ></textarea>
      <button type="submit" class="btn btn-primary" @click="saveTask" :disabled="!task.title || !task.description">
        Save
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { Task } from "@/interfaces/Task";
import { createTask } from "@/services/TaskServices";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask(e: Event) {
      e.preventDefault();
      const res = await createTask(this.task);
      this.$router.push({ name: "tasks" });
    },
  },
});
</script>
