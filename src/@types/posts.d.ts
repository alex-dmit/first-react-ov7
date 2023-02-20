declare type PostsListProp = {
    list: {
        id: number;
        title: string;
        body: string;
        author: string;
        date: string;
        tags: string[];
    }[]
}