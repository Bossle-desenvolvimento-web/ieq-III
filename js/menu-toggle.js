
        function toggleMenu(button) {
            var menu = button.nextElementSibling; // Obtém o elemento <nav> seguinte ao botão
            menu.classList.toggle('open'); // Adiciona ou remove a classe 'open' no elemento <nav>
            var isOpen = menu.classList.contains('open'); // Verifica se o menu está aberto
            button.classList.toggle('open', isOpen); // Atualiza a classe do botão com base no estado do menu
        }
    