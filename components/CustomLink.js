export default function CustomLink({href, text, className}) {
  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
}
