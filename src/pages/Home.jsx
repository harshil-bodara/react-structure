import Layout from "../layout/Layout";
import Button from '@mui/material/Button';

const Home = () => {
    return (
     <Layout>
      <div className="red">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      </div>
     </Layout>
    );
  }
  
  export default Home;