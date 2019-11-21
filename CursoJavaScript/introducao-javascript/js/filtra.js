var campoDeFiltro = document.querySelector("#filtrar-tabela");

campoDeFiltro.addEventListener("input", function () {
   this.value;

   var pacientes = document.querySelectorAll(".paciente");

   if (this.value.length > 0) {
       var expressao = new RegExp(this.value, "i");

       for (var i = 0; i < pacientes.length; i++) {
           var paciente = pacientes[i];
           var tdNome = paciente.querySelector(".info-nome");
           var nome = tdNome.textContent;


           if ( !expressao.test(nome)) {
               paciente.classList.add("invisivel");
           } else {
               paciente.classList.remove("invisivel")
           }
       }
   } else {
       for (var i1 = 0; i1 < pacientes.length; i1++) {
           var paciente1 = pacientes[i1];
           paciente1.classList.remove("invisivel");
       }
   }
});