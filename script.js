function showDetails(flowerName, description) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    modalTitle.textContent = flowerName;
    modalDescription.textContent = description;

    modal.style.display = 'flex'; // Показываем модальное окно
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Скрываем модальное окно
}
