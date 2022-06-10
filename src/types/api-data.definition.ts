// export the data type so we can use it in teh pages and components
export type TData = {
    totalArticles:string,
    articles: totalArticle[]
}

type totalArticle = {
    title:string,
    description:string,
    content:string,
    url:string,
    image:string,
    publishedAt:string,
    source:{
        name:string,
        url:string
    }
}