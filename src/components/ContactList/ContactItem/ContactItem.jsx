import React from 'react';
import { DeleteButton, ListItem, Number } from './ContactItem.styled';
import { AiFillCloseCircle } from 'react-icons/ai';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem>
      <p>{name} :</p>
      <Number>{number}</Number>
      <DeleteButton onClick={() => onDelete(id)}>
        <AiFillCloseCircle size={18} />
      </DeleteButton>
    </ListItem>
  );
};
