# good-log

- example usage
```javascript
import {Glog} from "@elies-chelbi/goodlogger"

const logger = new Glog()

logger.debug("message or function name you want to debug", {data object you want to display})

logger.clear_and_debug("message or function name you want to debug", {data object you want to display})

logger.error("message or function name you want to debug", {data object you want to display})

logger.clear_and_showError("message or function name you want to debug", {data object you want to display})