import css from "./contactElement.module.css"
import { useDispatch } from 'react-redux'
import { deleteContactAction } from "../../redux/contactSlice"

export const ContactElement = ({ elm }) => {
    
    const dispatch = useDispatch()
    const deleteContact = (id) => {
        dispatch(deleteContactAction(id))
    }

    return (
        <li className={css.item}>
            
<p className={css.elm}>{elm.name}</p>
<p className={css.elm}>{elm.phone}</p>
<button type="button" onClick={() => deleteContact(elm.id)}>Delete</button>
        
        </li>
    )
}