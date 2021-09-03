import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import './resume.pdf';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    nav: {
        background: "#1f2833",
        padding: "10px"
    },
    title: {
        flexGrow: 1,
        marginLeft: "10px",
        fontSize: "30px",
        letterSpacing:"0em",
        fontWeight: "bold",
        color: '#66fcf1'
    },
    body: {
        margin: "0"
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
    toolbar: theme.mixins.toolbar,

}))

export default function Navbar ()
{
    const classes = useStyles();

    return(
            <div className={classes.root}>
            <div className={classes.toolbar}>
            <AppBar className={classes.nav}>
                <Toolbar>
                    <Grid justifyContent="space-between" container spacing={10}>
                        <Grid item>
                        <Typography variant="h6" className={classes.title}>
                            varun shankar
                        </Typography>
                            </Grid>
                            <Grid item>
                                <div>
                                    <Button color="inherit" className={classes.btn} href="#about">
                                        About Me
                                    </Button>
                                    <Button color="inherit" className={classes.btn} href="#skills">
                                        Skills
                                    </Button>
                                    <Button color="inherit" className={classes.btn} href="#projects">
                                        Projects
                                    </Button>
                                    <Button color="inherit" className={classes.btn}>resume
                                        <a href="./resume.pdf"></a>
                                    </Button>
                                    
                                </div>
                            </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            </div>
            </div>
    )
}