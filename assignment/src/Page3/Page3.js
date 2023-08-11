import "./Page3.css";
import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Page3 = () => {
  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Create your PopX account</h1>
        <Container maxWidth="xs">
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Full name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  placeholder="Enter email address"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone number"
                  variant="outlined"
                  fullWidth
                  type="number"
                  name="number"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email address"
                  variant="outlined"
                  fullWidth
                  name="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  name="password"
                  type="password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Company name"
                  variant="outlined"
                  fullWidth
                  name="company"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom style={{textAlign:"left"}}>
                  Are you an agency?
                </Typography>
                <RadioGroup aria-label="Are you an agency?">
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </Grid>
            </Grid>
            
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Page3;
