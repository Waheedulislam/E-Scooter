import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.config";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const [user] = useAuthState(auth);
    const { refetch, data: scooters = [] } = useQuery({
        queryKey: ['scooters', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [scooters, refetch]
};

export default useCart;