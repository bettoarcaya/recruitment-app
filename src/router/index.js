import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Job from "../views/Job.vue";
import Match from "../views/Match.vue";
import Candidate from "../views/Candidate.vue";
import Login from "../views/Auth/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/jobs",
    name: "Job",
    component: Job
  },
  {
    path: "/jobs/match/:id",
    name: "Matches",
    component: Match
  },
  {
    path: "/candidates",
    name: "Candidates",
    component: Candidate
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
