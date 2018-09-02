import * as http from 'http';

interface BundlerOptions {
  outDir?: string;
  cacheDir?: string;
  publicURL?: string;
}

interface BundlerNormalizedOptions {
  publicURL: string;
}

declare class Bundler {
  constructor(entryFiles: string, options: BundlerOptions);
  bundle(): Promise<void>;
  middleware(): (
    request: http.IncomingMessage,
    response: http.ServerResponse,
    next?: () => void
  ) => void;
  options: BundlerNormalizedOptions;
}

export default Bundler;
