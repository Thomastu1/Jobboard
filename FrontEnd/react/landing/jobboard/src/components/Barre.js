import React from 'react';
import { Form, DropdownButton, Button } from 'react-bootstrap'
import '../style/pages/barre.css'

const Barree = () => {
    return (
             <div className='search'>
        <input type="text" placeholder="Job.."></input>
        <input  type="text" placeholder="Lieu.."></input>
        <DropdownButton id="dropdown-basic-button" title="Type d'emploi" variant='secondary'>
        <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Alternance"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
           <Form.Check
            inline
            label="Stage"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
           <Form.Check
            inline
            label="CDI/CDD"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
        </div>
      ))}
    </Form>
    </DropdownButton>
    <Button variant="primary" size="lg">
          Recherche
        </Button>{' '}
    </div>
    );
};

export default Barree;