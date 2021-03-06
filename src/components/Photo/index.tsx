import {styles} from "./Photo.style";
import React, {useState} from "react";
import {Modal} from "../Modal";
import {PhotoType} from "../../models/models.types";

type ComponentPhotoType = Pick<PhotoType, "url" | "id">

const Photo: React.FC<ComponentPhotoType> = ({url, id}) => {
    const [open, setOpen] = useState(false)
    const classes = styles()
    id = `${id}`

    return (
        <figure className={classes.figure} onClick={() => {
            setOpen(true)
        }}>
            <img className={classes.eachPhoto} src={url} alt={id}/>
            <Modal
                open={open}
                onClose={(e: React.MouseEvent<HTMLHeadingElement>) => {
                    e.stopPropagation()
                    setOpen(false)
                }}>
                <img className={classes.photoInModal} src={url} alt={id}/>
            </Modal>
        </figure>
    )
}
export default Photo