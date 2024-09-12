import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const UseScooters = () => {
    const axiosPublic = useAxiosPublic();
    const { data: scooters = [] } = useQuery({
        queryKey: ['scooters'],
        queryFn: async () => {
            const res = await axiosPublic.get('/scooters')
            return res.data
        }
    })
    return [scooters]
};

export default UseScooters;