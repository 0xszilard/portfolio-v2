const ImageComponent = ({ value }) => {
  return <img src={value?.asset?.url} alt={value?.alt || "Image"} />;
};

export const components = {
  types: {
    image: ImageComponent,
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
    em: ({ children }) => <em className="text-foreground">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          className="text-blue-500"
          rel={target === "_blank" ? "noindex nofollow" : undefined}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-foreground text-6xl">{children}</h1>,
    h2: ({ children }) => <h2 className="text-foreground text-5xl">{children}</h2>,
    h3: ({ children }) => <h3 className="text-foreground text-3xl">{children}</h3>,
    normal: ({ children }) => <p className="text-foreground">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-border text-foreground border-l-4 pl-4">{children}</blockquote>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="text-foreground">{children}</ul>,
  },
};
