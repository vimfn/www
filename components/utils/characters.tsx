import type { CSSProperties, ComponentProps } from "react";
import { useMemo } from "react";

export interface CharactersProps
  extends Omit<ComponentProps<"span">, "children"> {
  children?: string;
}

export function Characters({
  children = "",
  style,
  ...props
}: CharactersProps) {
  //@ts-ignore
  const characters = useMemo(() => [...children], [children]);

  return (
    <span aria-label={children} role="text">
      {characters.map((character, index) => (
        <span
          aria-hidden
          data-character
          key={`${character}-${index}`}
          style={{ "--character": index, ...style } as CSSProperties}
          {...props}
        >
          {character}
        </span>
      ))}
    </span>
  );
}
