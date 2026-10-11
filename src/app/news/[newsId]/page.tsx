import Image from "next/image";


const NewsDetails =async ({params}:{params:string}) => {
    const {newsId} =await params
    const res =await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const news = data.data
    console.log(news);
    return (
        <div>
            <h1>{news.title}</h1>
            <Image
            height={800}
            width={600}
              src={news.imageUrl}
              alt={news.imageAlt}
             />
             <p>{news.text}</p>
        </div>
    );
};

export default NewsDetails;