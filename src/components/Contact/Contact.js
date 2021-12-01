// import { useDispatch } from "react-redux";

// import s from './Contact.module.css';
// import { deleteContact } from "../../redux/Phonebook/phonebook-actions";
// import PropTypes from "prop-types";


// export default function ContactItem({ name, number, id }) {
//     const dispatch = useDispatch();

//     return (
//         <li id={id} className={s.item}>
//             <p >{name}: </p>
//             <p > {number}</p>
//             <button className={s.button}
//                 onClick={() => dispatch(deleteContact(id))}
//             >
//                 Delete contact
//             </button>
//             {/* <button
//                 className={s.button}
//                 type="button"
//                 onClick={() => deleteContact(id)}
//             >
//                 Delete contact
//             </button> */}

//         </li>
//     );
// }

// ContactItem.propTypes = {
//     name: PropTypes.string,
//     number: PropTypes.string,
//     id: PropTypes.string,
// };


