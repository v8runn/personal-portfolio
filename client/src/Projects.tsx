import './styles.css'; 

import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Grid,
    Button,
    Typography,
    Container
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import ProjectsData from "./ProjectsData";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#1f2833",
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
      cardMedia: {
          paddingTop: "76.25%"
      },
      CardContent: {
          flexGrow: 1,
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
          color: "#66fcf1",
          fontWeight: "bold"
      },
      desc: {
          color: "white",
          justifyContent: "center"
      }
})) 

export default function Projects ()
{
   const classes = useStyles();
   
   return (
       <div className={classes.root} id="projects">
           <Typography variant="h4" align="center" className={classes.title}>
               projects
           </Typography>
           <Container maxWidth="md">
               <Grid container spacing={4}>
                   {ProjectsData.map((data, index) => (
                       <Grid item key={index} xs={12} sm={12} md={6}>
                           <Card className={classes.card}>
                               <CardMedia className={classes.cardMedia}
                               image={data.image} />
                               <CardContent className={classes.CardContent}>
                                   <Typography gutterBottom variant="h6" className={classes.names}>
                                       {data.name}
                                   </Typography>
                                   <Typography className={classes.desc}>
                                       {data.description}
                                   </Typography>
                               </CardContent>
                               <CardActions>
                                   <Button size="small" variant="contained" className={classes.btn} href={data.link}>view code </Button>
                                </CardActions>                           
                                </Card>
                           </Grid>
                   ))}
               </Grid>
           </Container>

       </div>
   )
}