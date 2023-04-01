import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualification() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SCITS" src="https://th.bing.com/th/id/R.5d0ea9abe21ba6e61167168255a51f8e?rik=Do9JissvZ14neQ&riu=http%3a%2f%2fscce.ac.in%2fparentm%2fimg%2fsccelogo.png&ehk=SEVp84MIKWr2YL3ofKpSeRXCGA4R2tf3LjqfH%2bukLeo%3d&risl=&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <ListItemText
          primary="sree chaitanya institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7.5 CGPA
              </Typography>
              {" — B tech in Electrical and Electronics Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SRRS GPT" src="https://th.bing.com/th/id/OIP.UoPCsbGb4Yg3pwOx-5a0OgHaH_?pid=ImgDet&rs=1" />
        </ListItemAvatar>
        <ListItemText
          primary="SRRS GOVT POLYTECHNIC SIRCILLA"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                85%
              </Typography>
              {" — Diploma in Electrical and Electrical Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Vivekanandha"src="https://th.bing.com/th/id/R.9da85da2abfbb3d0eb7b86c6bdc63888?rik=J1FtI1O2Mjj4XQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fvivekananda-png-life-of-swami-vivekananda-220.png&ehk=hZOkdEqiRFbBZuOQwiNvwBwVFhJTlEG%2bj1wNTOnDJUA%3d&risl=&pid=ImgRaw&r=0"/>
        </ListItemAvatar>
        <ListItemText
          primary="Vivekanandha High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                9.7 CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}