function toggleEndereco() {
    var entrega = document.getElementById("entrega").value;
    var enderecoDiv = document.getElementById("enderecoDiv");

    if (entrega === "true") {
      enderecoDiv.style.display = "block";
      document.getElementById("endereco").setAttribute("required", "required");
    } else {
      enderecoDiv.style.display = "none";
      document.getElementById("endereco").removeAttribute("required");
    }
}

function checkMaxSelections(checkbox) {
  const checkboxes = document.querySelectorAll('input[name="sabores"]:checked');
  if (checkboxes.length > 4) {
      checkbox.checked = false;
      alert('Você pode selecionar no máximo 4 sabores.');
  }
}