import React from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "../../../components/Button";
import RegisterTemplate from "../../../components/RegisterTemplate";
import * as S from "./styles";

const events = [
  {
    id: 1,
    name: "Scrum Day",
  },
  {
    id: 2,
    name: "Tech Career Fair",
  },
  {
    id: 3,
    name: "Innovation Day",
  },
];

function AttendantRegistration() {
  const history = useHistory();

  const onCancelClick = (event) => {
    event.preventDefault();
    history.push(`/admin/attendants`);
  };

  const onSubmit = () => {
    history.push(`/admin/attendants`);
  };

  return (
    <RegisterTemplate>
      <S.Title>Attendant registration</S.Title>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Full name"
            variant="outlined"
            placeholder="Type the fullname of the user"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            placeholder="Define a username"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="Set a password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            id="outlined-basic"
            label="Event"
            variant="outlined"
            fullWidth
          >
            {events.map((event) => (
              <MenuItem key={event.id} value={event.id}>
                {event.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button width="300px" height="50px" onClick={onSubmit}>
            Register new attendant
          </Button>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Link href="/admin/attendants" onClick={onCancelClick}>
            Cancel
          </Link>
        </Grid>
      </Grid>
    </RegisterTemplate>
  );
}

export default AttendantRegistration;
