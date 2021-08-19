import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import styled from "styled-components";

export const SelectCommon = ({
    label = "",
    options = [],
    value = null,
    id = "",
    onChange = () => {}
}) => {
    return (
        <Container>
            <FormControl variant="outlined" fullWidth>
                <InputLabel id={id}>{label}</InputLabel>
                <Select
                    labelId={id + "-label"}
                    id={id}
                    value={value}
                    onChange={onChange}
                    label={label}
                    MenuProps={{
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "left"
                        },
                        getContentAnchorEl: null
                    }}
                >
                    {options.map((option, index) => {
                        return (
                            <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
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

    .MuiSelect-icon {
        color: #fff;
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }

    .MuiFormLabel-root.Mui-focused {
        color: #fff;
    }
`;