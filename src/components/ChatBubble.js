import { Typography, Chip } from '@mui/material';

const bubble = (name, message, me) => {

  return (
    <>
    <Typography variant='body2' align={(me) ? 'right' : 'inherit'}>
      {name}
    </Typography>

    <div style={{ display: 'flex' }}>
      {me && (
        <div style={{ flexGrow: 1 }}></div>
      )}

      <div>
        <Chip label={message} color={(me) ? 'primary' : 'default'} />
      </div>
    </div>

    </>
  );
}

export default function ChatBubble(props) {



  return (
    <div style={{ margin: '2px' }}>
      {bubble(props.name, props.message, props.me)}
    </div>
  );
}
