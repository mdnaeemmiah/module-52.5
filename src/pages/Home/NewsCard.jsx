import { Link } from "react-router-dom";


const NewsCard = ({ aNews }) => {
    const { title, image_url, details,_id } = aNews;
    return (
        <div className="card bg-base-100 shadow-xl my-5">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {

                        details.length > 200 ?
                         <p>{details.slice(0,199)} 
                         <Link 
                         to={`/news/${_id}`}
                         className="text-blue-700 font-bold">Read More</Link></p>:
                         <p>{details}</p>
                    
                    }


                </p>

            </div>
        </div>
    );
};

export default NewsCard;