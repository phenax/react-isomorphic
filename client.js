
import {render} from 'react-dom';

import getRoutes from './shared/router/getRoutes.client';

const routerConfig= {};

render(getRoutes(routerConfig), document.getElementById('awesomeApp'));
