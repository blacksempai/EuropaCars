let modal = document.getElementById("modal");
let modalFormField = document.getElementById('modal_form_field');

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
    if(modal.querySelectorAll('input:checked').length > 0) {
        modalFormField.classList.remove('ausstattung_invalid');
        modalFormField.classList.add('focused');
    }
    else {
        modalFormField.classList.remove('focused');
    }
}