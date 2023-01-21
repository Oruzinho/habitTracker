const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Este dia já foi adicionado!❌")
    return
  }
  alert("Dia adicionado com sucesso!✅")
  nlwSetup.addDay(today)
}

function save() {
  console.log(nlwSetup.data)
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) || {}
}

// const form = document.querySelector("#form-habits")
//const nlwSetup = new NLWSetup(form)

const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))
// const data = {
//  run: ["01-01", "01-02", "01-03", "01-06", "01-07", "01-08"],
//  water: ["01-01", "01-04"],
//  food: ["01-01", "01-02", "01-05", "01-11", "01-12"],
//  journal: ["01-02", "01-04", "01-09"],
// takeMeds: ["01-05", "01-10"],
//}
nlwSetup.setData(data)
nlwSetup.load()
