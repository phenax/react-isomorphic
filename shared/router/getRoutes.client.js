
import { HistoryAPI } from './HnRouter';

import getRoutes from './routes';

const config= {

};

export default () => getRoutes(new HistoryAPI(config));
