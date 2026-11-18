import { delay } from "@/lib/motion";

type Props = {
  text: string;
  /** seconds, added to the global --intro offset */
  start?: number;
  step?: number;
};

/** Headline that rises in word by word. Screen readers get the plain sentence. */
export function WordReveal({ text, start = 0.25, step = 0.07 }: Props) {
  const words = text.split(" ");
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={i}>
            <span className="w">
              <span style={delay(`${(start + i * step).toFixed(2)}s`)}>{word}</span>
            </span>
            {i < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </>
  );
}
