import { Block } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    toolbar: {},
    toolbarIcon: {
        height: 24,
    },
    card: {
        borderRadius: 24,
        boxShadow: "18px 18px 56px 0 grey",
    },
    grid: {
        margin: "10vh 0",
    },

    gridItem: {
        position: "absolute",
    },

    swipe: {
        position: "absolute",
    },

    button: {
        borderRadius:"50%",
        backgroundColor:"white",
        padding: 16,
        margin: "16px 4px",
        boxShadow: "0px 8px 56px 8px rgb(0,0,0,.1)"
    },
    card: {
        position: "relative",
        width: 600,
        height: "56vh",
        maxHeight:"80vh",
        maxWidth: "90vw",
        borderRadius: 24,
        boxShadow: "0 5px 56px 18px rgba(0,0,0,.1)",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },

    swipeButtons: {
        position: "absolute",
        bottom: 0,
    },
}));

export default useStyles;
