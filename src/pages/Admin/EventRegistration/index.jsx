import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "../../../components/Button";
import ImageUpload from "../../../components/ImageUpload";
import RegisterTemplate from "../../../components/RegisterTemplate";
import * as S from "./styles";

function EventRegistration() {
  const history = useHistory();
  const [image, setImage] = useState(null);

  const onCancelClick = (event) => {
    event.preventDefault();
    history.push(`/admin/events`);
  };

  const onSubmit = () => {
    history.push(`/admin/events`);
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
    <RegisterTemplate>
      <S.Title>Event registration</S.Title>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Event name"
            variant="outlined"
            placeholder="Type the name of the event"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            id="outlined-basic"
            label="Date"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="time"
            InputLabelProps={{ shrink: true }}
            id="outlined-basic"
            label="Time of start"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            placeholder="Set a location"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="outlined-basic"
            label="Description"
            variant="outlined"
            placeholder="Type a description for the event"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <ImageUpload onFileUploaded={onFileUploaded} />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button width="300px" height="50px" onClick={onSubmit}>
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
  );
}

export default EventRegistration;
