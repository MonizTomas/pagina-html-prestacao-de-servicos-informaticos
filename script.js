// Scroll suave ao clicar no botão
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Formulário de Contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;
    
    // Simulação de envio
    alert(`Obrigado, ${nome}! A sua mensagem foi enviada com sucesso. Entraremos em contacto em breve.`);
    
    // Limpar o formulário
    this.reset();
});