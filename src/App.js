import './App.css';
import PrimarySearchAppBar from './components/AppBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LetterAvatars from './components/LetterAvatars';
import Button from '@mui/material/Button';
import ChatBubble from './components/ChatBubble';
import YoutubeId from './components/YoutubeVideo';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  return (
    <div className='App'>
      <PrimarySearchAppBar />
      
      <Box sx={{
        flexGrow: 1,
        mt: '10px',
        minHeight: 450
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item>
              <YoutubeId youtubeId={'6fWU0e6W8QY'} />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item sx={{ minHeight: 450 }}>
              <Typography variant='h6'>
                Chat
              </Typography>

              <ChatBubble name='K. Dodds' message='Test message' />
              <ChatBubble name='J. Watson' message='Another one test messsage' />
              <ChatBubble name='S. Theod' message='Another one test messsage' me={true} />
              <ChatBubble name='J. Watson' message='Haha!' />

              <div>
                <TextField label='Message' variant='standard' style={{
                  width: '100%',
                }} />

                <div style={{ display: 'flex', float: 'right' }}>
                  <Button variant="text">Send</Button>
                </div>
              </div>
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Typography variant='h6'>
              Joined
            </Typography>
            <Item>
              <LetterAvatars />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
