import React from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useAttendants } from "../../../Hooks/useAttendants";
import { useAuth } from "../../../Hooks/useAuth";
import { useEvents } from "../../../Hooks/useEvents";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "../../../components/Button";
import AdminLayout from "../../../components/AdminLayout";
import RegisterTemplate from "../../../components/RegisterTemplate";
import {
  fullnameRequired,
  usernameRequired,
  passwordRequired,
  eventRequired,
} from "../../../services/validations";
import * as S from "./styles";

function AttendantRegistration() {
  const { registerAttendant } = useAttendants();
  const { user } = useAuth();
  const { events } = useEvents();
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

  const onSubmit = async ({ fullname, username, password }) => {
    try {
      await registerAttendant({
        fullname,
        username,
        password,
        type: "attendant",
        adminId: user.id,
      });

      history.push(`/admin/attendants`);
    } catch (error) {
      //
    }
  };

  return (
    <AdminLayout>
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
          <Grid container item xs={12} justify="center">
            <Button
              width="300px"
              height="50px"
              onClick={handleSubmit(onSubmit)}
            >
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
    </AdminLayout>
  );
}

export default AttendantRegistration;
