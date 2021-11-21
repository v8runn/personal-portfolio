import { AppBar, Typography, makeStyles, Grid, Box} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    background: "#1f2833",
    color: "#66fcf1",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "bold",
    alignItems: "center"
  },
  boxes: {
    margin: "2px"
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
    <Box className= {classes.boxes}>
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
      </Box>
      <Box className={classes.boxes}>
        <Typography>Copyright © Varun Shankar 2021 </Typography>
      </Box>
    </AppBar>
  );
}