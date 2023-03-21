let theForm = document.getElementById("theForm")
let enTer = document.getElementById("enTer")
let List = document.getElementById("List")
theForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createItem(enTer.value)
})

function createItem(x) {
  let page = `<li> ${x} <button onclick="deleteItem(this)"> Delete </button></li>`
  List.insertAdjacentHTML("beforeend", page)
  enTer.value = ""
  enTer.focus()
}

function deleteItem(listDelete) {
  listDelete.parentElement.remove()
}
