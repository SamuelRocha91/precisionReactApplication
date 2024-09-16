/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // outras variáveis que você possa ter
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
