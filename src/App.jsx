import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert"
import { useDispatch, useSelector } from "react-redux";

import { Layout } from "src/layout"
import { StyledBackground } from "src/components";
import { PlayerModule } from "src/modules";
import { hideToast, toastSelector } from "src/redux";

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const App = () => {
    const toast = useSelector(toastSelector);
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        dispatch(hideToast());
      };

    return (
        <div className="App">
            <StyledBackground />
            <Layout />
            <PlayerModule />
            <Snackbar
                anchorOrigin={{
                    vertical: toast.vertical || 'top',
                    horizontal: toast.horizontal || 'right'
                }}
                open={toast.open}
                autoHideDuration={toast.autoHideDuration}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={toast.type}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </div>
    );
};