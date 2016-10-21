
import { HashHistoryAPI } from './HnRouter';

import getRoutes from './routes';

const config= {

};

export default () => getRoutes(new HashHistoryAPI(config));
