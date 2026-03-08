const GITHUB_REPO_BASE_PATH = "/mon-porfolio";

export const withBasePath = (path: string) => {
  if (!path) {
    return path;
  }

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//") ||
    path.startsWith("#") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (process.env.NODE_ENV !== "production") {
    return normalizedPath;
  }

  return `${GITHUB_REPO_BASE_PATH}${normalizedPath}`;
};
