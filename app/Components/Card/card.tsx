type CardProps = {
    title: string;
    desc: string;
    img: string;
}
export default function card({title,desc,img}:CardProps){
    return(
        <div className="card">
            <div className="text">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <div>
                <img src={img}></img>
            </div>
        </div>
    )
}