import React from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useAttendants } from "../../../Hooks/useAttendants";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "../../../components/Button";
import RegisterTemplate from "../../../components/RegisterTemplate";
import {
  fullnameRequired,
  usernameRequired,
  passwordRequired,
  eventRequired,
} from "../../../services/validations";
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
  const { registerAttendant } = useAttendants();
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onCancelClick = (event) => {
    event.preventDefault();
    history.push(`/admin/attendants`);
  };

  const onSubmit = async ({ fullname, username, password, event }) => {
    try {
      await registerAttendant({
        // adminId: admin.id,
        fullname,
        username,
        password,
        event,
        type: "attendant",
      });

      history.push(`/admin/attendants`);
    } catch (error) {
      //
    }
  };

  return (
    <RegisterTemplate>
      <S.Title>Attendant registration</S.Title>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Controller
            name="fullname"
            control={control}
            rules={{ validate: fullnameRequired }}
            render={({ field }) => (
              <TextField
                error={!!errors.fullname}
                id="outlined-basic"
                label="Full name"
                variant="outlined"
                placeholder="Type the fullname of the user"
                helperText={errors.fullname?.message}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="username"
            control={control}
            rules={{ validate: usernameRequired }}
            render={({ field }) => (
              <TextField
                error={!!errors.username}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                placeholder="Define a username"
                helperText={errors.username?.message}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="password"
            control={control}
            rules={{ validate: passwordRequired }}
            render={({ field }) => (
              <TextField
                error={!!errors.password}
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                placeholder="Set a password"
                helperText={errors.password?.message}
                fullWidth
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="event"
            control={control}
            rules={{ validate: eventRequired }}
            render={({ field }) => (
              <TextField
                error={!!errors.event}
                select
                id="outlined-basic"
                label="Event"
                variant="outlined"
                helperText={errors.event?.message}
                fullWidth
                {...field}
              >
                {events.map((event) => (
                  <MenuItem key={event.id} value={event.id}>
                    {event.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button width="300px" height="50px" onClick={handleSubmit(onSubmit)}>
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
