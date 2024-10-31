export default function isCurrentRoute(route: string) {
  return location.pathname === route;
}
