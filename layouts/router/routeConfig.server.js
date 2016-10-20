
import { NodeHistoryAPI } from './HnRouter';

import getRoutes from './routes';

export default (req)=> getRoutes(new NodeHistoryAPI(req));
