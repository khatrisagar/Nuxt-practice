export default defineEventHandler((event) => {
  console.log(event);
  return {
    data: [
      {
        name: "aaa",
      },
    ],
  };
});
