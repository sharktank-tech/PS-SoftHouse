// Função para mostrar a tela de login
function showLogin() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    loginForm.style.transform = 'rotateY(0deg)';
    registerForm.style.transform = 'rotateY(90deg)';
}

// Função para mostrar a tela de registro
function showRegister() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    registerForm.style.transform = 'rotateY(0deg)';
    loginForm.style.transform = 'rotateY(-90deg)';
}

// Função para registrar o usuário
function registerUser(event) {
    event.preventDefault(); // Previne o envio do formulário

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    console.log("Dados de registro:", { name, email, password });

    if (name && email && password) {
        // Salva os dados no localStorage
        const userData = { name, email, password };
        localStorage.setItem('user', JSON.stringify(userData));
        alert('Registro realizado com sucesso! Agora você pode fazer login.');
        showLogin(); // Vai para a tela de login
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para fazer login
function loginUser(event) {
    event.preventDefault(); // Previne o envio do formulário

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log("Tentativa de login com:", { email, password });

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login bem-sucedido!');
        // Redireciona para o caminho absoluto do seu index.html
        window.location.href = 'index.html';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
}

// Adiciona os eventos de submit aos formulários
document.querySelector('#loginForm form').addEventListener('submit', loginUser);
document.querySelector('#registerForm form').addEventListener('submit', registerUser);

// Animações de rotação com o mouse
const loginBox = document.getElementById('loginBox');
const registerBox = document.getElementById('registerBox');

const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    
    const { left, top, width, height } = loginBox.getBoundingClientRect();
    const centerX = left + width / 2; // Ajustado para o centro correto
    const centerY = top + height / 2; // Ajustado para o centro correto
    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const rotateX = (deltaY / height) * 10; // Ajustado para maior sensibilidade
    const rotateY = (deltaX / width) * -10; // Ajustado para maior sensibilidade

    loginBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    registerBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const handleMouseEnter = () => {
    document.addEventListener('mousemove', handleMouseMove);
};

const handleMouseLeave = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    loginBox.style.transform = 'rotateX(0deg) rotateY(0deg)';
    registerBox.style.transform = 'rotateX(0deg) rotateY(0deg)';
};

loginBox.addEventListener('mouseenter', handleMouseEnter);
loginBox.addEventListener('mouseleave', handleMouseLeave);
registerBox.addEventListener('mouseenter', handleMouseEnter);
registerBox.addEventListener('mouseleave', handleMouseLeave);
