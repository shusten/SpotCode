import React, { Fragment } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import 'app.scss';

const App = () => {
  return(
    <Fragment>
     <Button color="primary">My Bulma button</Button>
    </Fragment>
  );
}
export default App;