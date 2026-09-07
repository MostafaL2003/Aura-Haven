import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi} from "../../services/apiBookings";


export function useDelete() {
  const queryClient = useQueryClient();


  const { mutate: deleteBooking , isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) =>
      deleteBookingApi(bookingId),

    onSuccess: () => {
      toast.success(`Booking Deleted`);
      queryClient.invalidateQueries({ active: true });

    },
    onError: () => {
      toast.error("There was an error while Deleting");
    },
  });
  return { deleteBooking, isDeleting };
}
