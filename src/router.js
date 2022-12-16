import { createRouter, createWebHistory } from "vue-router";
    import EditorDemo from "./EditorDemo.vue"

    export const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", component: EditorDemo }]
});