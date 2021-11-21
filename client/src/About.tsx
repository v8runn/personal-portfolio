import Image from "./varun.jpg";
import { Container, Button, Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#1f2833",
    },
    title: {
        color: "#66fcf1",
        fontWeight: "bold",
        fontSize: "40px",
        fontFamily: "'Montserrat', sans-serif",
        marginBottom: "20px"
    },
    media: {
        [theme.breakpoints.up(600)]: {
            width: "70%",
          },
          width: "90%",
        borderRadius: "50%",
        border: "2px solid #66fcf1",
        marginLeft: "90px"
    },
    info: {
        padding: "30px",
        fontFamily: "'Montserrat', sans-serif",
    },
    box: {
        padding: "10px",
        color: "white",
        paddingTop: "5em"
    },
    btn: {
        textTransform: "lowercase",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "18px",
        '&:hover': {
            background: "white",
            color: "black"
        },
        marginTop: "30px",
        marginLeft:"30px",
        background: "#1f2833",
        color: "#66fcf1",
        border: "2px solid #66fcf1"
    }
}))

export default function About ()
{
    const classes = useStyles();

    return (
        <div className={classes.root} id="about">
            <Container>
            <Box display="flex" flexDirection="row" alignItems="center" className={classes.box}>
            <Grid container>
                <Grid item xs={12} md={6} >
                <img src={Image} alt="varun shankar" className={classes.media}></img>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={classes.info} pt={5}>
                    <Typography variant="h4" className={classes.title} align="center">
                        hello, world!
                    </Typography>
                    <Typography variant="h6" className={classes.info}>
                    I am Varun, a second-year CS undergraduate at the University of Manchester and an aspiring software engineer. I also possess a keen interest in machine learning, AI and data science. Things I love to do when I am not thinking about computers and programming include gaming, photography and video editing.
                </Typography>
                <Box>
                <Button variant="contained" className={classes.btn} href="mailto:shankar.varuns26@gmail.com"> &gt; contact me</Button>  
                </Box>
                </Box>
                </Grid>
            </Grid>
            </Box>
            </Container>
        </div>
    )
}