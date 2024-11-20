export type GenericCompoundComponentType<T, N extends string> = T & {
  COMPONENT_NAME: N;
};

export type GenericHTMLProps<P> = Omit<P, 'style'>;
