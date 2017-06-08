import React from 'react';
import { Button, Form, FormGroup, Label, Input,
  Container, Row, Col} from 'reactstrap';
import { AddInList, RemoveFromList, InputList } from './utils.js'

export default class ShoppingList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      value: '',
      total: 0
    };
    this.handleInput = this.handleInput.bind(this);
    this.addFromArray = this.addFromArray.bind(this);
    this.deleteFromArray = this.deleteFromArray.bind(this);
    this.showList = this.showList.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
  }

  handleInput(event) {
    this.setState({value: event.target.value});
  }

  handleSelect(event) {
    let total = 0;
    const list = this.state.list.slice();
    for(let entry of list) {
      if (entry.value === event.target.name) entry.selected = event.target.checked;
      if (entry.amount === 0 && entry.selected) entry.amount = '1';
      if (entry.selected && entry.amount > 0) total = total + parseInt(entry.amount, 10);
    }
    this.setState({
      list: list,
      total: total
    });
  }

  handleAmount(event) {
    let total = 0;
    const list = this.state.list.slice();
    for(let entry of list) {
      if (entry.value === event.target.name) entry.amount = event.target.value;
      if (entry.selected && entry.amount > 0) total = total + parseInt(entry.amount, 10);
    }
    this.setState({
      list: list,
      total: total
    });
  }

  addFromArray(event) {
    this.setState({
      list: this.state.list.concat([{
        value: this.state.value,
        selected: false,
        amount: 0
      }]),
      value: ''
    });
    event.preventDefault();
  }

  deleteFromArray() {
    const list = this.state.list.slice();
    for(let i = 0; i < this.state.list.length; i++) {
      if(this.state.list[i].selected) {
        let match = list.indexOf(this.state.list[i]);
        list.splice(match, 1);
      }
    }

    this.setState({list: list});
  }

  showList() {
    const list = this.state.list.map((entry) => {
      return (
        <Col xs='12' key={entry.value.toString()}>
          <Form inline>
            <FormGroup>
              <Label check>
                <Col xs='4'>
                  <Input type='checkbox' checked={entry.selected} onChange={this.handleSelect} name={entry.value} />{' '}
                  {entry.value + ' '}
                </Col>
                <Col xs='6'>
                  <Input type='number' value={entry.amount} onChange={this.handleAmount} name={entry.value} />
                </Col>
              </Label>
            </FormGroup>
          </Form>
        </Col>
      );
    });

    return list;
  }

  toolList() {
    return (
      <Container>
        <Row>
          <InputList
            value = {this.state.value}
            onChange = {this.handleInput}
          />
        </Row>
        <Row>
          <AddInList
            onClick={this.addFromArray}
          />
          <RemoveFromList
            onClick={this.deleteFromArray}
          />
        </Row>
      </Container>
    )
  }

  render() {
    return (
      <div className='container'>
        <h1>Shopping List</h1>
        {this.showList()}
        <div>
          <span>Total: {this.state.total}</span>
        </div>
        {this.toolList()}
      </div>
    );
  }
}
