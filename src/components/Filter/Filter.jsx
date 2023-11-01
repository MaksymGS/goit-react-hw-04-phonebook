import React from 'react';
import { Label } from './Filter.styled';

export const Filter = ({ onChangeFilter }) => {
  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <input
        type="text"
        name="filter"
        onChange={evt => {
          onChangeFilter(evt.target.value);
        }}
        placeholder="Filter by name..."
      />
    </>
  );
};
