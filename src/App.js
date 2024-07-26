// import logo from './logo.svg';
// import './App.css';
import { Button, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles({
  testStyle: {
    color: "red",
    borderRadius: "50%"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Header></Header>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2}></Grid>
          <Grid item xs={12} sm={8}></Grid>
          <Grid item xs={false} sm={2}></Grid>
        </Grid>
      </Grid>
      <Button variant="contained" color="warning">
        This is a button
      </Button>
      {/* <Typography color="warning">
        <h1>Welcome to react</h1>
        <p>What font is this?</p>
      </Typography>
      <button className={classes.testStyle}>Test button</button> */}
    </div>
  );
}

export default App;
