import React, { ChangeEvent, FormEvent } from 'react';
import { Typography, makeStyles, TextField, Grid, Button, InputLabel, Theme } from '@material-ui/core';
import { useAppState } from '../../../state';

const useStyles = makeStyles((theme: Theme) => ({
  gutterBottom: {
    marginBottom: '1em',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1.5em 0 3.5em',
    '& div:not(:last-child)': {
      marginRight: '1em',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '1.5em 0 2em',
    },
  },
  textFieldContainer: {
    width: '100%',
  },
  continueButton: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

interface RoomNameScreenProps {
  name: string;
  roomName: string;
  setName: (name: string) => void;
  setRoomName: (roomName: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function RoomNameScreen({ name, roomName, setName, setRoomName, handleSubmit }: RoomNameScreenProps) {
  const classes = useStyles();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setRoomName('url-test');
  };

  return (
    <>
      <Typography variant="h5" className={classes.gutterBottom}>
        Unirse a la llamada
      </Typography>
      <Typography variant="body1">Ingresa tu nombre antes de ingresar a la llamada</Typography>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputContainer}>
          <div className={classes.textFieldContainer}>
            <InputLabel shrink htmlFor="input-user-name">
              Nombre
            </InputLabel>
            <TextField
              id="input-user-name"
              variant="outlined"
              fullWidth
              size="small"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <Grid container justifyContent="flex-end">
          <Button variant="contained" type="submit" color="primary" disabled={!name} className={classes.continueButton}>
            Continuar
          </Button>
        </Grid>
      </form>
    </>
  );
}
