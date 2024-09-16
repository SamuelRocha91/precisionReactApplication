import Swal from "sweetalert2";

export const loading = () => {
    Swal.fire({
        title: 'Carregando...',
        text: 'Por favor, aguarde.',
        allowOutsideClick: false, 
        showConfirmButton: false,
        willOpen: () => {
            Swal.showLoading(); 
        }
    });
}