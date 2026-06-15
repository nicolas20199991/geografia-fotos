// 1. Defina a quantidade de fotos que você tem
const totalFotos = 40; // Mude para o número exato de fotos que você subir
const galeria = document.getElementById('gallery');
const modal = document.getElementById('modal');
const imgModal = document.getElementById('img-modal');

// 2. Gerar as fotos automaticamente
for (let i = 1; i <= totalFotos; i++) {
    const img = document.createElement('img');
    
    // Caminho da foto - certifique-se que a extensão (.jpg ou .png) é a mesma
    img.src = `img/image${i}.png`; 
    img.alt = `Foto ${i}`;
    img.loading = "lazy"; // Melhora o carregamento (só carrega ao rolar a página)

    // Evento para abrir a foto ao clicar
    img.onclick = function() {
        modal.style.display = "block";
        imgModal.src = this.src;
    }

    galeria.appendChild(img);
}

// 3. Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
}