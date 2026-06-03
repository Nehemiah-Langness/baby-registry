import { copyFileSync } from 'fs';

const outputDirectory = 'dist';
const copies = ['/meal-train', '/registry', '/sign-up', 'on-call', '/yard-work', '/404'];
for (const destination of copies) {
    copyFileSync(outputDirectory + '/index.html', outputDirectory + destination + '.html');
}
