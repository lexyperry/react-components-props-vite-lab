
export default function Article({title,date,preview}){
    const newDate = date || "January 1, 1970";
    return(
<>
            <article>
                <h3>{title}</h3>

            </article>
                <small>{newDate}</small>
                <p>{preview}</p>        
</>
    );

};
