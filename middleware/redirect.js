export default function ({ route, redirect }) {
  if (route.path !== '/' && route.path.slice(-1) === '/') {
    redirect(200, (process.env.BASE_URL || 'http://localhost:3000') + route.path.slice(0, -1))
  }
}
