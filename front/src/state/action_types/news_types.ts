
interface Iload{
     type:'load'
}

interface ISuccess{
    type:'success',
    payload:NewsTypes
}

export type NewsTypes={
    articles: News[]
       
}

export type News={
    source: {
        id: number,
        name: string
        },
        author: string,
        title: string,
        description:string,
        url: string,
        urlToImage: string,
        publishedAt: string,
        content: string
        
}
export type ActionNewsTypes=Iload|ISuccess