export default function NotFound() {
  return <img src={process.env.PUBLIC_URL + "404.jpg"} className="not-found" alt="404 not found" />;
}
