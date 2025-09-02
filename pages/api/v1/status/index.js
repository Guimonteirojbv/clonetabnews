function status(request, response) {
  response.status(200).send({chave: "teste"});
}

export default status;
