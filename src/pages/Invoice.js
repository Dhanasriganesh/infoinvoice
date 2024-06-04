// import React from 'react'
// import { CardGroup } from 'semantic-ui-react'

// const items = [
//   {
//     header: 'Project Report - April',
//     description:
//       'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//     meta: 'ROI: 30%',
//   },
//   {
//     header: 'Project Report - May',
//     description:
//       'Bring to the table win-win survival strategies to ensure proactive domination.',
//     meta: 'ROI: 34%',
//   },
//   {
//     header: 'Project Report - June',
//     description:
//       'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
//     meta: 'ROI: 27%',
//   },
// ]

// const Invoice = () => <CardGroup items={items} />

// export default Invoice

// import React from 'react'
// import { CardGroup } from 'semantic-ui-react'
// const items = [
//     {
//       header: 'Project Report - April',
//       description:
//         'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
//       meta: 'ROI: 30%',
//     },
//     {
//       header: 'Project Report - May',
//       description:
//         'Bring to the table win-win survival strategies to ensure proactive domination.',
//       meta: 'ROI: 34%',
//     },
//     {
//       header: 'Project Report - June',
//       description:
//         'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
//       meta: 'ROI: 27%',
//     },
//   ]
//   function Invoice(){
//     return
//     (
//       <div>
//         <h1>hi</h1>
//         <CardGroup items={items} />
        
//       </div>
//     );
//   }

// export default Invoice

import { logDOM } from '@testing-library/react';
import React from 'react';
import Logo from "../assets/images/logo.png.jpg"
import "../styles/Invoice.css"
import { Card } from 'semantic-ui-react';
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const items = [
  {
    header: 'Your details:',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'FROM',
  },
  {
    header: "Client's details",
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'TO',
  },
];

function Invoice() {
  return (
    <div className='main'>
      <div className='logo'>
        <img src={Logo} alt='logo'/>
      </div>
      <Card.Group>
        {items.map((item, index) => (
          <Card
            key={index}
            header={item.header}
            description={item.description}
            meta={item.meta}
          />
        ))}
      </Card.Group>
      <div className='card-bottom'>
        <span className='one'>
          <h3>Invoice No:</h3>21541321
        </span>
        <span className='two'>
        <h3>Due Date:</h3>Jan 31st
        </span>
      </div>
      <Table striped>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Item</TableHeaderCell>
        <TableHeaderCell>HRS/QTY</TableHeaderCell>
        <TableHeaderCell>Rate</TableHeaderCell>
        <TableHeaderCell>Subtotal</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>John Lilki</TableCell>
        <TableCell>September 14, 2013</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>No</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie Harington</TableCell>
        <TableCell>January 11, 2014</TableCell>
        <TableCell>jamieharingonton@yahoo.com</TableCell>
        <TableCell>Yes</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill Lewis</TableCell>
        <TableCell>May 11, 2014</TableCell>
        <TableCell>jilsewris22@yahoo.com</TableCell>
        <TableCell>Yes</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>John Lilki</TableCell>
        <TableCell>September 14, 2013</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>No</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  <div className='summary'>
    <Table striped>
      <TableHeader>
        <TableRow>
          <TableHeaderCell className='heading'>Invoice Summary</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Subtotal</TableCell>
          <TableCell>32542</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Subtotal</TableCell>
          <TableCell>32542</TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
    </div>
  );
}

export default Invoice;


