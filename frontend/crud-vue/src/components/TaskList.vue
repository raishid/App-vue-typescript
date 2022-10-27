<template>
  <ul class="list-group">
    <li
      class="list-group-item list-group-item-action"
      role="button"
      v-for="(task, index) in tasks"
      :key="index"
      @click="redirect(`/tasks/${task._id}`)"
    >
      {{ index + 1 }}.
      {{ task.title }}
    </li>
  </ul>
</template>
<script lang="ts">
import type { Task } from "@/interfaces/Task";
import { getTasks } from "@/services/TaskServices";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "TaskList",
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      console.log(res.data);
      this.tasks = res.data;
    },
    redirect(route: string){
      this.$router.push(route)
    }
  },
  mounted() {
    this.loadTasks();
  },
});
</script>
