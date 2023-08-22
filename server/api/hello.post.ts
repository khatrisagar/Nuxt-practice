export default defineEventHandler((event) => {
  console.log(event);
  return {
    data: "API data",
  };
});
