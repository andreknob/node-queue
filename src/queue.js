import 'dotenv/config';

import mailQueue from './app/lib/Queue';
import RegistrationMail from './app/jobs/RegistrationMail';

mailQueue.process(RegistrationMail.handle);
