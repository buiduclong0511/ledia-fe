import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

export const InputCommon = ({
    label = "",
    value = "",
    type = "text",
    error = "",
    touched = false
}) => {
    return (
        <Container>
            <TextField
                label={label}
                value={value}
                type={type}
                variant="outlined"
            />
        </Container>
    );
};

const Container = styled.div`
    padding: 10px 0;

    .MuiFormLabel-root {
        color: #fff;
    }

    .MuiInputBase-root {
        color: #fff;
    }
    
    .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }

    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: #ccc;
    }

    .MuiFormLabel-root.Mui-focused {
        color: #fff;
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }
`;