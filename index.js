const formCEP = document.getElementById("formCep");
const inputCEP = document.getElementById("cep");
const btnBuscar = document.getElementById("buscar");

const estado = document.getElementById("state");
const cidade = document.getElementById("city");
const bairro = document.getElementById("neighborhood");
const rua = document.getElementById("street");
const servico = document.getElementById("service");

const buscaCep = async (cep) => {
  return await fetch(`${BASE_URL}${cep}`).then((response) => {
    return response.json();
  });
};

const feedbackBuscando = (buscando = true) => {
  inputCEP.disabled = buscando;
  btnBuscar.disabled = buscando;
  btnBuscar.innerText = buscando ? "Buscando" : "Buscar";
};

formCEP.addEventListener("submit", async (form) => {
  form.preventDefault();

  feedbackBuscando();

  const resposta = await buscaCep(inputCEP.value);

  if (resposta?.message) {
    alert(resposta?.message);
  } else {
    estado.value = resposta?.state;
    cidade.value = resposta?.city;
    bairro.value = resposta?.neighborhood;
    rua.value = resposta?.street;
    
  }

  feedbackBuscando(false);
});
