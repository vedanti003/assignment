import React from "react";
import { Button, Container, TextField, Typography, Grid } from "@mui/material";
import "./Page2.css";

const Page2 = () => {
  return (
    <div className="page-container">
      <div className="form-container">
        <h1 style={{padding: "1rem"}}>Signin to your PopX account</h1>
        <p style={{padding: "0 0 1.5rem 1.5rem"}}>Lorem ipsum dolor sit amet. Et voluptates consequatur aut eaque</p>
        <Container maxWidth="xs">
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  name="email"
                  placeholder="Enter email address"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  name="password"
                  required
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              Login
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Page2;
