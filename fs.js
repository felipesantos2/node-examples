import { unlinkSync } from 'node:fs';

try {
    unlinkSync('/tmp/hello');
    console.log('successfully deleted /tmp/hello');
} catch (err) {
    console.log(err.message)
}
