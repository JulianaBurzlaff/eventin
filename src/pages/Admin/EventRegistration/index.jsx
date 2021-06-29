import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useEvents } from "../../../Hooks/useEvents";
import { useAuth } from "../../../Hooks/useAuth";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "../../../components/Button";
import AdminLayout from "../../../components/AdminLayout";
import ImageUpload from "../../../components/ImageUpload";
import RegisterTemplate from "../../../components/RegisterTemplate";
import {
  eventNameRequired,
  locationRequired,
  dateRequired,
  timeRequired,
  descriptionRequired,
  imageRequired,
} from "../../../services/validations";
import * as S from "./styles";

function EventRegistration() {
  const history = useHistory();
  const { user } = useAuth();
  const { registerEvent } = useEvents();
  const [image, setImage] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onCancelClick = (event) => {
    event.preventDefault();
    history.push(`/admin/events`);
  };

  const onSubmit = async ({ eventName, location, date, time, description }) => {
    try {
      await registerEvent({
        adminId: user.id,
        eventName,
        location,
        date,
        time,
        description,
        image,
      });

      history.push(`/admin/events`);
    } catch (error) {
      //
    }
  };

  const getBase64 = useCallback((file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });
  }, []);

  const onFileUploaded = useCallback(
    async (file) => {
      const base64 = await getBase64(file);

      setImage(base64);
    },
    [getBase64]
  );

  return (
    <AdminLayout>
      <RegisterTemplate>
        <S.Title>Event registration</S.Title>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="eventName"
              control={control}
              rules={{ validate: eventNameRequired }}
              render={({ field }) => (
                <TextField
                  error={!!errors.eventName}
                  id="outlined-basic"
                  label="Event name"
                  variant="outlined"
                  placeholder="Type the name of the event"
                  helperText={errors.eventName?.message}
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="date"
              control={control}
              rules={{ validate: dateRequired }}
              render={({ field }) => (
                <TextField
                  error={!!errors.date}
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  id="outlined-basic"
                  label="Date"
                  variant="outlined"
                  fullWidth
                  helperText={errors.date?.message}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="time"
              control={control}
              rules={{ validate: timeRequired }}
              render={({ field }) => (
                <TextField
                  error={!!errors.time}
                  type="time"
                  InputLabelProps={{ shrink: true }}
                  id="outlined-basic"
                  label="Time of start"
                  variant="outlined"
                  helperText={errors.time?.message}
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="location"
              control={control}
              rules={{ validate: locationRequired }}
              render={({ field }) => (
                <TextField
                  error={!!errors.location}
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  placeholder="Set a location"
                  fullWidth
                  helperText={errors.location?.message}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="description"
              control={control}
              rules={{ validate: descriptionRequired }}
              render={({ field }) => (
                <TextField
                  error={!!errors.description}
                  multiline
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  placeholder="Type a description for the event"
                  fullWidth
                  helperText={errors.description?.message}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="image"
              control={control}
              rules={{ validate: imageRequired }}
              render={({ field }) => (
                <ImageUpload onFileUploaded={onFileUploaded} />
              )}
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            <Button
              width="300px"
              height="50px"
              onClick={handleSubmit(onSubmit)}
            >
              Register new event
            </Button>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Link href="/admin/events" onClick={onCancelClick}>
              Cancel
            </Link>
          </Grid>
        </Grid>
      </RegisterTemplate>
    </AdminLayout>
  );
}

export default EventRegistration;
