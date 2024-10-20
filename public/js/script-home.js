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


