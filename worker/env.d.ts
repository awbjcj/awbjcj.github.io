/** Optional D1 binding: the GitHub Pages deployment has no database runtime. */
declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
  }
}
