import Swal from "sweetalert2";
interface props {
  fn?: (data?: any) => void;
  data?: any;
}
export const confirmDeleteAlert = ({ fn, data }: props) => {
  Swal.fire({
    title: "¿Estas seguro?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "¡Sí, borrarlo!",
  }).then((result: any) => {
    if (result.isConfirmed) {
      if (fn) fn(data);
    }
  });
};
