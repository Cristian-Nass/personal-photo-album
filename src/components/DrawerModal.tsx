import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

interface GalleryDrawerToggle {
  galleryDrawer: boolean;
  changeWord: (a: boolean) => void;
}
export default function DrawerModal(props: GalleryDrawerToggle) {
  const [state, setState] = React.useState(false);
  useEffect(() => {
    setState(props.galleryDrawer);
  }, [props.galleryDrawer]);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <Box
      sx={{width: 250}}
      role="presentation"
      onClick={() => {
        toggleDrawer(false);
        props.changeWord(false);
      }}
      onKeyDown={() => {
        toggleDrawer(false);
        props.changeWord(false);
      }}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        {/* <Button onClick={toggleDrawer(true)}>Gallery</Button> */}
        <Drawer
          anchor={'left'}
          open={state}
          onClose={() => {
            toggleDrawer(false);
            props.changeWord(false);
          }}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
