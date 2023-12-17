import axios from "@/lib/axios";
import { PostPayload } from "@/types/json_place/post";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function useCreateJsonPlace({onSuccess}: {onSuccess: () => void}) {
    return useMutation({
        mutationKey: ['create.post'],
        mutationFn: async (payload: PostPayload) => {
            try {
                const { data } = await axios.post('/posts', payload);
                return data;
            } catch (error) {
                const err = error as AxiosError;
                console.log(err);
                throw new Error(err.message)
            }
        },
        onSuccess
    })
}