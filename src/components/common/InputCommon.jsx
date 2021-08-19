import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

export const InputCommon = ({
    label = "",
    type = "text",
    value = "",
    error = "",
    touched = false,
    name = "",
    multiline = false,
    required = false,
    onChange = () => {},
    onBlur = () => {},
}) => {
    return (
        <Container>
            <TextField
                label={label}
                value={value}
                type={type}
                error={!!error && touched}
                helperText={touched && !!error ? error : ""}
                onChange={onChange}
                onBlur={onBlur}
                variant="outlined"
                name={name}
                autoComplete=""
                fullWidth
                multiline={multiline}
                maxRows={10}
                required={required}
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

    .MuiInputBase-inputMultiline::-webkit-scrollbar-thumb {
        background: #fff;
    }
`;