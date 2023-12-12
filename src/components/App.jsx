import { Form } from "./Form";
import { nanoid } from 'nanoid'
import { ContactElement } from "./ContactElement";
import { useDispatch, useSelector } from "react-redux";
import { addContactAction, filerAction, } from "../redux/contactSlice";
import { Filter } from "./Filter";


export const ContactList = () => {
const filter = useSelector(state => state.contact.filter)
  const { contacts } = useSelector((state) => state.contact)
  const dispatch = useDispatch(
  )

  const addContact = (newName, newPhone) => {
    const equalName = contacts.find(element => element.name.toLowerCase() === newName.toLowerCase())
    const addContactObj = {
      id: nanoid(),
      name:newName, 
      phone:newPhone,
     
    }
    
if (equalName) return alert(`${equalName.name} is already in contacts`)

dispatch(addContactAction(addContactObj))

  }

  const ContactFilter = evt => {
    const value = evt.currentTarget.value
    dispatch(filerAction(value))

  };
  const filteredContacts = () => {
   
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    };




//   const getVisibleContacts = () => {
//   const NormalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact => 
//     contact.name.toLowerCase().includes(NormalizedFilter))
  
// }
  





  
//   const [contacts, setContacts] = useState(() => JSON.parse( localStorage.getItem('contacts')) ?? []);
// const [filter, setFilter] = useState('')

// useEffect(() => {

  
//   localStorage.setItem('contacts', JSON.stringify(contacts))
  
// }, [contacts])

// useEffect(() => {
//   const contacts = JSON.parse(localStorage.getItem('contacts'))
//   if(contacts) {
//     setContacts(contacts)
//   }
// }, [])


 
 
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1 style={{margin:0}}>Phonebook</h1>
      <Form addContact={addContact} />
      <Filter value={filter} onChange={ContactFilter}/>
      <h2>Contacts</h2>
      <ul>
        {filteredContacts().map((el) => (
          <ContactElement key={el.id } elm ={el} />
        ))}
      </ul>
    </div>
  );

}