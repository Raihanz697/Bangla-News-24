import Image from "next/image";
import Link from "next/link";

interface News{
    id:string;
    title:string;
    description:string;
    category:string;
    imageUrl:string;
    imageAlt:string
}

const Newscard = ({news}:{news:News}) => {
    
    return (
       <Link href={`/news/${news.id}`}>
       <div className="card bg-base-100  shadow-sm">
          <figure>
            <Image
            height={800}
            width={600}
              src={news.imageUrl}
              alt={news.imageAlt} />
          </figure>
          <div className="card-body">
            <p className="text-red-600 font">{news.category}</p>
            <h2 className="card-title">{news.title}</h2>
            <p>{news.description}</p>
            
            </div>
          </div> 
       </Link>  
    );
};

export default Newscard;