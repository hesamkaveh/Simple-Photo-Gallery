import {styles} from "./Photo.style";
import React from "react";

type PhotoType = {
    url: string
    id: number | string
}
const Photo = ({url, id}: PhotoType) => {
    const classes = styles()
    id = `${id}`

    return (
        <figure className={classes.figure}>
            <img className={classes.eachPhoto} src={url} alt={id}/>

        </figure>
    )
}
export default Photo