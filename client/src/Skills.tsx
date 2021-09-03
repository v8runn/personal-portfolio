import {
    Card,
    CardContent,
    CardActions,
    Grid,
    Typography,
    Container,
    Button 
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({

    root: {
        background: "#1f2833",
    },
    title: {
        color: "#66fcf1",
        fontWeight: "bold",
        fontSize: "40px",
        padding: "30px"
    },
    card: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #66fcf1",
        background: "#1f2833",
        padding: "10px"
      },
      btn: {
        textTransform: "lowercase",
        fontFamily: "'Montserrat', sans-serif",
        '&:hover': {
            background: "white",
            color: "black"
        },
        background: "#1f2833",
        color: "#66fcf1",
        border: "2px solid #66fcf1",
      },
      names: {
          color: "white",
          fontWeight: "bold"
      },
      content: {
          justifyContent: "center",
          padding: "10px"
      }

}))


export default function Skills () 
{
    const classes = useStyles();

    return (
        <div className={classes.root} id="skills">
            <Typography variant="h4" align="center" className={classes.title}>
                skills
            </Typography>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" align="center" className={classes.names}>
                                    programming languages
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.content}>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    Python
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    C++
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    JavaScript
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    TypeScript
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    HTML
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    mysql
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    CSS
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    Java
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" align="center" className={classes.names}>
                                    frameworks and libraries
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.content}>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    reactJS
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    material-ui
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    django
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    numpy
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    matplotlib
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" align="center" className={classes.names}>
                                    some other tools
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.content}>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    jupyter
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    premiere pro
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    word
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    excel
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    powerpoint
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" align="center" className={classes.names}>
                                    soft skills
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.content}>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    leadership
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    communication
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    multilingual 
                                </Button>
                                <Button size="small" variant="contained" className={classes.btn}>
                                    public speaking
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}