export default function isCurrentRoute(route: string) {
  return new RegExp(`^${route}/?$`).test(location.pathname);
}
