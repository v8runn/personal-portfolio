import { AppBar, Typography, makeStyles, Grid } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "16px",
    background: "#1f2833",
    color: "#66fcf1",
    fontFamily: "'Montserrat', sans-serif"
    
  },
  icons: {
    padding: "3px",
    cursor: "pointer",
    color: "white",
    fontSize: "30px",
    '&:hover': {
        color: "#66fcf1",
        fontSize: "25px"
    }
    
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.footer}>
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="body2" style={{ marginLeft: "10px", fontSize: "18px" }}>
            {"Copyright © "} Varun Shankar 2021
          </Typography>
        </Grid>

        <Grid item>
          <div>
            <LinkedInIcon
            
              className={classes.icons}
              onClick={() =>
                (window.location.href = "https://www.linkedin.com/in/varun-shankar-2002/")
              }
            />
            <GitHubIcon
            
              className={classes.icons}
              onClick={() =>
                (window.location.href = "https://github.com/v8runn")
              }
            />
            <InstagramIcon 
            className={classes.icons}
            onClick={() =>
            (window.location.href = "https://instagram.com/v8runn2")}
            />
          </div>
        </Grid>
      </Grid>
    </AppBar>
  );
}