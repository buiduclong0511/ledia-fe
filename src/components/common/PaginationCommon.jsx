import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";

export const PaginationCommon = ({
    totalPages = 1,
    currentPage = 1,
    onChange = () => {}
}) => {
    return (
        <Container>
            <Pagination count={totalPages} page={currentPage} onChange={onChange} />
        </Container>
    );
};

const Container = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .MuiPaginationItem-root {
        color: #fff;
    }
    
    .MuiPaginationItem-page.Mui-selected {
        background-color: ${p => p.theme.colors.main};
    }
`;