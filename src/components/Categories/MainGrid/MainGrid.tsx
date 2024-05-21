import {Box, Container} from "@mui/material";
import Categories from "../Categories.tsx";
import Grid from '@mui/material/Unstable_Grid2';
import {useAppSelector} from "../../../hooks/hooks.ts";
import CategoryAddNew from "../CategoryAddNew/CategoryAddNew.tsx";

const MainGrid = () => {
  const categoryList = useAppSelector(state => state.category.categoryList)

  return (
    <Container maxWidth={"xl"}>
      <Box
        mt={2}
        sx={{
          overflowX: 'auto',
          overflowY: 'hidden',
          pt: 1
          // pb: 2
        }}
        maxWidth={'95vw'}

      >
        <Grid
          wrap={"nowrap"}
          container
          spacing={2}
        >
          {
            categoryList?.map(category => (
              <Grid
                key={category.id}
                xs={10}
                md={3}
                minWidth={300}
              >
                <Categories
                  id={category.id}
                  name={category.name}
                  amount={categoryList.length}
                />
              </Grid>
            ))
          }
          <Grid
            xs={10}
            md={3}
            minWidth={300}
          >
            <CategoryAddNew/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainGrid;