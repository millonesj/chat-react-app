import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { changeTextValue, CTX  } from '../contexts/Store';


const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3,2)
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'
  },
  chatWindow: {
    width: '70%',
    height: '300px',
  },
  chatBox: {
    width: '85%',
  },
  button: {
    width: '15%'
  }
}))

export default function Dashboard() {

  const classes = useStyles();

  const {allChats, sendChatAction} = React.useContext(CTX);
  const topics = Object.keys(allChats)
  console.log(allChats);

  const [activeTopic, changeActiveTopic] = useState(topics[0])

  const [textValue, changeTextValue] = useState('');

    return (
      <Paper  className={classes.root}>
        <Typography variant="h4" component="h4" align="center">
          Chat App
        </Typography>
        <Typography variant="h5" component="h5" align="center">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {
                  topics.map(topic => (
                    <ListItem key={topic} button onClick={(e) => changeActiveTopic(e.target.innerText)}>
                    <ListItemText primary={topic} />
                  </ListItem>
                  ))
              }
            </List>
          </div>
          <div className={classes.chatWindow}>
                {
                    allChats[activeTopic].map((chat , i )=> (
                      <div className={classes.flex} key={i}>
                          <Chip label={chat.from} className={classes.Chip}></Chip>
                          <Typography variant='body1'>
                            {chat.msg}
                          </Typography>
                      </div>
                    ))
                }
          </div>
        </div>
        <div className={classes.flex}>
        <TextField
          label="Send a chat"
          value={textValue}
          onChange={(e) => changeTextValue(e.target.value)}
          className={classes.chatBox}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => sendChatAction(textValue)}
        >
          Primary
        </Button>
        </div>
      </Paper>
    )

}
