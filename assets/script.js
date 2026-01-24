"use strict";

/*
    Script principal da aplicação
    Responsável por lidar com interações do usuário
*/

// Seleciona o botão pelo ID
const actionButton = document.getElementById("btn-action");

// Verifica se o botão existe antes de adicionar o evento
if (actionButton) {

    // Adiciona um listener para o evento de clique
    actionButton.addEventListener("click", function () {

        // Ação executada ao clicar no botão
        alert("Projeto Git básico funcionando corretamente!");

    });

}
