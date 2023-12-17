'use client';

import axios from '@/lib/axios';
import { Post } from '@/types/json_place/post';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export default function useFetchJsonPlace() {
    return useQuery({
        queryKey: ['fetch.photos'],
        queryFn: async () => {
            try {
                const { data } = await axios.get<Post[]>('/posts');
                return data;
            } catch (error) {
                const err = error as AxiosError;
                console.log(err);
            }
        },
    });
}
