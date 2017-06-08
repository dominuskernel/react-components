import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export function AddInList(props) {
  return (
    <Button color='success' className='addInList' onClick={props.onClick}>
      Add
    </Button>
  );
}

export function RemoveFromList(props) {
  return (
    <Button color='danger' className='removeFromList' onClick={props.onClick}>
      Remove
    </Button>
  )
}

export function InputList(props) {
  return (
    <Form>
      <FormGroup>
        <Label for='entry'>Entry: </Label>
        <Input type='text' name='entry' id='entry' value={props.value} placeholder='add to shopping list' onChange={props.onChange}/>
      </FormGroup>
    </Form>
  )
}
