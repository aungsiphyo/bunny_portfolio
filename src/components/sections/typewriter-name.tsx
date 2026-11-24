type TypewriterNameProps = Readonly<{
  text: string;
}>;

export function TypewriterName({ text }: TypewriterNameProps) {
  return (
    <>
      <span data-hero-typewriter>{text}</span>
      <span className="hero-typewriter-cursor" aria-hidden="true" />
    </>
  );
}
