'use client';

import useCreateJsonPlace from '@/features/useCreateJsonPlace';
import { PostPayload } from '@/types/json_place/post';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Textarea,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';

const initialValues = {
    title: '',
    body: '',
    userId: 0,
};

export default function Create() {
    const router = useRouter();

    const { mutate } = useCreateJsonPlace({
        onSuccess: () => {
            router.push('/');
        },
    });

    const formik = useFormik<PostPayload>({
        initialValues,
        onSubmit: (values) => {
            mutate(values);
        },
    });

    function handleSubmit(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        formik.setFieldValue(event.target.name, event.target.value);
    }

    return (
        <Box maxWidth="480px" padding={{ base: '20px', md: '40px' }}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl mb="40px" isRequired>
                    <FormLabel>Post Title:</FormLabel>
                    <Input onChange={handleSubmit} type="text" name="title" />
                    <FormHelperText>
                        Enter a descriptive title name.
                    </FormHelperText>
                </FormControl>

                <FormControl mb="40px">
                    <FormLabel>Post Body:</FormLabel>
                    <Textarea
                        onChange={handleSubmit}
                        placeholder="Enter a detailed description for post..."
                        name="body"
                    />
                </FormControl>

                <FormControl mb="40px">
                    <FormLabel>User ID:</FormLabel>
                    <Input
                        onChange={handleSubmit}
                        type="number"
                        name="userId"
                    />
                </FormControl>

                <FormControl mb="40px" display="flex" alignItems="center">
                    <Checkbox
                        name="isPriority"
                        size="lg"
                        colorScheme="purple"
                    />
                    <FormLabel mb="0" ml="10px">
                        Make this a priority post.
                    </FormLabel>
                </FormControl>

                <Button colorScheme="purple" type="submit">
                    Submit
                </Button>
            </form>
        </Box>
    );
}
