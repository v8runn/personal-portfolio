import ReactLoading from "react-loading";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    loader: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '400px'
    }
}))

export default function PreLoader () {

    const classes = useStyles();

    return (
        <div className={classes.loader}>
        { 
            <ReactLoading
              type={"bars"}
              color={"#66fcf1"}
              height={100}
              width={100}
            />
           
          }
        </div>
      );
    }
    
