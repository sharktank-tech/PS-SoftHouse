// Função para exibir/ocultar o menu suspenso do perfil
document.getElementById('profileIcon').addEventListener('click', function() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.classList.toggle('show');
});

// Atualiza as informações do perfil no menu suspenso
function updateProfile() {
    const userName = sessionStorage.getItem('userName') || 'Nome do Usuário';
    const profileName = document.getElementById('popupProfileName');
    profileName.textContent = userName;

    // Exemplo para foto de perfil (pode ser implementado com upload)
    const profilePic = document.getElementById('profilePic');
    // Defina a foto padrão ou personalizada
    profilePic.src = 'imagem1.jpg';
}

// Chama a função de atualização do perfil ao carregar a página
updateProfile();
