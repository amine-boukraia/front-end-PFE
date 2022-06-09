import * as React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Box } from "@mui/material";
import Page from '../components/Page';

const hours = ['', '8:15=>9:45', '9:55=>11:25', '11:35=>13:05', '13:05=>14:15', '14:15=>15:45', '15:55=>17:25'];
const sessions = [
  { subject: 'Développement web et multimédia', class: 'Labo Info2', professor: 'M. Zagrouba Hamza' },
  { subject: 'Développement web et multimédia', class: 'Labo Info2', professor: 'M. Zagrouba Hamza' },
  { subject: 'Développement web et multimédia', class: 'Labo Info2', professor: 'M. Zagrouba Hamza' },
];

export default () => (
  <Page title="Docs" >

    <Box mx={"2.2rem"}>


    <Typography variant={"h4"}>Schedule</Typography>
    <Table>
      <TableHead>
        <TableRow>
          {hours.map((hour) => (
            <TableCell align="center" key={hour}>
              {hour}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Monday</TableCell>
          {sessions.map((session, index) => (
            <TableCell key={index}>
              <Typography variant="body2">{session.subject}</Typography>
              <Typography variant="body2">{session.class}</Typography>
              <Typography variant="body2">{session.professor}</Typography>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Tuesday</TableCell>
          <TableCell />
          {sessions.slice(1,2).map((session, index) => (
            <TableCell key={index}>
              <Typography variant="body2">{session.subject}</Typography>
              <Typography variant="body2">{session.class}</Typography>
              <Typography variant="body2">{session.professor}</Typography>
            </TableCell>
          ))}
          <TableCell /><TableCell />
          {sessions.slice(1,2).map((session, index) => (
            <TableCell key={index}>
              <Typography variant="body2">{session.subject}</Typography>
              <Typography variant="body2">{session.class}</Typography>
              <Typography variant="body2">{session.professor}</Typography>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Wednesday</TableCell>
          {sessions.slice(1,3).map((session, index) => (
            <TableCell key={index}>
              <Typography variant="body2">{session.subject}</Typography>
              <Typography variant="body2">{session.class}</Typography>
              <Typography variant="body2">{session.professor}</Typography>
            </TableCell>
          ))}
          <TableCell/>
          <TableCell/>
          {sessions.slice(1,2).map((session, index) => (
            <TableCell key={index}>
              <Typography variant="body2">{session.subject}</Typography>
              <Typography variant="body2">{session.class}</Typography>
              <Typography variant="body2">{session.professor}</Typography>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Thursday</TableCell>
          {sessions.slice(0,4).map((session, index) => (
            <TableCell key={index}>
              <Typography variant="body2">{session.subject}</Typography>
              <Typography variant="body2">{session.class}</Typography>
              <Typography variant="body2">{session.professor}</Typography>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Friday</TableCell>
          {sessions.slice(0,2).map((session, index) => (
            <TableCell key={index}>
              <Typography variant="body2">{session.subject}</Typography>
              <Typography variant="body2">{session.class}</Typography>
              <Typography variant="body2">{session.professor}</Typography>
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Saturday</TableCell>
          {sessions.slice(0,1).map((session, index) => (
            <TableCell key={index}>
              <Typography variant="body2">{session.subject}</Typography>
              <Typography variant="body2">{session.class}</Typography>
              <Typography variant="body2">{session.professor}</Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
    </Box>
  </Page>
);
