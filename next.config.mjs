import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le répertoire du fichier courant
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Configurer les alias
    config.resolve.alias['@'] = path.resolve(__dirname, 'src'); // ou le répertoire approprié
    return config;
  },
};

export default nextConfig;
