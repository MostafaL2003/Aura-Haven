import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("Cabin Deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      if (
        err.message?.toLowerCase().includes("occupied") ||
        err.message?.includes("409") ||
        err.status === 409 ||
        err.code === "23503"
      ) {
        toast.error("Cabin is occupied");
      } else {
        toast.error(err.message || "Error cabin cant be deleted");
      }
    },
  });

  return { deleteCabin, isLoading };
}
