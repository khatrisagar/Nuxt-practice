export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin = false;
  if (isLogin) {
    return navigateTo(to.fullPath);
  }
  return navigateTo("/login");
});
