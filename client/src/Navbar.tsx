import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Typography, Hidden } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    nav: {
        background: "#1f2833",
        padding: theme.spacing(1, 2),
    },
    title: {
        flex: 1,
        fontSize: "30px",
        letterSpacing:"0em",
        fontWeight: "bold",
        color: '#66fcf1',
        fontFamily: "'Montserrat', sans-serif",
    },
    btn: {
        textTransform: "lowercase",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "20px",
        '&:hover': {
            color: '#66fcf1',
            fontSize: "17px"
        }
    },

}))

export default function Navbar ()
{
    const classes = useStyles();

    return(
            <AppBar className={classes.nav} position="static">
                <Toolbar>
                        <Typography className={classes.title}>
                            varun shankar
                        </Typography>
                        <Hidden mdDown>
                        <Button color="inherit" className={classes.btn} href="#about">
                        About Me
                        </Button>
                        <Button color="inherit" className={classes.btn} href="#projects">
                        Projects
                        </Button>
                        <Button color="inherit" className={classes.btn} href="https://www.dropbox.com/s/rfinuz7vhdwiylt/resume.pdf?dl=0">resume
                        </Button>
                        </Hidden>
                </Toolbar>
            </AppBar>
    )
}