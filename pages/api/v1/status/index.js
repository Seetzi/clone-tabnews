function status(resquest, response) {
  response.status(200).json({
    nome: "Wilson Junior",
  });
}

export default status;
