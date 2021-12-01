
import s from './ContactList.module.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import {
    deleteContact,
    fetchContacts,
} from '../../redux/Phonebook/phonebook-operation';

const ContactList = ({ contacts, deleteContact, fetchContactsAll }) => {
    useEffect(() => {
        fetchContactsAll();
    }, [fetchContactsAll]);

    return (
        <>
            <ul >
                {contacts.map(({ id, name, number }) => (
                    <li key={id} className={s.item}>
                        <div><p>{name}</p>
                            <p>{number}</p></div>
                        <div><button
                            className={s.button}
                            type="button"
                            onClick={() => deleteContact(id)}
                        >
                            Delete contact
                        </button></div>


                    </li>
                ))}
            </ul>
        </>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

const filteredContacts = (allContacts, filter) => {
    return allContacts.filter(({ name }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
};

const mapStateToProps = ({ contacts: { contactItems, filter } }) => ({
    contacts: filteredContacts(contactItems, filter),
});

const mapDispatchToProps = dispatch => ({
    deleteContact: id => dispatch(deleteContact(id)),
    fetchContactsAll: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);





























































// import PropTypes from 'prop-types';
// import Contact from '../Contact';

// export default function ContactList({ getVisibleContacts, deleteContact }) {
//     return (
//         <ul>
//             {getVisibleContacts().map(contact => (
//                 <Contact key={contact.id}
//                     contact={contact}
//                     deleteContact={deleteContact} />
//             ))}
//         </ul>
//     );
// }

// ContactList.propTypes = {
//     getVisibleContacts: PropTypes.func,
//     deleteContact: PropTypes.func,
// };