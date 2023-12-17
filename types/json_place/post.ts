export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type PostPayload = {
    title: string;
    body: string;
    userId: number
}