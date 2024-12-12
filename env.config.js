import dotenv from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the directory name from the module URL
const __dirname = dirname(fileURLToPath(import.meta.url));

const environment = process.env.NODE_ENV || 'development';

const envFilePath =
  environment === 'production'
    ? resolve(__dirname, '.env.production')
    : resolve(__dirname, '.env.development');

dotenv.config({ path: envFilePath });

console.log(`Loaded environment: ${environment}`);

export default dotenv;
