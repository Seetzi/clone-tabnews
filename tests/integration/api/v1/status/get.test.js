test("Ao acessar /api/v1/status deve retornar um Status 200", async () => {
  const response = await fetch(
    "https://zany-funicular-6jwgj57w5p7hrv5r-3000.app.github.dev/api/v1/status",
  );
  expect(response.status).toBe(200);
  console.log(response.body);
});
