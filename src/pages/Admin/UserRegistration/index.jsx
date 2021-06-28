import React from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useUsers } from "../../../Hooks/useUsers";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "../../../components/Button";
import RegisterTemplate from "../../../components/RegisterTemplate";
import {
  fullnameRequired,
  usernameRequired,
  passwordRequired,
} from "../../../services/validations";
import * as S from "./styles";

function UserRegistration() {
  const { registerUser } = useUsers();
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
    history.push(`/admin/users`);
  };

  const onSubmit = async ({ fullname, username, password }) => {
    console.log("chegou");
    //incluir adminId
    try {
      await registerUser({ fullname, username, password });

      history.push(`/admin/users`);
    } catch (error) {
      //
    }
  };

  return (
    <RegisterTemplate>
      <S.Title>User registration</S.Title>
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
          <Button width="300px" height="50px" onClick={handleSubmit(onSubmit)}>
            Register new user
          </Button>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Link href="/admin/users" onClick={onCancelClick}>
            Cancel
          </Link>
        </Grid>
      </Grid>
    </RegisterTemplate>
  );
}

export default UserRegistration;
