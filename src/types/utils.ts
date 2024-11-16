/* eslint-disable @typescript-eslint/no-explicit-any */
export interface GenericResponse<T> {
  isSuccess: boolean;
  message?: string;
  response?: T;
}

export type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]: `${K & string}` | `${K & string}.${NestedKeys<T[K]>}`;
    }[keyof T]
  : never;

type Primitive = bigint | boolean | number | string | symbol | null | undefined;

/**
 * Represents a type that can either hold a value of type T or null.
 * @template T - The type of value that can be nullable.
 * @typedef {T | null} NullAble
 * @example
 *
 * type X = NullAble<string> => string | null
 */
export type NullAble<T> = T | null;

/**
 * Represents a type that can either hold a value of type T or undefined.
 * @template T - The type of value that can be optional.
 * @typedef {T | undefined} Maybe
 * @example
 *
 * type X = Maybe<string> => string | undefined
 */
export type Maybe<T> = T | undefined;

export type LiteralUnion<LiteralType, BaseType extends Primitive> =
  | LiteralType
  | (BaseType & Record<never, never>);

/**
 * Represents a type where specific properties are readonly, while the rest remain mutable.
 * @template T - The type of the object.
 * @template K - The type of the keys that should be readonly.
 * @typedef {Readonly<Pick<T, K>> & Omit<T, K>} ReadOnlyByKey
 */
export type ReadOnlyByKey<T, K extends keyof T> = Readonly<Pick<T, K>> &
  Omit<T, K>;

/**
 * Represents a type where all properties are mutable.
 * @template T - The type of the object.
 * @typedef {{ -readonly [k in keyof T]: T[k] }} Mutable
 */
export type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};

/**
 * Retrieves the inner type of an array or array-like structure.
 * @template T - The type of the array or array-like structure.
 * @param {T} arr - The array or array-like structure.
 * @returns {unknown} The inner type of the array or array-like structure.
 * @example
 *
 * const arr: Array<string> = ["a", "b"];
 * ArrayGetInnerType(typeof arr) => string;
 */

export type ArrayGetInnerType<T> = T extends
  | (any | null | undefined)[]
  | null
  | undefined
  ? NonNullable<NonNullable<T>[number]>
  : T extends (any | null | undefined)[]
    ? NonNullable<T[number]>
    : T extends any[] | null | undefined
      ? NonNullable<T>[number]
      : T extends any[]
        ? T[number]
        : T;

type GetIndexedField<T, K> = K extends keyof T
  ? T[K]
  : K extends `${number}`
    ? '0' extends keyof T
      ? undefined
      : number extends keyof T
        ? NonNullable<T[number]>
        : undefined
    : undefined;

type FieldWithPossiblyUndefined<T, Key> =
  | GetField<Exclude<T, undefined>, Key>
  | Extract<T, undefined>;

type IndexedFieldWithPossiblyUndefined<T, Key> =
  | GetIndexedField<Exclude<T, undefined>, Key>
  | Extract<T, undefined>;

/**
 * Retrieves the type of a field within an object, possibly including undefined.
 * @template T - The type of the object.
 * @template P - The type of the field path.
 * @example
 *
 * interface Address {
 *   postCode: string;
 *   street: Array<string>;
 * }
 *
 * interface User {
 *   address: Address;
 * }
 *
 * type UserStreet = GetField<User, 'address.street[0]'> => string
 */
export type GetField<T, P> = P extends `${infer Left}.${infer Right}`
  ? Left extends keyof T
    ? FieldWithPossiblyUndefined<NonNullable<T[Left]>, Right>
    : Left extends `${infer FieldKey}[${infer IndexKey}]`
      ? FieldKey extends keyof T
        ? FieldWithPossiblyUndefined<
            IndexedFieldWithPossiblyUndefined<
              NonNullable<T[FieldKey]>,
              IndexKey
            >,
            Right
          >
        : undefined
      : undefined
  : P extends keyof T
    ? NonNullable<T[P]>
    : P extends `${infer FieldKey}[${infer IndexKey}]`
      ? FieldKey extends keyof T
        ? IndexedFieldWithPossiblyUndefined<NonNullable<T[FieldKey]>, IndexKey>
        : undefined
      : undefined;

/**
 * Represents a type that ensures the input type is not an array but an object.
 * @template T - The type to check.
 * @typedef {(any[] extends T ? never : object)} AnyRecord
 */
export type AnyRecord<T> = any[] extends T ? never : object;

/**
 * Represents a utility type to retrieve the values of an object.
 * @template T - The type of the object.
 * @typedef {T[keyof T]} ValueOf
 */
export type ValueOf<T extends object> = T[keyof T];
