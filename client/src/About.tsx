import Image from "./varun.jpg";
import { Container, Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        background: "#1f2833",
        padding: "50px"
    },
    title: {
        color: "#66fcf1",
        fontWeight: "bold",
        fontSize: "40px"
    },
    media: {
        width: "30%",
        padding: "5px",
        borderRadius: "50%",
        border: "2px solid #66fcf1",
    },
    info: {
        marginRight: "10px",
        fontSize: "25px",
        padding: "10px"
    },
    box: {
        padding: "10px",
        color: "white",
        marginTop: "25px"
    },
    btn: {
        textTransform: "lowercase",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "18px",
        '&:hover': {
            background: "white",
            color: "black"
        },
        marginTop: "45px",
        background: "#1f2833",
        color: "#66fcf1",
        border: "2px solid #66fcf1"
    }
}))

export default function About ()
{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
            <Typography variant="h4" align="center" className={classes.title}>
                hello, world!
            </Typography>
            <Box display="flex" flexDirection="row" alignItems="center" className={classes.box}>
                <div className={classes.info}>
                <Typography variant="h5">
                    I am Varun, a second-year CS student at the University of Manchester and an aspiring software engineer.
                </Typography>
                <Button variant="contained" className={classes.btn}> &gt; contact me</Button>
                </div>
                <img src={Image} className={classes.media}></img>
            </Box>
            </Container>
        </div>
    )
}