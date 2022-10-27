<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="handleUpdate" class="card card-body">
      <h1 class="text-center mb-3 h3">Task detail</h1>
      <input type="text" class="form-control mb-3" v-model="task.title" />
      <textarea rows="3" class="form-control mb-3" v-model="task.description"></textarea>
      <button class="btn btn-primary">Update</button>
    </form>
    <button @click="handleDelete" class="btn btn-danger mt-3 w-100">Delete</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { getTask, updateTask, deleteTask } from "@/services/TaskServices";
import type { Task } from "@/interfaces/Task";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      console.log(res);
      this.task = res.data;
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        await updateTask(this.$route.params.id, this.task);
        this.$router.push("/");
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        await deleteTask(this.$route.params.id);
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>
