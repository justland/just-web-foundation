import { required, requiredDeep, unpartial } from "unpartial";

//#region rolldown:runtime

//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/$type.d.ts
/**
 * A branded type to define unique types for type-level programming.
 *
 * It supports all primitive types and object types.
 *
 * When using object types, the type intersect with the specified type to give easy access to its properties.
 *
 * Internally, it uses the properties `_$type` and `_$value` to store the type and value.
 * The type you provide should avoid specifying these properties.
 *
 * If needed, use `$O: { bare: true }` to avoid the intersection.
 *
 * @type V value
 * @type $O options
 *
 * @since 8.0.0
 */
type $Type<T$1 extends string, V = unknown, $O extends {
  bare: true;
} | unknown = unknown> = $O extends {
  bare: true;
} ? $Type.$<T$1, V> : [V] extends [null] | [undefined] | [symbol] | [void] ? $Type.$<T$1, V> : $Type.$<T$1, V> & V;
declare const _$type: '_$type';
declare const _$value: '_$value';
declare namespace $Type {
  type $TypeKey = '_$type';
  type $ValueKey = '_$value';
  type $<T$1 extends string, V = unknown> = {
    [_$type]: T$1;
    [_$value]: V;
  };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/errors/$error.d.ts
/**
 * 🧰 *type util*
 *
 * A type-level error.
 *
 * This is analogous to the `Error` class in JavaScript.
 *
 * It can be used in type-level programming to represent an error with a message.
 *
 * @example
 * ```ts
 * type T = $Error<'error message'>
 * type T = $Error<'error message', number>
 * ```
 *
 * @since 8.0.0
 */
type $Error<M extends string, T$1 = unknown> = M extends any ? $Type<'error', {
  message: M;
  type: T$1;
}> : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/errors/$infer_error.d.ts
/**
 * An error to indicate unexpected failure when inferring type.
 *
 * In your type,
 * you can use `T extends infer U extends V` to specify the type of the inferred type `U`.
 *
 * But doing so means you have to do an extra conditional type.
 *
 * This type can be use in the else case to indicate unexpected failure when inferring type.
 *
 * @example
 * ```ts
 * type F<T> = T extends infer U extends V
 *   ? ...your type logic...
 *   : InferError<'some message', T>
 * ```
 *
 * @since 8.0.0
 */
type $InferError<M extends string, T$1 = unknown> = M extends any ? $Error<`Unable to infer: ${M}`, T$1> : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/$resolve_options.d.ts
/**
 * 🧰 *type util*
 *
 * Resolve options to the first non `unknown` value.
 *
 * The `Values` are assumed to be a tuple with at least one value.
 * These checks are not performed for performance considerations.
 */
type $ResolveOptions<V extends unknown[]> = V extends [infer T] ? T : V extends [infer T, ...infer U] ? [T, unknown] extends [unknown, T] ? $ResolveOptions<U> : [T] extends [undefined] ? $ResolveOptions<U> : T : $InferError<'cannot [infer T, ...infer U] from', V>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/branch/$branch.d.ts
/**
 * 🧰 *type util*
 *
 * Create a branch type.
 *
 * @typeparam P the property name for the branch.
 *
 * @example
 * ```ts
 * type $Then = $Branch<'$then'>
 * type $Any = $Branch<'$any'>
 */
type $Branch<P$1 extends `$${string}`> = $Type<'branch', P$1>;
/**
 * 🧰 *type util*
 *
 * Define the branch options of the specified branches.
 *
 * ```ts
 * type $YourOptions = $BranchOptions<$Then | $Else> // { $then: $Then, $else: $Else }
 * ```
 */
type $BranchOptions<$B extends $Branch<any>> = { [k in $B[$Type.$ValueKey]]: $B extends {
  _$value: k;
} ? $B : never };
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/branch/$input_options.d.ts
/**
 * 🧰 *type util*
 *
 * Define branch input options.
 */
type $InputOptions<$B extends $Branch<any>> = { [k in $B[$Type.$ValueKey]]?: unknown };
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/branch/$selection.d.ts
type $Then = $Branch<'$then'>;
type $Else = $Branch<'$else'>;
declare const $then: '$then';
declare const $else: '$else';
declare namespace $Then {
  type $Key = '$then';
  type $Branch = {
    [$then]: $Then;
  };
}
declare namespace $Else {
  type $Key = '$else';
  type $Branch = {
    [$else]: $Else;
  };
}
declare namespace $Selection {
  /**
   * Options for selection (if-then-else) logic.
   *
   * The word "selection" refers to the basic elements in structural programming:
   * sequence, selection, and iteration.
   *
   * @example
   * ```ts
   * type YourType<
   *   T,
   *   $Options extends YourType.$Options = YourType.$Branch
   * > = ...
   *
   * namespace YourType {
   *   export type $Options = $SelectionOptions
   *   export type $Branch = $SelectionBranch
   * }
   * ```
   */
  type Options = {
    /**
     * Specifies which default selection logic to use.
     *
     * `filter` returns `T` when the condition is met,
     * and returns `never` otherwise.
     *
     * `predicate` returns boolean depends on the condition.
     *
     * Note that setting `$then` and `$else` overrides the default selection logic.
     */
    selection?: 'predicate' | 'filter' | undefined;
    $then?: unknown;
    $else?: unknown;
  };
  type $BaseOptions = {
    $then?: unknown;
    $else?: unknown;
  };
  /**
   * Invert the selection branch.
   *
   * i.e.
   * - `$Then` -> `$Else`
   * - `$Else` -> `$Then`
   */
  type Invert<Branch extends $Then | $Else> = Branch extends $Then ? $Else : $Then;
  /**
   * Branch option for selection logic.
   * It allows finely customizing the behavior of your type.
   *
   * Using this as the default value of your `$Options` is the recommended best practice.
   *
   * This encourage consumer of your type to use conditional type to avoid performance issues.
   *
   * @example
   * ```ts
   * type YourType<
   *   T,
   *   $Options extends YourType.$Options = YourType.$Branch
   * > = ...
   *
   * namespace YourType {
   *   export type $Options = $SelectionOptions
   *   export type $Branch = $SelectionBranch
   * }
   *
   * type R = YourType<T> extends infer R
   *   ? R extends $Then ? HandleThen
   *   : R extends $Else ? HandleElse
   *   : never
   * ```
   */
  type Branch<$O extends $Selection.Options = {}> = {
    [$then]: $Then;
    [$else]: $Else;
  } & $O;
  /**
   * Default Options for filter selection logic.
   *
   * `filter` means the logic returns `T` when the condition is met,
   * and returns `never` otherwise.
   *
   * @example
   * ```ts
   * type YourType<
   *   T,
   *   Options extends YourType.$Options = YourType.$Default> = ...
   *
   * namespace YourType {
   *   export type $Options = $SelectionOptions
   *   export type $Default = $SelectionFilter
   * }
   *
   * type R = YourType<ThenType> // ThenType
   * type X = YourType<ElseType> // never
   * ```
   */
  type Filter<T$1> = {
    selection: 'filter';
    [$then]: T$1;
    [$else]: never;
  };
  /**
   * Default Options for predicate selection logic.
   *
   * `predicate` means the logic returns `true` or `false` depending on the condition.
   *
   * @example
   * ```ts
   * type YourType<
   *   T,
   *   Options extends YourType.$Options = YourType.$Default> = ...
   *
   * namespace YourType {
   *   export type $Options = $SelectionOptions
   *   export type $Default = $SelectionPredicate
   * }
   *
   * type R = YourType<ThenType> // true
   * type X = YourType<ElseType> // false
   * ```
   */
  type Predicate = {
    [$then]: true;
    [$else]: false;
  };
  /**
   * Flip the selection options.
   *
   * @example
   * ```ts
   * type IsBoolean<T, $Options = $SelectionOptions> = ...
   *
   * type IsNotBoolean<T, $Options = $SelectionOptions> = IsBoolean<T, $FlipSelection<$Options>>
   * ```
   */
  type Flip<$Options$1 extends $Selection.Options> = {
    [$then]: $Options$1['$else'];
    [$else]: $Options$1['$then'];
  } & Omit<$Options$1, '$then' | '$else'>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/branch/$resolve_branch.d.ts
/**
 * Resolve option value based on list of branches.
 * It returns the first branch value that is specified in the option,
 * otherwise will return the default value.
 *
 * Since this is an type utility,
 * it does not perform extensive validations.
 * Please check the description of each input below for information.
 *
 * @typeparam $O The input option. It should be a Record, not any, unknown, or never
 * @typeparam $B Tuple of branches with at least one entry.
 * @typeparam D Default value to return if no branch is found.
 */
type $ResolveBranch<$O extends Record<string, any>, $Branches extends Array<$Branch<any> | unknown>, D = unknown> = $Branches extends [infer B] ? _Last<$O, B, D> : $Branches extends [infer B, ...infer Rest extends Array<$Branch<any> | unknown>] ? _$1<$O, B, $ResolveBranch<$O, Rest, D>> : $InferError<'$Branches must have at least one entry'>;
type _$1<$O extends Record<string, any>, $B, D> = $B extends $Branch<any> ? $B[$Type.$ValueKey] extends keyof $O ? $O[$B[$Type.$ValueKey]] : D : D;
type _Last<$O extends Record<string, any>, $B, D> = $B extends $Then ? '$then' extends keyof $O ? $O['$then'] : $O['selection'] extends 'filter' ? D : true : $B extends $Else ? '$else' extends keyof $O ? $O['$else'] : $O['selection'] extends 'filter' ? never : false : _$1<$O, $B, D>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/distributive/$distributive.d.ts
declare namespace $Distributive {
  /**
   * Options for controlling if the type is distributive.
   */
  type Options = {
    distributive?: boolean | undefined;
  };
  /**
   * Default options for `distributive` behavior.
   *
   * By default it is `true`.
   */
  type Default = {
    distributive: true;
  };
  /**
   * Parse the options for `distributive`.
   */
  type Parse<$Options$1 extends Options, $O extends $InputOptions<$Then | $Else> = {}> = $ResolveOptions<[$Options$1['distributive'], Default['distributive']]> extends true ? '$then' extends keyof $O ? $O['$then'] : true : '$else' extends keyof $O ? $O['$else'] : false;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/errors/failed.d.ts
declare const uniSym: unique symbol;
/**
 * @deprecated **💀 deprecated since 8.0.0**: use `$Error` instead.
 *
 * A failed type with message.
 *
 * This is analogous to the `Error` class in JavaScript.
 *
 * It can be used in type-level programming to failed an error message.
 *
 * If you want to add additional type information,
 * use `FailedT` or create your own failed type instead.
 *
 * ```ts
 * type T = Failed<'error message'>
 * ```
 */
interface Failed<Msg extends string> {
  [uniSym]: Msg;
}
/**
 * @deprecated **💀 deprecated since 8.0.0**: use `$Error` instead.
 *
 * A failed type with message and one additional type.
 *
 * Use this to add a generic type to the failed type.
 *
 * e.g. `FailedT<'missing', number | string>`
 *
 * It's recommended to create custom failed types instead of using this to provide better message.
 */
interface FailedT<Msg extends string, _T> {
  [uniSym]: Msg;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/exact/$exact.d.ts
declare namespace $Exact {
  /**
   * Options for controlling if the type perform exact comparison.
   */
  type Options = {
    exact?: boolean | undefined;
  };
  /**
   * Default options for `exact` behavior.
   *
   * By default it is `false`.
   */
  type Default = {
    exact: false;
  };
  /**
   * Parse the options for `exact`.
   */
  type Parse<$Options$1 extends Options, $O extends $InputOptions<$Then | $Else> = {}> = $ResolveOptions<[$Options$1['exact'], Default['exact']]> extends true ? '$then' extends keyof $O ? $O['$then'] : true : '$else' extends keyof $O ? $O['$else'] : false;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/special/$any.d.ts
/**
 * Branch selector for type `any`.
 */
type $Any = $Branch<'$any'>;
declare const $any: '$any';
declare namespace $Any {
  type $Key = '$any';
  /**
   * Options to specifically handles the `any` type.
   *
   * @example
   * ```ts
   * type YourType<T, $Options extends $Any.$Options> = ...
   * ```
   */
  type $Options = {
    [$any]?: unknown;
  };
  /**
   * Branch option to specifically handles the `any` type.
   *
   * Use this to finely customize the behavior of your type.
   *
   * ```ts
   * type YourType<T, $Options extends $Any.Options> = ...
   *
   * type R = YourType<T, $Any.$Branch> extends $Any ? HandleAny : HandleOthers
   * ```
   */
  type $Branch = {
    [$any]: $Any;
  };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/special/$never.d.ts
/**
 * Branch selector for type `never`.
 */
type $Never = $Branch<'$never'>;
declare const $never: '$never';
declare namespace $Never {
  type $Key = '$never';
  /**
   * Options to specifically handles the `never` type.
   *
   * @example
   * ```ts
   * type YourType<T, $Options extends $Never.$Options> = ...
   * ```
   */
  type $Options = {
    [$never]?: unknown;
  };
  /**
   * Branch option to specifically handles the `never` type.
   *
   * Use this to finely customize the behavior of your type.
   *
   * @example
   * ```ts
   * type YourType<T, $Options $Never.$Options> = ...
   *
   * type R = YourType<T, $Never.$Branch> extends $Never ? HandleNever : HandleOthers
    * ```
   */
  type $Branch = {
    [$never]: $Never;
  };
  /**
   * Default option for the `$never` branch.
   *
   * Unsurprisingly, defaulting `$never` to `never`.
   */
  type $Default = {
    [$never]: never;
  };
}
/**
 * Branch selector for type is not `never`.
 *
 * It is used in [`IsNever`](../../never/is_never.ts).
 */
type $NotNever = $Branch<'$not_never'>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/special/$unknown.d.ts
/**
 * Branch selector for type `unknown`.
 */
type $Unknown = $Branch<'$unknown'>;
declare const $unknown: '$unknown';
declare namespace $Unknown {
  type $Key = '$unknown';
  /**
   * Options to specifically handles the `unknown` type.
   *
   * @example
   * ```ts
   * type YourType<T, $Options extends $Unknown.$Options> = ...
   * ```
   */
  type $Options = {
    [$unknown]?: unknown;
  };
  /**
   * Branch option to specifically handles the `unknown` type.
   *
   * Use this to finely customize the behavior of your type.
   *
   * @example
   * ```ts
   * type YourType<T, $Options $Unknown.$Options> = ...
   *
   * type R = YourType<T, $Unknown.$Branch> extends $Unknown ? HandleUnknown : HandleOthers
   * ```
   */
  type $Branch = {
    [$unknown]: $Unknown;
  };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/special/$void.d.ts
/**
 * Branch selector for type `void`.
 */
type $Void = $Branch<'$void'>;
declare const $void: '$void';
declare namespace $Void {
  type $Key = '$void';
  /**
   * Options to specifically handles the `void` type.
   *
   * @example
   * ```ts
   * type YourType<T, $Options extends $Void.$Options> = ...
   * ```
   */
  type $Options = {
    [$void]?: unknown;
  };
  /**
   * Branch option to specifically handles the `void` type.
   *
   * Use this to finely customize the behavior of your type.
   *
   * @example
   * ```ts
   * type YourType<T, $Options $Void.$Options> = ...
   *
   * type R = YourType<T, $Void.$Branch> extends $Void ? HandleNever : HandleOthers
    * ```
   */
  type $Branch = {
    [$void]: $Void;
  };
  /**
   * Default option for the `$void` branch.
   *
   * Unsurprisingly, defaulting `$void` to `void`.
   */
  type $Default = {
    [$void]: void;
  };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/special/$special.d.ts
/**
 * A type to handle special types: `any`, `unknown`, `never`, and `void`.
 *
 * @example
 * ```ts
 * type YourType<T, $Options extends $Special.Options> = Special<T,
 * {
 *   $any: $ResolveBranch<$Options, [$Any, ...], T>
 *   $unknown: $ResolveBranch<$Options, [$Unknown, ...], T>
 *   $never: $ResolveBranch<$Options, [$Never, ...], T>
 *   $void: $ResolveBranch<$Options, [$Void, ...], T>
 *   $then: $ResolveBranch<$Options, [...], T>
 *   $else: $ResolveBranch<$Options, [...], T>
 * }>
 *
 * @since 🏷️ 8.0.0
 */
type $Special<T$1, $O extends $Special.Options = {}> = 0 extends 1 & T$1 ? $ResolveBranch<$O, [$Any, $Then], T$1> : [T$1, unknown] extends [unknown, T$1] ? $ResolveBranch<$O, [$Unknown, $Then], T$1> : [T$1, never] extends [never, T$1] ? $ResolveBranch<$O, [$Never, $Then], T$1> : [T$1, void] extends [void, T$1] ? $ResolveBranch<$O, [$Void, $Then], T$1> : $ResolveBranch<$O, [$Else]>;
declare namespace $Special {
  type Options = $Selection.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type Branch = $Selection.Branch & $BranchOptions<$Any | $Unknown | $Never | $Void>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/$type/utils/$merge_options.d.ts
/**
 * Merge type options.
 *
 * This is used in the type to merge the user provided options with the default options.
 *
 * @typeparam $O - The type of the options, typically provided by the user.
 * @typeparam $P - The type of the default options.
 */
type $MergeOptions<$O extends Record<string, any>, $P extends { [k in keyof $O]?: unknown }> = { [k in Exclude<keyof $O, keyof $P>]: $O[k] } & $P;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/any/is_any.d.ts
/**
 * 🎭 **predicate**
 *
 * Validate if `T` is `any`.
 *
 * @example
 * ```ts
 * type R = IsAny<any> // true
 *
 * type R = IsAny<never> // false
 * type R = IsAny<unknown> // false
 * type R = IsAny<string | boolean> // false
 * ```
 *
 * 🌪️ **filter**
 *
 * Filter to ensure `T` is `any`.
 *
 * @example
 * ```ts
 * type R = IsAny<any, { selection: 'filter' }> // any
 * type R = IsAny<never, { selection: 'filter' }> // never
 * type R = IsAny<unknown, { selection: 'filter' }> // never
 * type R = IsAny<string | boolean, { selection: 'filter' }> // never
 * ```
 *
 * 🔱 **branching**
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsAny<any, $Selection.Branch> // $Then
 * type R = IsAny<string, $Selection.Branch> // $Else
 * type R = IsAny<unknown, IsAny.$Branch> // $Unknown
 * type R = IsAny<never, IsAny.$Branch> // $Never
 * type R = IsAny<void, IsAny.$Branch> // $Void
 * ```
 */
type IsAny<T$1, $O extends IsAny.$Options = {}> = $Special<T$1, {
  $any: $ResolveBranch<$O, [$Then], T$1>;
  $unknown: $ResolveBranch<$O, [$Unknown, $Else]>;
  $never: $ResolveBranch<$O, [$Never, $Else]>;
  $void: $ResolveBranch<$O, [$Void, $Else]>;
  $else: $ResolveBranch<$O, [$Else]>;
}>;
declare namespace IsAny {
  type $Options = $Selection.Options & $InputOptions<$Unknown | $Never | $Void>;
  type $Branch = $Selection.Branch & $Unknown.$Branch & $Never.$Branch & $Void.$Branch;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/any/is_not_any.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `any`.
 *
 * @example
 * ```ts
 * type R = IsNotAny<any> // false
 *
 * type R = IsNotAny<never> // true
 * type R = IsNotAny<unknown> // true
 * type R = IsNotAny<string | boolean> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `any`.
 *
 * @example
 * ```ts
 * type R = IsNotAny<any, { selection: 'filter' }> // never
 *
 * type R = IsNotAny<never, { selection: 'filter' }> // never
 * type R = IsNotAny<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotAny<string | boolean, { selection: 'filter' }> // string | boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotAny<any, $SelectionBranch> // $Else
 * type R = IsNotAny<string, $SelectionBranch> // $Then
 * ```
 */
type IsNotAny<T$1, $O extends IsNotAny.$Options = {}> = $Special<T$1, {
  $any: $ResolveBranch<$O, [$Else]>;
  $never: $ResolveBranch<$O, [$Never, $Then], T$1>;
  $unknown: $ResolveBranch<$O, [$Unknown, $Then], T$1>;
  $void: $ResolveBranch<$O, [$Void, $Then], T$1>;
  $else: $ResolveBranch<$O, [$Then], T$1>;
}>;
declare namespace IsNotAny {
  type $Options = $Selection.Options & $InputOptions<$Unknown | $Never | $Void>;
  type $Branch = $Selection.Branch & $Unknown.$Branch & $Never.$Branch & $Void.$Branch;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/predicates/assignable.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `A` is assignable to `B`.
 *
 * @example
 * ```ts
 * type R = Assignable<any, any> // true
 * type R = Assignable<any, 1> // true
 * type R = Assignable<unknown, unknown> // true
 * type R = Assignable<never, never> // true
 * type R = Assignable<1, 1> // true
 * type R = Assignable<'a', 'a'> // true
 * type R = Assignable<'a', 'b'> // false
 * type R = Assignable<'a', string> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `A` is assignable to `B`.
 *
 * @example
 * ```ts
 * type R = Assignable<any, any, { selection: 'filter' }> // any
 * type R = Assignable<1, number, { selection: 'filter' }> // 1
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = Assignable<any, any, Assignable.$Branch> // $Then
 * ```
 *
 * 🔢 *customize*
 *
 * Override special types branch.
 *
 * @example
 * ```ts
 * type R = Assignable<any, any, { $any: 1 }> // 1
 * type R = Assignable<unknown, any, { $unknown: 1 }> // 1
 * type R = Assignable<never, any, { $never: 1 }> // 1
 * ```
 */
type Assignable<A$1, B$1, $O extends Assignable.$Options = {}> = $Special<B$1, {
  $any: $ResolveBranch<$O, [0 extends 1 & A$1 ? $Any : unknown, $Then], A$1>;
  $unknown: $ResolveBranch<$O, [[A$1, unknown] extends [unknown, A$1] ? $Unknown : unknown, $Then], A$1>;
  $never: $ResolveBranch<$O, [A$1, never] extends [never, A$1] ? [$Never, $Then] : [$Else], A$1>;
  $else: $Special<A$1, {
    $any: $ResolveBranch<$O, [$Any, $Then], A$1>;
    $unknown: $ResolveBranch<$O, [$Unknown, $Then], A$1>;
    $never: $ResolveBranch<$O, [$Never, $Then], A$1>;
    $else: Assignable.$<A$1, B$1, $O>;
  }>;
}>;
declare namespace Assignable {
  type $Options = $Selection.Options & $Distributive.Options & $InputOptions<$Any | $Unknown | $Never>;
  type $Default = $Selection.Predicate & $Distributive.Default;
  type $Branch<$O extends $Distributive.Options = {}> = $Selection.Branch & $O;
  /**
   * 🧰 *type util*
   *
   * Validate if `A` is assignable to `B`.
   *
   * This is the internal logic of `Assignable`.
   * It does not check against special types.
   *
   * It is suitable for building custom types.
   */
  type $<A$1, B$1, $O extends $UtilOptions> = $Distributive.Parse<$O, {
    $then: A$1 extends B$1 ? $ResolveBranch<$O, [$Then], A$1> : $ResolveBranch<$O, [$Else], A$1>;
    $else: [A$1] extends [B$1] ? $ResolveBranch<$O, [$Then], A$1> : $ResolveBranch<$O, [$Else], A$1>;
  }>;
  type $UtilOptions = $Selection.Options & $Distributive.Options;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/number/is_number.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `number` or `number` literals.
 *
 * @example
 * ```ts
 * type R = IsNumber<number> // true
 * type R = IsNumber<1> // true
 *
 * type R = IsNumber<never> // false
 * type R = IsNumber<unknown> // false
 * type R = IsNumber<string | boolean> // false
 *
 * type R = IsNumber<string | number> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `number` or `number` literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNumber<number, { selection: 'filter' }> // number
 * type R = IsNumber<1, { selection: 'filter' }> // 1
 *
 * type R = IsNumber<never, { selection: 'filter' }> // never
 * type R = IsNumber<unknown, { selection: 'filter' }> // never
 * type R = IsNumber<string | boolean, { selection: 'filter' }> // never
 *
 * type R = IsNumber<string | number> // number
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNumber<number | 1> // boolean
 * type R = IsNumber<number | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNumber<number, $SelectionBranch> // $Then
 * type R = IsNumber<string, $SelectionBranch> // $Else
 * ```
 */
type IsNumber<T$1, $O extends IsNumber.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsNumber.$<T$1, $O>;
}>>;
declare namespace IsNumber {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `number` or `number` literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], false]> extends true ? $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }> : Assignable.$<T$1, number, $O>;
  type $UtilOptions = Assignable.$UtilOptions & $Exact.Options;
  type _D<T$1, $O extends $UtilOptions> = T$1 extends number & infer U ? U extends number ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
  type _N<T$1, $O extends $UtilOptions> = [T$1] extends [number & infer U] ? U extends number ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/tuple/is_tuple.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate that `T` is a tuple, excluding array.
 *
 * ```ts
 * type R = IsTuple<[]>       // true
 *
 * type R = IsTuple<number[]> // false
 * type R = IsTuple<string>   // false
 * type R = IsTuple<never>    // false
 * type R = IsTuple<unknown>  // false
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is a `tuple`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsTuple<[], { selection: 'filter' }> // []
 * type R = IsTuple<[1], { selection: 'filter' }> // [1]
 *
 * type R = IsTuple<never, { selection: 'filter' }> // never
 * type R = IsTuple<unknown, { selection: 'filter' }> // never
 * type R = IsTuple<[] | boolean, { selection: 'filter' }> // []
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsTuple<[1] | 1> // boolean
 * type R = IsTuple<[] | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsTuple<[], IsTuple.$Branch> // $Then
 * type R = IsTuple<string, IsTuple.$Branch> // $Else
 * ```
 */
type IsTuple<T$1, $O extends IsTuple.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsTuple.$<T$1, $O>;
}>>;
declare namespace IsTuple {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `tuple`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $Distributive.Parse<$O, {
    $then: T$1 extends readonly any[] ? number extends T$1['length'] ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
    $else: [T$1] extends [readonly any[]] ? number extends T$1['length'] ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
  }>;
  type $UtilOptions = Assignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/logical/logical.d.ts
/**
 * 🎭 **predicate**
 *
 * Logical AND operation.
 *
 * @since 🏷️ 8.0.0
 */
type And<A$1 extends boolean, B$1 extends boolean, $O extends $Selection.$BaseOptions = {}> = A$1 extends true ? B$1 extends true ? $ResolveBranch<$O, [$Then], A$1> : $ResolveBranch<$O, [$Else], A$1> : $ResolveBranch<$O, [$Else], A$1>;
/**
 * 🎭 **predicate**
 *
 * Logical OR operation.
 *
 * @since 🏷️ 8.0.0
 */
type Or<A$1 extends boolean, B$1 extends boolean, $O extends $Selection.$BaseOptions = {}> = A$1 extends true ? $ResolveBranch<$O, [$Then], A$1> : B$1 extends true ? $ResolveBranch<$O, [$Then], A$1> : $ResolveBranch<$O, [$Else], A$1>;
/**
 * 🎭 **predicate**
 *
 * Logical NOT operation.
 *
 * @since 🏷️ 8.0.0
 */
type Not<X extends boolean, $O extends $Selection.$BaseOptions = {}> = X extends true ? $ResolveBranch<$O, [$Else], X> : $ResolveBranch<$O, [$Then], X>;
/**
 * 🎭 **predicate**
 *
 * Logical XOR operation.
 *
 * @since 🏷️ 8.0.0
 */
type Xor<A$1 extends boolean, B$1 extends boolean, $O extends $Selection.$BaseOptions = {}> = A$1 extends true ? Not<B$1> : B$1 extends true ? $ResolveBranch<$O, [$Then], A$1> : $ResolveBranch<$O, [$Else], A$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/never/is_never.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `never`.
 *
 * @example
 * ```ts
 * type R = IsNever<never> // true
 *
 * type R = IsNever<1> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `never`, otherwise returns `$NotNever`.
 *
 * Filter normally returns `never` in the `$else` clause.
 * But since we are checking for `never` here,
 * we have to return `$NotNever` instead.
 *
 * @example
 * ```ts
 * type R = IsNever<never, { selection: 'filter' }> // never
 *
 * type R = IsNever<1, { selection: 'filter' }> // $NotNever
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNever<never, $SelectionBranch> // $Then
 * type R = IsNever<1, $SelectionBranch> // $Else
 * ```
 */
type IsNever<T$1, $O extends IsNever.$Options = {}> = $Special<T$1, {
  $any: $ResolveBranch<IsNever._O<$O>, [$Any, $Else]>;
  $unknown: $ResolveBranch<IsNever._O<$O>, [$Unknown, $Else]>;
  $never: $ResolveBranch<$O, [$Then], T$1>;
  $void: $ResolveBranch<IsNever._O<$O>, [$Void, $Else]>;
  $else: $ResolveBranch<IsNever._O<$O>, [$Else]>;
}>;
declare namespace IsNever {
  type $Options = $Selection.Options & $InputOptions<$Any | $Unknown>;
  type $Branch = $Selection.Branch;
  type _O<$O extends $Options> = '$else' extends keyof $O ? $O : $O['selection'] extends 'filter' ? $O & {
    $else: $NotNever;
  } : $O;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/unknown/is_unknown.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is exactly `unknown`.
 *
 * @example
 * ```ts
 * type R = IsUnknown<unknown> // true
 *
 * type R = IsUnknown<number> // false
 * type R = IsUnknown<never> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is exactly `unknown`.
 *
 * @example
 * ```ts
 * type R = IsUnknown<unknown, { selection: 'filter' }> // unknown
 *
 * type R = IsUnknown<number, { selection: 'filter' }> // never
 * type R = IsUnknown<never, { selection: 'filter' }> // never
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsUnknown<unknown, $SelectionBranch> // $Then
 * type R = IsUnknown<string, $SelectionBranch> // $Else
 * ```
 */
type IsUnknown<T$1, $O extends IsUnknown.$Options = {}> = $Special<T$1, {
  $any: $ResolveBranch<$O, [$Any, $Else]>;
  $never: $ResolveBranch<$O, [$Never, $Else]>;
  $unknown: $ResolveBranch<$O, [$Then], T$1>;
  $void: $ResolveBranch<$O, [$Void, $Else]>;
  $else: $ResolveBranch<$O, [$Else]>;
}>;
declare namespace IsUnknown {
  type $Options = $Selection.Options & $InputOptions<$Any | $Never>;
  type $Branch = $Selection.Branch;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/properties.d.ts
/**
 * Extracts the property map of a type: an object type with the same keys and
 * value types as `T`, preserving optional and readonly modifiers.
 *
 * - For object types: returns `{ [k in keyof T]: T[k] }`.
 * - For `any` and `unknown`: returns the input type unchanged.
 * - For function types (e.g. `() => void`): returns `{}` because call signatures
 *   are not indexable; for `Function`, returns the interface of methods.
 * - For intersections: merges properties from all branches.
 *
 * @typeParam T - The type whose properties to extract.
 *
 * @example
 * ```ts
 * type T = { a: number; b?: string }
 * type R = Properties<T> // { a: number; b?: string }
 *
 * type Merged = Properties<{ a: 1 } & { b: 2 }> // { a: 1; b: 2 }
 * ```
 */
type Properties<T$1> = IsAny<T$1, {
  $then: T$1;
  $else: IsUnknown<T$1, {
    $then: T$1;
    $else: { [k in keyof T$1]: T$1[k] };
  }>;
}>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/equal/equal.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate `A` and `B` are "equal".
 *
 * Note that intersection type checks only works at first level.
 * It cannot be check recursively,
 * or else will run into infinite recursion if the type includes recursive types.
 *
 * @example
 * ```ts
 * type R = Equal<undefined, undefined> // true
 *
 * type R = Equal<never, undefined> // false
 * type R = Equal<unknown, undefined> // false
 * type R = Equal<string | boolean, undefined> // false
 *
 * type R = Equal<string | undefined, undefined> // boolean
 * ```
 *
 * 🔱 **branching**
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = Equal<undefined, undefined, Equal.$Branch> // $Then
 * type R = Equal<string, undefined, Equal.$Branch> // $Else
 * ```
 */
type Equal<A$1, B$1, $O extends Equal.$Options = {}> = [A$1, B$1] extends [B$1, A$1] ? BothNever$1<A$1, B$1, $ResolveBranch<$O, [$Then]>, $ResolveBranch<$O, [$Else]>, BothAny$1<A$1, B$1, $ResolveBranch<$O, [$Then]>, $ResolveBranch<$O, [$Else]>, Equal.$Same<A$1, B$1, {
  $then: $ResolveBranch<$O, [$Then]>;
  $else: [IsObject<A$1>, IsObject<B$1>] extends [true, true] ? Equal.$Same<Properties<A$1>, Properties<B$1>, {
    $then: [A$1, B$1] extends [(...args: infer P1) => any, (...args: infer P2) => any] ? IsEqual<P1, P2, $ResolveBranch<$O, [$Then]>, $ResolveBranch<$O, [$Else]>> : $ResolveBranch<$O, [$Then]>;
    $else: $ResolveBranch<$O, [$Else]>;
  }> : [A$1, B$1] extends [B$1, A$1] ? $ResolveBranch<$O, [$Then]> : $ResolveBranch<$O, [$Else]>;
}>>> : $ResolveBranch<$O, [$Else], A$1>;
type BothNever$1<A$1, B$1, Both, One, None> = And<IsNever<A$1>, IsNever<B$1>, {
  $then: Both;
  $else: Or<IsNever<A$1>, IsNever<B$1>, {
    $then: One;
    $else: None;
  }>;
}>;
type BothAny$1<A$1, B$1, Both, One, None> = And<IsAny<A$1>, IsAny<B$1>, {
  $then: Both;
  $else: Or<IsAny<A$1>, IsAny<B$1>, {
    $then: One;
    $else: None;
  }>;
}>;
declare namespace Equal {
  type $Options = $Selection.$BaseOptions;
  type $Default = $Selection.Predicate;
  type $Branch = $Selection.Branch;
  type _ExactEqualDistributive<T$1, U$1, $O extends $Options> = T$1 extends U$1 ? U$1 extends T$1 ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Else]>;
  type _ExactEqualNonDistributive<T$1, U$1, $O extends $Options> = [T$1, U$1] extends [U$1, T$1] ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
  /**
   * 🎭 *predicate*
   *
   * Validate `A` and `B` are identically equal.
   */
  type $Same<A$1, B$1, $O extends $Options> = (<_$2>() => _$2 extends (A$1 & _$2) | _$2 ? 1 : 2) extends (<_$2>() => _$2 extends (B$1 & _$2) | _$2 ? 1 : 2) ? $O['$then'] : $O['$else'];
  type $ToProps<T$1> = Assignable.$<object, T$1, {
    $then: T$1 & Properties<T$1>;
    $else: T$1 & Properties<T$1>;
  }>;
}
/**
 * 🎭 *predicate*
 * ㊙️ *internal*
 *
 * Validate if `T` is `U`.
 *
 * @example
 * ```ts
 * type R = $SelectInvert<undefined, undefined> // true
 *
 * type R = $SelectInvert<never, undefined> // false
 * type R = $SelectInvert<unknown, undefined> // false
 * type R = $SelectInvert<string | boolean, undefined> // false
 *
 * type R = $SelectInvert<string | undefined, undefined> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `U`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = $SelectInvert<undefined, undefined, { selection: 'filter' }> // undefined
 *
 * type R = $SelectInvert<never, undefined, { selection: 'filter' }> // never
 * type R = $SelectInvert<unknown, undefined, { selection: 'filter' }> // never
 * type R = $SelectInvert<string | boolean, undefined, { selection: 'filter' }> // never
 *
 * type R = $SelectInvert<string | undefined, undefined> // undefined
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = $SelectInvert<undefined | 1, undefined> // boolean
 * type R = $SelectInvert<undefined | 1, undefined, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = $SelectInvert<undefined, undefined, $SelectionBranch> // $Then
 * type R = $SelectInvert<string, undefined, $SelectionBranch> // $Else
 * ```
 */
type $SelectInvert<T$1, U$1, $O extends $SelectInvert.$Options = {}> = $Special<T$1, {
  $any: $ResolveBranch<$O, [$Any, $Then], T$1>;
  $never: $ResolveBranch<$O, [$Never, $Then], T$1>;
  $unknown: $ResolveBranch<$O, [$Unknown, $Then], T$1>;
  $void: $ResolveBranch<$O, [$Void, $Then], T$1>;
  $else: $Distributive.Parse<$O> extends true ? $SelectInvert._D<T$1, U$1, $O> : $SelectInvert._N<T$1, U$1, $O>;
}>;
declare namespace $SelectInvert {
  type $Options = $Selection.Options & $Distributive.Options & $InputOptions<$Any | $Unknown | $Never>;
  type $Default = $Selection.Predicate & $Distributive.Default;
  type $Branch = $Selection.Branch & $Distributive.Default;
  type _D<T$1, U$1, $O extends $SelectInvert.$Options> = T$1 extends U$1 ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
  type _N<T$1, U$1, $O extends $SelectInvert.$Options> = [T$1] extends [U$1] ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
}
/**
 * 🎭 *predicate*
 * ㊙️ *internal*
 *
 * Validate if `T` is `U`.
 *
 * @example
 * ```ts
 * type R = $SelectInvertStrict<undefined, undefined> // true
 *
 * type R = $SelectInvertStrict<never, undefined> // false
 * type R = $SelectInvertStrict<unknown, undefined> // false
 * type R = $SelectInvertStrict<string | boolean, undefined> // false
 *
 * type R = $SelectInvertStrict<string | undefined, undefined> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `U`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = $SelectInvertStrict<undefined, undefined, { selection: 'filter' }> // undefined
 *
 * type R = $SelectInvertStrict<never, undefined, { selection: 'filter' }> // never
 * type R = $SelectInvertStrict<unknown, undefined, { selection: 'filter' }> // never
 * type R = $SelectInvertStrict<string | boolean, undefined, { selection: 'filter' }> // never
 *
 * type R = $SelectInvertStrict<string | undefined, undefined> // undefined
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = $SelectInvertStrict<undefined | 1, undefined> // boolean
 * type R = $SelectInvertStrict<undefined | 1, undefined, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = $SelectInvertStrict<undefined, undefined, $SelectionBranch> // $Then
 * type R = $SelectInvertStrict<string, undefined, $SelectionBranch> // $Else
 * ```
 */
type $SelectInvertStrict<T$1, U$1, $O extends $SelectInvertStrict.$Options = {}> = $Special<T$1, {
  $any: $ResolveBranch<$O, [$Any, $Then], T$1>;
  $unknown: $ResolveBranch<$O, [$Unknown, $Then], T$1>;
  $never: $ResolveBranch<$O, [$Never, $Then], T$1>;
  $else: $Distributive.Parse<$O> extends true ? $SelectInvertStrict._D<T$1, U$1, $O> : $SelectInvertStrict._N<T$1, U$1, $O>;
}>;
declare namespace $SelectInvertStrict {
  type $Options = $Selection.Options & $Distributive.Options & $InputOptions<$Any | $Unknown | $Never>;
  type $Default = $Selection.Predicate & $Distributive.Default;
  type $Branch = $Selection.Branch & $Distributive.Default;
  type _D<T$1, U$1, $O extends $SelectInvertStrict.$Options> = T$1 extends U$1 ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
  type _N<T$1, U$1, $O extends $SelectInvertStrict.$Options> = [T$1, U$1] extends [U$1, T$1] ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/equal/identity_equal.d.ts
/**
 * This is a common equal check.
 * It is good for some basic cases, but not for all.
 */
type IdentityEqual<A$1, B$1, Then, Else> = Equal.$Same<A$1, B$1, {
  $then: Then;
  $else: Else;
}>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/is_object.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is an `object` or object literals.
 *
 * Note that `Function`, `Array`, and *tuple* are also objects.
 *
 * @example
 * ```ts
 * type R = IsNotObject<object> // true
 * type R = IsObject<{}> // true
 * type R = IsObject<{ a: 1 }> // true
 * type R = IsObject<Function> // true
 *
 * type R = IsObject<never> // false
 * type R = IsObject<unknown> // false
 * type R = IsObject<number> // false
 *
 * type R = IsObject<{} | bigint> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is an `object` or object literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsObject<{}, { selection: 'filter' }> // {}
 * type R = IsObject<{ a: 1 }, { selection: 'filter' }> // { a: 1 }
 * type R = IsObject<Function, { selection: 'filter' }> // Function
 *
 * type R = IsObject<never, { selection: 'filter' }> // never
 * type R = IsObject<unknown, { selection: 'filter' }> // never
 *
 * type R = IsObject<{} | bigint> // {}
 * ```
 *
 * 🔢 *customize*:
 *
 * Validate if `T` is exactly `object`.
 *
 * @example
 * ```ts
 * type R = IsObject<object, { exact: true }> // true
 * type R = IsObject<{}, { exact: true }> // false
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsObject<{} | 1> // boolean
 * type R = IsObject<{} | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsObject<{}, $SelectionBranch> // $Then
 * type R = IsObject<string, $SelectionBranch> // $Else
 * ```
 */
type IsObject<T$1, $O extends IsObject.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsObject.$<T$1, $O>;
}>>;
declare namespace IsObject {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `object` or `object` literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], $Exact.Default]> extends true ? $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }> : Assignable.$<T$1, object, $O>;
  type $UtilOptions = Assignable.$UtilOptions & $Exact.Options;
  type _D<T$1, $O extends $UtilOptions> = T$1 extends object ? IdentityEqual<T$1, {}, $ResolveBranch<$O, [$Else]>, IsNever<keyof T$1, {
    $then: $ResolveBranch<$O, [$Then], T$1>;
    $else: $ResolveBranch<$O, [$Else]>;
  }>> : $ResolveBranch<$O, [$Else]>;
  type _N<T$1, $O extends $UtilOptions> = [T$1] extends [object & infer U] ? U extends object ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/symbol/is_symbol.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `symbol`.
 *
 * @example
 * ```ts
 * type R = IsSymbol<symbol> // true
 *
 * type R = IsSymbol<never> // false
 * type R = IsSymbol<unknown> // false
 * type R = IsSymbol<symbol | number> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `symbol`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsSymbol<symbol, { selection: 'filter' }> // symbol
 *
 * type R = IsSymbol<never, { selection: 'filter' }> // never
 * type R = IsSymbol<unknown, { selection: 'filter' }> // never
 * type R = IsSymbol<string | boolean, { selection: 'filter' }> // never
 *
 * type R = IsSymbol<symbol | null> // symbol
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsSymbol<symbol | 1> // boolean
 * type R = IsSymbol<symbol | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsSymbol<symbol, $SelectionBranch> // $Then
 * type R = IsSymbol<string, $SelectionBranch> // $Else
 * ```
 */
type IsSymbol<T$1, $O extends IsSymbol.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsSymbol.$<T$1, $O>;
}>>;
declare namespace IsSymbol {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `symbol`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = Assignable.$<T$1, symbol, $O>;
  type $UtilOptions = Assignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/equal/is_equal.d.ts
type BothNever<A$1, B$1, Both, One, None> = And<IsNever<A$1>, IsNever<B$1>, {
  $then: Both;
  $else: Or<IsNever<A$1>, IsNever<B$1>, {
    $then: One;
    $else: None;
  }>;
}>;
type BothAny<A$1, B$1, Both, One, None> = And<IsAny<A$1>, IsAny<B$1>, {
  $then: Both;
  $else: Or<IsAny<A$1>, IsAny<B$1>, {
    $then: One;
    $else: None;
  }>;
}>;
/**
 * Checks `A` and `B` are equal.
 *
 * ```ts
 * type R = IsEqual<1, 1> // true
 * type R = IsEqual<any, any> // true
 * type R = IsEqual<boolean, boolean> // true
 * type R = IsEqual<true, true> // true
 * type R = IsEqual<[1], [1]> // true
 *
 * type R = IsEqual<boolean, true> // false
 * type R = IsEqual<any, 1> // false
 * type R = IsEqual<[any], [1]> // false
 * type R = IsEqual<{ a: 1 }, { a: 1; b: 2 }> // false
 * ```
 *
 * Note that intersection type checks only works at first level.
 * It cannot be check recursively,
 * or else will run into infinite recursion if the type includes recursive types.
 *
 * @deprecated 💀 **deprecated since 8.0.0**: use `Equal` instead.
 */
type IsEqual<A$1, B$1, Then = true, Else = false> = [A$1, B$1] extends [B$1, A$1] ? BothNever<A$1, B$1, Then, Else, BothAny<A$1, B$1, Then, Else, IdentityEqual<A$1, B$1, Then, And<IsObject<A$1>, IsObject<B$1>, {
  $then: IdentityEqual<Properties<A$1>, Properties<B$1>, [A$1, B$1] extends [(...args: infer P1) => any, (...args: infer P2) => any] ? IsEqual<P1, P2, Then, Else> : Then, Else>;
  $else: [A$1, B$1] extends [B$1, A$1] ? Then : Else;
}>>>> : And<IsSymbol<A$1, {
  distributive: false;
}>, IsSymbol<B$1, {
  distributive: false;
}>, {
  $then: Then;
  $else: Else;
}>;
/**
 * Checks `A` and `B` are not equal.
 *
 * ```ts
 * type R = IsNotEqual<1, 1> // false
 * type R = IsNotEqual<any, any> // false
 * type R = IsNotEqual<boolean, boolean> // false
 * type R = IsNotEqual<true, true> // false
 * type R = IsNotEqual<[1], [1]> // false
 *
 * type R = IsNotEqual<boolean, true> // true
 * type R = IsNotEqual<any, 1> // true
 * type R = IsNotEqual<[any], [1]> // true
 * type R = IsNotEqual<{ a: 1 }, { a: 1; b: 2 }> // true
 * ```
 *
 * Note that intersection type checks only works at first level.
 * It cannot be check recursively,
 * or else will run into infinite recursion if the type includes recursive types.
 *
 * @deprecated 💀 **deprecated since 8.0.0**: use `Equal` instead.
 */
type IsNotEqual<A$1, B$1, Then = true, Else = false> = IsEqual<A$1, B$1, Else, Then>;
/**
 * Checks `A` and `B` are not equal.
 *
 * @deprecated this will be changed to `filter` variant in the future.
 * Please use `IsNotEqual` for the `predicate` behavior.
 *
 * ```ts
 * type R = NotEqual<1, 1> // false
 * type R = NotEqual<any, any> // false
 * type R = NotEqual<boolean, boolean> // false
 * type R = NotEqual<true, true> // false
 * type R = NotEqual<[1], [1]> // false
 *
 * type R = NotEqual<boolean, true> // true
 * type R = NotEqual<any, 1> // true
 * type R = NotEqual<[any], [1]> // true
 * type R = NotEqual<{ a: 1 }, { a: 1; b: 2 }> // true
 * ```
 */
type NotEqual<A$1, B$1, Then = true, Else = false> = IsNotEqual<A$1, B$1, Then, Else>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/bigint/is_bigint.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `bigint` or `bigint` literals.
 *
 * @example
 * ```ts
 * type R = IsBigint<bigint> // true
 * type R = IsBigint<1n> // true
 *
 * type R = IsBigint<never> // false
 * type R = IsBigint<unknown> // false
 * type R = IsBigint<string | boolean> // false
 *
 * type R = IsBigint<string | bigint> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `bigint` or `bigint` literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsBigint<bigint, { selection: 'filter' }> // bigint
 * type R = IsBigint<1n, { selection: 'filter' }> // 1n
 *
 * type R = IsBigint<never, { selection: 'filter' }> // never
 * type R = IsBigint<unknown, { selection: 'filter' }> // never
 * type R = IsBigint<string | boolean, { selection: 'filter' }> // never
 *
 * type R = IsBigint<string | bigint> // bigint
 * ```
 *
 * 🔢 *customize*:
 *
 * Validate if `T` is exactly `bigint`.
 *
 * @example
 * ```ts
 * type R = IsBigint<bigint, { exact: true }> // true
 * type R = IsBigint<1n, { exact: true }> // false
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsBigint<bigint | 1> // boolean
 * type R = IsBigint<bigint | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsBigint<bigint, $SelectionBranch> // $Then
 * type R = IsBigint<string, $SelectionBranch> // $Else
 * ```
 */
type IsBigint<T$1, $O extends IsBigint.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsBigint.$<T$1, $O>;
}>>;
declare namespace IsBigint {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `bigint` or `bigint` literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], $Exact.Default]> extends true ? $Distributive.Parse<$O, {
    $then: _SD<T$1, $O>;
    $else: _SN<T$1, $O>;
  }> : Assignable.$<T$1, bigint, $O>;
  type $UtilOptions = Assignable.$UtilOptions & $Exact.Options;
  type _SD<T$1, $O extends $Options> = T$1 extends bigint & infer U ? U extends bigint ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
  type _SN<T$1, $O extends $Options> = [T$1] extends [bigint & infer U] ? U extends bigint ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/math/abs.d.ts
type Abs<N$1 extends number | bigint, Fail = never> = IsNumber<N$1, IsNumber.$Branch> extends infer R ? R extends $Then ? [number] extends [N$1] ? Fail : `${N$1}` extends `-${infer P extends number}` ? P : N$1 : R extends $Else ? IsBigint<N$1> extends infer R ? R extends true ? [bigint] extends [N$1] ? Fail : `${N$1}` extends `-${infer P extends bigint}` ? P : N$1 : Fail : never : never : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/numeric/is_positive.d.ts
/**
 * Is `T` a positive numeric type.
 *
 * ```ts
 * type R = IsPositive<1> // true
 * type R = IsPositive<0> // true
 * type R = IsPositive<1n> // true
 *
 * type R = IsPositive<number> // boolean
 * type R = IsPositive<bigint> // boolean
 * type R = IsPositive<any> // boolean
 *
 * type R = IsPositive<-1> // false
 * ```
 */
type IsPositive<T$1, $O extends IsPositive.$Options = {}> = IsBigint<T$1, {
  distributive: $O['distributive'];
  $then: IsPositive._Positive<T$1, bigint, $O>;
  $else: IsNumber<Exclude<T$1, bigint>, {
    distributive: $O['distributive'];
    $then: IsPositive._Positive<T$1, number, $O>;
    $else: $ResolveBranch<$O, [$Else]>;
  }>;
}>;
declare namespace IsPositive {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  type _Positive<T$1, U$1 extends number | bigint, $O extends IsPositive.$Options> = T$1 extends U$1 & infer R ? `${T$1}` extends `-${string}` ? $ResolveBranch<$O, [$Else]> : U$1 extends T$1 ? $ResolveBranch<$O, [$Then], T$1> | $ResolveBranch<$O, [$Else]> : [T$1, R] extends [R, T$1] ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Then], T$1> | $ResolveBranch<$O, [$Else]> : never;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/union_of_values.d.ts
/**
 * Gets the union of value types in `A`
 */
type UnionOfValues<A$1 extends readonly unknown[]> = A$1 extends Readonly<Array<infer E>> ? E : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/tuple/tail.d.ts
/**
 * Gets the types of a tuple except the first entry.
 */
type Tail$1<T$1 extends readonly unknown[]> = T$1['length'] extends 0 ? never : T$1 extends readonly [any, ...infer Tail] ? Tail extends UnionOfValues<T$1>[] ? Tail : never : T$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/tuple/tuple_plus.pad_start.d.ts
/**
 * Pad `T` with `PadWith` at the start of the tuple.
 *
 * If the `MaxLength` is less than the length of the tuple,
 * the `Tuple` will be returned unchanged.
 *
 * ⚗️ *transform*
 *
 * @example
 * ```ts
 * PadStart<[1, 2, 3], 5, 0> // [0, 0, 1, 2, 3]
 *
 * // Ignore if MaxLength is less than the length of the tuple
 * PadStart<[1, 2, 3], 2> // [1, 2, 3]
 *
 * // Default to unknown
 * PadStart<[1, 2, 3], 5> // [unknown, unknown, 1, 2, 3]
 * ```
 */
type PadStart$2<Tuple extends readonly unknown[], MaxLength extends number, PadWith = unknown> = PadStart$2.Device<Tuple, MaxLength, PadWith, []>;
declare namespace PadStart$2 {
  type Device<Source extends readonly unknown[], MaxLength extends number, PadWith, Result$1 extends unknown[]> = Result$1['length'] extends MaxLength ? Source extends [] ? Result$1 : Source extends readonly [...infer Head, infer Tail] ? [Tail, ...Result$1] extends infer R extends unknown[] ? Device<Head, R['length'], PadWith, R> : never : never : Source extends [] ? Device<Source, MaxLength, PadWith, [PadWith, ...Result$1]> : Source extends readonly [...infer Head, infer Tail] ? Device<Head, MaxLength, PadWith, [Tail, ...Result$1]> : Source;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/math/add.d.ts
type Add$1<A$1 extends number | bigint, B$1 extends number | bigint, Fail = never> = [NumericStruct.FromNumeric<A$1, Fail>, NumericStruct.FromNumeric<B$1, Fail>] extends [infer MA, infer MB] ? MA extends NumericStruct ? MB extends NumericStruct ? NumericStruct.ToNumeric<NumericStruct.Add<MA, MB>> : Fail : Fail : never;
type Increment<N$1 extends number | bigint> = Add$1<N$1, 1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/math/math_plus.to_negative.d.ts
/**
 * Converts a number or bigint `N` to negative.
 * If `N` is already negative, it returns itself.
 *
 * @example
 * ```ts
 * ToNegative<5> // -5
 * ToNegative<0> // 0
 * ToNegative<-5> // -5
 * ```
 */
type ToNegative<N$1 extends number | bigint> = N$1 extends number ? N$1 extends 0 ? 0 : `-${N$1}` extends `${infer W extends number}` ? W : N$1 : N$1 extends 0n ? 0n : `-${N$1}` extends `${infer W extends bigint}` ? W : N$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/math/numeric_struct.d.ts
/**
 * Internal numeric representation to perform math operations.
 *
 * NumericStruct: `[Type, DigitsStruct]`
 * DigitsStruct: `[Sign, Digits, Exponent]`
 *
 * It is similar to the floating point representation with some minor differences.
 *
 * @template Type Type of the value, either `number` or `bigint`.
 * It captures the original type of the value,
 * so that at the end of the operation,
 * the value can be adjusted accordingly.
 *
 * @template Sign Sign of the value, either `+` or `-`.
 *
 * @template Digits Digits of the value.
 * It is a tuple of digits,
 * where each digits can range from 0 to 9 during input,
 * and range from -10 to 89 during operation.
 * The max 89 comes from multiplication:
 *
 * ```
 * 99 * 9
 * => [[    9,  9], 0]
 * *  [        [9], 0]
 * => [[   81, 81], 0]
 * => [[   89,  1], 0]
 * => [[ 8, 9,  1], 0]
 * ```
 *
 * While -10 comes from subtraction:
 *
 * ```
 * 100 - 99 = 1
 * => [[  1,  0,  0], 0]
 * -  [[      9,  9], 0]
 * => [[  1, -9, -9], 0]
 * => [[  1,-10,  1], 0] // here, as in intermediate step
 * => [[  0,  0,  1], 0]
 * => [[1], 0]
 * => 1
 * ```
 *
 *
 * Unlike floating point numbers, the digits length is not limited.
 *
 * @template Exponent Exponent is the negative exponent of the number.
 *
 * ```
 * 1.23 = 123e^-2 = [[1, 2, 3], 2]
 * 0.0123 = 123e^-4 = [[1, 2, 3], 4]
 * ```
 *
 * There are 2 kinds of `NumericStruct`:
 * - Normalized: The `NumericStruct` is clean and can be converted to/from `number` or `bigint`
 * - Not normalized: The `DigitsStruct` within the `NumericStruct` is normalized,
 *   but may need to convert between `number` and `bigint`.\
 *   e.g. bigint + float => float (if possible), number + number => bigint (too big)
 *
 * During operations, the `DigitsStruct` can be not normalized,
 * but each operation should always normalize the `DigitsStruct` before returning.
 * Each operations assume the input `DigitsStruct` is normalized.
 *
 * All operations are performed in similar way:
 *
 * value -> NormalizedNumericStruct -> operation(NormalizedDigitsStruct) -> NormalizedNumericStruct -> Value
 *
 * This allows the operations to be composable.
 * */
type NumericStruct = ['bigint' | 'number', DigitsStruct];
type TYPE = 0;
type DIGITS_STRUCT = 1;
declare namespace NumericStruct {
  /**
   * Creates a `NumericStruct` from number or bigint `N`.
   */
  type FromNumeric<N$1 extends number | bigint, Fail = never> = N$1 extends number ? number extends N$1 ? Fail : ['number', DigitsStruct.FromNumber<N$1>] : N$1 extends bigint ? bigint extends N$1 ? Fail : ['bigint', DigitsStruct.FromBigint<N$1>] : never;
  /**
   * Converts a `NumericStruct` to a number or bigint.
   *
   * It includes the normalization of the `NumericStruct`.
   */
  type ToNumeric<M extends NumericStruct> = DigitsStruct.ToString<M[DIGITS_STRUCT]> extends infer S extends string ? M[TYPE] extends 'bigint' ? StringToBigint$1<S, StringToNumber$1<S, `The value '${S}' cannot be represented as bigint or number`>> : StringToNumber$1<S, StringToBigint$1<S, `The value '${S}' cannot be represented as bigint or number`>> : never;
  type Add<A$1 extends NumericStruct, B$1 extends NumericStruct> = [A$1[TYPE], DigitsStruct.Add<A$1[DIGITS_STRUCT], B$1[DIGITS_STRUCT]>];
  type Subtract<A$1 extends NumericStruct, B$1 extends NumericStruct> = [A$1[TYPE], DigitsStruct.Subtract<A$1[DIGITS_STRUCT], B$1[DIGITS_STRUCT]>];
  type Multiply<A$1 extends NumericStruct, B$1 extends NumericStruct> = [A$1[TYPE], DigitsStruct.Multiply<A$1[DIGITS_STRUCT], B$1[DIGITS_STRUCT]>];
}
type StringToBigint$1<S$1 extends string, Fail> = S$1 extends `${infer N extends bigint}` ? N : Fail;
type StringToNumber$1<S$1 extends string, Fail> = S$1 extends `${infer N extends number}` ? number extends N ? Fail : N : Fail;
type DigitsStruct = [Sign: '+' | '-', Digits: number[], Exponent: number];
type SIGN = 0;
type DIGITS = 1;
type EXPONENT = 2;
declare namespace DigitsStruct {
  /**
   * Creates a `DigitsStruct` from number `N`.
   *
   * @template N Number to create `DigitsStruct` from.
   */
  export type FromNumber<N$1 extends number> = `${N$1}` extends `-${infer R}` ? R extends `${infer W}.${infer F}` ? [DigitArray.FromString<W>, DigitArray.FromString<F$1>] extends [infer WA extends number[], infer FA extends number[]] ? ['-', DigitArray.TrimLeadingZeros<[...WA, ...FA]>, FA['length']] : never : ['-', DigitArray.FromString<R$1>, 0] : `${N$1}` extends `${infer W}.${infer F}` ? [DigitArray.FromString<W>, DigitArray.FromString<F$1>] extends [infer WA extends number[], infer FA extends number[]] ? ['+', DigitArray.TrimLeadingZeros<[...WA, ...FA]>, FA['length']] : never : ['+', DigitArray.FromString<`${N$1}`>, 0];
  /**
   * Creates a `DigitsStruct` from bigint `N`.
   *
   * @template N Number to create `DigitsStruct` from.
   */
  export type FromBigint<N$1 extends bigint> = `${N$1}` extends `-${infer R}` ? ['-', DigitArray.FromString<R$1>, 0] : ['+', DigitArray.FromString<`${N$1}`>, 0];
  /**
   * Converts a `DigitsStruct` to string.
   *
   * @template D A normalized `DigitsStruct`.
   */
  export type ToString<D extends DigitsStruct> = (PadStart$2<D[DIGITS], D[EXPONENT], 0> extends infer Padded extends number[] ? Padded['length'] extends D[EXPONENT] ? DigitArray.ToString<[0, '.', ...DigitArray.TrimTrailingZeros<Padded>]> : SplitFloat<Padded, D[EXPONENT]> extends [infer W extends number[], infer F extends number[]] ? F extends [] ? DigitArray.ToString<W> : DigitArray.ToString<[...W, '.', ...DigitArray.TrimTrailingZeros<F$1>]> : never : never) extends infer R ? R extends '0' ? R : R extends string ? D[SIGN] extends '-' ? `-${R$1}` : R : never : never;
  /**
   * Splits DigitArray into the whole number and the fractional part.
   *
   * @note cannot use `ArrayPlus.SplitAt` as it causes infinite loop.
   */
  type SplitFloat<A$1 extends number[], I$1 extends number, F$1 extends number[] = []> = I$1 extends 0 ? [A$1, []] : F$1['length'] extends I$1 ? [A$1, F$1] : A$1 extends [...infer H extends number[], infer T extends number] ? SplitFloat<H, I$1, [T, ...F$1]> : never;
  /**
   * Normalizes a `DigitsStruct`.
   *
   * The normalization two two things:
   *
   * - if the first digit is negative, it will flip the sign.
   * - carry digits if the digit is negative or greater than 9.
   */
  export type Normalize<N$1 extends DigitsStruct, R$1 extends DigitsStruct = ['+', [], 0]> = `${N$1[DIGITS][0]}` extends `-${number}` ? Normalize<FlipSign<N$1>, R$1> : [N$1[SIGN], DigitArray.CarryDigits<N$1[DIGITS]>, N$1[EXPONENT]];
  type FlipSign<D extends DigitsStruct, I$1 extends number[] = D[DIGITS], R$1 extends number[] = []> = I$1 extends [] ? D[SIGN] extends '-' ? ['+', R$1, D[EXPONENT]] : ['-', R$1, D[EXPONENT]] : I$1 extends [infer H extends number, ...infer T extends number[]] ? FlipSign<D, T, [...R$1, Digit.FlipSign<H>]> : never;
  /**
   * Add `A` and `B`.
   *
   * @template A A normalized `DigitsStruct`.
   * @template B B normalized `DigitsStruct`.
   */
  export type Add<A$1 extends DigitsStruct, B$1 extends DigitsStruct> = Balance<A$1, B$1> extends [infer BA extends DigitsStruct, infer BB extends DigitsStruct] ? [BA[SIGN], BB[SIGN]] extends ['+', '+'] ? Normalize<['+', DigitArray.Add<BA[DIGITS], BB[DIGITS]>, BA[EXPONENT]]> : [BA[SIGN], BB[SIGN]] extends ['+', '-'] ? Normalize<['+', DigitArray.Subtract<BA[DIGITS], BB[DIGITS]>, BA[EXPONENT]]> : [BA[SIGN], BB[SIGN]] extends ['-', '+'] ? Normalize<['+', DigitArray.Subtract<BB[DIGITS], BA[DIGITS]>, BB[EXPONENT]]> : [BA[SIGN], BB[SIGN]] extends ['-', '-'] ? Normalize<['-', DigitArray.Add<BA[DIGITS], BB[DIGITS]>, BA[EXPONENT]]> : never : never;
  export type Subtract<A$1 extends DigitsStruct, B$1 extends DigitsStruct> = Balance<A$1, B$1> extends [infer BA extends DigitsStruct, infer BB extends DigitsStruct] ? [BA[SIGN], BB[SIGN]] extends ['+', '+'] ? Normalize<['+', DigitArray.Subtract<BA[DIGITS], BB[DIGITS]>, BA[EXPONENT]]> : [BA[SIGN], BB[SIGN]] extends ['+', '-'] ? Normalize<['+', DigitArray.Add<BA[DIGITS], BB[DIGITS]>, BA[EXPONENT]]> : [BA[SIGN], BB[SIGN]] extends ['-', '+'] ? Normalize<['-', DigitArray.Add<BB[DIGITS], BA[DIGITS]>, BA[EXPONENT]]> : [BA[SIGN], BB[SIGN]] extends ['-', '-'] ? Normalize<['-', DigitArray.Subtract<BA[DIGITS], BB[DIGITS]>, BA[EXPONENT]]> : never : never;
  export type Multiply<A$1 extends DigitsStruct, B$1 extends DigitsStruct> = Add$1<A$1[EXPONENT], B$1[EXPONENT]> extends infer Exp extends number ? [A$1[SIGN], B$1[SIGN]] extends ['+', '+'] ? Normalize<['+', DigitArray.Multiply<A$1[DIGITS], B$1[DIGITS]>, Exp]> : [A$1[SIGN], B$1[SIGN]] extends ['+', '-'] ? Normalize<['-', DigitArray.Multiply<A$1[DIGITS], B$1[DIGITS]>, Exp]> : [A$1[SIGN], B$1[SIGN]] extends ['-', '+'] ? Normalize<['-', DigitArray.Multiply<B$1[DIGITS], A$1[DIGITS]>, Exp]> : [A$1[SIGN], B$1[SIGN]] extends ['-', '-'] ? Normalize<['+', DigitArray.Multiply<A$1[DIGITS], B$1[DIGITS]>, Exp]> : never : never;
  /**
   * Balance the two structs for add/subtract.
   */
  export type Balance<A$1 extends DigitsStruct, B$1 extends DigitsStruct> = GetBalancePadding<A$1[EXPONENT], B$1[EXPONENT]> extends [infer Pads extends number[], infer Longer] ? Longer extends 'A' ? [A$1, [B$1[SIGN], DigitArray.TrimLeadingZeros<[...B$1[DIGITS], ...Pads]>, A$1[EXPONENT]]] : [[A$1[SIGN], DigitArray.TrimLeadingZeros<[...A$1[DIGITS], ...Pads]>, B$1[EXPONENT]], B$1] : never;
  type GetBalancePadding<A$1 extends number, B$1 extends number, C$1 extends number[] = [], R$1 extends number[] = []> = A$1 extends B$1 ? [[], 'A'] : R$1 extends [] ? C$1['length'] extends A$1 ? GetBalancePadding<A$1, B$1, [0, ...C$1], [0]> : C$1['length'] extends B$1 ? GetBalancePadding<A$1, B$1, [0, ...C$1], [0, ...R$1]> : GetBalancePadding<A$1, B$1, [0, ...C$1], []> : C$1['length'] extends A$1 ? [R$1, 'A'] : C$1['length'] extends B$1 ? [R$1, 'B'] : GetBalancePadding<A$1, B$1, [0, ...C$1], [0, ...R$1]>;
  /**
   * This is used to align the `NumberStruct` during `Add/Subtract`.
   */
  export type GetMinPadEnd<A$1 extends number, B$1 extends number, R$1 extends number[] = []> = R$1['length'] extends A$1 ? [R$1, 'B'] : R$1['length'] extends B$1 ? [R$1, 'A'] : GetMinPadEnd<A$1, B$1, [0, ...R$1]>;
  export {};
}
declare namespace DigitArray {
  export type FromString<S$1 extends string> = S$1 extends `1${infer L}` ? [1, ...FromString<L>] : S$1 extends `2${infer L}` ? [2, ...FromString<L>] : S$1 extends `3${infer L}` ? [3, ...FromString<L>] : S$1 extends `4${infer L}` ? [4, ...FromString<L>] : S$1 extends `5${infer L}` ? [5, ...FromString<L>] : S$1 extends `6${infer L}` ? [6, ...FromString<L>] : S$1 extends `7${infer L}` ? [7, ...FromString<L>] : S$1 extends `8${infer L}` ? [8, ...FromString<L>] : S$1 extends `9${infer L}` ? [9, ...FromString<L>] : S$1 extends `0${infer L}` ? [0, ...FromString<L>] : S$1 extends `-1${infer L}` ? [-1, ...FromString<L>] : S$1 extends `-2${infer L}` ? [-2, ...FromString<L>] : S$1 extends `-3${infer L}` ? [-3, ...FromString<L>] : S$1 extends `-4${infer L}` ? [-4, ...FromString<L>] : S$1 extends `-5${infer L}` ? [-5, ...FromString<L>] : S$1 extends `-6${infer L}` ? [-6, ...FromString<L>] : S$1 extends `-7${infer L}` ? [-7, ...FromString<L>] : S$1 extends `-8${infer L}` ? [-8, ...FromString<L>] : S$1 extends `-9${infer L}` ? [-9, ...FromString<L>] : S$1 extends `-0${infer L}` ? [-0, ...FromString<L>] : [];
  export type ToString<A$1 extends Array<number | string>> = number extends A$1['length'] ? '' : A$1['length'] extends 0 ? '' : `${A$1[0]}${ToString<Tail$1<A$1>>}`;
  /**
   * [0, 0, -1] => [-1]
   *
   * This is used in various places so that there will be less computation,
   * and the sign bit can be handled properly.
   */
  export type TrimLeadingZeros<T$1 extends number[]> = T$1 extends [0] ? T$1 : T$1 extends [0, ...infer Tail extends number[]] ? TrimLeadingZeros<Tail$1> : T$1;
  export type TrimTrailingZeros<T$1 extends number[]> = T$1 extends [0] ? T$1 : T$1 extends [...infer Tail extends number[], 0] ? TrimTrailingZeros<Tail$1> : T$1;
  export type Add<A$1 extends number[], B$1 extends number[], R$1 extends number[] = []> = A$1 extends [] ? B$1 extends [] ? R$1 : B$1 extends [...infer BH extends number[], infer BL extends number] ? Add<[], BH, [BL, ...R$1]> : never : B$1 extends [] ? A$1 extends [...infer AH extends number[], infer AL extends number] ? Add<AH, [], [AL, ...R$1]> : never : [A$1, B$1] extends [[...infer AH extends number[], infer AL extends number], [...infer BH extends number[], infer BL extends number]] ? Add<AH, BH, [Digit.Add<AL, BL>, ...R$1]> : never;
  export type Subtract<A$1 extends number[], B$1 extends number[], R$1 extends number[] = []> = A$1 extends [] ? B$1 extends [] ? TrimLeadingZeros<R$1> : B$1 extends [...infer BH extends number[], infer BL extends number] ? Subtract<[], BH, [ToNegative<BL>, ...R$1]> : never : B$1 extends [] ? A$1 extends [...infer AH extends number[], infer AL extends number] ? Subtract<AH, [], [AL, ...R$1]> : never : [A$1, B$1] extends [[...infer AH extends number[], infer AL extends number], [...infer BH extends number[], infer BL extends number]] ? Subtract<AH, BH, [Digit.Subtract<AL, BL>, ...R$1]> : never;
  export type Multiply<A$1 extends number[], B$1 extends number[], R$1 extends number[][] = []> = B$1 extends [] ? RecursiveAdd<R$1> : B$1 extends [infer Head extends number, ...infer Tail extends number[]] ? Multiply<A$1, Tail$1, [...R$1, CarryDigits<MultiplyArray<A$1, Head, Zeros<Tail$1['length']>>>]> : never;
  type Zeros<N$1 extends number, R$1 extends number[] = []> = N$1 extends unknown ? R$1['length'] extends N$1 ? R$1 : Zeros<N$1, [0, ...R$1]> : never;
  type MultiplyArray<A$1 extends number[], B$1 extends number, Pad extends number[], R$1 extends number[] = []> = B$1 extends 0 ? [0] : B$1 extends 1 ? [...A$1, ...Pad] : A$1 extends [] ? [...R$1, ...Pad] : A$1 extends [infer H extends number, ...infer T extends number[]] ? MultiplyArray<T$1, B$1, Pad, [...R$1, Digit.Multiply<H, B$1>]> : never;
  /**
   * Recursively add digit arrays.
   *
   * This is used in multiplication.
   */
  type RecursiveAdd<E extends number[][], R$1 extends number[] = []> = E extends [] ? R$1 : E extends [infer H extends number[], ...infer T extends number[][]] ? RecursiveAdd<T$1, CarryDigits<Add<R$1, H>>> : never;
  export type CarryDigits<N$1 extends number[], R$1 extends number[] = []> = N$1 extends [] ? TrimLeadingZeros<R$1> : N$1 extends [infer Tail extends number] ? `${Tail$1}` extends `${infer T1 extends number}${infer T2 extends number}` ? CarryDigits<[], [T1, T2, ...R$1]> : `${Tail$1}` extends `-${infer T1 extends number}${infer T2 extends number}` ? `-${T1}` extends `${infer NT extends number}` ? CarryDigits<[], [NT, T2, ...R$1]> : never : CarryDigits<[], [Tail$1, ...R$1]> : N$1 extends [infer Head extends number, infer Tail extends number] ? `${Tail$1}` extends `${infer T1 extends number}${infer T2 extends number}` ? CarryDigits<[Digit.Add<Head, T1>], [T2, ...R$1]> : `${Tail$1}` extends `-${infer T1 extends number}${infer T2 extends number}` ? `-${T1}` extends `${infer NT extends number}` ? CarryDigits<[Digit.Add<Head, NT>], [T2, ...R$1]> : never : `${Tail$1}` extends `-${number}` ? CarryDigits<[Digit.Add<Head, -1>], [Digit.Plus10[Tail$1], ...R$1]> : CarryDigits<[Head], [Tail$1, ...R$1]> : N$1 extends [...infer Heads extends number[], infer Head extends number, infer Tail extends number] ? `${Tail$1}` extends `${infer T1 extends number}${infer T2 extends number}` ? CarryDigits<[...Heads, Digit.Add<Head, T1>], [T2, ...R$1]> : `${Tail$1}` extends `-${infer T1 extends number}${infer T2 extends number}` ? `-${T1}` extends `${infer NT extends number}` ? CarryDigits<[...Heads, Digit.Add<Head, NT>], [T2, ...R$1]> : never : `${Tail$1}` extends `-${number}` ? CarryDigits<[...Heads, Digit.Add<Head, -1>], [Digit.Plus10[Tail$1], ...R$1]> : CarryDigits<[...Heads, Head], [Tail$1, ...R$1]> : never;
  export {};
}
declare namespace Digit {
  /**
   * Adds two `Digit`.
   *
   * add: A: 0 - 9, B: 0 - 9
   * normalize: [81, 81] -> [81 + 8, 1]
   */
  export type Add<A$1 extends number, B$1 extends number> = `${A$1}` extends `-${infer AD extends number}` ? `${B$1}` extends `-${infer BD extends number}` ? ToNegative<PositiveEntryAdd<AD, BD>> : Subtract<B$1, AD> : `${B$1}` extends `-${infer BD extends number}` ? Subtract<A$1, BD> : PositiveEntryAdd<A$1, B$1>;
  export type FlipSign<T$1 extends number> = T$1 extends 0 ? 0 : `${T$1}` extends `-${infer R extends number}` ? R : `-${T$1}` extends `${infer R extends number}` ? R : never;
  type PositiveEntryAdd<A$1 extends number, B$1 extends number> = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [5, 6, 7, 8, 9, 10, 11, 12, 13, 14], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [9, 10, 11, 12, 13, 14, 15, 16, 17, 18], [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [12, 13, 14, 15, 16, 17, 18, 19, 20, 21], [13, 14, 15, 16, 17, 18, 19, 20, 21, 22], [14, 15, 16, 17, 18, 19, 20, 21, 22, 23], [15, 16, 17, 18, 19, 20, 21, 22, 23, 24], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25], [17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [18, 19, 20, 21, 22, 23, 24, 25, 26, 27], [19, 20, 21, 22, 23, 24, 25, 26, 27, 28], [20, 21, 22, 23, 24, 25, 26, 27, 28, 29], [21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [22, 23, 24, 25, 26, 27, 28, 29, 30, 31], [23, 24, 25, 26, 27, 28, 29, 30, 31, 32], [24, 25, 26, 27, 28, 29, 30, 31, 32, 33], [25, 26, 27, 28, 29, 30, 31, 32, 33, 34], [26, 27, 28, 29, 30, 31, 32, 33, 34, 35], [27, 28, 29, 30, 31, 32, 33, 34, 35, 36], [28, 29, 30, 31, 32, 33, 34, 35, 36, 37], [29, 30, 31, 32, 33, 34, 35, 36, 37, 38], [30, 31, 32, 33, 34, 35, 36, 37, 38, 39], [31, 32, 33, 34, 35, 36, 37, 38, 39, 40], [32, 33, 34, 35, 36, 37, 38, 39, 40, 41], [33, 34, 35, 36, 37, 38, 39, 40, 41, 42], [34, 35, 36, 37, 38, 39, 40, 41, 42, 43], [35, 36, 37, 38, 39, 40, 41, 42, 43, 44], [36, 37, 38, 39, 40, 41, 42, 43, 44, 45], [37, 38, 39, 40, 41, 42, 43, 44, 45, 46], [38, 39, 40, 41, 42, 43, 44, 45, 46, 47], [39, 40, 41, 42, 43, 44, 45, 46, 47, 48], [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], [41, 42, 43, 44, 45, 46, 47, 48, 49, 50], [42, 43, 44, 45, 46, 47, 48, 49, 50, 51], [43, 44, 45, 46, 47, 48, 49, 50, 51, 52], [44, 45, 46, 47, 48, 49, 50, 51, 52, 53], [45, 46, 47, 48, 49, 50, 51, 52, 53, 54], [46, 47, 48, 49, 50, 51, 52, 53, 54, 55], [47, 48, 49, 50, 51, 52, 53, 54, 55, 56], [48, 49, 50, 51, 52, 53, 54, 55, 56, 57], [49, 50, 51, 52, 53, 54, 55, 56, 57, 58], [50, 51, 52, 53, 54, 55, 56, 57, 58, 59], [51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [52, 53, 54, 55, 56, 57, 58, 59, 60, 61], [53, 54, 55, 56, 57, 58, 59, 60, 61, 62], [54, 55, 56, 57, 58, 59, 60, 61, 62, 63], [55, 56, 57, 58, 59, 60, 61, 62, 63, 64], [56, 57, 58, 59, 60, 61, 62, 63, 64, 65], [57, 58, 59, 60, 61, 62, 63, 64, 65, 66], [58, 59, 60, 61, 62, 63, 64, 65, 66, 67], [59, 60, 61, 62, 63, 64, 65, 66, 67, 68], [60, 61, 62, 63, 64, 65, 66, 67, 68, 69], [61, 62, 63, 64, 65, 66, 67, 68, 69, 70], [62, 63, 64, 65, 66, 67, 68, 69, 70, 71], [63, 64, 65, 66, 67, 68, 69, 70, 71, 72], [64, 65, 66, 67, 68, 69, 70, 71, 72, 73], [65, 66, 67, 68, 69, 70, 71, 72, 73, 74], [66, 67, 68, 69, 70, 71, 72, 73, 74, 75], [67, 68, 69, 70, 71, 72, 73, 74, 75, 76], [68, 69, 70, 71, 72, 73, 74, 75, 76, 77], [69, 70, 71, 72, 73, 74, 75, 76, 77, 78], [70, 71, 72, 73, 74, 75, 76, 77, 78, 79], [71, 72, 73, 74, 75, 76, 77, 78, 79, 80], [72, 73, 74, 75, 76, 77, 78, 79, 80, 81], [73, 74, 75, 76, 77, 78, 79, 80, 81, 82], [74, 75, 76, 77, 78, 79, 80, 81, 82, 83], [75, 76, 77, 78, 79, 80, 81, 82, 83, 84], [76, 77, 78, 79, 80, 81, 82, 83, 84, 85], [77, 78, 79, 80, 81, 82, 83, 84, 85, 86], [78, 79, 80, 81, 82, 83, 84, 85, 86, 87], [79, 80, 81, 82, 83, 84, 85, 86, 87, 88], [80, 81, 82, 83, 84, 85, 86, 87, 88, 89], [81, 82, 83, 84, 85, 86, 87, 88, 89, 90]][A$1][B$1];
  /**
   * Subtract two positive numbers.
   * The number range from 0 to 81.
   */
  export type Subtract<A$1 extends number, B$1 extends number> = [`${A$1}`, `${B$1}`] extends [`${number}${infer A2 extends number}`, `${number}${infer B2 extends number}`] ? Subtract<A2, B2> : `${A$1}` extends `${number}${infer A2 extends number}` ? Subtract<A2, B$1> : `${B$1}` extends `${number}${infer B2 extends number}` ? Subtract<A$1, B2> : SingleDigitSubtract<A$1, B$1>;
  export type SingleDigitSubtract<A$1 extends number, B$1 extends number> = [[0, -1, -2, -3, -4, -5, -6, -7, -8, -9], [1, 0, -1, -2, -3, -4, -5, -6, -7, -8], [2, 1, 0, -1, -2, -3, -4, -5, -6, -7], [3, 2, 1, 0, -1, -2, -3, -4, -5, -6], [4, 3, 2, 1, 0, -1, -2, -3, -4, -5], [5, 4, 3, 2, 1, 0, -1, -2, -3, -4], [6, 5, 4, 3, 2, 1, 0, -1, -2, -3], [7, 6, 5, 4, 3, 2, 1, 0, -1, -2], [8, 7, 6, 5, 4, 3, 2, 1, 0, -1], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]][A$1][B$1];
  export type Plus10 = { [k in number]: number } & {
    '-1': 9;
    '-2': 8;
    '-3': 7;
    '-4': 6;
    '-5': 5;
    '-6': 4;
    '-7': 3;
    '-8': 2;
    '-9': 1;
  };
  export type Multiply<A$1 extends number, B$1 extends number> = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 10, 12, 14, 16, 18], [0, 3, 6, 9, 12, 15, 18, 21, 24, 27], [0, 4, 8, 12, 16, 20, 24, 28, 32, 36], [0, 5, 10, 15, 20, 25, 30, 35, 40, 45], [0, 6, 12, 18, 24, 30, 36, 42, 48, 54], [0, 7, 14, 21, 28, 35, 42, 49, 56, 63], [0, 8, 16, 24, 32, 40, 48, 56, 64, 72], [0, 9, 18, 27, 36, 45, 54, 63, 72, 81]][A$1][B$1];
  export {};
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/math/subtract.d.ts
type Subtract$1<A$1 extends number | bigint, B$1 extends number | bigint, Fail = never> = [NumericStruct.FromNumeric<A$1, Fail>, NumericStruct.FromNumeric<B$1, Fail>] extends [infer MA, infer MB] ? MA extends NumericStruct ? MB extends NumericStruct ? NumericStruct.ToNumeric<NumericStruct.Subtract<MA, MB>> : Fail : Fail : never;
type Decrement<N$1 extends number | bigint> = Subtract$1<N$1, 1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/math/greater_than.d.ts
type GreaterThan<A$1 extends number | bigint, B$1 extends number | bigint, Fail = never> = Subtract$1<A$1, B$1, 'fail'> extends infer R extends number ? R extends 0 ? false : IsPositive<R> : Fail;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/numeric/is_integer.d.ts
/**
 * Is T an integer, including bigint.
 *
 * ```ts
 * type R = IsInteger<0> // true
 * type R = IsInteger<1n> // true
 *
 * type R = IsInteger<1.1> // false
 * type R = IsInteger<number> // false as it contains non-integer
 * ```
 */
type IsInteger<T$1, $O extends IsInteger.$Options = {}> = IsNumber<T$1, {
  distributive: $O['distributive'];
  $then: number extends T$1 ? $ResolveBranch<$O, [$Then], number> | $ResolveBranch<$O, [$Else]> : T$1 extends number & infer U ? `${T$1}` extends `${number}.${number}` ? $ResolveBranch<$O, [$Else]> : [T$1, U] extends [U, T$1] ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Then], number> | $ResolveBranch<$O, [$Else]> : never;
  $else: IsBigint<T$1, {
    distributive: $O['distributive'];
    $then: $ResolveBranch<$O, [$Then], T$1>;
    $else: $ResolveBranch<$O, [$Else]>;
  }>;
}>;
declare namespace IsInteger {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/numeric/is_negative.d.ts
/**
 * Is `T` a negative numeric type.
 *
 * ```ts
 * type R = IsNegative<-1> // true
 * type R = IsNegative<-1n> // true
 *
 * type R = IsNegative<0> // false
 * type R = IsNegative<1> // false
 *
 * type R = IsNegative<number> // boolean
 * type R = IsNegative<bigint> // boolean
 * type R = IsNegative<any> // boolean
 * ```
 */
type IsNegative<T$1, $O extends IsNegative.$Options = {}> = IsBigint<T$1, {
  distributive: $O['distributive'];
  $then: IsNegative._Negative<T$1, bigint, $O>;
  $else: IsNumber<Exclude<T$1, bigint>, {
    distributive: $O['distributive'];
    $then: IsNegative._Negative<T$1, number, $O>;
    $else: $ResolveBranch<$O, [$Else]>;
  }>;
}>;
declare namespace IsNegative {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  type _Negative<T$1, U$1 extends number | bigint, $O extends IsNegative.$Options> = T$1 extends U$1 & infer R ? `${T$1}` extends `-${string}` ? $ResolveBranch<$O, [$Then], T$1> : U$1 extends T$1 ? $ResolveBranch<$O, [$Then], T$1> | $ResolveBranch<$O, [$Else]> : [T$1, R] extends [R, T$1] ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> | $ResolveBranch<$O, [$Else]> : never;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array_plus.index_at.d.ts
/**
 * 🦴 *utilities*
 *
 * Gets the normalized index to access the element of an array or tuple.
 *
 * @example
 * ```ts
 * type R = IndexAt<['a', 'b', 'c'], 2> // 2
 * type R = IndexAt<['a', 'b', 'c'], -2> // 1
 *
 * type R = IndexAt<['a', 'b', 'c'], 3> // never
 * type R = IndexAt<['a', 'b', 'c'], -4> // never
 * ```
 */
type IndexAt<A$1 extends readonly unknown[], N$1 extends number, Fail = never, Upper = A$1['length'], Lower = 0> = IsNever<A$1, {
  $then: Fail;
  $else: IndexAt._<A$1, N$1, Fail, Upper, Lower>;
}>;
declare namespace IndexAt {
  type _<A$1 extends readonly unknown[], N$1 extends number, Fail = never, Upper = A$1['length'], Lower = 0> = IsEqual<A$1['length'], 0, Fail, IsInteger<N$1, {
    $then: IsNumber<A$1['length'], {
      exact: true;
      $then: N$1;
      $else: IsNegative<N$1, {
        $then: GreaterThan<Abs<N$1>, A$1['length']> extends true ? Lower : Subtract$1<A$1['length'], Abs<N$1>>;
        $else: GreaterThan<A$1['length'], N$1> extends true ? N$1 : Upper;
      }>;
    }>;
    $else: IsAny<N$1, {
      $then: number;
      $else: IsNumber<N$1, {
        exact: true;
        $then: N$1;
        $else: never;
      }>;
    }>;
  }>>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array.at.d.ts
/**
 * 🦴 *utilities*
 *
 * Gets the type of the array or tuple at positive or negative index `N`.
 *
 * Like `Array.at()`, this type supports negative numbers.
 *
 * @alias ArrayPlus.At
 * @see https://github.com/microsoft/TypeScript/issues/53345#issuecomment-1477138167
 *
 * ```ts
 * type R = At<[1, 2, 3], 2> // 3
 * type R = At<[1, 2, 3], -1> // 3
 * ```
 */
type At<A$1 extends readonly unknown[], N$1 extends number, Fail = never> = IndexAt<A$1, N$1, Fail, Fail, Fail> extends infer I ? I extends number ? IsTuple.$<A$1, {
  $then: IsNumber.$<I, {
    exact: true;
    $then: A$1[I] | undefined;
    $else: A$1[I];
  }>;
  $else: A$1[I] | undefined;
}> : Fail : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array.find_last.d.ts
/**
 * 🦴 *utilities*
 *
 * Gets the last type in the array or tuple that matches the `Criteria`.
 *
 * If the `Criteria` is not met, it will return `never'.
 *
 * For `Array<T>`, it will return `T | undefined` if `T` satisfies `Criteria`.
 *
 * @example
 * ```ts
 * ArrayPlus.Find<Array<1 | 2 | 'x'>, number> // 1 | 2 | undefined
 *
 * ArrayPlus.Find<[true, 123, 'x', 321], number> // 321
 * ```
 */
type FindLast<A$1 extends readonly unknown[], Criteria> = IsTuple<A$1, {
  $then: A$1['length'] extends 0 ? never : A$1 extends readonly [...infer Heads, infer Last] ? Last extends Criteria ? Last : FindLast<Heads, Criteria> : never;
  $else: A$1 extends Readonly<Array<infer T>> ? (T extends Criteria ? T | undefined : never) : never;
}>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array.some.d.ts
/**
 * Determines whether the array type `A` contains any elements that satisfies the specified `Criteria` type.
 *
 * It operates in `loose` mode by default,
 * which means literal types satisfies their widened counterparts.
 *
 * You can also change it to `strict` mode.
 *
 * 🦴 *utilities*
 *
 * @example
 * ```ts
 * Some<string[], string> // true
 * Some<['a', boolean], boolean> // true
 * Some<['a', true], boolean> //true
 *
 * Some<['a', true], boolean, 'strict'> // false
 * ```
 */
type Some<A$1 extends readonly unknown[], Criteria, Mode extends 'strict' | 'loose' = 'loose', Then = true, Else = false> = Mode extends 'strict' ? Some.Strict<A$1, Criteria, Then, Else> : Some.Loose<A$1, Criteria, Then, Else>;
declare namespace Some {
  type Strict<A$1 extends readonly unknown[], Criteria, Then, Else> = number extends A$1['length'] ? StrictArray<A$1, Criteria, Then, Else> : StrictTuple<A$1, Criteria, Then, Else>;
  type StrictArray<A$1 extends readonly unknown[], Criteria, Then, Else> = IsEqual<UnionOfValues<A$1>, Criteria, Then, Else>;
  type StrictTuple<A$1 extends readonly unknown[], Criteria, Then, Else> = A$1['length'] extends 0 ? Else : IsEqual<A$1[0], Criteria> extends true ? Then : StrictTuple<Tail$1<A$1>, Criteria, Then, Else>;
  type Loose<A$1 extends readonly unknown[], Criteria, Then, Else> = number extends A$1['length'] ? LooseArray<A$1, Criteria, Then, Else> : LooseTuple<A$1, Criteria, Then, Else>;
  type LooseArray<A$1 extends readonly unknown[], Criteria, Then, Else> = CanAssign<UnionOfValues<A$1>, Criteria, Then, Else>;
  type LooseTuple<A$1 extends readonly unknown[], Criteria, Then, Else> = A$1['length'] extends 0 ? Else : A$1[0] extends Criteria ? Then : LooseTuple<Tail$1<A$1>, Criteria, Then, Else>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array_plus.concat.d.ts
/**
 * 🦴 *utilities
 * 💀 *deprecated* Will be available only as `ArrayPlus.Concat` in the next version
 *
 * Concats two arrays or tuples.
 *
 * alias of: `[...A, ...B]`
 *
 * @alias ArrayPlus.Concat
 *
 * ```ts
 * type R = Concat<[1], [2, 3]> // [1, 2, 3]
 * ```
 */
type Concat<A$1 extends Readonly<unknown[]>, B$1 extends Readonly<unknown[]>> = [...A$1, ...B$1];
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array.entries.d.ts
/**
 * Returns an array of key-value pairs for every entry in the array or tuple.
 *
 * Note that this is not the same as `Array.entries(A)`,
 * which returns an iterable interator.
 *
 * @example
 * ```ts
 * ArrayPlus.Entries<Array<string | number>> // Array<[number, string | number]>
 * ArrayPlus.Entries<[1, 2, 3]> // [[0, 1], [1, 2], [2, 3]]
 * ```
 */
type Entries<A$1 extends readonly unknown[]> = IsTuple<A$1, {
  $then: Entries.Device<A$1, []>;
  $else: A$1 extends Array<infer T> ? Array<[number, T]> : never;
}>;
declare namespace Entries {
  type Device<A$1 extends readonly unknown[], R$1 extends unknown[]> = A$1['length'] extends 0 ? R$1 : A$1 extends readonly [...infer F, infer N] ? Device<F, [[F['length'], N], ...R$1]> : never;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/utils/options.d.ts
declare namespace TypePlusOptions {
  /**
   * 🦴 *utilities*
   * ㊙️ *internal*
   *
   * Merge the input Options `I` with the default Options `D`.
   */
  type Merge<I$1, D> = { [k in keyof D]: k extends keyof I$1 ? I$1[k] : D[k] };
  interface NotArray {
    $notArray?: unknown;
  }
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/mix_types/is_any_or_never.d.ts
/**
 * 🎭 *predicate*
 * 🔢 *customize*
 * 🩳 *shortcut*
 *
 * Validate if `T` is either exactly `any` or exactly `never`.
 *
 * @example
 * ```ts
 * type R = IsAnyOrNever<any> // $Then
 * type R = IsAnyOrNever<never> // $Then
 *
 * type R = IsAnyOrNever<1> // $Else
 * type R = IsAnyOrNever<unknown> // $Else
 *
 * type R = IsAnyOrNever<never, $SelectionPredicate> // true
 * type R = IsAnyOrNever<'a', $SelectionPredicate> // false
 * ```
 */
type IsAnyOrNever<T$1, $O extends $Selection.Options = $Selection.Predicate> = IsNever<T$1, {
  $then: $O['$then'];
  $else: IsAny<T$1, $O>;
}>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/loose_array_type.d.ts
/**
 * 🌪️ *filter*
 * 🚧 *temporary*
 *
 * Filter `T` to ensure it is an array or tuple.
 *
 * This is a temporary type before `ArrayType` is adjusted to loose check in the next version.
 *
 * @example
 * ```ts
 * type R = LooseArrayType<number[]> // number[]
 * type R = LooseArrayType<[1]> // [1]
 * type R = LooseArrayType<number[] | 1> // number[]
 * type R = LooseArrayType<number[] & 1> // number[]s
 *
 * type R = LooseArrayType<string> // never
 * ```
 */
type LooseArrayType<T$1, Then = T$1, Else = never> = IsAnyOrNever<T$1, {
  $then: Else;
  $else: T$1 extends readonly any[] ? Then : Else;
}>;
/**
 * 🎭 *predicate*
 *
 * Validate that `T` is an array or tuple.
 *
 * @example
 * ```ts
 * type R = IsLooseArray<number[]> // true
 * type R = IsLooseArray<[1]> // true
 *
 * type R = IsLooseArray<number> // false
 * ```
 */
type IsLooseArray<T$1, Then = true, Else = false> = LooseArrayType<T$1, Then, Else>;
/**
 * 🌪️ *filter*
 *
 * Filter `T` to ensure it is not an array nor tuple.
 *
 * @example
 * ```ts
 * type R = NotLooseArrayType<number[]> // never
 * type R = NotLooseArrayType<[1]> // never
 *
 * type R = NotLooseArrayType<number> // number
 * ```
 */
type NotLooseArrayType<T$1, Then = T$1, Else = never> = LooseArrayType<T$1, Else, Then>;
/**
 * 🎭 *predicate*
 *
 * Validate that `T` is not an array nor tuple.
 *
 * @example
 * ```ts
 * type R = IsNotLooseArray<number[]> // false
 * type R = IsNotLooseArray<[1]> // false
 *
 * type R = IsNotLooseArray<number> // true
 * ```
 */
type IsNotLooseArray<T$1, Then = true, Else = false> = LooseArrayType<T$1, Else, Then>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array_plus.is_readonly.d.ts
/**
 * 🎭 *predicate*
 * 🔢 *customizable*
 *
 * Checks if `A` is a readonly array or tuple
 *
 * @example
 * ```ts
 * type R = IsReadonly<readonly string[]> // true
 * type R = IsReadonly<readonly [1, 2, 3, 4, 5]> // true
 *
 * type R = IsReadonly<[1, 2, 3, 4, 5]> // false
 * type R = IsReadonly<readonly string[] | number> // boolean
 * ```
 */
type IsReadonly<A$1, $Options$1 extends IsReadonly.Options = IsReadonly.DefaultOptions> = TypePlusOptions.Merge<$Options$1, IsReadonly.DefaultOptions> extends infer O extends IsReadonly.Options ? IsNever<A$1, {
  $then: O['$never'];
  $else: A$1 extends any ? LooseArrayType<A$1, Readonly<A$1> extends A$1 ? O['$then'] : O['$else'], O['$notArray']> : never;
}> : never;
declare namespace IsReadonly {
  interface Options extends $Never.$Options, $Selection.Options, TypePlusOptions.NotArray {}
  interface DefaultOptions {
    $then: true;
    $else: false;
    $never: false;
    $notArray: false;
  }
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array.reverse.d.ts
type Reverse$1<A$1 extends readonly unknown[]> = Reverse$1._<A$1> extends infer R ? (IsReadonly<A$1> extends true ? Readonly<R> : R) : never;
declare namespace Reverse$1 {
  type _<A$1 extends readonly unknown[]> = A$1 extends readonly [infer First, ...infer Rest] ? [..._<Rest>, First] : A$1;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/KeyTypes.d.ts
/**
 * Type of all keys.
 * To get the keys of an object or array, use the `keyof` keyword.
 * This is just a convenient type as `keyof any` is not obvious.
 */
type KeyTypes = keyof any;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array_plus.common_prop_keys.d.ts
/**
 * ⚗️ *transform*
 * 🔢 *customization*
 *
 * Gets the common keys of the record types in the array `A`.
 *
 * @example
 * ```ts
 * import { type ArrayPlus } from 'type-plus'
 *
 * type R = ArrayPlus.CommonPropKeys<Array<{ a: 1 }>> // 'a'
 * type R = ArrayPlus.CommonPropKeys<Array<{ a: 1, b: 1 } | { a: 1, c: 1 }>> // 'a'
 * ```
 *
 * @typeParam Options['$never'] Return type when `T` is `never`.
 * Default to `never`.
 */
type CommonPropKeys$2<A$1 extends readonly Record<KeyTypes, unknown>[], Options$1 extends CommonPropKeys$2.Options = CommonPropKeys$2.DefaultOptions> = IsNever<A$1, {
  $then: Options$1['$never'];
  $else: A$1 extends Readonly<Array<infer R extends Record<KeyTypes, unknown>>> ? keyof R : never;
}>;
declare namespace CommonPropKeys$2 {
  interface Options extends $Never.$Options {}
  interface DefaultOptions extends $Never.$Default {}
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array_plus.drop_match.d.ts
/**
 * ⚗️ *transform*
 */
type DropMatch$2<A$1 extends Readonly<Array<unknown>>, Criteria> = A$1[0] extends Criteria ? never[] : undefined extends Criteria ? null extends Criteria ? Array<NonNullable<A$1[0]>> : Array<Exclude<A$1[0], undefined>> : null extends Criteria ? Array<Exclude<A$1[0], null>> : Criteria extends A$1[0] ? Array<Exclude<A$1[0], Criteria>> : A$1[0] extends Criteria ? A$1 : Array<Exclude<A$1[0], Criteria>>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/union/union.d.ts
/**
 * 🌪️ *filter*
 *
 * Filter the type `T` to ensure it is a union.
 *
 * @example
 * ```ts
 * type R = IsUnion<'a' | 'b'> // 'a' | 'b'
 * type R = IsUnion<boolean> // boolean
 * type R = IsUnion<number> // never
 * ```
 */
type UnionType<T$1, Then = T$1, Else = never> = UnionType.Device<T$1, Then, Else>;
/**
 * 🎭 *predicate*
 *
 * Validate the type `T` is a union.
 *
 * @author Nurbol Alpysbayev
 * @see https://stackoverflow.com/questions/53953814/typescript-check-if-a-type-is-a-union
 *
 * @example
 * ```ts
 * type R = IsUnion<'a' | 'b'> // true
 * type R = IsUnion<boolean> // true
 * type R = IsUnion<number> // false
 * ```
 */
type IsUnion<T$1, Then = true, Else = false> = UnionType.Device<T$1, Then, Else>;
declare namespace UnionType {
  type Device<T$1, Then, Else, U$1 = T$1> = (T$1 extends unknown ? (U$1 extends T$1 ? 1 : 2) : never) extends 1 ? Else : Then;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array_plus.element_match.d.ts
/**
 * 🦴 *utilities*
 * 🔢 *customizable*
 *
 * Filter the element `T` in an array or tuple to match `Criteria`.
 *
 * @typeParam Options['widen'] Allow using narrow type to match widen type.
 * e.g. `number, 1` -> `1 | undefined`.
 * Default to `true`.
 *
 * @typeParam Options['$notMatch'] Return value when `T` does not match `Criteria`.
 * Default to `never`.
 *
 * @typeParam Options['$widen'] Return value when `widen` is true.
 * Default to `Criteria | undefined`.
 *
 * @typeParam Options['$unionNotMatch'] Return value when a branch of the union `T` does not match `Criteria`.
 * Default to `never`.
 *
 * If you want the type to behave more like JavaScript,
 * you can override it to return `undefined`.
 *
 * Since it is a union, the result will be joined to the matched branch as union.
 * e.g. `ElementMatch<1 | 2, 1>` -> `1 | undefined`
 */
type ElementMatch<T$1, Criteria, Options$1 extends ElementMatch.Options = ElementMatch.DefaultOptions<Criteria>> = [T$1] extends [Criteria] ? T$1 : TypePlusOptions.Merge<Options$1, ElementMatch.DefaultOptions<Criteria>> extends infer C extends Record<keyof ElementMatch.Options, unknown> ? (T$1 extends Criteria ? T$1 : C['widen'] extends true ? Criteria extends T$1 ? C['$widen'] : C['$notMatch'] : C['$notMatch']) extends infer R ? IsUnion<T$1, IsNever<R, {
  $then: R;
  $else: R | C['$unionNotMatch'];
}>, R> : C['$notMatch'] : never;
declare namespace ElementMatch {
  interface Options {
    widen?: boolean | undefined;
    $notMatch?: unknown;
    $widen?: unknown;
    $unionNotMatch?: unknown;
  }
  interface DefaultOptions<Criteria> {
    widen: true;
    $notMatch: never;
    $widen: Criteria | undefined;
    $unionNotMatch: never;
  }
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array_plus.filter.d.ts
/**
 * ⚗️ *transform*
 * 🔢 *customizable*
 *
 * Filter the array `A`, keeping entries satisfying `Criteria`.
 *
 * @example
 * ```ts
 * type R = Filter<Array<string | undefined>, string> // string[]
 * ```
 */
type Filter$2<A$1 extends readonly unknown[], Criteria = true, Options$1 extends Filter$2.Options = Filter$2.DefaultOptions> = TypePlusOptions.Merge<Options$1, Filter$2.DefaultOptions> extends infer O extends Filter$2.Options ? IsNever<A$1, {
  $then: O['$never'];
  $else: A$1[0] extends Criteria ? A$1 : Criteria extends A$1[0] ? Array<Criteria> : O['$notArray'];
}> : never;
declare namespace Filter$2 {
  interface Options extends TypePlusOptions.NotArray, $Never.$Options {}
  interface DefaultOptions {
    $never: never;
    $notArray: never[];
  }
  type _<A$1 extends readonly unknown[], Criteria, Result$1 extends unknown[]> = A$1['length'] extends 0 ? Result$1 : A$1 extends [infer H, ...infer Rest] ? IsEqual<H, Criteria, _<Rest, Criteria, [...Result$1, H]>, _<Rest, Criteria, Result$1>> : never;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array_plus.find.d.ts
/**
 * 🦴 *utilities*
 * 🔢 *customizable*
 *
 * Finds the type in array `A` that matches `Criteria`.
 *
 * @example
 * ```ts
 * type R = ArrayPlus.Find<Array<string>, string> // string
 * type R = ArrayPlus.Find<Array<1 | 2 | 'x'>, number> // 1 | 2 | undefined
 * type R = ArrayPlus.Find<Array<string | number>, number | string> // string | number
 * type R = ArrayPlus.Find<Array<number>, 1> // widen: 1 | undefined
 * type R = ArrayPlus.Find<Array<string | number>, number> // unionMiss: number | undefined
 *
 * type R = ArrayPlus.Find<string[], number> // never
 * ```
 *
 * @typeParam Options['widen'] performs widen match.
 * Default to `true`.
 * With widen match, a narrowed type will match its widen type.
 * e.g. matching `1` against `number` yields `1 | undefined`
 *
 * The widen behavior can be customized by `Options['$widen']`
 *
 * @typeParam Options['$never'] return type when `A` is `never`. Default to `never`.
 *
 * @typeParam Options['$notMatch'] Return value when `T` does not match `Criteria`.
 * Default to `never`.
 *
 * @typeParam Options['$tuple'] return type when `A` is a tuple. Default to `not supported` message.
 *
 * @typeParam Options['$widen'] return type when `T` in `A` is a widen type of `Criteria`.
 * Default to `Criteria | undefined`.
 * Set it to `never` for a more type-centric behavior
 *
 * @typeParam Options['$unionNotMatch'] Return value when a branch of the union `T` does not match `Criteria`.
 * Default to `never`.
 *
 * If you want the type to behave more like JavaScript,
 * you can override it to return `undefined`.
 *
 * Since it is a union, the result will be joined to the matched branch as union.
 */
type Find$1<A$1 extends readonly unknown[], Criteria, Options$1 extends Find$1.Options = Find$1.DefaultOptions<Criteria>> = IsTuple<A$1, {
  $then: $ResolveOptions<[Options$1['$tuple'], Find$1.DefaultOptions<Criteria>['$tuple']]>;
  $else: A$1 extends Readonly<Array<infer T>> ? ElementMatch<T, Criteria, Options$1> : never;
}>;
declare namespace Find$1 {
  interface Options extends ElementMatch.Options, $Never.$Options {
    $tuple?: unknown;
  }
  interface DefaultOptions<Criteria> extends ElementMatch.DefaultOptions<Criteria>, $Never.$Default {
    $tuple: 'does not support tuple. Please use `FindFirst` or `TuplePlus.Find` instead.';
  }
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array_plus.is_index_out_of_bound.d.ts
/**
 * 🎭 *predicate*
 *
 * Is `N` an out of bound index of `A`.
 *
 * @example
 * ```ts
 * type R = IsIndexOutOfBound<[1], 0> // false
 * type R = IsIndexOutOfBound<[1], -1> // false
 *
 * type R = IsIndexOutOfBound<[1], 1> // true
 * type R = IsIndexOutOfBound<[1], -2> // true
 * ```
 */
type IsIndexOutOfBound<A$1 extends readonly unknown[], N$1 extends number, Then = true, Else = false> = IsNever<IndexAt<A$1, N$1, never, never, never>, {
  $then: Then;
  $else: Else;
}>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/tuple/create_tuple.d.ts
/**
 * Creates `Tuple<T>` with `L` number of elements.
 * @note Other cool implementations by @lazytype, @jcalz:
 * @see https://github.com/microsoft/TypeScript/issues/26223#issuecomment-674514787
 * @see https://github.com/microsoft/TypeScript/issues/47874#issuecomment-1039157322
 */
type CreateTuple<L$1 extends number, T$1 = unknown, Fail = never> = number extends L$1 ? T$1[] : IsPositive<L$1> extends true ? IsInteger<L$1> extends true ? ToTuple<[], DigitArray.FromString<`${L$1}`>, T$1> : Fail : Fail;
type ToTuple<R$1 extends any[], S$1 extends number[], X = any> = S$1['length'] extends 0 ? R$1 : S$1['length'] extends 1 ? [...R$1, ...DigitToTuple<X>[S$1[0]]] : S$1 extends [any, ...infer T] ? T extends any[] ? ToTuple<Multi10<[...R$1, ...DigitToTuple<X>[S$1[0]]]>, T> : never : never;
type DigitToTuple<T$1 = 1> = { [k in number]: any[] } & {
  0: [];
  1: [T$1];
  2: [T$1, T$1];
  3: [T$1, T$1, T$1];
  4: [T$1, T$1, T$1, T$1];
  5: [T$1, T$1, T$1, T$1, T$1];
  6: [T$1, T$1, T$1, T$1, T$1, T$1];
  7: [T$1, T$1, T$1, T$1, T$1, T$1, T$1];
  8: [T$1, T$1, T$1, T$1, T$1, T$1, T$1, T$1];
  9: [T$1, T$1, T$1, T$1, T$1, T$1, T$1, T$1, T$1];
};
type Multi10<C$1 extends any[]> = [...C$1, ...C$1, ...C$1, ...C$1, ...C$1, ...C$1, ...C$1, ...C$1, ...C$1, ...C$1];
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array_plus.pad_start.d.ts
type PadStart$1<A$1 extends readonly unknown[], MaxLength extends number, PadWith = unknown> = MaxLength extends 0 ? A$1 : CanAssign<PadWith, UnionOfValues<A$1>> extends true ? A$1 : PadStart$1<[...CreateTuple<MaxLength, PadWith>, ...A$1], MaxLength, PadWith>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/is_array.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate that `T` is an array.
 *
 * @example
 * ```ts
 * type R = IsArray<number[]> // true
 * type R = IsArray<[1]> // true
 *
 * type R = IsArray<number> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is an array, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsArray<number[], { selection: 'filter' }> // number[]
 * type R = IsArray<number, { selection: 'filter' }> // never
 * ```
 *
 * 🔢 *customize*
 *
 * Disable distribution of union types.
 *
 * @example
 * ```ts
 * type R = IsArray<number[] | 1> // boolean
 * type R = IsArray<number[] | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Check if `T` is exactly an array, excluding tuple.
 *
 * @example
 * ```ts
 * type R = IsArray<[]> // true
 * type R = IsArray<[], { exact: true }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsArray<number[], IsArray.$Branch> // $Then
 * type R = IsArray<number, IsArray.$Branch> // $Else
 * ```
 */
type IsArray<T$1, $O extends IsArray.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsArray.$<T$1, $O>;
}>>;
declare namespace IsArray {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is an array.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $Exact.Parse<$O, {
    $then: $Distributive.Parse<$O, {
      $then: T$1 extends readonly any[] ? number extends T$1['length'] ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Else]>;
      $else: [T$1] extends [readonly any[]] ? number extends T$1['length'] ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Else]>;
    }>;
    $else: $Distributive.Parse<$O, {
      $then: T$1 extends readonly any[] ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
      $else: [T$1] extends readonly [any[]] ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
    }>;
  }>;
  type $UtilOptions = Assignable.$UtilOptions & $Exact.Options;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/array_plus.split_at.d.ts
/**
 * ⚗️ *transform*
 *
 * Splits array or tuple `A` into two at the specified `Index`.
 *
 * If the `Index` is out of bounds,
 * it will set to the boundary value.
 *
 * It is the type level `splice()`.
 *
 * @example
 * ```ts
 * SplitAt<[1, 2, 3, 4, 5], 2> // [[1, 2], [3, 4, 5]]
 * SplitAt<[1, 2, 3, 4, 5], -3> // [[1, 2], [3, 4, 5]]
 *
 * SplitAt<[1, 2, 3, 4, 5], 2, 2> // [[1, 2, 5], [3, 4]]
 *
 * SplitAt<[1, 2, 3, 4, 5], 2, 2, ['a', 'b']> // [[1, 2, 'a', 'b', 5], [3, 4]]
 *
 * // out of bound resets to boundary
 * SplitAt<[1, 2, 3, 4, 5], 6> // [[1, 2, 3, 4, 5], []]
 * SplitAt<[1, 2, 3, 4, 5], -6> // [[], [1, 2, 3, 4, 5]]
 * ```
 */
type SplitAt<A$1 extends readonly unknown[], Index extends number, DeleteCount extends number | never = never, Insert extends readonly unknown[] | never = never> = IsArray<A$1, {
  exact: true;
  $then: [A$1, A$1];
  $else: SplitAt._<A$1, [], [], IndexAt._<A$1, Index>, DeleteCount, Insert>;
}>;
declare namespace SplitAt {
  type _<A$1 extends readonly unknown[], B$1 extends readonly unknown[], C$1 extends readonly unknown[], Index extends number, DeleteCount, Insert extends readonly unknown[]> = 0 extends A$1['length'] ? IsTuple<Insert, {
    $then: [[...Insert, ...B$1], C$1];
    $else: [B$1, C$1];
  }> : Index extends B$1['length'] ? IsNever<DeleteCount, {
    $then: [B$1, A$1];
    $else: _D<A$1, B$1, C$1, DeleteCount, Insert>;
  }> : A$1 extends readonly [infer Head, ...infer Tail] ? _<Tail, [...B$1, Head], [], Index, DeleteCount, Insert> : 'unexpected: A does not extends [Head, ...Tail]';
  type _D<A$1 extends readonly unknown[], B$1 extends readonly unknown[], C$1 extends readonly unknown[], DeleteCount, Insert extends readonly unknown[]> = DeleteCount extends C$1['length'] ? IsTuple<Insert, {
    $then: [[...B$1, ...Insert, ...A$1], C$1];
    $else: [[...B$1, ...A$1], C$1];
  }> : A$1 extends readonly [infer Head, ...infer Tail] ? _D<Tail, B$1, [...C$1, Head], DeleteCount, Insert> : IsTuple<Insert, {
    $then: [[...Insert, ...B$1], C$1];
    $else: [B$1, C$1];
  }>;
}
declare namespace array_plus_d_exports {
  export { At, CommonPropKeys$2 as CommonPropKeys, Concat, DropMatch$2 as DropMatch, ElementMatch, Entries, Filter$2 as Filter, Find$1 as Find, FindLast, IndexAt, IsIndexOutOfBound, IsReadonly, PadStart$1 as PadStart, Reverse$1 as Reverse, Some, SplitAt };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/tuple/tuple_plus.filter.d.ts
/**
 * ⚗️ *transform*
 *
 * Filter entries matching `Criteria` in tuple `T`.
 *
 * @example
 * ```ts
 * type R = Filter<[1, 2, '3'], number> // [1, 2]
 * type R = Filter<[1, 2, '3'], true> // []
 * ```
 */
type Filter$1<T$1 extends readonly unknown[], Criteria = true> = T$1['length'] extends 0 ? [] : T$1 extends readonly [infer Head, ...infer Tail] ? Tail['length'] extends 0 ? Head extends Criteria ? [Head] : [] : Head extends Criteria ? [Head, ...Filter$1<Tail, Criteria>] : Filter$1<Tail, Criteria> : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/filter.d.ts
/**
 * ⚗️ *transform*
 *
 * Filter the array or tuple `A`, keeping entries satisfying `Criteria`.
 *
 * @example
 * ```ts
 * type R = Filter<[1, 2, '3'], number> // [1, 2]
 * type R = Filter<Array<string | undefined>, string> // string[]
 * ```
 */
type Filter<A$1 extends readonly unknown[], Criteria> = number extends A$1['length'] ? Filter$2<A$1, Criteria> : Filter$1<A$1, Criteria>;
/**
 * ⚗️ *transform*
 * 👽 *alias*
 *
 * Keeps entries satisfying `Criteria` in array or tuple `A`.
 *
 * @alias of [Filter](./filter.ts)
 * @example
 * ```ts
 * type R = KeepMatch<[1, 2, 3], number> // [1, 2]
 * type R = KeepMatch<Array<string|undefined>, string> // string[]
 * ```
 */
type KeepMatch<A$1 extends readonly unknown[], Criteria> = Filter<A$1, Criteria>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/tuple/tuple_plus.find.d.ts
/**
 * 🦴 *utilities*
 * 🔢 *customizable*
 *
 * Find the first type in tuple `A` that matches `Criteria`.
 *
 * @example
 * ```ts
 * type R = TuplePlus.Find<[true, 1, 'x', 3], string> // 'x'
 * type R = TuplePlus.Find<[true, 1, 'x', 3], number> // 1
 * type R = TuplePlus.Find<[string, number, 1], 1> // widen: 1 | undefined
 * type R = TuplePlus.Find<[true, number | string], string> // unionMiss: string | undefined
 *
 * type R = TuplePlus.Find<[true, 1, 'x'], 2> // never
 * ```
 *
 * @typeParam Options['widen'] performs widen match.
 * Default to `true`.
 * With widen match, a narrowed type will match its widen type.
 * e.g. matching `1` against `number` yields `1 | undefined`
 *
 * The widen behavior can be customized by `Options['$widen']`
 *
 * @typeParam Options['$array'] return type when `A` is an array. Default to `not supported` message.
 *
 * @typeParam Options['caseEmptyTuple'] return type when `A` is an empty tuple.
 * Default to `never`.
 *
 * @typeParam Options['$never'] return type when `A` is `never`. Default to `never`.
 *
 * @typeParam Options['$notMatch'] Return value when `T` does not match `Criteria`.
 * Default to `never`.
 *
 * @typeParam Options['$widen'] return type when `T` in `A` is a widen type of `Criteria`.
 * Default to `Criteria | undefined`.
 * Set it to `never` for a more type-centric behavior
 *
 * @typeParam Options['$unionNotMatch'] Return value when a branch of the union `T` does not match `Criteria`.
 * Default to `never`.
 *
 * If you want the type to behave more like JavaScript,
 * you can override it to return `undefined`.
 *
 * Since it is a union, the result will be joined to the matched branch as union.
 */
type Find<A$1 extends readonly unknown[], Criteria, Options$1 extends Find.Options = Find.DefaultOptions<Criteria>> = TypePlusOptions.Merge<Options$1, Find.DefaultOptions<Criteria>> extends infer O extends Find.Options ? IsTuple<A$1, {
  $then: A$1['length'] extends 0 ? O['$emptyTuple'] : Find.Device<A$1, Criteria, O>;
  $else: O['$array'];
}> : never;
declare namespace Find {
  type Device<A$1 extends readonly unknown[], Criteria, Options$1 extends Find.Options> = A$1['length'] extends 0 ? Options$1['$notMatch'] : A$1 extends readonly [infer Head, ...infer Tail] ? ElementMatch<Head, Criteria, TypePlusOptions.Merge<{
    $notMatch: Device<Tail, Criteria, Options$1>;
  }, Options$1>> : never;
  interface Options extends ElementMatch.Options, $Never.$Options {
    $array?: unknown;
    $emptyTuple?: unknown;
  }
  interface DefaultOptions<Criteria> extends ElementMatch.DefaultOptions<Criteria>, $Never.$Default {
    $array: 'does not support array. Please use `FindFirst` or `ArrayPlus.Find` instead.';
    $emptyTuple: never;
  }
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/find_first.d.ts
/**
 * 🦴 *utilities*
 * 🔢 *customizable*
 *
 * Find the first type in the array or tuple `A` that matches `Criteria`.
 *
 * If the `Criteria` is not met, it will return `never'.
 *
 * @example
 * ```ts
 * type R = FindFirst<[true, 1, 'x', 3], string> // 'x'
 * type R = FindFirst<[true, 1, 'x', 3], number> // 1
 * type R = FindFirst<[string, number, 1], 1> // widen: 1 | undefined
 * type R = FindFirst<[true, number | string], string> // unionMiss: string | undefined
 * type R = FindFirst<Array<string>, string> // string
 * type R = FindFirst<Array<1 | 2 | 'x'>, number> // 1 | 2 | undefined
 * type R = FindFirst<Array<string | number>, number | string> // string | number
 * type R = FindFirst<Array<number>, 1> // widen: 1 | undefined
 * type R = FindFirst<Array<string | number>, number> // unionMiss: number | undefined
 *
 * type R = FindFirst<[true, 1, 'x'], 2> // never
 * type R = FindFirst<string[], number> // never
 * ```
 *
 * @typeParam Options['widen'] performs widen match.
 * Default to `true`.
 * With widen match, a narrowed type will match its widen type.
 * e.g. matching `1` against `number` yields `1 | undefined`
 *
 * The widen behavior can be customized by `Options['$widen']`
 *
 * @typeParam Options['caseEmptyTuple'] return type when `A` is an empty tuple.
 * Default to `never`.
 *
 * @typeParam Options['$never'] return type when `A` is `never`. Default to `never`.
 *
 * @typeParam Options['$noMatch'] Return value when `T` does not match `Criteria`.
 * Default to `never`.
 *
 * @typeParam Options['$widen'] return type when `T` in `A` is a widen type of `Criteria`.
 * Default to `Criteria | undefined`.
 * Set it to `never` for a more type-centric behavior
 *
 * @typeParam Options['$unionMiss'] Return value when a branch of the union `T` does not match `Criteria`.
 * Default to `undefined`.
 * Since it is a union, the result will be join to the matched branch as union.
 */
type FindFirst<A$1 extends readonly unknown[], Criteria, Options$1 extends FindFirst.Options = FindFirst.DefaultOptions<Criteria>> = IsTuple<A$1, {
  $then: Find<A$1, Criteria, Options$1>;
  $else: Find$1<A$1, Criteria, Options$1>;
}>;
declare namespace FindFirst {
  interface Options extends Find$1.Options, Find.Options {}
  interface DefaultOptions<Criteria> extends Find$1.DefaultOptions<Criteria>, Find.DefaultOptions<Criteria> {}
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/head.d.ts
/**
 * 🦴 *utilities*
 * 🔢 *customizable*
 *
 * Gets the first entry in the tuple or the type of array `T`.
 *
 * @example
 * ```ts
 * type R = Head<[1, 2, 3]> // 1
 * type R = Head<string[]> // string
 *
 * type R = Head<[]> // never
 * ```
 *
 * @typeParam Options['$never'] Return type when `T` is `never`.
 * Default to `never`.
 *
 * @typeParam Options['caseEmptyTuple'] Return type when `T` is `[]`.
 * Default to `never`.
 */
type Head$1<T$1 extends readonly unknown[], Options$1 extends Head$1.Options = Head$1.DefaultOptions> = IsNever<T$1, $Selection.Branch> extends infer R ? R extends $Then ? Options$1['$never'] : R extends $Else ? T$1['length'] extends 0 ? Options$1['caseEmptyTuple'] : T$1[0] : never : never;
declare namespace Head$1 {
  interface Options extends $Never.$Options {
    caseEmptyTuple?: unknown;
  }
  interface DefaultOptions extends $Never.$Default {
    caseEmptyTuple: never;
  }
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/any_record.d.ts
type AnyRecord = Record<KeyTypes, any>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/predicates/Extends.d.ts
/**
 * @deprecated use `$Assignable`
 */
type Extendable<A$1, B$1, Then = A$1, Else = never> = A$1 extends B$1 ? Then : Else;
type NotExtendable<A$1, B$1, Then = A$1, Else = never> = A$1 extends B$1 ? Else : Then;
type IsExtend<A$1, B$1, Then = true, Else = false> = A$1 extends B$1 ? Then : Else;
type IsNotExtend<A$1, B$1, Then = true, Else = false> = A$1 extends B$1 ? Else : Then;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/predicates/CanAssign.d.ts
/**
 * Can `A` assign to `B`
 *
 * Note that when union is involved, the assignability is measured distributively.
 * Meaning the result can be `Then | Else` (i.e. `boolean` by default),
 * instead of distinctive `Then` (`true`) or `Else` (`false`).
 *
 * This is the correct behavior.
 *
 * @deprecated use `Assignable<A, B>` instead
 *
 * @example
 * ```ts
 * CanAssign<number | string, number> // boolean
 * ```
 *
 * We are checking can `A` assign to `B`.
 * Since `A` is `number | string`,
 * `A` can assign to `B` when `A` is number` (true), and
 * `A` cannot assign to `B` when `A` is string` (false).
 * So the result is `true | false = boolean`.
 *
 * If you want to make sure all branches are assignable,
 * use `StrictCanAssign<A, B>`.
 */
type CanAssign<A$1, B$1, Then = true, Else = false> = boolean extends A$1 ? boolean extends B$1 ? Then : Else : A$1 extends B$1 ? Then : Else;
/**
 * Can `A` strictly assign to `B`.
 *
 * All branches in an union `A` are assignable to `B`.
 *
 * @deprecated use `Assignable<A, B, { distributive: false }>` instead
 *
 * @example
 * ```ts
 * StrictCanAssign<number | string, number> // false
 * StrictCanAssign<number | string, number | string> // true
 * ```
 */
type StrictCanAssign<A$1, B$1, Then = true, Else = false> = Assignable<A$1, B$1, {
  distributive: false;
  $then: Then;
  $else: Else;
}>;
/**
 * @deprecated use `Assignable<A, B>` instead
 */
type IsAssign<A$1, B$1, Then = true, Else = false> = CanAssign<A$1, B$1, Then, Else>;
declare function canAssign<T$1>(canAssign: false): <S$1>(subject: NotExtendable<S$1, T$1>) => true;
declare function canAssign<T$1>(): <S$1 extends T$1>(subject: S$1) => CanAssign<S$1, T$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/predicates/If.d.ts
type If<Condition extends boolean, Then = true, Else = false> = Condition extends true ? Then : Else;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/predicates/IsEmptyObject.d.ts
type IsEmptyObject<T$1> = T$1 extends {} ? ({} extends T$1 ? true : false) : false;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/predicates/literal.d.ts
/**
 * Validate if specified type is a scalar literal.
 *
 * 🎭 *predicate*
 *
 * @example
 * ```ts
 * type R = IsLiteral<string> // false
 * type R = IsLiteral<number> // false
 * type R = IsLiteral<boolean> // false
 * type R = IsLiteral<bigint> // false
 * type R = IsLiteral<symbol> // false
 *
 * type R = IsLiteral<'a'> // true
 * type R = IsLiteral<1> // true
 * type R = IsLiteral<true> // true
 * type R = IsLiteral<1n> // true
 * type R = IsLiteral<typeof someSymbol> // true
 * ```
 */
type IsLiteral<T$1 extends number | boolean | bigint | string | symbol, Then = true, Else = false> = number extends T$1 ? Else : string extends T$1 ? Else : boolean extends T$1 ? Else : symbol extends T$1 ? Else : bigint extends T$1 ? Else : Then;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/hasKey.d.ts
type HasKey<T$1, K$1, Then = true, Else = false> = K$1 extends keyof T$1 ? Then : Else;
declare function hasKey<T$1 extends AnyRecord, K$1 extends string>(subject: T$1, ...keys: K$1[]): HasKey<T$1, K$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/IsDisjoint.d.ts
/**
 * Are the two records disjoint from each other.
 * Disjoint means no common property.
 */
type IsDisjoint<A$1 extends AnyRecord, B$1 extends AnyRecord> = And<Not<HasKey<A$1, keyof B$1>>, Not<HasKey<B$1, keyof A$1>>>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/ValueOf.d.ts
type ValueOf<T$1> = T$1[keyof T$1];
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/KeysWithDiffType.d.ts
type KeysWithDiffType<A$1 extends AnyRecord, B$1 extends AnyRecord> = IsDisjoint<A$1, B$1> extends true ? never : ValueOf<{ [k in keyof A$1 & keyof B$1]: A$1[k] extends B$1[k] ? never : k }>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/ANotB.d.ts
type ANotB<A$1 extends AnyRecord, B$1 extends AnyRecord> = IsEqual<A$1, B$1> extends true ? never : IsDisjoint<A$1, B$1> extends true ? A$1 : { [k in Exclude<keyof A$1, keyof B$1> | KeysWithDiffType<A$1, B$1>]: A$1[k] };
type BNotA<A$1 extends AnyRecord, B$1 extends AnyRecord> = ANotB<B$1, A$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/optional_key.d.ts
/**
 * Validate if the key `K` in `T` is optional.
 *
 * 🎭 *predicate*
 *
 * @example
 * ```ts
 * IsOptionalKey({ a: 1 }, 'a') // false
 * IsOptionalKey({ a?: 1 }, 'a') // true
 * ```
 */
type IsOptionalKey<T$1, K$1, Then = true, Else = false> = K$1 extends OptionalKeys<T$1> ? Then : Else;
/**
 * Gets the optional keys of `T`.
 *
 * 🦴 *utilities*
 *
 * @example
 * ```ts
 * OptionalKeys<{ a: 1 }> // never
 * OptionalKeys<{ a?: 1, b: number }> // 'a'
 * ```
 */
type OptionalKeys<T$1> = T$1 extends unknown ? { [k in keyof T$1]-?: Record<KeyTypes, any> extends Pick<T$1, k> ? k : never }[keyof T$1] : never;
/**
 * Parse `T` to keep only the optional properties.
 */
type OptionalProps<T$1 extends AnyRecord> = T$1 extends unknown ? { [k in OptionalKeys<T$1>]?: T$1[k] } : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/RequiredKeys.d.ts
type RequiredKeys<T$1 extends Record<KeyTypes, any>> = T$1 extends unknown ? RequiredKeys._<T$1> : never;
declare namespace RequiredKeys {
  type _<T$1 extends Record<KeyTypes, any>> = Exclude<keyof T$1, OptionalKeys<T$1>>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/adjust_exact_optional_props.d.ts
/**
 * ⚗️ *transform*
 *
 * Adjust `T` to work with compiler flag [exactOptionalPropertyTypes](https://www.typescriptlang.org/tsconfig/#exactOptionalPropertyTypes).
 *
 * It adds `undefined` to optional properties.
 */
type AdjustExactOptionalProps<T$1 extends AnyRecord> = T$1 extends object ? [{ [K in OptionalKeys<T$1>]?: T$1[K] | undefined }, { [K in RequiredKeys<T$1>]: T$1[K] }] extends [infer O extends AnyRecord, infer R extends AnyRecord] ? keyof O extends never ? R : keyof R extends never ? O : O & R : never : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/ExcludePropType.d.ts
/**
 * Exclude type U from properties in T.
 */
type ExcludePropType<T$1 extends Record<keyof any, any>, U$1> = { [k in keyof T$1]: Exclude<T$1[k], U$1> };
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/everyKey.d.ts
declare function everyKey<S$1 extends Record<KeyTypes, any>, T$1 = any>(subject: S$1, predicate: (this: T$1, key: keyof S$1, index: number, array: string[]) => unknown, thisArg?: T$1): boolean;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/facade.d.ts
/**
 * creates a facade of the subject.
 */
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1>(subject: T$1, prop1: P1$1): Pick<T$1, P1$1>;
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1, P2$1 extends keyof T$1>(subject: T$1, prop1: P1$1, prop2: P2$1): Pick<T$1, P1$1 | P2$1>;
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1, P2$1 extends keyof T$1, P3 extends keyof T$1>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3): Pick<T$1, P1$1 | P2$1 | P3>;
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1, P2$1 extends keyof T$1, P3 extends keyof T$1, P4 extends keyof T$1>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4): Pick<T$1, P1$1 | P2$1 | P3 | P4>;
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1, P2$1 extends keyof T$1, P3 extends keyof T$1, P4 extends keyof T$1, P5 extends keyof T$1>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5): Pick<T$1, P1$1 | P2$1 | P3 | P4 | P5>;
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1, P2$1 extends keyof T$1, P3 extends keyof T$1, P4 extends keyof T$1, P5 extends keyof T$1, P6 extends keyof T$1>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6): Pick<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6>;
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1, P2$1 extends keyof T$1, P3 extends keyof T$1, P4 extends keyof T$1, P5 extends keyof T$1, P6 extends keyof T$1, P7 extends keyof T$1>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7): Pick<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7>;
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1, P2$1 extends keyof T$1, P3 extends keyof T$1, P4 extends keyof T$1, P5 extends keyof T$1, P6 extends keyof T$1, P7 extends keyof T$1, P8 extends keyof T$1>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8): Pick<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8>;
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1, P2$1 extends keyof T$1, P3 extends keyof T$1, P4 extends keyof T$1, P5 extends keyof T$1, P6 extends keyof T$1, P7 extends keyof T$1, P8 extends keyof T$1, P9 extends keyof T$1>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9): Pick<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9>;
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1, P2$1 extends keyof T$1, P3 extends keyof T$1, P4 extends keyof T$1, P5 extends keyof T$1, P6 extends keyof T$1, P7 extends keyof T$1, P8 extends keyof T$1, P9 extends keyof T$1, P10 extends keyof T$1>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9, prop10: P10): Pick<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10>;
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1, P2$1 extends keyof T$1, P3 extends keyof T$1, P4 extends keyof T$1, P5 extends keyof T$1, P6 extends keyof T$1, P7 extends keyof T$1, P8 extends keyof T$1, P9 extends keyof T$1, P10 extends keyof T$1, P11 extends keyof T$1>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9, prop10: P10, prop11: P11): Pick<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10 | P11>;
declare function facade<T$1 extends AnyRecord, P1$1 extends keyof T$1, P2$1 extends keyof T$1, P3 extends keyof T$1, P4 extends keyof T$1, P5 extends keyof T$1, P6 extends keyof T$1, P7 extends keyof T$1, P8 extends keyof T$1, P9 extends keyof T$1, P10 extends keyof T$1, P11 extends keyof T$1, P12 extends keyof T$1>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9, prop10: P10, prop11: P11, prop12: P12): Pick<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10 | P11 | P12>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/filterKey.d.ts
declare function filterKey<S$1 extends Record<KeyTypes, any>, T$1 = any>(subject: S$1, predicate: (this: T$1, key: keyof S$1, index: number, obj: Array<keyof S$1>, subject: S$1) => boolean, thisArg?: T$1): Array<keyof S$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/findKey.d.ts
declare function findKey<S$1 extends Record<KeyTypes, any>, T$1 = any>(subject: S$1, predicate: (this: T$1, key: keyof S$1, index: number, obj: Array<keyof S$1>, subject: S$1) => boolean, thisArg?: T$1): keyof S$1 | undefined;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/forEachKey.d.ts
declare function forEachKey<S$1 extends Record<KeyTypes, any>, T$1 = any>(subject: S$1, predicate: (this: T$1, key: keyof S$1, index: number, obj: Array<keyof S$1>) => void, thisArg?: T$1): void;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/union_keys.d.ts
/**
 * `UnionKeys<T>` will distribute keys of an union to individual types.
 * This should be used in conjuncture with distributive types.
 */
type UnionKeys<T$1> = keyof T$1 | (T$1 extends unknown ? keyof T$1 : never);
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/getField.d.ts
declare function getField<T$1, TX extends Exclude<T$1, undefined | null>, K$1 extends UnionKeys<TX>>(subject: T$1, key: K$1): TX[K$1];
declare function getField<T$1, TX extends Exclude<T$1, undefined | null>, K$1 extends UnionKeys<TX>, DV extends Exclude<TX[K$1], undefined>>(subject: T$1, key: K$1, defaultValue: DV): DV;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/hasProperty.d.ts
declare function hasProperty<T$1, P$1 extends UnionKeys<T$1>>(value: T$1, prop: P$1): value is T$1 & Record<P$1, T$1[P$1]>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/IsRecord.d.ts
type IsRecord<T$1> = T$1 extends any[] ? false : T$1 extends Record<any, any> ? true : false;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/KeyofOptional.d.ts
type KeysOfOptional<T$1> = T$1 extends Record<infer U, any> ? U : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/primitive.d.ts
/**
 * 📘 Definition of all primitive types.
 */
type PrimitiveTypes = boolean | number | string | object | symbol | bigint | Function | undefined | null;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/KnownKeys.d.ts
type KnownKeys<T$1> = T$1 extends PrimitiveTypes ? never : { [K in keyof T$1]: string extends K ? never : number extends K ? never : K } extends { [_ in keyof T$1]: infer U } ? {} extends U ? never : U : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/left_join.d.ts
type LeftJoin<A$1 extends AnyRecord, B$1 extends AnyRecord> = IsEqual<A$1, B$1> extends true ? A$1 : IsDisjoint<A$1, B$1> extends true ? A$1 & B$1 : Properties<{ [k in Exclude<keyof A$1, keyof B$1>]: A$1[k] } & { [k in keyof B$1]: B$1[k] }>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/mapKey.d.ts
declare function mapKey<R$1, S$1 extends Record<KeyTypes, any>, T$1 = any>(subject: S$1, predicate: (this: T$1, key: keyof S$1, index: number, obj: Array<keyof S$1>, subject: S$1) => R$1, thisArg?: T$1): R$1[];
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/mapProperties.d.ts
/**
 * An Object-specific version of `map`.
 * Original source:
 * <https://stackoverflow.com/questions/53964071/how-to-dynamically-create-mapped-type-in-typescript>
 *
 * `ramda` has a similar function (`mapObjIndexed()`) with different parameter order.
 * I keep this parameter order because this parameter order provides better type inference.
 */
declare function mapProperties<Subject extends AnyRecord, ResultProp>(subject: Subject, callbackfn: (value: ValueOf<Subject>, key: keyof Subject, obj: Subject) => ResultProp): { [K in keyof Subject]: ResultProp };
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/pick.d.ts
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1): Pick$1<T$1, P1$1>;
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1): Pick$1<T$1, P1$1 | P2$1>;
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3): Pick$1<T$1, P1$1 | P2$1 | P3>;
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4): Pick$1<T$1, P1$1 | P2$1 | P3 | P4>;
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5): Pick$1<T$1, P1$1 | P2$1 | P3 | P4 | P5>;
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6): Pick$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6>;
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7): Pick$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7>;
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>, P8 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8): Pick$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8>;
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>, P8 extends UnionKeys<T$1>, P9 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9): Pick$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9>;
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>, P8 extends UnionKeys<T$1>, P9 extends UnionKeys<T$1>, P10 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9, prop10: P10): Pick$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10>;
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>, P8 extends UnionKeys<T$1>, P9 extends UnionKeys<T$1>, P10 extends UnionKeys<T$1>, P11 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9, prop10: P10, prop11: P11): Pick$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10 | P11>;
declare function pick<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>, P8 extends UnionKeys<T$1>, P9 extends UnionKeys<T$1>, P10 extends UnionKeys<T$1>, P11 extends UnionKeys<T$1>, P12 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9, prop10: P10, prop11: P11, prop12: P12): Pick$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10 | P11 | P12>;
declare function pick<T$1 extends AnyRecord, Props extends UnionKeys<T$1>>(subject: T$1, ...props: Props[]): Pick$1<T$1, Props>;
/**
 * Pick properties `K` from `T`.
 * Works with union.
 *
 * Original type by Titian Cernicova-Dragomir
 * @see <https://github.com/microsoft/TypeScript/issues/28339#issuecomment-463577347>
 */
type Pick$1<T$1, K$1 extends UnionKeys<T$1>> = T$1 extends unknown ? Pick$1._<T$1, keyof T$1 & K$1> : never;
declare namespace Pick$1 {
  type _<T$1, K$1 extends keyof T$1> = { [P in K$1]: T$1[P] };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/omit.d.ts
/**
 * Omit properties from a type.
 *
 * @origin [typescript#28339](https://github.com/microsoft/TypeScript/issues/28339#issuecomment-463577347)
 * @originAuthor Titian Cernicova-Dragomir
 * @alternative [type-zoo](https://github.com/pelotom/type-zoo)
 */
type Omit$1<T$1, K$1 extends UnionKeys<T$1>> = T$1 extends unknown ? Pick$1<T$1, Exclude<keyof T$1, K$1>> : never;
/**
 * @deprecated replaced by `Omit`
 */
type Except<T$1, K$1 extends keyof T$1> = Omit$1<T$1, K$1>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1): Omit$1<T$1, P1$1>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1): Omit$1<T$1, P1$1 | P2$1>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3): Omit$1<T$1, P1$1 | P2$1 | P3>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4): Omit$1<T$1, P1$1 | P2$1 | P3 | P4>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5): Omit$1<T$1, P1$1 | P2$1 | P3 | P4 | P5>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6): Omit$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7): Omit$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>, P8 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8): Omit$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>, P8 extends UnionKeys<T$1>, P9 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9): Omit$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>, P8 extends UnionKeys<T$1>, P9 extends UnionKeys<T$1>, P10 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9, prop10: P10): Omit$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>, P8 extends UnionKeys<T$1>, P9 extends UnionKeys<T$1>, P10 extends UnionKeys<T$1>, P11 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9, prop10: P10, prop11: P11): Omit$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10 | P11>;
declare function omit<T$1 extends AnyRecord, P1$1 extends UnionKeys<T$1>, P2$1 extends UnionKeys<T$1>, P3 extends UnionKeys<T$1>, P4 extends UnionKeys<T$1>, P5 extends UnionKeys<T$1>, P6 extends UnionKeys<T$1>, P7 extends UnionKeys<T$1>, P8 extends UnionKeys<T$1>, P9 extends UnionKeys<T$1>, P10 extends UnionKeys<T$1>, P11 extends UnionKeys<T$1>, P12 extends UnionKeys<T$1>>(subject: T$1, prop1: P1$1, prop2: P2$1, prop3: P3, prop4: P4, prop5: P5, prop6: P6, prop7: P7, prop8: P8, prop9: P9, prop10: P10, prop11: P11, prop12: P12): Omit$1<T$1, P1$1 | P2$1 | P3 | P4 | P5 | P6 | P7 | P8 | P9 | P10 | P11 | P12>;
declare function omit<T$1 extends AnyRecord, Props extends UnionKeys<T$1>>(subject: T$1, ...props: Props[]): Omit$1<T$1, Props>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/Partial.d.ts
/**
 * An alternative `Partial<T>` type that works with `exactOptionalPropertyTypes`
 */
type Partial<T$1> = { [P in keyof T$1]?: T$1[P] | undefined };
/**
 * Apply `Partial<>` on the selected properties.
 */
type PartialPick<T$1, U$1 extends UnionKeys<T$1>> = T$1 extends T$1 ? Omit$1<T$1, U$1> & Partial<Pick$1<T$1, U$1>> : never;
/**
 * @deprecated replaced by `PartialOmit`
 */
type PartialExcept<T$1, U$1 extends UnionKeys<T$1>> = T$1 extends T$1 ? Pick$1<T$1, U$1> & Partial<Omit$1<T$1, U$1>> : never;
/**
 * Apply `Partial<>` on all not selected properties.
 */
type PartialOmit<T$1, U$1 extends UnionKeys<T$1>> = T$1 extends T$1 ? Pick$1<T$1, U$1> & Partial<Omit$1<T$1, U$1>> : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/RecursiveIntersect.d.ts
/**
 * Intersect type recursively.
 * The recursion terminates at level 7 due to design limit of TypeScript.
 *
 * Normal use case is intersecting betwee two object types.
 * While it works for value types and top level array,
 * top level array does not recursive into the elements.
 * NOTE: in latest TypeScript,
 * `undefined` is not an accepted value.
 * The resulting type would be `never`
 */
type RecursiveIntersect<T$1, U$1> = T$1 & (T$1 extends Array<infer Y> ? Array<Y & U$1> & U$1 : T$1 extends AnyRecord ? { [P in keyof T$1]: T$1[P] extends Array<infer R> ? Array<RecursiveIntersect<R, U$1>> & U$1 : T$1[P] extends AnyRecord ? RecursiveIntersect<T$1[P], U$1> : T$1[P] & U$1 } & U$1 : U$1);
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/RecursiveRequired.d.ts
type RecursiveRequired<T$1> = { [P in keyof T$1]-?: T$1[P] extends (infer U)[] ? RecursiveRequired<U>[] : T$1[P] extends AnyRecord ? RecursiveRequired<T$1[P]> : T$1[P] };
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/utils/as.d.ts
declare function as<T$1>(subject: unknown): T$1;
declare function asAny(subject: unknown): any;
/**
 * amend `subject` with type `T`
 */
declare function amend<S$1>(subject: S$1): {
  union<T$1>(): T$1 & S$1;
  intersect<T$1>(): T$1 | S$1;
};
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/utils/inspect.d.ts
/**
 * Inspects the value and returns it.
 */
declare function inspect<T$1>(value: T$1, inspector?: (value: Readonly<T$1>) => void): T$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/utils/Widen.d.ts
/**
 * ⚗️ *transform*
 *
 * Widen literal types to their respective parent types.
 *
 * ```ts
 * type R = Widen<1> // number
 * type R = Widen<true> // boolean
 * type R = Widen<'a'> // string
 * ```
 */
type Widen<T$1> = T$1 extends boolean ? boolean : T$1 extends number ? number : T$1 extends string ? string : T$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/utils/index.d.ts
/**
 * `A` | `B` | `A & B`.
 * Supports up to 4 types, and it is composable.
 * This is useful when you want to compose multiple options together,
 * while preserving their required field and structure.
 * If the types overlaps each other, you may run into some corner cases.
 * But in general usage it should work as expected.
 * @example
 * type A = { src: string, minify?: boolean }
 * type B = { logLevel: number }
 * function config(options: EitherAnd<A, B>) { }
 *
 * config({ logLevel: 1 })
 * config({ src: 'src' })
 * config({ src: 'src', minify: false })
 * config({ minify: false })  // INVALID
 */
type EitherOrBoth<A$1, B$1, C$1 = void, D = void> = C$1 extends void ? A$1 | B$1 | (A$1 & B$1) : D extends void ? A$1 | B$1 | C$1 | (A$1 & B$1) | (A$1 & C$1) | (B$1 & C$1) | (A$1 & B$1 & C$1) : A$1 | B$1 | C$1 | D | (A$1 & B$1) | (A$1 & C$1) | (A$1 & D) | (B$1 & C$1) | (B$1 & D) | (C$1 & D) | (A$1 & B$1 & C$1) | (A$1 & B$1 & D) | (A$1 & C$1 & D) | (B$1 & C$1 & D) | (A$1 & B$1 & C$1 & D);
/**
 * `A` | `B` | `A & B`.
 * Supports up to 4 types, and it is composable.
 * This is useful when you want to compose multiple options together,
 * while preserving their required field and structure.
 * If the types overlaps each other, you may run into some corner cases.
 * But in general usage it should work as expected.
 * @deprecated renamed to `EitherOrBoth`
 * @example
 * type A = { src: string, minify?: boolean }
 * type B = { logLevel: number }
 * function config(options: EitherAnd<A, B>) { }
 *
 * config({ logLevel: 1 })
 * config({ src: 'src' })
 * config({ src: 'src', minify: false })
 * config({ minify: false })  // INVALID
 */
type EitherAnd<A$1, B$1, C$1 = void, D = void> = EitherOrBoth<A$1, B$1, C$1, D>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/record.d.ts
/**
 * Creates a `Record<Key, Value>` or your custom record.
 * By default,
 * `record()` will widen the keys (`K`) you specified in the `value` to form `Record<Widen<K>, V>`.
 *
 * You can also override it by specifying a custom record, e.g.:
 * `record<{ a: number }>()`
 */
declare function record<K$1 extends KeyTypes, V>(value?: Record<K$1, V>): Record<Widen<K$1>, V>;
declare function record<R$1 extends Record<any, any>>(value?: R$1): R$1;
/**
 * Gets the value type `T` from `Record<any, T>`.
 */
type RecordValue<R$1 extends Record<any, any>> = R$1 extends Record<any, infer T> ? T : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/function/any_function.d.ts
type AnyFunction<Params extends any[] = any[], Result$1 = any> = (...args: Params) => Result$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/recursive_partial.d.ts
/**
 * Creates a recursive partial type of type T.
 *
 * @example
 * ```ts
 * interface Foo {
 *   bar: number;
 *   baz: {
 *     qux: string
 *   }
 * }
 *
 * type PartialFoo = RecursivePartial<Foo>
 * // {
 * //   bar?: number | undefined;
 * //   baz?: {
 * //     qux?: string | undefined
 * //   } | undefined
 * // }
 * ```
 */
type RecursivePartial<T$1> = { [P in keyof T$1]?: T$1[P] extends (infer U)[] ? RecursivePartial<U>[] | undefined : T$1[P] extends infer F extends AnyFunction ? [keyof T$1[P]] extends [undefined] ? T$1[P] | undefined : ExtractFunction<F> & RecursivePartial<Properties<T$1[P]>> : T$1[P] extends AnyRecord ? RecursivePartial<T$1[P]> | undefined : T$1[P] | undefined };
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/reduceKey.d.ts
declare function reduceByKey<S$1 extends Record<KeyTypes, any>, T$1>(subject: S$1, callbackfn: (previousValue: T$1, key: keyof S$1, currentIndex: number, array: string[], subject: S$1) => T$1, initialValue: T$1): T$1;
/**
 * @deprecated renamed to reduceByKey
 */
declare const reduceKey: typeof reduceByKey;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/replaceProperty.d.ts
type ReplaceProperty<T$1 extends AnyRecord, K$1 extends keyof T$1, V> = Omit<T$1, K$1> & { [P in K$1]: V };
declare function replaceProperty<T$1 extends AnyRecord, K$1 extends keyof T$1, V>(subject: T$1, key: K$1, value: V): ReplaceProperty<T$1, K$1, V>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/SpreadRecord.d.ts
type SpreadRecord<A$1 extends Record<any, any>, B$1 extends Record<any, any>> = Omit$1<A$1, Extract<keyof A$1, keyof B$1>> & B$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/someKey.d.ts
declare function someKey<S$1 extends Record<KeyTypes, any>, T$1 = any>(subject: S$1, predicate: (this: T$1, key: keyof S$1, index: number, array: string[], subject: S$1) => unknown, thisArg?: T$1): boolean;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/split.d.ts
type Splitter<T$1 extends AnyRecord> = Partial<{ [k in keyof T$1]: T$1[k] | undefined }>;
type Split<T$1 extends AnyRecord, S$1 extends AnyRecord> = { [k in keyof S$1]-?: S$1[k] extends undefined ? T$1[k] : NonNullable<T$1[k]> | Exclude<S$1[k], undefined> };
/**
 * Split an object into multiple objects.
 * @returns [...entries, remaining]
 */
declare function split<T$1 extends AnyRecord, S1 extends Splitter<T$1>>(target: T$1, split1: S1): [Split<T$1, S1>, Omit$1<T$1, keyof S1>];
declare function split<T$1 extends AnyRecord, S1 extends Splitter<T$1>, S2 extends Splitter<T$1>>(target: T$1, split1: S1, split2: S2): [Split<T$1, S1>, Split<T$1, S2>, Omit$1<T$1, keyof S1 | keyof S2>];
declare function split<T$1 extends AnyRecord, S1 extends Splitter<T$1>, S2 extends Splitter<T$1>, S3 extends Splitter<T$1>>(target: T$1, splitter1: S1, splitter2: S2, splitter3: S3): [Split<T$1, S1>, Split<T$1, S2>, Split<T$1, S3>, Omit$1<T$1, keyof S1 | keyof S2 | keyof S3>];
declare function split<T$1 extends AnyRecord, S1 extends Splitter<T$1>, S2 extends Splitter<T$1>, S3 extends Splitter<T$1>, S4 extends Splitter<T$1>>(target: T$1, splitter1: S1, splitter2: S2, splitter3: S3, splitter4: S4): [Split<T$1, S1>, Split<T$1, S2>, Split<T$1, S3>, Split<T$1, S4>, Omit$1<T$1, keyof S1 | keyof S2 | keyof S3 | keyof S4>];
declare function split<T$1 extends AnyRecord, S1 extends Splitter<T$1>, S2 extends Splitter<T$1>, S3 extends Splitter<T$1>, S4 extends Splitter<T$1>, S5 extends Splitter<T$1>>(target: T$1, splitter1: S1, splitter2: S2, splitter3: S3, splitter4: S4, splitter5: S5): [Split<T$1, S1>, Split<T$1, S2>, Split<T$1, S3>, Split<T$1, S4>, Split<T$1, S5>, Omit$1<T$1, keyof S1 | keyof S2 | keyof S3 | keyof S4 | keyof S5>];
declare function split<T$1 extends AnyRecord, S1 extends Splitter<T$1>, S2 extends Splitter<T$1>, S3 extends Splitter<T$1>, S4 extends Splitter<T$1>, S5 extends Splitter<T$1>, S6 extends Splitter<T$1>>(target: T$1, splitter1: S1, splitter2: S2, splitter3: S3, splitter4: S4, splitter5: S5, splitter6: S6): [Split<T$1, S1>, Split<T$1, S2>, Split<T$1, S3>, Split<T$1, S4>, Split<T$1, S5>, Split<T$1, S6>, Omit$1<T$1, keyof S1 | keyof S2 | keyof S3 | keyof S4 | keyof S5 | keyof S6>];
declare function split<T$1 extends AnyRecord, S1 extends Splitter<T$1>, S2 extends Splitter<T$1>, S3 extends Splitter<T$1>, S4 extends Splitter<T$1>, S5 extends Splitter<T$1>, S6 extends Splitter<T$1>, S7 extends Splitter<T$1>>(target: T$1, splitter1: S1, splitter2: S2, splitter3: S3, splitter4: S4, splitter5: S5, splitter6: S6, splitter7: S7): [Split<T$1, S1>, Split<T$1, S2>, Split<T$1, S3>, Split<T$1, S4>, Split<T$1, S5>, Split<T$1, S6>, Split<T$1, S7>, Omit$1<T$1, keyof S1 | keyof S2 | keyof S3 | keyof S4 | keyof S5 | keyof S6 | keyof S7>];
declare function split<T$1 extends AnyRecord, S1 extends Splitter<T$1>, S2 extends Splitter<T$1>, S3 extends Splitter<T$1>, S4 extends Splitter<T$1>, S5 extends Splitter<T$1>, S6 extends Splitter<T$1>, S7 extends Splitter<T$1>, S8 extends Splitter<T$1>>(target: T$1, splitter1: S1, splitter2: S2, splitter3: S3, splitter4: S4, splitter5: S5, splitter6: S6, splitter7: S7, splitter8: S8): [Split<T$1, S1>, Split<T$1, S2>, Split<T$1, S3>, Split<T$1, S4>, Split<T$1, S5>, Split<T$1, S6>, Split<T$1, S7>, Split<T$1, S8>, Omit$1<T$1, keyof S1 | keyof S2 | keyof S3 | keyof S4 | keyof S5 | keyof S6 | keyof S7 | keyof S8>];
declare function split<T$1 extends AnyRecord, S1 extends Splitter<T$1>, S2 extends Splitter<T$1>, S3 extends Splitter<T$1>, S4 extends Splitter<T$1>, S5 extends Splitter<T$1>, S6 extends Splitter<T$1>, S7 extends Splitter<T$1>, S8 extends Splitter<T$1>, S9 extends Splitter<T$1>>(target: T$1, splitter1: S1, splitter2: S2, splitter3: S3, splitter4: S4, splitter5: S5, splitter6: S6, splitter7: S7, splitter8: S8, splitter9: S9): [Split<T$1, S1>, Split<T$1, S2>, Split<T$1, S3>, Split<T$1, S4>, Split<T$1, S5>, Split<T$1, S6>, Split<T$1, S7>, Split<T$1, S8>, Split<T$1, S9>, Omit$1<T$1, keyof S1 | keyof S2 | keyof S3 | keyof S4 | keyof S5 | keyof S6 | keyof S7 | keyof S8 | keyof S9>];
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/typeOverrideIncompatible.d.ts
declare function typeOverrideIncompatible<A$1 extends AnyRecord>(): <B$1 extends AnyRecord>(source: B$1, override: ANotB<A$1, B$1>) => A$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/intersect_of_props.d.ts
/**
 * 🦴 *utilities*
 *
 * Gets the intersect of properties of the elements in `A`.
 */
type IntersectOfProps<A$1 extends readonly Record<any, unknown>[], P$1 extends KeyTypes> = number extends A$1['length'] ? A$1[0][P$1] : A$1['length'] extends 0 ? never : A$1['length'] extends 1 ? A$1[0][P$1] : A$1[0][P$1] & IntersectOfProps<Tail$1<A$1>, P$1>;
/**
 * Gets the intersect of properties of the elements in `A`
 * This will be deprecated in 4.0. Please use IntersectOfProps instead.
 */
type MapToProp<A$1 extends Record<any, any>[], P$1 extends KeyTypes> = IntersectOfProps<A$1, P$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/predicates/not_assignable.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `A` is not assignable to `B`.]
 *
 * @example
 * ```ts
 * type R = NotAssignable<any, any> // false
 * type R = NotAssignable<any, 1> // false
 * type R = NotAssignable<unknown, unknown> // false
 * type R = NotAssignable<never, never> // false
 * type R = NotAssignable<1, 1> // false
 * type R = NotAssignable<'a', 'a'> // false
 * type R = NotAssignable<'a', 'b'> // true
 * type R = NotAssignable<'a', string> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `A` is not assignable to `B`.
 *
 * @example
 * ```ts
 * type R = NotAssignable<any, any, { selection: 'filter' }> // never
 * type R = NotAssignable<string, number, { selection: 'filter' }> // string
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = NotAssignable<any, any, NotAssignable.$Branch> // $Else
 * ```
 *
 * 🔢 *customize*
 *
 * Override special types branch.
 *
 * @example
 * ```ts
 * type R = NotAssignable<any, any, { $any: 1 }> // 1
 * type R = NotAssignable<unknown, any, { $unknown: 1 }> // 1
 * type R = NotAssignable<never, any, { $never: 1 }> // 1
 * ```
 */
type NotAssignable<A$1, B$1, $O extends NotAssignable.$Options = {}> = $Special<B$1, {
  $any: $ResolveBranch<$O, [0 extends 1 & A$1 ? $Any : unknown, $Else], A$1>;
  $unknown: $ResolveBranch<$O, [[A$1, unknown] extends [unknown, A$1] ? $Unknown : unknown, $Else], A$1>;
  $never: $ResolveBranch<$O, [A$1, never] extends [never, A$1] ? [$Never, $Else] : [$Then], A$1>;
  $else: $Special<A$1, {
    $any: $ResolveBranch<$O, [$Any, $Else], A$1>;
    $unknown: $ResolveBranch<$O, [$Unknown, $Else], A$1>;
    $never: $ResolveBranch<$O, [$Never, $Else], A$1>;
    $else: NotAssignable.$<A$1, B$1, $O>;
  }>;
}>;
declare namespace NotAssignable {
  type $Options = $Selection.Options & $Distributive.Options & $InputOptions<$Any | $Unknown | $Never>;
  type $Default = $Selection.Predicate & $Distributive.Default;
  type $Branch<$O extends $Distributive.Options = {}> = $Selection.Branch & $O;
  /**
   * 🧰 *type util*
   *
   * Validate if `A` is assignable to `B`.
   *
   * This is the internal logic of `NotAssignable`.
   * It does not check against special types.
   *
   * It is suitable for building custom types.
   */
  type $<A$1, B$1, $O extends $UtilOptions> = $Distributive.Parse<$O, {
    $then: A$1 extends B$1 ? $ResolveBranch<$O, [$Else], A$1> : $ResolveBranch<$O, [$Then], A$1>;
    $else: [A$1] extends [B$1] ? $ResolveBranch<$O, [$Else], A$1> : $ResolveBranch<$O, [$Then], A$1>;
  }>;
  type $UtilOptions = $Selection.Options & $Distributive.Options;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/is_not_array.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate that `T` is not an array.
 *
 * @example
 * ```ts
 * type R = IsNotArray<number[]> // false
 * type R = IsNotArray<[1]> // false
 *
 * type R = IsNotArray<number> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not an array, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotArray<number[], { selection: 'filter' }> // never
 * type R = IsNotArray<number, { selection: 'filter' }> // number
 * ```
 *
 * 🔢 *customize*
 *
 * Disable distribution of union types.
 *
 * @example
 * ```ts
 * type R = IsNotArray<number[] | 1> // boolean
 * type R = IsNotArray<number[] | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Check if `T` is not exactly an array, including tuple.
 *
 * @example
 * ```ts
 * type R = IsNotArray<[]> // false
 * type R = IsNotArray<[], { exact: true }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotArray<number[], IsNotArray.$Branch> // $Else
 * type R = IsNotArray<number, IsNotArray.$Branch> // $Then
 * ```
 */
type IsNotArray<T$1, $O extends IsNotArray.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotArray.$<T$1, $O>;
}>>;
declare namespace IsNotArray {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is not an array.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $Exact.Parse<$O, {
    $then: $Distributive.Parse<$O, {
      $then: T$1 extends readonly any[] ? number extends T$1['length'] ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Then], T$1>;
      $else: [T$1] extends [readonly any[]] ? number extends T$1['length'] ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Then], T$1>;
    }>;
    $else: $Distributive.Parse<$O, {
      $then: T$1 extends readonly any[] ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
      $else: [T$1] extends readonly [any[]] ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
    }>;
  }>;
  type $UtilOptions = NotAssignable.$UtilOptions & $Exact.Options;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/last.d.ts
/**
 * 🦴 *utilities*
 *
 * Gets the last entry in the tuple or the type of array `T`.
 *
 * @example
 * ```ts
 * type R = Last<[1, 2, 3]> // 3
 * type R = Last<string[]> // string
 *
 * type R = Last<[]> // never
 * ```
 *
 * @typeParam Options['$never'] Return type when `T` is `never`.
 * Default to `never`.
 *
 * @typeParam Options['caseEmptyTuple'] Return type when `T` is `[]`.
 * Default to `never`.
 */
type Last<T$1 extends readonly unknown[], Options$1 extends Last.Options = Last.DefaultOptions> = IsNever<T$1, {
  $then: Options$1['$never'];
  $else: T$1['length'] extends 0 ? Options$1['caseEmptyTuple'] : T$1 extends readonly [...unknown[], infer R] ? R : T$1[0];
}>;
declare namespace Last {
  interface Options extends $Never.$Options {
    caseEmptyTuple?: unknown;
  }
  interface DefaultOptions extends $Never.$Default {
    caseEmptyTuple: never;
  }
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/literal_array.d.ts
/**
 * 🦴 *utilities*
 *
 * return an array whose items are restricted to the provided literals.
 */
declare function literalArray<T$1 extends KeyTypes>(...entries: T$1[]): T$1[];
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/pad_start.d.ts
/**
 * Pads the start of an array or tuple with `PadWith`.
 *
 * ⚗️ *transform*
 *
 * @example
 * ```ts
 * // Padding array
 * PadStart<number[], 1, string> // [string, ...number[]]
 *
 * // Ignore if the type is compatible
 * PadStart<number[], 2, number> // number[]
 * PadStart<number[], 3, 1> // number[]
 *
 * // Padding tuple
 * PadStart<[1, 2, 3], 5, 0> // [0, 0, 1, 2, 3]
 *
 * // Ignore if MaxLength is less than the length of the tuple
 * PadStart<[1, 2, 3], 5, 0> // [0, 0, 1, 2, 3]
 *
 * // Default to unknown
 * PadStart<[1, 2, 3], 5> // [unknown, unknown, 1, 2, 3]
 * ```
 */
type PadStart<A$1 extends readonly unknown[], MaxLength extends number, PadWith = unknown> = number extends A$1['length'] ? PadStart$1<A$1, MaxLength, PadWith> : PadStart$2<A$1, MaxLength, PadWith>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/reduce_while.d.ts
/**
 * 🦴 *utilities*
 *
 * `reduce()` with predicate for early termination.
 * A simple version of the same function in the `ramda` package.
 */
declare function reduceWhile<T$1, R$1>(predicate: (acc: R$1, currentValue: T$1) => boolean, callbackfn: (previousValue: R$1, currentValue: T$1, currentIndex: number, array: T$1[]) => R$1, initialValue: R$1, array: T$1[]): R$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/reverse.d.ts
/**
 * ⚗️ *transform*
 *
 * reverses the order of `A`.
 */
type Reverse<A$1 extends unknown[]> = number extends A$1['length'] ? A$1 : A$1['length'] extends 0 ? A$1 : A$1['length'] extends 1 ? A$1 : A$1 extends [any, ...infer T] ? T extends any[] ? [...Reverse<T>, A$1[0]] : never : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/array/union_of_props.d.ts
/**
 * Gets the union of properties of the elements in `A`
 */
type UnionOfProps<A$1 extends readonly Record<any, any>[], P$1 extends KeyTypes> = A$1['length'] extends 0 ? never : A$1['length'] extends 1 ? A$1[0][P$1] : A$1[0][P$1] | UnionOfProps<Tail$1<A$1>, P$1>;
/**
 * Gets the union of properties in the element of `A`
 * This will be deprecated in 4.0. Please use UnionOfProps instead.
 */
type PropUnion<A$1 extends readonly Record<any, any>[], P$1 extends KeyTypes> = UnionOfProps<A$1, P$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/class/AnyConstructor.d.ts
type AnyConstructor<Params extends any[] = any[]> = new (..._args: Params) => void;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/class/isConstructor.d.ts
/**
 * Is the subject a constructor function.
 *
 * @deprecated this is not a failsafe test,
 * it will return true for any function that can be called with `new`.
 *
 * If the subject is an arrow function,
 * it can still return true after compilation.
 *
 * Thus this function is not safe to use.
 */
declare function isConstructor(subject: unknown): subject is AnyConstructor;
/**
 * instanceof type guard for unknown value.
 */
declare function isInstanceof<T$1 extends AnyConstructor>(subject: unknown, classConstructor: T$1): subject is InstanceType<T$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/assertion/assert_type.d.ts
/**
 * 💥 *immediate*
 * 🚦 *assertion*
 *
 * Assert the subject satisfies the specified type T
 * @type T the type to check against.
 */
declare function assertType<T$1>(subject: T$1): asserts subject is T$1;
declare function assertType<T$1>(subject: unknown, validator: (s: T$1) => boolean): asserts subject is T$1;
/**
 * @deprecated this is not a failsafe test
 */
declare function assertType<T$1 extends new (..._args: any[]) => any>(subject: unknown, classConstructor: T$1): asserts subject is InstanceType<T$1>;
declare namespace assertType {
  var isUndefined: (subject: undefined) => asserts subject is undefined;
  var noUndefined: <S$1>(subject: Exclude<S$1, undefined>) => void;
  var isNull: (subject: null) => asserts subject is null;
  var noNull: <S$1>(subject: Exclude<S$1, null>) => void;
  var isNumber: (subject: number) => asserts subject is number;
  var noNumber: <S$1>(subject: Exclude<S$1, number>) => void;
  var isBoolean: (subject: boolean) => asserts subject is boolean;
  var noBoolean: <S$1>(subject: Exclude<S$1, boolean>) => void;
  var isTrue: (subject: true) => asserts subject is true;
  var noTrue: <S$1>(subject: Exclude<S$1, true>) => void;
  var isFalse: (subject: false) => asserts subject is false;
  var noFalse: <S$1>(subject: Exclude<S$1, false>) => void;
  var isString: (subject: string) => asserts subject is string;
  var noString: <S$1>(subject: Exclude<S$1, string>) => void;
  var isFunction: (subject: AnyFunction) => asserts subject is AnyFunction;
  var noFunction: <S$1>(subject: Exclude<S$1, AnyFunction>) => void;
  var isConstructor: (subject: AnyConstructor) => asserts subject is AnyConstructor;
  var isError: (subject: Error) => asserts subject is Error;
  var noError: <S$1>(subject: Exclude<S$1, Error>) => void;
  var isNever: (_subject: never) => asserts _subject is never;
  var custom: <T$1>(validator: (s: T$1) => boolean) => ((subject: unknown) => asserts subject is T$1);
  var as: <T$1>(_subject: unknown) => asserts _subject is T$1;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/bigint/cast.d.ts
/**
 * Cast a string to a bigint literal type if possible.
 *
 * ```ts
 * StringToBigint<'1n'> // 1n
 * StringToBigint<'-1n'> // -1n
 * ```
 */
type StringToBigint<S$1 extends string, Fail = never> = S$1 extends `-0n` ? 0n : S$1 extends `${infer N extends bigint}n` ? N : Fail;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/bigint/is_bigint_literal.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is bigint literals.
 *
 * @example
 * ```ts
 * type R = IsBigintLiteral<bigint> // false
 * type R = IsBigintLiteral<1n> // true
 *
 * type R = IsBigintLiteral<never> // false
 * type R = IsBigintLiteral<unknown> // false
 * type R = IsBigintLiteral<string | boolean> // false
 *
 * type R = IsBigintLiteral<string | number> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is bigint literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsBigintLiteral<bigint, { selection: 'filter' }> // never
 * type R = IsBigintLiteral<1n, { selection: 'filter' }> // 1n
 *
 * type R = IsBigintLiteral<never, { selection: 'filter' }> // never
 * type R = IsBigintLiteral<unknown, { selection: 'filter' }> // never
 * type R = IsBigintLiteral<string | boolean, { selection: 'filter' }> // never
 *
 * type R = IsBigintLiteral<string | number> // number
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsBigintLiteral<1n | string> // boolean
 * type R = IsBigintLiteral<1n | string, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsBigintLiteral<1n, $SelectionBranch> // $Then
 * type R = IsBigintLiteral<string, $SelectionBranch> // $Else
 * ```
 */
type IsBigintLiteral<T$1, $O extends IsBigintLiteral.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsBigintLiteral.$<T$1, $O>;
}>>;
declare namespace IsBigintLiteral {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is bigint literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }>;
  type $UtilOptions = Assignable.$UtilOptions;
  type _D<T$1, $O extends $UtilOptions> = T$1 extends bigint & infer U ? U extends bigint ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Else]>;
  type _N<T$1, $O extends $UtilOptions> = [T$1] extends [bigint & infer U] ? U extends bigint ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Else]>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/bigint/is_not_bigint.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `bigint` nor `bigint` literals.
 *
 * @example
 * ```ts
 * type R = IsNotBigint<bigint> // false
 * type R = IsNotBigint<1n> // false
 *
 * type R = IsNotBigint<never> // true
 * type R = IsNotBigint<unknown> // true
 * type R = IsNotBigint<string | boolean> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `bigint` nor `bigint` literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotBigint<bigint, { selection: 'filter' }> // never
 * type R = IsNotBigint<1n, { selection: 'filter' }> // never
 *
 * type R = IsNotBigint<never, { selection: 'filter' }> // never
 * type R = IsNotBigint<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotBigint<string | boolean, { selection: 'filter' }> // string | boolean
 * ```
 *
 * 🔢 *customize*:
 *
 * Validate if `T` is not exactly `bigint`.
 *
 * @example
 * ```ts
 * type R = IsNotBigint<bigint, { exact: true }> // false
 * type R = IsNotBigint<1n, { exact: true }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Disable distribution of union types.
 *
 * @example
 * ```ts
 * type R = IsNotBigint<bigint | 1> // boolean
 * type R = IsNotBigint<bigint | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotBigint<string, $SelectionBranch> // $Then
 * type R = IsNotBigint<bigint, $SelectionBranch> // $Else
 * ```
 */
type IsNotBigint<T$1, $O extends IsNotBigint.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotBigint.$<T$1, $O>;
}>>;
declare namespace IsNotBigint {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is not `bigint` nor `bigint` literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], false]> extends true ? $Distributive.Parse<$O, {
    $then: _SD<T$1, $O>;
    $else: _SN<T$1, $O>;
  }> : NotAssignable.$<T$1, bigint, $O>;
  type $UtilOptions = NotAssignable.$UtilOptions & $Exact.Options;
  type _SD<T$1, $O extends $Options> = T$1 extends bigint & infer U ? U extends bigint ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
  type _SN<T$1, $O extends $Options> = [T$1] extends [bigint & infer U] ? U extends bigint ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/bigint/is_not_bigint_literal.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not bigint literals.
 *
 * @example
 * ```ts
 * type R = IsNotBigintLiteral<bigint> // true
 * type R = IsNotBigintLiteral<1n> // false
 *
 * type R = IsNotBigintLiteral<never> // true
 * type R = IsNotBigintLiteral<unknown> // true
 * type R = IsNotBigintLiteral<string | boolean> // true
 *
 * type R = IsNotBigintLiteral<string | 1n> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not bigint literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotBigintLiteral<bigint, { selection: 'filter' }> // bigint
 * type R = IsNotBigintLiteral<1n, { selection: 'filter' }> // never
 *
 * type R = IsNotBigintLiteral<never, { selection: 'filter' }> // never
 * type R = IsNotBigintLiteral<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotBigintLiteral<1n | string, { selection: 'filter' }> // string
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNotBigintLiteral<1n | string> // boolean
 * type R = IsNotBigintLiteral<1n | string, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotBigintLiteral<1n, $SelectionBranch> // $Else
 * type R = IsNotBigintLiteral<bigint, $SelectionBranch> // $Then
 * ```
 */
type IsNotBigintLiteral<T$1, $O extends IsNotBigintLiteral.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotBigintLiteral.$<T$1, $O>;
}>>;
declare namespace IsNotBigintLiteral {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Default = $Selection.Predicate & $Distributive.Default & $Exact.Default;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is not number literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }>;
  type $UtilOptions = Assignable.$UtilOptions;
  type _D<T$1, $O extends $UtilOptions> = T$1 extends bigint & infer U ? U extends bigint ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Then], T$1>;
  type _N<T$1, $O extends $UtilOptions> = [T$1] extends [bigint & infer U] ? U extends bigint ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Then], T$1>;
}
declare namespace bit_d_exports {
  export { And$1 as And, Bit, Not$1 as Not, Or$1 as Or, Xor$1 as Xor };
}
type Bit = 0 | 1;
/**
 * Bitwise NOT operation.
 *
 * @since 🏷️ 8.0.0
 */
type Not$1<X extends Bit> = X extends 0 ? 1 : 0;
/**
 * Bitwise AND operation.
 *
 * @since 🏷️ 8.0.0
 */
type And$1<A$1 extends Bit, B$1 extends Bit> = A$1 extends 1 ? (B$1 extends 1 ? 1 : 0) : 0;
/**
 * Bitwise OR operation.
 *
 * @since 🏷️ 8.0.0
 */
type Or$1<A$1 extends Bit, B$1 extends Bit> = A$1 extends 1 ? 1 : B$1 extends 1 ? 1 : 0;
/**
 * Bitwise XOR operation.
 *
 * @since 🏷️ 8.0.0
 */
type Xor$1<A$1 extends Bit, B$1 extends Bit> = A$1 extends 1 ? Not$1<B$1> : B$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/boolean/is_boolean.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `boolean`, including `true` and `false`.
 *
 * @example
 * ```ts
 * type R = IsBoolean<boolean> // true
 * type R = IsBoolean<true> // true
 * type R = IsBoolean<false> // true
 *
 * type R = IsBoolean<number> // false
 * type R = IsBoolean<unknown> // false
 * type R = IsBoolean<string | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `boolean`, including `true` and `false`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsBoolean<boolean, { selection: 'filter' }> // boolean
 * type R = IsBoolean<true, { selection: 'filter' }> // true
 * type R = IsBoolean<false, { selection: 'filter' }> // true
 *
 * type R = IsBoolean<number, { selection: 'filter' }> // never
 * type R = IsBoolean<unknown, { selection: 'filter' }> // never
 * type R = IsBoolean<never, { selection: 'filter' }> // never
 * type R = IsBoolean<string | boolean, { selection: 'filter' }> // boolean
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsBoolean<boolean | 1> // boolean
 * type R = IsBoolean<boolean | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsBoolean<boolean, $SelectionBranch> // $Then
 * type R = IsBoolean<string, $SelectionBranch> // $Else
 * ```
 */
type IsBoolean<T$1, $O extends IsBoolean.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsBoolean.$<T$1, $O>;
}>>;
declare namespace IsBoolean {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `boolean` or `boolean` literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], $Exact.Default]> extends true ? $Distributive.Parse<$O, {
    $then: _SD<T$1, $O>;
    $else: _N<T$1, $O>;
  }> : Assignable.$<T$1, boolean, $O>;
  type $UtilOptions = Assignable.$UtilOptions & $Exact.Options;
  type _SD<T$1, $O extends $Options> = IsBoolean._DistributeMap<T$1> extends infer R ? ['aBcD' | 'AbCd' | 'abcd'] extends [R] ? $ResolveBranch<$O, [$Then], boolean> | $ResolveBranch<$O, [$Else], Exclude<T$1, boolean>> : ['aBcD' | 'AbCd'] extends [R] ? $ResolveBranch<$O, [$Then], T$1> : ['aBcd' | 'Abcd'] extends [R] ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : never;
  type _N<T$1, $O extends $Options> = [T$1] extends [boolean] ? [T$1] extends [true] ? $ResolveBranch<$O, [$Else]> : [T$1] extends [false] ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
  type _DistributeMap<T$1> = T$1 extends true ? T$1 extends false ? true extends T$1 ? false extends T$1 ? 'ABCD' : 'ABCd' : false extends T$1 ? 'ABcD' : 'ABcd' : true extends T$1 ? false extends T$1 ? 'AbCD' : 'AbCd' : false extends T$1 ? 'AbcD' : 'Abcd' : T$1 extends false ? true extends T$1 ? false extends T$1 ? 'aBCD' : 'aBCd' : false extends T$1 ? 'aBcD' : 'aBcd' : true extends T$1 ? false extends T$1 ? 'abCD' : 'abCd' : false extends T$1 ? 'abcD' : 'abcd';
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/boolean/is_false.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `false`.
 *
 * @example
 * ```ts
 * type R = IsFalse<boolean> // boolean
 * type R = IsFalse<true> // false
 * type R = IsFalse<false> // true
 *
 * type R = IsFalse<number> // false
 * type R = IsFalse<unknown> // false
 * type R = IsFalse<string | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `false`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsFalse<boolean, { selection: 'filter' }> // false
 * type R = IsFalse<true, { selection: 'filter' }> // never
 * type R = IsFalse<false, { selection: 'filter' }> // false
 *
 * type R = IsFalse<number, { selection: 'filter' }> // never
 * type R = IsFalse<unknown, { selection: 'filter' }> // never
 * type R = IsFalse<never, { selection: 'filter' }> // never
 * type R = IsFalse<string | boolean, { selection: 'filter' }> // false
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsFalse<false | 1> // boolean
 * type R = IsFalse<boolean | 1> // boolean
 * type R = IsFalse<boolean | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsFalse<false, $SelectionBranch> // $Then
 * type R = IsFalse<boolean, $SelectionBranch> // $Then | $Else
 * type R = IsFalse<string, $SelectionBranch> // $Else
 * ```
 */
type IsFalse<T$1, $O extends IsFalse.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsFalse.$<T$1, $O>;
}>>;
declare namespace IsFalse {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `false`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = Assignable.$<T$1, false, $O>;
  type $UtilOptions = Assignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/boolean/is_not_boolean.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `boolean`.
 *
 * @example
 * ```ts
 * type R = IsNotBoolean<boolean> // false
 * type R = IsNotBoolean<true> // false
 * type R = IsNotBoolean<false> // false
 *
 * type R = IsNotBoolean<number> // true
 * type R = IsNotBoolean<unknown> // true
 * type R = IsNotBoolean<string | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `boolean`, including `true` and `false`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotBoolean<boolean, { selection: 'filter' }> // never
 * type R = IsNotBoolean<true, { selection: 'filter' }> // never
 * type R = IsNotBoolean<false, { selection: 'filter' }> // never
 *
 * type R = IsNotBoolean<number, { selection: 'filter' }> // number
 * type R = IsNotBoolean<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotBoolean<never, { selection: 'filter' }> // never
 * type R = IsNotBoolean<string | boolean, { selection: 'filter' }> // string
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNotBoolean<boolean | 1> // boolean
 * type R = IsNotBoolean<boolean | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotBoolean<boolean, $SelectionBranch> // $Else
 * type R = IsNotBoolean<string, $SelectionBranch> // $Then
 * ```
 */
type IsNotBoolean<T$1, $O extends IsNotBoolean.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotBoolean.$<T$1, $O>;
}>>;
declare namespace IsNotBoolean {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Default = $Selection.Predicate & $Distributive.Default & $Exact.Default;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is not `boolean` nor `boolean` literals.
   *r
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], false]> extends true ? $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }> : NotAssignable.$<T$1, boolean, $O>;
  type $UtilOptions = NotAssignable.$UtilOptions & $Exact.Options;
  type _D<T$1, $O extends $Options> = IsBoolean._DistributeMap<T$1> extends infer R ? ['aBcD' | 'AbCd' | 'abcd'] extends [R] ? $ResolveBranch<$O, [$Then | $Else], Exclude<T$1, boolean>> : ['aBcD' | 'AbCd'] extends [R] ? $ResolveBranch<$O, [$Else]> : ['aBcd' | 'Abcd'] extends [R] ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : never;
  type _N<T$1, $O extends $Options> = [T$1] extends [boolean] ? [T$1] extends [true] ? $ResolveBranch<$O, [$Then], T$1> : [T$1] extends [false] ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/boolean/is_not_false.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `false`.
 *
 * @example
 * ```ts
 * type R = IsNotFalse<boolean> // boolean
 * type R = IsNotFalse<true> // true
 * type R = IsNotFalse<false> // false
 *
 * type R = IsNotFalse<number> // true
 * type R = IsNotFalse<unknown> // true
 * type R = IsNotFalse<string | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `false`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotFalse<boolean, { selection: 'filter' }> // true
 * type R = IsNotFalse<true, { selection: 'filter' }> // true
 * type R = IsNotFalse<false, { selection: 'filter' }> // never
 *
 * type R = IsNotFalse<number, { selection: 'filter' }> // number
 * type R = IsNotFalse<never, { selection: 'filter' }> // never
 * type R = IsNotFalse<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotFalse<string | boolean, { selection: 'filter' }> // string | true
 * type R = IsNotFalse<string | false, { selection: 'filter' }> // string
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNotFalse<false | 1> // boolean
 * type R = IsNotFalse<boolean | 1> // boolean
 * type R = IsNotFalse<boolean | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotFalse<false, $SelectionBranch> // $Else
 * type R = IsNotFalse<boolean, $SelectionBranch> // $Then | $Else
 * type R = IsNotFalse<string, $SelectionBranch> // $Then
 * ```
 */
type IsNotFalse<T$1, $O extends IsNotFalse.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotFalse.$<T$1, $O>;
}>>;
declare namespace IsNotFalse {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Default = $Selection.Predicate & $Distributive.Default & $Exact.Default;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is not `false`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = NotAssignable.$<T$1, false, $O>;
  type $UtilOptions = NotAssignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/boolean/is_not_true.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `true`.
 *
 * @example
 * ```ts
 * type R = IsNotTrue<boolean> // boolean
 * type R = IsNotTrue<true> // false
 * type R = IsNotTrue<false> // true
 *
 * type R = IsNotTrue<number> // true
 * type R = IsNotTrue<unknown> // true
 * type R = IsNotTrue<string | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `true`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotTrue<boolean, { selection: 'filter' }> // false
 * type R = IsNotTrue<true, { selection: 'filter' }> // never
 * type R = IsNotTrue<false, { selection: 'filter' }> // false
 *
 * type R = IsNotTrue<number, { selection: 'filter' }> // number
 * type R = IsNotTrue<never, { selection: 'filter' }> // never
 * type R = IsNotTrue<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotTrue<string | boolean, { selection: 'filter' }> // string | false
 * type R = IsNotTrue<string | true, { selection: 'filter' }> // string
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNotTrue<boolean | 1> // boolean
 * type R = IsNotTrue<true | 1> // boolean
 * type R = IsNotTrue<false | 1> // true
 * type R = IsNotTrue<boolean | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotTrue<true, $SelectionBranch> // $Else
 * type R = IsNotTrue<boolean, $SelectionBranch> // $Then | $Else
 * type R = IsNotTrue<string, $SelectionBranch> // $Then
 * ```
 */
type IsNotTrue<T$1, $O extends IsNotTrue.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotTrue.$<T$1, $O>;
}>>;
declare namespace IsNotTrue {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is not `true`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = NotAssignable.$<T$1, true, $O>;
  type $UtilOptions = NotAssignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/boolean/is_true.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `true`.
 *
 * @example
 * ```ts
 * type R = IsTrue<boolean> // boolean
 * type R = IsTrue<true> // true
 * type R = IsTrue<false> // false
 *
 * type R = IsTrue<number> // false
 * type R = IsTrue<unknown> // false
 * type R = IsTrue<string | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `true`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsTrue<boolean, { selection: 'filter' }> // true
 * type R = IsTrue<true, { selection: 'filter' }> // true
 * type R = IsTrue<false, { selection: 'filter' }> // never
 *
 * type R = IsTrue<number, { selection: 'filter' }> // never
 * type R = IsTrue<unknown, { selection: 'filter' }> // never
 * type R = IsTrue<never, { selection: 'filter' }> // never
 * type R = IsTrue<string | boolean, { selection: 'filter' }> // true
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsTrue<true | 1> // boolean
 * type R = IsTrue<boolean | 1> // boolean
 * type R = IsTrue<true | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsTrue<true, $SelectionBranch> // $Then
 * type R = IsTrue<boolean, $SelectionBranch> // $Then | $Else
 * type R = IsTrue<string, $SelectionBranch> // $Else
 * ```
 */
type IsTrue<T$1, $O extends IsTrue.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsTrue.$<T$1, $O>;
}>>;
declare namespace IsTrue {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `true`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = Assignable.$<T$1, true, $O>;
  type $UtilOptions = Assignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/composable_types.d.ts
/**
 * Types that can contain custom properties.
 */
type ComposableTypes = object | Function;
/**
 * Types that cannot contain custom properties.
 */
type NonComposableTypes = boolean | number | string | symbol | bigint | undefined | null;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/function/extract_function.d.ts
/**
 * Extract the function signature from a composite type T.
 *
 * It works with interact of functions, but not on function overloads and union.
 * @note does not work with function overloads.
 *
 * ```ts
 * import type { ExtractFunction } from 'type-plus'
 *
 * type R = ExtractFunction<{
 *   () => void
 *   a: 1
 * }> // () => void
 * ```
 */
type ExtractFunction<T$1 extends AnyFunction> = T$1 extends AnyFunction<infer P, infer R> ? (...args: P) => R : never;
/**
 * Extract the function signature from a composite function.
 *
 * @note does not work with function overloads.
 */
declare function extractFunction<T$1 extends AnyFunction>(fn: T$1): ExtractFunction<T$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/function/is_function.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `Function` or function signature.
 *
 * @example
 * ```ts
 * type R = IsFunction<Function> // true
 * type R = IsFunction<() => void> // true
 *
 * type R = IsFunction<never> // false
 * type R = IsFunction<unknown> // false
 * type R = IsFunction<number> // false
 *
 * type R = IsFunction<Function | number> // boolean
 * type R = IsFunction<(() => string) | number> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `Function` or function signature, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsFunction<Function, { selection: 'filter' }> // Function
 * type R = IsFunction<() => void, { selection: 'filter' }> // () => void
 *
 * type R = IsFunction<never, { selection: 'filter' }> // never
 * type R = IsFunction<unknown, { selection: 'filter' }> // never
 * type R = IsFunction<Function | number, { selection: 'filter' }> // Function
 *
 * type R = IsFunction<(() => string) | number, { selection: 'filter' }> // () => string
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsFunction<Function | 1> // boolean
 * type R = IsFunction<Function | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsFunction<Function, $SelectionBranch> // $Then
 * type R = IsFunction<string, $SelectionBranch> // $Else
 * ```
 */
type IsFunction<T$1, $O extends IsFunction.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsFunction.$<T$1, $O>;
}>>;
declare namespace IsFunction {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Default = $Selection.Predicate & $Distributive.Default & $Exact.Default;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `Function`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends Assignable.$UtilOptions> = Assignable.$<T$1, Function, $O>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/function/is_not_function.d.ts
/**
 * Is `T` not a `Function`.
 *
 * ```ts
 * type R = IsNotFunction<Function> // false
 * type R = IsNotFunction<() => void> // false
 * type R = IsNotFunction<(() => void) | { a: 1 }> // false
 *
 * type R = IsNotFunction<{ a: 1 }> // true
 * type R = IsNotFunction<never> // true
 * ```
 */
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `Function` nor function signature.
 *
 * @example
 * ```ts
 * type R = IsNotFunction<Function> // false
 * type R = IsNotFunction<() => void> // false
 *
 * type R = IsNotFunction<never> // true
 * type R = IsNotFunction<unknown> // true
 * type R = IsNotFunction<number> // true
 *
 * type R = IsNotFunction<Function | number> // boolean
 * type R = IsNotFunction<(() => string) | number> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `Function` nor function signature, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotFunction<Function, { selection: 'filter' }> // never
 * type R = IsNotFunction<() => void, { selection: 'filter' }> // never
 *
 * type R = IsNotFunction<never, { selection: 'filter' }> // never
 * type R = IsNotFunction<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotFunction<Function | number, { selection: 'filter' }> // number
 *
 * type R = IsNotFunction<(() => string) | number, { selection: 'filter' }> // number
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNotFunction<Function | 1> // boolean
 * type R = IsNotFunction<Function | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotFunction<Function, $SelectionBranch> // $Then
 * type R = IsNotFunction<string, $SelectionBranch> // $Else
 * ```
 */
type IsNotFunction<T$1, $O extends IsNotFunction.$Options = {}> = $SelectInvert<T$1, Function, $O>;
declare namespace IsNotFunction {
  type $Options = $SelectInvert.$Options;
  type $Default = $SelectInvert.$Default;
  type $Branch = $SelectInvert.$Branch;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/function/is_not_strict_function.d.ts
/**
 * Is `T` not exactly `Function`.
 *
 * ```ts
 * type R = IsNotStrictFunction<Function> // false
 *
 * type R = IsNotStrictFunction<() => void> // true
 * type R = IsNotStrictFunction<(() => void) & { a: 1 }> // true
 * ```
 */
type IsNotStrictFunction<T$1, $O extends IsNotStrictFunction.$Options = {}> = $Special<T$1, {
  $any: $ResolveBranch<$O, [$Any, $Then], T$1>;
  $unknown: $ResolveBranch<$O, [$Unknown, $Then], T$1>;
  $never: $ResolveBranch<$O, [$Never, $Then], T$1>;
  $void: $ResolveBranch<$O, [$Void, $Then], T$1>;
  $else: $ResolveOptions<[$O['distributive'], $SelectInvertStrict.$Default['distributive']]> extends true ? IsNotStrictFunction._D<T$1, $O> : $SelectInvertStrict._N<T$1, Function, $O>;
}>;
declare namespace IsNotStrictFunction {
  type $Options = $SelectInvertStrict.$Options;
  type $Default = $SelectInvertStrict.$Default;
  type $Branch = $SelectInvertStrict.$Branch;
  type _D<T$1, $O extends IsNotStrictFunction.$Options> = T$1 extends Function ? $ResolveBranch<$O, [T$1 extends ((...args: any[]) => any) ? $Then : $Else], T$1> : $ResolveBranch<$O, [$Then], T$1>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/function/is_strict_function.d.ts
/**
 * Is `T` exactly `Function`.
 *
 * ```ts
 * type R = IsStrictFunction<Function> // true
 *
 * type R = IsStrictFunction<() => void> // false
 * type R = IsStrictFunction<(() => void) & { a: 1 }> // false
 * ```
 */
type IsStrictFunction<T$1, $O extends IsStrictFunction.$Options = {}> = $Special<T$1, {
  $any: $ResolveBranch<$O, [$Any, $Else]>;
  $never: $ResolveBranch<$O, [$Never, $Else]>;
  $unknown: $ResolveBranch<$O, [$Unknown, $Else]>;
  $void: $ResolveBranch<$O, [$Void, $Else]>;
  $else: $ResolveOptions<[$O['distributive'], $Distributive.Default['distributive']]> extends true ? IsStrictFunction._D<T$1, $O> : Equal._ExactEqualNonDistributive<T$1, Function, $O>;
}>;
declare namespace IsStrictFunction {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Default = $Selection.Predicate & $Distributive.Default & $Exact.Default;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  type _D<T$1, $O extends Equal.$Options> = T$1 extends Function ? T$1 extends ((...args: any[]) => any) ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/functional/ChainFn.d.ts
type ChainFn<T$1> = (param: T$1) => T$1;
/**
 * An endofunctor is a functor from one category back to the same category.
 */
type EndoFn<T$1> = (param: T$1) => T$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/functional/compose.d.ts
/**
 * Compose functions to produce a new function.
 * @params args functions to be composed.
 * Each function will receive the return value of the previous function as its parameters.
 * @return The composed function will expect the parameters of the first function,
 * and return the result of the last function.
 */
declare function compose<FS extends AnyFunction[]>(...fns: FS): (...args: Parameters<Head$1<FS>>) => ReturnType<Last<FS>>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/functional/context.d.ts
type ContextBaseShape = Record<string | symbol, any>;
/**
 * Extends the context with new props.
 * @param context the current context.
 * @return an additional context with new properties.
 */
type ContextExtender<Current, Additional> = (context: Current) => Additional;
type ContextBuilder<Init extends ContextBaseShape, Ctx extends ContextBaseShape> = {
  /**
   * Extends the context using an extender.
   *
   * @type Additional The additional context to be added by the `extender`.
   * By default this is inferred by the `extender`.
   * But you can also explicitly specify it,
   * if the type is a superset of the actual return type of the `extender`.
   * @param extender function that add new props to the context.
   *
   * The extender only need to return a new object with additional properties.
   * The builder will merge that with the current context.
   *
   * If the extender specify an existing property,
   * it overrides the existing value.
   */
  extend<Additional extends ContextBaseShape = ContextBaseShape>(extender: ContextExtender<Ctx, Additional>): ContextBuilder<Init, LeftJoin<Ctx, Additional>>;
  /**
   * Build and return the context.
   */
  build(): Ctx;
};
/**
 * Creates a context builder.
 *
 * @param init The initial context or an context initializer.
 * @return the context builder where you can
 * use `extend()` to add context, and
 * use `build()` to build the context.
 */
declare function context<Init extends ContextBaseShape, Ctx extends ContextBaseShape = Init>(init?: Init | (() => Init)): ContextBuilder<Init, Ctx>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/json.d.ts
type JSONTypes = JSONPrimitive | JSONObject | JSONArray;
type JSONPrimitive = boolean | number | string | null;
type JSONObject = { [key in string]?: JSONTypes };
type JSONArray = Array<JSONTypes>;
declare const JSONTypes: {
  get: typeof get;
};
declare function get<T$1 extends JSONTypes>(obj: JSONTypes, ...props: Array<string | number>): T$1 | undefined;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/math/max.d.ts
type Max<A$1 extends number | bigint, B$1 extends number | bigint, Fail = never> = GreaterThan<A$1, B$1> extends infer Result ? IsNever<Result> extends true ? Fail : Result extends true ? A$1 : B$1 : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/math/multiply.d.ts
type Multiply$1<A$1 extends number | bigint, B$1 extends number | bigint, Fail = never> = [NumericStruct.FromNumeric<A$1, Fail>, NumericStruct.FromNumeric<B$1, Fail>] extends [infer MA, infer MB] ? MA extends NumericStruct ? MB extends NumericStruct ? NumericStruct.ToNumeric<NumericStruct.Multiply<MA, MB>> : Fail : Fail : never;
declare namespace math_plus_d_exports {
  export { Add$1 as Add, Decrement, Increment, Multiply$1 as Multiply, Subtract$1 as Subtract, ToNegative };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/string/is_string.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `string` or `string` literals.
 *
 * @example
 * ```ts
 * type R = IsString<string> // true
 * type R = IsString<'a'> // true
 *
 * type R = IsString<never> // false
 * type R = IsString<unknown> // false
 * type R = IsString<string | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `string` or `string` literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsString<string, { selection: 'filter' }> // string
 * type R = IsString<'a', { selection: 'filter' }> // 'a'
 *
 * type R = IsString<never, { selection: 'filter' }> // never
 * type R = IsString<unknown, { selection: 'filter' }> // never
 * type R = IsString<string | boolean, { selection: 'filter' }> // string
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsString<string | 1> // boolean
 * type R = IsString<string | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsString<string, $IsString.$Branch> // $Then
 * type R = IsString<bigint, $IsString.$Branch> // $Else
 * ```
 */
type IsString<T$1, $O extends IsString.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsString.$<T$1, $O>;
}>>;
declare namespace IsString {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `string` or string literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], false]> extends true ? $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }> : Assignable.$<T$1, string, $O>;
  type $UtilOptions = Assignable.$UtilOptions & $Exact.Options;
  type _D<T$1, $O extends $UtilOptions> = T$1 extends string & infer U ? U extends string ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
  type _N<T$1, $O extends $UtilOptions> = [T$1] extends [string & infer U] ? U extends string ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/mix_types/box.d.ts
/**
 * ⚗️ *transform*
 * 🔢 *customizable*
 *
 * Converts primitive types to their boxed types.
 *
 * @typeParam Options['$notBoxable'] return type when `T` is not boxable. Defaults to `never`.
 *
 * @example
 * ```ts
 * Box<number> // Number
 * Box<object> // Object
 * Box<string>  // String
 * Box<'abc'>  // String
 *
 * Box<undefined> // never
 * ```
 */
type Box<T$1, Options$1 extends Box.Options = Box.DefaultOptions> = IsFunction<T$1, IsFunction.$Branch> extends infer R ? R extends $Then ? Function : IsObject<T$1, IsObject.$Branch<{
  exact: true;
}>> extends infer R ? R extends $Then ? Object : T$1 extends Record<any, any> ? T$1 : IsBoolean<T$1, $Selection.Branch> extends infer R ? R extends $Then ? Boolean : R extends $Else ? IsNumber<T$1, IsNumber.$Branch> extends infer R ? R extends $Then ? Number : R extends $Else ? IsString<T$1, {
  $then: String;
  $else: IsSymbol<T$1, {
    $then: Symbol;
    $else: IsBigint<T$1, {
      $then: BigInt;
      $else: Options$1['$notBoxable'];
    }>;
  }>;
}> : never : never : never : never : never : never;
declare namespace Box {
  type Options = {
    $notBoxable?: unknown;
  };
  interface DefaultOptions {
    $notBoxable: never;
  }
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/mix_types/exclude.d.ts
/**
 * 🌪️ *filter*
 *
 * Exclude from `T` those types that are assignable to `U`,
 * and replace them with `R`.
 *
 * This can be used as a drop-in replacement of the build-in `Exclude`.
 *
 * @example
 * ```ts
 * type R = Exclude<undefined, undefined> // never
 * type R = Exclude<undefined | 1, undefined> // 1
 *
 * type R = Exclude<undefined, undefined, 2> // 2
 * type R = Exclude<undefined | 1, undefined, 2> // 1 | 2
 * ```
 */
type Exclude$1<T$1, U$1, R$1 = never> = T$1 extends U$1 ? R$1 : T$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/null/is_null.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `null`.
 *
 * @example
 * ```ts
 * type R = IsNull<null> // true
 *
 * type R = IsNull<never> // false
 * type R = IsNull<unknown> // false
 * type R = IsNull<string | boolean> // false
 *
 * type R = IsNull<string | null> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `null`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNull<null, { selection: 'filter' }> // null
 *
 * type R = IsNull<never, { selection: 'filter' }> // never
 * type R = IsNull<unknown, { selection: 'filter' }> // never
 * type R = IsNull<string | boolean, { selection: 'filter' }> // never
 *
 * type R = IsNull<string | null> // null
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNull<null | 1> // boolean
 * type R = IsNull<null | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNull<null, $SelectionBranch> // $Then
 * type R = IsNull<string, $SelectionBranch> // $Else
 * ```
 */
type IsNull<T$1, $O extends IsNull.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsNull.$<T$1, $O>;
}>>;
declare namespace IsNull {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `null`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = Assignable.$<T$1, null, $O>;
  type $UtilOptions = Assignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/never/is_not_never.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` not `never`.
 *
 * @example
 * ```ts
 * type R = IsNotNever<1> // true
 *
 * type R = IsNotNever<never> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `never`, otherwise returns `$Never`.
 *
 * Filter normally returns `never` in the `$else` clause.
 * But since we are checking for `never` here,
 * we have to return `$Never` instead.
 *
 * @example
 * ```ts
 * type R = IsNotNever<1, { selection: 'filter' }> // 1
 *
 * type R = IsNotNever<never, { selection: 'filter' }> // $Never
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotNever<never, $SelectionBranch> // $Else
 * type R = IsNotNever<1, $SelectionBranch> // $Then
 * ```
 */
type IsNotNever<T$1, $O extends IsNotNever.$Options = {}> = $Special<T$1, {
  $any: $ResolveBranch<$O, [$Any, $Then], T$1>;
  $never: $ResolveBranch<IsNotNever._O<$O>, [$Else]>;
  $unknown: $ResolveBranch<$O, [$Unknown, $Then], T$1>;
  $void: $ResolveBranch<$O, [$Void, $Then], T$1>;
  $else: $ResolveBranch<$O, [$Then], T$1>;
}>;
declare namespace IsNotNever {
  type $Options = $Selection.Options & $InputOptions<$Any | $Unknown>;
  type $Branch = $Selection.Branch;
  type _O<$O extends $Options> = '$else' extends keyof $O ? $O : $O['selection'] extends 'filter' ? $O & {
    $else: $Never;
  } : $O;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/merge.d.ts
/**
 * ⚗️ *transform*
 * 🔢 *customizable*
 *
 * Merges type `A` and type `B`.
 *
 * This type performs the same operations as `{ ...a, ...b }` but at the type level.
 *
 * It handles cases like A or B are `Record`,
 * joining between required and optional props, etc.
 */
type Merge$1<A$1 extends AnyRecord, B$1 extends AnyRecord, Options$1 = Merge$1.DefaultOptions> = Or<IsAny<A$1>, IsAny<B$1>, {
  $then: any;
  $else: Or<IsNever<A$1>, IsNever<B$1>, {
    $then: never;
    $else: IsDisjoint<A$1, B$1> extends true ? A$1 & B$1 : [keyof A$1, keyof B$1] extends [infer KA extends KeyTypes, infer KB extends KeyTypes] ? IsLiteral<KA> extends true ? IsLiteral<KB> extends true ? [OptionalKeys<A$1>, OptionalKeys<B$1>] extends [infer PKA extends KeyTypes, infer PKB extends KeyTypes] ?
    // property is optional when both A[k] and B[k] are optional
    (IsNotNever<PKA & PKB, {
      selection: 'filter';
    }> extends infer R extends KeyTypes ? { [k in R]?: A$1[k] | B$1[k] } : unknown) & (IsNotNever<Exclude<KA, PKA | KB>, {
      selection: 'filter';
    }> extends infer R extends KeyTypes ? { [k in R]: A$1[k] } : unknown) & (IsNotNever<Exclude<KB, PKB>, {
      selection: 'filter';
    }> extends infer R extends KeyTypes ? { [k in R]: B$1[k] } : unknown) & (IsNotNever<Exclude<KA & PKB, PKA>, {
      selection: 'filter';
    }> extends infer R extends KeyTypes ? { [k in R]: A$1[k] | Exclude<B$1[k], undefined> } : unknown) : never : (IsNotNever<Exclude<KA, KA & KB>, {
      selection: 'filter';
    }> extends infer R extends KeyTypes ? { [k in R]: A$1[k] } : unknown) & (IsNotNever<Exclude<KB, KA & KB>, {
      selection: 'filter';
    }> extends infer R extends KeyTypes ? { [k in R]: B$1[k] } : unknown) & (IsNotNever<KA & KB, {
      selection: 'filter';
    }> extends infer R extends KeyTypes ? { [k in R]: A$1[k] | B$1[k] } : unknown) : IsLiteral<KB> extends true ? { [k in Exclude<KA, KB>]: A$1[k] } & { [k in keyof B$1]: B$1[k] } : (IsNotNever<Exclude<KA, KA & KB>, {
      selection: 'filter';
    }> extends infer R extends KeyTypes ? { [k in R]: A$1[k] } : unknown) & (IsNotNever<Exclude<KB, KA & KB>, {
      selection: 'filter';
    }> extends infer R extends KeyTypes ? { [k in R]: B$1[k] } : unknown) & (IsNotNever<KA & KB, {
      selection: 'filter';
    }> extends infer R extends KeyTypes ? { [k in R]: A$1[k] | B$1[k] } : unknown) : never;
  }>;
}>;
declare namespace Merge$1 {
  type JoinProps<A$1, B$1> = A$1 extends NonComposableTypes ? B$1 : B$1 extends NonComposableTypes ? A$1 : A$1 & B$1;
  type Options = {
    $never?: undefined;
  };
  interface DefaultOptions {
    $never: never;
  }
  type Cases = {
    $never: $Never;
  };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/undefined/is_undefined.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `undefined`.
 *
 * @example
 * ```ts
 * type R = IsUndefined<undefined> // true
 *
 * type R = IsUndefined<never> // false
 * type R = IsUndefined<unknown> // false
 * type R = IsUndefined<string | boolean> // false
 *
 * type R = IsUndefined<string | undefined> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `undefined`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsUndefined<undefined, { selection: 'filter' }> // undefined
 *
 * type R = IsUndefined<never, { selection: 'filter' }> // never
 * type R = IsUndefined<unknown, { selection: 'filter' }> // never
 * type R = IsUndefined<string | boolean, { selection: 'filter' }> // never
 *
 * type R = IsUndefined<string | undefined> // undefined
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsUndefined<undefined | 1> // boolean
 * type R = IsUndefined<undefined | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsUndefined<undefined, $SelectionBranch> // $Then
 * type R = IsUndefined<string, $SelectionBranch> // $Else
 * ```
 */
type IsUndefined<T$1, $O extends IsUndefined.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsUndefined.$<T$1, $O>;
}>>;
declare namespace IsUndefined {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `undefined`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = Assignable.$<T$1, undefined, $O>;
  type $UtilOptions = Assignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/void/is_void.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `void`.
 *
 * @example
 * ```ts
 * type R = IsVoid<void> // true
 *
 * type R = IsVoid<never> // false
 * type R = IsVoid<unknown> // false
 * type R = IsVoid<string | boolean> // false
 *
 * type R = IsVoid<string | void> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `void`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsVoid<void, { selection: 'filter' }> // void
 *
 * type R = IsVoid<never, { selection: 'filter' }> // never
 * type R = IsVoid<unknown, { selection: 'filter' }> // never
 * type R = IsVoid<string | boolean, { selection: 'filter' }> // never
 *
 * type R = IsVoid<string | void> // void
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsVoid<void | 1> // boolean
 * type R = IsVoid<void | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsVoid<void, $SelectionBranch> // $Then
 * type R = IsVoid<string, $SelectionBranch> // $Else
 * ```
 */
type IsVoid<T$1, $O extends IsVoid.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $void: $ResolveBranch<$O, [$Void, $Then], T$1>;
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsVoid.$<T$1, $O>;
}>>;
declare namespace IsVoid {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `undefined`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = IsUndefined.$<T$1, {
    $then: $ResolveBranch<$O, [$Else]>;
    $else: Assignable.$<T$1, void, $O>;
  }>;
  type $UtilOptions = Assignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/mix_types/merge.d.ts
/**
 * ⚗️ *transform*
 * 🔢 *customizable*
 *
 * Merges type `A` and type `B`.
 *
 * This type performs the same operations as `{ ...a, ...b }` but at the type level.
 *
 * This is a more general type then `ObjectPlus.Merge<A, B>`,
 * which constraints `A` and `B` to be `Record`.
 *
 * This type does not have such restrictions, and tries to handle the other types accordingly.
 */
type Merge<A$1, B$1> = Or<IsNever<A$1>, IsNever<B$1>, {
  $then: never;
  $else: Or<IsVoid<A$1>, IsVoid<B$1>, {
    $then: A$1 & B$1;
    $else: Or<IsUnknown<A$1>, Or<IsUndefined<A$1>, IsNull<A$1>>, {
      $then: B$1;
      $else: Or<IsUnknown<B$1>, Or<IsUndefined<B$1>, IsNull<B$1>>, {
        $then: A$1;
        $else: Merge$1<Box<A$1, {
          $notBoxable: {};
        }>, Box<B$1, {
          $notBoxable: {};
        }>>;
      }>;
    }>;
  }>;
}>;
/**
 * Left join `a` with `b`.
 *
 * This returns the proper type of `{ ...a, ...b }`
 *
 * @example
 * ```ts
 * merge({ a: 1 }, {} as { a?: string | undefined }) // { a: number | string }
 * ```
 */
declare function merge<A$1, B$1>(a: A$1, b: B$1): Merge<A$1, B$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/nodejs/isNodeError.d.ts
type SystemErrors = {
  EACCES: Error & {
    code: 'EACCES';
  };
  EADDRINUSE: Error & {
    code: 'EADDRINUSE';
  };
  ECONNREFUSED: Error;
  ECONNRESET: Error;
  EEXIST: Error;
  EISDIR: Error;
  EMFILE: Error;
  ENOENT: Error & {
    code: 'ENOENT';
    path: string;
  };
  ENOTDIR: Error;
  ENOTEMPTY: Error;
  ENOTFOUND: Error;
  EPERM: Error;
  EPIPE: Error;
  ETIMEDOUT: Error;
};
type SystemErrorCodes = keyof SystemErrors;
/**
 * Type guard NodeJS SystemErrors.
 * The list is not complete. Will add as needed.
 * Feel free to contribute.
 */
declare function isSystemError<C$1 extends SystemErrorCodes>(code: C$1, err: unknown): err is SystemErrors[C$1];
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/nominal/constants.d.ts
declare const typeSym: unique symbol;
declare const valueSym: unique symbol;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/nominal/brand.d.ts
/**
 * Create a "branded" version of a type.
 * TypeScript won't allow implicit conversion to this type
 */
type Brand<B$1 extends string, T$1 = never> = [T$1] extends [null] | [undefined] | [symbol] | [void] ? Branded<B$1, T$1> : Branded<B$1, T$1> & T$1;
/**
 * A branded type of `B` with value of `T`.
 */
interface Branded<B$1 extends string, T$1> {
  [typeSym]: B$1;
  [valueSym]: T$1;
}
/**
 * Creates a brand creator with the specified type.
 */
declare function brand<B$1 extends string>(type: B$1): <T$1>(subject: T$1) => Brand<B$1, Widen<T$1>>;
/**
 * Creates a branded value of specified type.
 */
declare function brand<B$1 extends string, T$1>(type: B$1, subject: T$1): Brand<B$1, Widen<T$1>>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/nominal/flavor.d.ts
/**
 * Create a "flavored" version of a type.
 * TypeScript will disallow mixing flavors,
 * but will allow unflavored values of that type to be passed in where a flavored version is expected.
 * This is a less restrictive form of branding.
 */
type Flavor<F$1 extends string, T$1> = [T$1] extends [null] | [undefined] | [symbol] | [void] ? FlavoredUnit<F$1, T$1> : Flavored<F$1> & T$1;
/**
 * A flavored type of `F`
 */
interface Flavored<F$1 extends string> {
  [typeSym]?: F$1;
}
/**
 * A special flavored type for special types.
 */
interface FlavoredUnit<F$1 extends string, T$1> {
  [typeSym]?: F$1;
  [valueSym]: T$1;
}
/**
 * Creates a brand creator with the specified type.
 */
declare function flavor<F$1 extends string>(type: F$1): <T$1>(subject: T$1) => Flavor<F$1, Widen<T$1>>;
/**
 * Creates a branded value of specified type.
 */
declare function flavor<F$1 extends string, T$1>(type: F$1, subject: T$1): Flavor<F$1, Widen<T$1>>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/nominal/nominal_match.d.ts
declare function nominalMatch<A$1 extends string, B$1 extends A$1>(a: Brand<A$1, unknown>, b: Brand<B$1, unknown>): boolean;
declare function nominalMatch<A$1 extends string, B$1 extends A$1>(a: Flavor<A$1, unknown>, b: Flavor<B$1, unknown>): boolean;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/null/is_not_null.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `null`.
 *
 * ```ts
 * type R = IsNotNull<null> // false
 *
 * type R = IsNotNull<never> // true
 * type R = IsNotNull<unknown> // true
 * type R = IsNotNull<string | boolean> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `null`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotNull<null, { selection: 'filter' }> // never
 *
 * type R = IsNotNull<never, { selection: 'filter' }> // never
 * type R = IsNotNull<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotNull<string | boolean, { selection: 'filter' }> // string | boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Disable distribution of union types.
 *
 * @example
 * ```ts
 * type R = IsNotNull<null | 1> // boolean
 * type R = IsNotNull<null | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotNull<string, $SelectionBranch> // $Then
 * type R = IsNotNull<null, $SelectionBranch> // $Else
 * ```
 */
type IsNotNull<T$1, $O extends IsNotNull.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotNull.$<T$1, $O>;
}>>;
declare namespace IsNotNull {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is not `null`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = NotAssignable.$<T$1, null, $O>;
  type $UtilOptions = NotAssignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/number/cast.d.ts
/**
 * Cast a string to a number literal type if possible.
 *
 * ```ts
 * StringToNumber<'1'> // 1
 * StringToNumber<'-1'> // -1
 * ```
 */
type StringToNumber<S$1 extends string, Fail = never> = S$1 extends `-0` ? 0 : S$1 extends `${infer W}.0` ? StringToNumber<W> : S$1 extends `${infer W}.${infer F}0` ? StringToNumber<`${W}.${F}`> : S$1 extends `${infer N extends number}` ? N : Fail;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/number/is_not_number.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `number` nor `number` literals.
 *
 * @example
 * ```ts
 * type R = IsNotNumber<number> // false
 * type R = IsNotNumber<1> // false
 *
 * type R = IsNotNumber<never> // true
 * type R = IsNotNumber<unknown> // true
 * type R = IsNotNumber<string | number> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `number` nor `number` literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotNumber<number, { selection: 'filter' }> // never
 * type R = IsNotNumber<1, { selection: 'filter' }> // never
 *
 * type R = IsNotNumber<never, { selection: 'filter' }> // never
 * type R = IsNotNumber<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotNumber<string | 1, { selection: 'filter' }> // string
 * ```
 *
 * 🔢 *customize*
 *
 * Disable distribution of union types.
 *
 * @example
 * ```ts
 * type R = IsNotNumber<number | 1> // boolean
 * type R = IsNotNumber<number | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotNumber<string, $SelectionBranch> // $Then
 * type R = IsNotNumber<number, $SelectionBranch> // $Else
 * ```
 */
type IsNotNumber<T$1, $O extends IsNotNumber.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotNumber.$<T$1, $O>;
}>>;
declare namespace IsNotNumber {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is not `number` nor `number` literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], false]> extends true ? $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }> : NotAssignable.$<T$1, number, $O>;
  type $UtilOptions = NotAssignable.$UtilOptions & $Exact.Options;
  type _D<T$1, $O extends IsNotNumber.$Options> = T$1 extends number & infer U ? U extends number ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
  type _N<T$1, $O extends IsNotNumber.$Options> = [T$1] extends [number & infer U] ? U extends number ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/number/is_not_number_literal.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not number literals.
 *
 * @example
 * ```ts
 * type R = IsNotNumberLiteral<number> // true
 * type R = IsNotNumberLiteral<1> // false
 *
 * type R = IsNotNumberLiteral<never> // true
 * type R = IsNotNumberLiteral<unknown> // true
 * type R = IsNotNumberLiteral<string | boolean> // true
 *
 * type R = IsNotNumberLiteral<string | 1> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not number literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotNumberLiteral<number, { selection: 'filter' }> // number
 * type R = IsNotNumberLiteral<1, { selection: 'filter' }> // never
 *
 * type R = IsNotNumberLiteral<never, { selection: 'filter' }> // never
 * type R = IsNotNumberLiteral<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotNumberLiteral<1 | string, { selection: 'filter' }> // string
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNotNumberLiteral<1 | string> // boolean
 * type R = IsNotNumberLiteral<1 | string, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotNumberLiteral<1, $SelectionBranch> // $Else
 * type R = IsNotNumberLiteral<string, $SelectionBranch> // $Then
 * ```
 */
type IsNotNumberLiteral<T$1, $O extends IsNotNumberLiteral.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotNumberLiteral.$<T$1, $O>;
}>>;
declare namespace IsNotNumberLiteral {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is not number literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }>;
  type $UtilOptions = Assignable.$UtilOptions;
  type _D<T$1, $O extends $UtilOptions> = T$1 extends number & infer U ? U extends number ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Then], T$1>;
  type _N<T$1, $O extends $UtilOptions> = [T$1] extends [number & infer U] ? U extends number ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Then], T$1>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/number/is_number_literal.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is number literals.
 *
 * @example
 * ```ts
 * type R = IsNumberLiteral<number> // false
 * type R = IsNumberLiteral<1> // true
 *
 * type R = IsNumberLiteral<never> // false
 * type R = IsNumberLiteral<unknown> // false
 * type R = IsNumberLiteral<string | boolean> // false
 *
 * type R = IsNumberLiteral<string | 1> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is number literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNumberLiteral<number, { selection: 'filter' }> // never
 * type R = IsNumberLiteral<1, { selection: 'filter' }> // 1
 *
 * type R = IsNumberLiteral<never, { selection: 'filter' }> // never
 * type R = IsNumberLiteral<unknown, { selection: 'filter' }> // never
 * type R = IsNumberLiteral<string | boolean, { selection: 'filter' }> // never
 *
 * type R = IsNumberLiteral<string | 1> // 1
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNumberLiteral<1 | string> // boolean
 * type R = IsNumberLiteral<1 | string, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNumberLiteral<1, $SelectionBranch> // $Then
 * type R = IsNumberLiteral<string, $SelectionBranch> // $Else
 * ```
 */
type IsNumberLiteral<T$1, $O extends IsNumberLiteral.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsNumberLiteral.$<T$1, $O>;
}>>;
declare namespace IsNumberLiteral {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is number literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }>;
  type $UtilOptions = Assignable.$UtilOptions;
  type _D<T$1, $O extends $UtilOptions> = T$1 extends number & infer U ? U extends number ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Else]>;
  type _N<T$1, $O extends $UtilOptions> = [T$1] extends [number & infer U] ? U extends number ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Else]>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/numeric/is_not_integer.d.ts
/**
 * Is T not an integer, including bigint.
 *
 * ```ts
 * import type { IsNotInteger } from 'type-plus'
 *
 * type R = IsNotInteger<1.1> // true
 * type R = IsNotInteger<number> // true as it contains non-integer
 *
 * type R = IsNotInteger<0> // false
 * type R = IsNotInteger<1n> // false
 * ```
 */
type IsNotInteger<T$1, $O extends IsNotInteger.$Options = {}> = IsNumber<T$1, {
  distributive: $O['distributive'];
  $then: $Then;
  $else: $Else;
}> extends infer R ? R extends $Then ? number extends T$1 ? $ResolveBranch<$O, [$Then], T$1> | $ResolveBranch<$O, [$Else]> : T$1 extends number ? `${T$1}` extends `${number}.${number}` ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : never : R extends $Else ? IsBigint<T$1, {
  distributive: $O['distributive'];
  $then: $Then;
  $else: $Else;
}> extends infer R ? R extends $Then ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], Exclude<T$1, number>> : never : never : never;
declare namespace IsNotInteger {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/numeric/is_not_negative.d.ts
/**
 * Is `T` a not a negative numeric type.
 *
 * ```ts
 * type R = IsNotNegative<1> // true
 * type R = IsNotNegative<0> // true
 * type R = IsNotNegative<1n> // true
 *
 * type R = IsNotNegative<-1> // false
 *
 * type R = IsNotNegative<number> // boolean
 * type R = IsNotNegative<bigint> // boolean
 * type R = IsNotNegative<any> // boolean
 * ```
 */
type IsNotNegative<T$1, $O extends IsNotNegative.$Options = {}> = IsBigint<T$1, {
  distributive: $O['distributive'];
  $then: $Then;
  $else: $Else;
}> extends infer R ? R extends $Then ? IsNotNegative._Negative<T$1, bigint, $O> : IsNumber<Exclude<T$1, bigint>, {
  distributive: $O['distributive'];
  $then: IsNotNegative._Negative<T$1, number, $O>;
  $else: $ResolveBranch<$O, [$Then], Exclude<T$1, number | bigint>>;
}> : never;
declare namespace IsNotNegative {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  type _Negative<T$1, U$1 extends number | bigint, $O extends IsNotNegative.$Options> = T$1 extends U$1 ? `${T$1}` extends `-${string}` ? $ResolveBranch<$O, [$Else]> : U$1 extends T$1 ? $ResolveBranch<$O, [$Then], T$1> | $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : never;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/numeric/is_not_numeric.d.ts
/**
 * Is `T` not numeric.
 *
 * ```ts
 * type R = IsNotNumeric<1> // false
 * type R = IsNotNumeric<1.1> // false
 *
 * type R = IsNotNumeric<string> // true
 * type R = IsNotNumeric<unknown> // true
 * ```
 */
type IsNotNumeric<T$1, $O extends IsNotNumeric.$Options = {}> = $SelectInvert<T$1, number | bigint, $O>;
declare namespace IsNotNumeric {
  type $Options = $SelectInvert.$Options;
  type $Default = $SelectInvert.$Default;
  type $Branch = $SelectInvert.$Branch;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/numeric/is_not_positive.d.ts
/**
 * Is `T` not a positive numeric type.
 *
 * ```ts
 * type R = IsNotPositive<-1> // true
 * type R = IsNotPositive<-1n> // true
 *
 * type R = IsNotPositive<0> // false
 * type R = IsNotPositive<1> // false
 *
 * type R = IsNotPositive<number> // boolean
 * type R = IsNotPositive<bigint> // boolean
 * type R = IsNotPositive<any> // boolean
 *
 * ```
 */
type IsNotPositive<T$1, $O extends IsNotPositive.$Options = {}> = IsBigint<T$1, {
  distributive: $O['distributive'];
  $then: $Then;
  $else: $Else;
}> extends infer R ? R extends $Then ? IsNotPositive._Negative<T$1, bigint, $O> : IsNumber<Exclude<T$1, bigint>, {
  distributive: $O['distributive'];
  $then: $Then;
  $else: $Else;
}> extends infer R ? R extends $Then ? IsNotPositive._Negative<T$1, number, $O> : $ResolveBranch<$O, [$Then], Exclude<T$1, number | bigint>> : never : never;
declare namespace IsNotPositive {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  type _Negative<T$1, U$1 extends number | bigint, $O extends IsNotPositive.$Options> = T$1 extends U$1 ? `${T$1}` extends `-${string}` ? $ResolveBranch<$O, [$Then], T$1> : U$1 extends T$1 ? $ResolveBranch<$O, [$Then], T$1> | $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Else]> : never;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/numeric/is_numeric.d.ts
/**
 * Is `T` numeric.
 *
 * ```ts
 * type R = IsNumeric<1> // true
 * type R = IsNumeric<1.1> // true
 *
 * type R = IsNumeric<string> // false
 * type R = IsNumeric<unknown> // false
 * ```
 */
type IsNumeric<T$1, $O extends IsNumeric.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsNumeric.$<T$1, $O>;
}>>;
declare namespace IsNumeric {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Default = $Selection.Predicate & $Distributive.Default & $Exact.Default;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `Function`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends Assignable.$UtilOptions> = Assignable.$<T$1, number | bigint, $O>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/numeric/numeric_type.d.ts
/**
 * Either number or bigint.
 */
type Numeric = number | bigint;
/**
 * The value 0 in number or bigint.
 */
type Zero = 0 | 0n;
declare namespace number_plus_d_exports {
  export { IsInteger, IsNegative, IsNotInteger, IsNotNegative, IsNotNumber, IsNotNumeric, IsNotPositive, IsNumber, IsNumeric, IsPositive, Numeric, Zero };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/numeric/cast.d.ts
/**
 * Cast a string to a numeric literal type (number or bigint) if possible.
 *
 * ```ts
 * StringToNumeric<'1'> // 1
 * StringToNumeric<'1n'> // 1n
 * StringToNumeric<'-1'> // -1
 * StringToNumeric<'-1n'> // -1n
 * ```
 */
type StringToNumeric<S$1 extends string, Fail = never> = StringToBigint<S$1, StringToNumber<S$1, Fail>>;
/**
 * Cast a numeric literal type (number or bigint) to string.
 *
 * ```ts
 * NumericToString<1> // '1'
 * NumericToString<1.23> // '1.23'
 * NumericToString<0.00123> // '0.00123'
 * NumericToString<1n> // '1n'
 * NumericToString<-1> // '-1'
 * NumericToString<-1n> // '-1n'
 * ```
 */
type NumericToString<N$1 extends number | bigint> = N$1 extends number ? `${N$1}` : `${N$1}n`;
declare namespace numeric_plus_d_exports {
  export { IsInteger, IsNegative, IsNotInteger, IsNotNegative, IsNotNumeric, IsNotPositive, IsNumeric, IsPositive, Numeric, Zero };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/is_not_object.d.ts
/**
 * Is `T` not an `object`.
 *
 * Note that `Function` is also an `object`.
 *
 * ```ts
 * type R = IsNotObject<{}> // false
 * type R = IsNotObject<{ a: 1 }> // false
 * type R = IsNotObject<Function> // false
 *
 * type R = IsNotObject<number> // true
 * ```
 */
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not an `object` nor object literals.
 *
 * Note that `Function`, `Array`, and *tuple* are also objects.
 *
 * @example
 * ```ts
 * type R = IsNotObject<object> // false
 * type R = IsNotObject<{}> // false
 * type R = IsNotObject<{ a: 1 }> // false
 * type R = IsNotObject<Function> // false
 *
 * type R = IsNotObject<never> // true
 * type R = IsNotObject<unknown> // true
 * type R = IsNotObject<number> // true
 *
 * type R = IsNotObject<{} | bigint> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not an `object` nor object literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotObject<{}, { selection: 'filter' }> // never
 * type R = IsNotObject<{ a: 1 }, { selection: 'filter' }> // never
 * type R = IsNotObject<Function, { selection: 'filter' }> // never
 *
 * type R = IsNotObject<never, { selection: 'filter' }> // never
 * type R = IsNotObject<unknown, { selection: 'filter' }> // unknown
 *
 * type R = IsNotObject<{} | bigint> // bigint
 * ```
 *
 * 🔢 *customize*:
 *
 * Validate if `T` is not exactly `object`.
 *
 * @example
 * ```ts
 * type R = IsNotObject<object, { exact: true }> // false
 * type R = IsNotObject<{}, { exact: true }> // true
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNotObject<{} | 1> // boolean
 * type R = IsNotObject<{} | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotObject<{}, $SelectionBranch> // $Else
 * type R = IsNotObject<string, $SelectionBranch> // $Then
 * ```
 */
type IsNotObject<T$1, $O extends IsNotObject.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotObject.$<T$1, $O>;
}>>;
declare namespace IsNotObject {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `object` or `object` literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], $Exact.Default]> extends true ? $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }> : NotAssignable.$<T$1, object, $O>;
  type $UtilOptions = NotAssignable.$UtilOptions & $Exact.Options;
  type _D<T$1, $O extends $UtilOptions> = T$1 extends object ? IdentityEqual<T$1, {}, $ResolveBranch<$O, [$Then], T$1>, IsNever<keyof T$1, {
    $then: $ResolveBranch<$O, [$Else]>;
    $else: $ResolveBranch<$O, [$Then], T$1>;
  }>> : $ResolveBranch<$O, [$Then], T$1>;
  type _N<T$1, $O extends $UtilOptions> = [T$1] extends [object & infer U] ? U extends object ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
}
declare namespace object_plus_d_exports {
  export { Merge$1 as Merge };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/object/Required.d.ts
type Required<T$1> = { [P in keyof T$1]-?: Exclude<T$1[P], undefined> };
type RequiredPick<T$1, U$1 extends keyof T$1> = Required<Pick<T$1, U$1>> & Pick<T$1, Exclude<keyof T$1, U$1>>;
type RequiredExcept<T$1, U$1 extends keyof T$1> = Required<Pick<T$1, Exclude<keyof T$1, U$1>>> & Pick<T$1, U$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/promise/isPromise.d.ts
declare function isPromise<R$1 = any>(subject: unknown): subject is Promise<R$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/promise/MaybePromise.d.ts
/**
 * `T | Promise<T>`
 */
type MaybePromise<T$1> = T$1 | Promise<T$1>;
/**
 * Transforms the value within the promise.
 *
 * @return a new promise with the transformed result.
 */
declare function transformMaybePromise<T$1, R$1>(value: Promise<T$1>, transformer: (value: T$1) => R$1): Promise<R$1>;
/**
 * Transforms the value, or if the value is a promise,
 * transform the resolved value of the promise.
 *
 * @return the transformed result,
 * or if the value is a promise, a new promse with the transformed result.
 */
declare function transformMaybePromise<T$1, R$1>(value: T$1, transformer: (value: T$1) => R$1): T$1 extends Promise<any> ? Promise<R$1> : R$1;
declare const MaybePromise: {
  transform: typeof transformMaybePromise;
};
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/promise/mapSeries.d.ts
declare function mapSeries<R$1, T$1 = any>(values: T$1[], fn: (value: T$1) => Promise<R$1>): Promise<R$1[]>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/promise/PromiseValue.d.ts
/**
 * Gets value type from Promise
 * @deprecated Use `Awaited<T>` instead.
 */
type PromiseValue<P$1 extends Promise<any>> = P$1 extends Promise<infer T> ? T : never;
/**
 * Await on specific props V on type T
 */
type AwaitedProp<T$1 extends AnyRecord, K$1 extends keyof T$1> = { [k in keyof T$1]: k extends K$1 ? Awaited<T$1[k]> : T$1[k] };
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/promise/PromiseValueMerge.d.ts
/**
 * Merging value types from multiple promises.
 */
type PromiseValueMerge<P1$1 extends Promise<any>, P2$1 extends Promise<any>, P3 extends Promise<any> = any, P4 extends Promise<any> = any, P5 extends Promise<any> = any, P6 extends Promise<any> = any, P7 extends Promise<any> = any, P8 extends Promise<any> = any, P9 extends Promise<any> = any> = Promise<Awaited<P1$1> & Awaited<P2$1> & Awaited<P3> & Awaited<P4> & Awaited<P5> & Awaited<P6> & Awaited<P7> & Awaited<P8> & Awaited<P9>>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/string/$extract_manipulated_string.d.ts
/**
 * 🧰 *type util*
 *
 * Extract the manipulated string from any of the intrinsic string manipulation types:
 *
 * - `Uppercase`
 * - `Lowercase`
 * - `Capitalize`
 * - `Uncapitalize`
 */
type $ExtractManipulatedString<T$1 extends string> = [T$1, unknown] extends [unknown, T$1] ? T$1 : $ExtractManipulatedString._UpperOrElse<T$1, $ExtractManipulatedString._LowerOrElse<T$1, $ExtractManipulatedString._CapOrElse<T$1, $ExtractManipulatedString._UncapOrElse<T$1, T$1>>>>;
declare namespace $ExtractManipulatedString {
  type _UpperOrElse<N$1, Else> = N$1 extends Uppercase<infer Y> ? string extends Y ? Uppercase<any> extends N$1 ? Y : N$1 : $ExtractManipulatedString<Y> : Else;
  type _LowerOrElse<N$1, Else> = N$1 extends Lowercase<infer Y> ? string extends Y ? Lowercase<any> extends N$1 ? Y : N$1 : $ExtractManipulatedString<Y> : Else;
  type _CapOrElse<N$1, Else> = N$1 extends Capitalize<infer Y> ? string extends Y ? Capitalize<any> extends N$1 ? Y : N$1 : $ExtractManipulatedString<Y> : Else;
  type _UncapOrElse<N$1, Else> = N$1 extends Uncapitalize<infer Y> ? string extends Y ? Uncapitalize<any> extends N$1 ? Y : N$1 : $ExtractManipulatedString<Y> : Else;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/string/is_not_string.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `string` nor `string` literals.
 *
 * @example
 * ```ts
 * type R = IsNotString<string> // false
 * type R = IsNotString<'a'> // false
 *
 * type R = IsNotString<never> // false
 * type R = IsNotString<unknown> // false
 * type R = IsNotString<string | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `string` nor `string` literals, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotString<string, { selection: 'filter' }> // never
 * type R = IsNotString<'a', { selection: 'filter' }> // never
 *
 * type R = IsNotString<never, { selection: 'filter' }> // never
 * type R = IsNotString<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotString<string | boolean, { selection: 'filter' }> // boolean
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNotString<string | 1> // boolean
 * type R = IsNotString<string | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotString<string, $IsNotString.$Branch> // $Else
 * type R = IsNotString<bigint, $IsNotString.$Branch> // $Then
 * ```
 */
type IsNotString<T$1, $O extends IsNotString.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotString.$<T$1, $O>;
}>>;
declare namespace IsNotString {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is not `string` nor `string` literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], false]> extends true ? $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }> : NotAssignable.$<T$1, string, $O>;
  type $UtilOptions = NotAssignable.$UtilOptions & $Exact.Options;
  type _D<T$1, $O extends $Selection.Options> = T$1 extends string & infer U ? U extends string ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
  type _N<T$1, $O extends $Selection.Options> = [T$1] extends [string & infer U] ? U extends string ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/string/_string_type.d.ts
type _StringType<T$1 extends string> = $ExtractManipulatedString<T$1> extends infer K ? K extends string & infer U ? [K, U] extends [U, K] ? {} extends { [P in `${K}`]: unknown } ? 'templateLiteral' : 'stringLiteral' : 'string' : never : never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/string/is_not_string_literal.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not a string literal(s).
 *
 * @example
 * ```ts
 * type R = IsNotStringLiteral<string> // true
 * type R = IsNotStringLiteral<'a'> // false
 * type R = IsNotStringLiteral<`${number}`> // false
 *
 * type R = IsNotStringLiteral<never> // true
 * type R = IsNotStringLiteral<unknown> // true
 * type R = IsNotStringLiteral<'a' | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not a string literal(s), otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotStringLiteral<string, { selection: 'filter' }> // string
 * type R = IsNotStringLiteral<'a', { selection: 'filter' }> // never
 *
 * type R = IsNotStringLiteral<never, { selection: 'filter' }> // never
 * type R = IsNotStringLiteral<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotStringLiteral<'a' | boolean, { selection: 'filter' }> // boolean
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNotStringLiteral<'abc' | 1> // boolean
 * type R = IsNotStringLiteral<'abc' | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*:
 *
 * Check if `T` is exactly not a string literal, excluding template literals.
 *
 * ```ts
 * type R = IsNotStringLiteral<'${number}'> // false
 * type R = IsNotStringLiteral<'${number}', { exact: true }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotStringLiteral<'abc', $IsNotStringLiteral.$Branch> // $Else
 * type R = IsNotStringLiteral<string, $IsNotStringLiteral.$Branch> // $Then
 * ```
 */
type IsNotStringLiteral<T$1, $O extends IsNotStringLiteral.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotStringLiteral.$<T$1, $O>;
}>>;
declare namespace IsNotStringLiteral {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is string literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], $Exact.Default]> extends true ? $Distributive.Parse<$O, {
    $then: _ED<T$1, $O>;
    $else: _EN<T$1, $O>;
  }> : $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }>;
  type $UtilOptions = Assignable.$UtilOptions & $Exact.Options;
  type _ED<T$1, $O extends $Selection.Options> = T$1 extends string ? _E<T$1, $O> : $ResolveBranch<$O, [$Then], T$1>;
  type _EN<T$1, $O extends $Selection.Options> = [T$1] extends [string] ? _E<T$1, $O> : $ResolveBranch<$O, [$Then], T$1>;
  type _E<T$1 extends string, $O extends $Selection.Options> = T$1 extends string ? _StringType<T$1> extends infer R ? R extends 'stringLiteral' ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : never : $ResolveBranch<$O, [$Then], T$1>;
  type _D<T$1, $O extends $Selection.Options> = T$1 extends string & infer U ? _U<T$1, U$1, $O> : $ResolveBranch<$O, [$Then], T$1>;
  type _N<T$1, $O extends $Selection.Options> = [T$1] extends [string & infer U] ? _U<T$1, U$1, $O> : $ResolveBranch<$O, [$Then], T$1>;
  type _U<T$1, U$1, $O extends $Selection.Options> = U$1 extends `${any}` ? $ResolveBranch<$O, [$Else]> : U$1 extends Uppercase<infer N> ? _D<N, $O> : U$1 extends Lowercase<infer N> ? _D<N, $O> : $ResolveBranch<$O, [$Then], T$1>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/string/is_not_template_literal.d.ts
/**
 * 🎭 *validate*
 *
 * Validate if `T` is not a template literal(s).
 *
 * @example
 * ```ts
 * type R = IsNotTemplateLiteral<string> // true
 * type R = IsNotTemplateLiteral<'foo'> // true
 * type R = IsNotTemplateLiteral<`a${number}`> // false
 *
 * type R = IsNotTemplateLiteral<never> // true
 * type R = IsNotTemplateLiteral<unknown> // true
 * type R = IsNotTemplateLiteral<`${number}` | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not a template literal(s), otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotTemplateLiteral<`${number}`, { selection: 'filter' }> // never
 * type R = IsNotTemplateLiteral<'a', { selection: 'filter' }> // 'a'
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNotTemplateLiteral<`${number}` | 1> // boolean
 * type R = IsNotTemplateLiteral<`${number}` | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotTemplateLiteral<`${number}`, $IsNotTemplateLiteral.$Branch> // $Else
 * type R = IsNotTemplateLiteral<bigint, $IsString.$Branch> // $Then
 * ```
 */
type IsNotTemplateLiteral<T$1, $O extends IsNotTemplateLiteral.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotTemplateLiteral.$<T$1, $O>;
}>>;
declare namespace IsNotTemplateLiteral {
  export type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  export type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  export type $UtilOptions = Assignable.$UtilOptions;
  export type $<T$1, $O extends $UtilOptions> = $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }>;
  type _D<T$1, $O extends $UtilOptions> = T$1 extends string ? _StringType<T$1> extends infer R ? R extends 'templateLiteral' ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1> : never : $ResolveBranch<$O, [$Then], T$1>;
  type _N<T$1, $O extends $UtilOptions> = _D<T$1, {
    $then: $Then;
    $else: $Else;
  }> extends infer R ? $Then | $Else extends R ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [R], T$1> : never;
  export {};
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/string/is_string_literal.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is a string literal(s).
 *
 * @example
 * ```ts
 * type R = IsStringLiteral<string> // false
 * type R = IsStringLiteral<'a'> // true
 * type R = IsStringLiteral<`${number}`> // true
 *
 * type R = IsStringLiteral<never> // false
 * type R = IsStringLiteral<unknown> // false
 * type R = IsStringLiteral<'a' | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is a string literal(s), otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsStringLiteral<string, { selection: 'filter' }> // never
 * type R = IsStringLiteral<'a', { selection: 'filter' }> // 'a'
 *
 * type R = IsStringLiteral<never, { selection: 'filter' }> // never
 * type R = IsStringLiteral<unknown, { selection: 'filter' }> // never
 * type R = IsStringLiteral<'a' | boolean, { selection: 'filter' }> // 'a'
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsStringLiteral<'abc' | 1> // boolean
 * type R = IsStringLiteral<'abc' | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*:
 *
 * Check if `T` is exactly a string literal, excluding template literals.
 *
 * ```ts
 * type R = IsStringLiteral<'${number}'> // true
 * type R = IsStringLiteral<'${number}', { exact: true }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsStringLiteral<'abc', $IsStringLiteral.$Branch> // $Then
 * type R = IsStringLiteral<string, $IsStringLiteral.$Branch> // $Else
 * ```
 */
type IsStringLiteral<T$1, $O extends IsStringLiteral.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsStringLiteral.$<T$1, $O>;
}>>;
declare namespace IsStringLiteral {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is string literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $ResolveOptions<[$O['exact'], $Exact.Default]> extends true ? $Distributive.Parse<$O, {
    $then: _ED<T$1, $O>;
    $else: _EN<T$1, $O>;
  }> : $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }>;
  type $UtilOptions = Assignable.$UtilOptions & $Exact.Options;
  type _ED<T$1, $O extends $Selection.Options> = T$1 extends string ? _E<T$1, $O> : $ResolveBranch<$O, [$Else]>;
  type _EN<T$1, $O extends $Selection.Options> = [T$1] extends [string] ? _E<T$1, $O> : $ResolveBranch<$O, [$Else]>;
  type _E<T$1 extends string, $O extends $Selection.Options> = T$1 extends string ? _StringType<T$1> extends infer R ? R extends 'stringLiteral' ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : never : $ResolveBranch<$O, [$Else]>;
  type _D<T$1, $O extends $Selection.Options> = T$1 extends string & infer U ? _U<T$1, U$1, $O> : $ResolveBranch<$O, [$Else]>;
  type _N<T$1, $O extends $Selection.Options> = [T$1] extends [string & infer U] ? _U<T$1, U$1, $O> : $ResolveBranch<$O, [$Else]>;
  type _U<T$1, U$1, $O extends $Selection.Options> = U$1 extends `${any}` ? $ResolveBranch<$O, [$Then], T$1> : U$1 extends Uppercase<infer N> ? _D<N, $O> : U$1 extends Lowercase<infer N> ? _D<N, $O> : $ResolveBranch<$O, [$Else]>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/string/is_template_literal.d.ts
/**
 * 🎭 *validate*
 *
 * Validate if `T` is a template literal(s).
 *
 * @example
 * ```ts
 * type R = IsTemplateLiteral<string> // false
 * type R = IsTemplateLiteral<'foo'> // false
 * type R = IsTemplateLiteral<`a${number}`> // true
 *
 * type R = IsTemplateLiteral<`a${number}` | `${bigint}c`> // true
 *
 * type R = IsTemplateLiteral<never> // false
 * type R = IsTemplateLiteral<unknown> // false
 * type R = IsTemplateLiteral<`${number}` | boolean> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is a template literal(s), otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsTemplateLiteral<`${number}`, { selection: 'filter' }> // `${number}`
 * type R = IsTemplateLiteral<'a', { selection: 'filter' }> // never
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsTemplateLiteral<`${number}` | 1> // boolean
 * type R = IsTemplateLiteral<`${number}` | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsTemplateLiteral<`${number}`, $IsTemplateLiteral.$Branch> // $Then
 * type R = IsTemplateLiteral<bigint, $IsString.$Branch> // $Else
 * ```
 */
type IsTemplateLiteral<T$1, $O extends IsTemplateLiteral.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Else]>;
  $else: IsTemplateLiteral.$<T$1, $O>;
}>>;
declare namespace IsTemplateLiteral {
  export type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  export type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  export type $UtilOptions = Assignable.$UtilOptions;
  export type $<T$1, $O extends $UtilOptions> = $Distributive.Parse<$O, {
    $then: _D<T$1, $O>;
    $else: _N<T$1, $O>;
  }>;
  type _D<T$1, $O extends $UtilOptions> = T$1 extends string ? _StringType<T$1> extends infer R ? R extends 'templateLiteral' ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : never : $ResolveBranch<$O, [$Else]>;
  type _N<T$1, $O extends $UtilOptions> = _D<T$1, {
    $then: $Then;
    $else: $Else;
  }> extends infer R ? $Then | $Else extends R ? $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [R], T$1> : never;
  export {};
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/string/string.d.ts
/**
 * Check if `Subject` includes `Search`.
 * If either of them is not a string, returns `Else`.
 *
 * ```ts
 * type R = StringIncludes<'abc', 'a'> // true
 *
 * type R = StringIncludes<'abc', 'd'> // false
 * ```
 */
type StringIncludes<Subject extends string, Search extends string, Then = true, Else = false> = Subject extends `${infer _X}${Search}${infer _Y}` ? Then : Else;
/**
 * Split a string into substrings using the specified separator,
 * and return them as an array.
 *
 * ```ts
 * type R = StringSplit<'abc', ''> // ['a', 'b', 'c']
 * type R = StringSplit<'abc', 'a'> // ['', 'bc']
 * type R = StringSplit<'abc', 'b'> // ['a', 'c']
 * type R = StringSplit<'abc', 'c'> // ['ab', '']
 * ```
 */
type StringSplit<Subject extends string, Seperator extends string> = Subject extends `${infer A}${Seperator}${infer B}` ? [A, ...StringSplit<B, Seperator>] : Seperator extends '' ? [] : [Subject];
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/string/string_plus.d.ts
declare namespace StringPlus {
  /**
   * Check if `Subject` includes `Search`.
   * If either of them is not a string, returns `Else`.
   *
   * ```ts
   * type R = StringPlus.Includes<'abc', 'a'> // true
   *
   * type R = StringPlus.Includes<'abc', 'd'> // false
   * ```
   */
  type Includes<Subject extends string, Search extends string, Then = true, Else = false> = StringIncludes<Subject, Search, Then, Else>;
  /**
   * Split a string into substrings using the specified separator,
   * and return them as an array.
   *
   * ```ts
   * type R = StringPlus.Split<'abc', ''> // ['a', 'b', 'c']
   * type R = StringPlus.Split<'abc', 'a'> // ['', 'bc']
   * type R = StringPlus.Split<'abc', 'b'> // ['a', 'c']
   * type R = StringPlus.Split<'abc', 'c'> // ['ab', '']
   * ```
   */
  type Split<Subject extends string, Seperator extends string> = StringSplit<Subject, Seperator>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/symbol/is_not_symbol.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `symbol`.
 *
 * ```ts
 * type R = IsNotSymbol<symbol> // false
 *
 * type R = IsNotSymbol<never> // true
 * type R = IsNotSymbol<unknown> // true
 * type R = IsNotSymbol<string | boolean> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `symbol`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotSymbol<symbol, { selection: 'filter' }> // never
 *
 * type R = IsNotSymbol<never, { selection: 'filter' }> // never
 * type R = IsNotSymbol<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotSymbol<symbol | string, { selection: 'filter' }> // string
 * ```
 *
 * 🔢 *customize*
 *
 * Disable distribution of union types.
 *
 * @example
 * ```ts
 * type R = IsNotSymbol<symbol | 1> // boolean
 * type R = IsNotSymbol<symbol | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotSymbol<string, $SelectionBranch> // $Then
 * type R = IsNotSymbol<symbol, $SelectionBranch> // $Else
 * ```
 */
type IsNotSymbol<T$1, $O extends IsNotSymbol.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotSymbol.$<T$1, $O>;
}>>;
declare namespace IsNotSymbol {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `null`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = NotAssignable.$<T$1, symbol, $O>;
  type $UtilOptions = NotAssignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/testing/stub.d.ts
/**
 * stub a value.
 *
 * If the value is a function, it will be passed through as-is.
 *
 * 🦴 `utilities`
 */
declare function stub<T$1 extends AnyFunction>(stub: T$1): T$1;
declare function stub<T$1>(stub: RecursivePartial<NoInfer<T$1>>): T$1;
declare namespace stub {
  var build: <T$1>(init: RecursivePartial<T$1> | ((stub?: RecursivePartial<T$1>) => RecursivePartial<T$1>)) => (stub?: RecursivePartial<T$1>) => T$1;
  var builder: <T$1>(init: RecursivePartial<T$1> | ((stub?: RecursivePartial<T$1>) => RecursivePartial<T$1>)) => {
    /**
     * Adds an init object or handler to the builder.
     *
     * If `init` is an object, it will be merged with the stub object.
     * If `init` is a function, it will be called with the stub object.
     *
     * @return {Builder<T>} The builder instance.
     */
    with(init: RecursivePartial<T$1> | ((stub?: RecursivePartial<T$1> | undefined) => RecursivePartial<T$1>)): any;
    /**
     * Creates the resulting stub function.
     */
    create(): (stub?: RecursivePartial<T$1> | undefined) => T$1;
  };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/testing/test_type.d.ts
declare namespace testType {
  interface TestType {
    /**
     * Check if type `A` is equal to type `B` and `C`.
     *
     * @return `expected` as `A` for type inspection.
     */
    equal<A$1, B$1, C$1>(expected: IsEqual<A$1, B$1> & IsEqual<A$1, C$1>): A$1;
    /**
     * Check if type `A` is equal to type `B`.
     *
     * @return `expected` as `A` for type inspection.
     */
    equal<A$1, B$1>(expected: IsEqual<A$1, B$1>): A$1;
    /**
     * Check if `A` can assign to `B`.
     *
     * If `A` is a union,
     * the check is distributive.
     *
     * Meaning the result can be `boolean`,
     * meaning both `true` and `false` will pass.
     *
     * If you want to avoid the distributivity,
     * use `testType.strictCanAssign()` instead.
     *
     * @example
     * ```ts
     * testType.canAssign<123, number> // true
     *
     * testType.canAssign<number | string, number> // boolean
     * ```
     *
     * @return `expected` as `A` for type inspection.
     */
    canAssign<A$1, B$1>(expected: Assignable<A$1, B$1>): A$1;
    /**
     * Check if `A` can fully assign to `B`.
     *
     * This checks all branches in an union `A` are assignable to `B`.
     *
     * @example
     * ```ts
     * testType.strictCanAssign<number | string, number | string> // true
     *
     * testType.strictCanAssign<number | string, number> // false
     * ```
     *
     * @return `expected` as `A` for type inspection.
     */
    strictCanAssign<A$1, B$1>(expected: Assignable<A$1, B$1, {
      distributive: false;
    }>): A$1;
    /**
     * Check if type `T` is exactly `any`.
     *
     * @return `expected` as `T` for type inspection.
     */
    any<T$1>(expected: IsAny<T$1>): T$1;
    /**
     * Check if type `T` is exactly `array`.
     *
     * @return `expected` as `T` for type inspection.
     */
    array<T$1>(expected: IsArray<T$1, {
      exact: true;
    }>): T$1;
    /**
     * Check if type `T` is exactly `bigint`.
     *
     * @return `expected` as `T` for type inspection.
     */
    strictBigint<T$1>(expected: IsBigint<T$1, {
      distributive: false;
      exact: true;
    }>): T$1;
    /**
     * Check if type `T` is `bigint` or bigint literals.
     *
     * @return `expected` as `T` for type inspection.
     */
    bigint<T$1>(expected: IsBigint<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is exactly `boolean`.
     *
     * @return `expected` as `T` for type inspection.
     */
    strictBoolean<T$1>(expected: IsBoolean<T$1, {
      distributive: false;
      exact: true;
    }>): T$1;
    /**
     * Check if type `T` is `boolean` and boolean literals.
     *
     * @return `expected` as `T` for type inspection.
     */
    boolean<T$1>(expected: IsBoolean<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is exactly `true`.
     *
     * @return `expected` as `T` for type inspection.
     */
    true<T$1>(expected: IsTrue<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is exactly `false`.
     *
     * @return `expected` as `T` for type inspection.
     */
    false<T$1>(expected: IsFalse<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is exactly `boolean`.
     *
     * @return `expected` as `T` for type inspection.
     */
    strictFunction<T$1>(expected: IsStrictFunction<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is `boolean` and boolean literals.
     *
     * @return `expected` as `T` for type inspection.
     */
    function<T$1>(expected: IsFunction<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is exactly `never`.
     *
     * @return `expected` as `T` for type inspection.
     */
    never<T$1>(expected: IsNever<T$1>): T$1;
    /**
     * Check if type `T` is exactly `null`.
     *
     * @return `expected` as `T` for type inspection.
     */
    null<T$1>(expected: IsNull<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is exactly `number`.
     *
     * @return `expected` as `T` for type inspection.
     */
    strictNumber<T$1>(expected: IsNumber<T$1, {
      distributive: false;
      exact: true;
    }>): T$1;
    /**
     * Check if type `T` is `number` or number literals.
     *
     * @return `expected` as `T` for type inspection.
     */
    number<T$1>(expected: IsNumber<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is `object`.
     *
     * Note that `Function`, `Array`, and *tuple* are also `object`.
     *
     * @return `expected` as `T` for type inspection.
     */
    object<T$1>(expected: IsObject<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is exactly `string`.
     *
     * @return `expected` as `T` for type inspection.
     */
    strictString<T$1>(expected: IsString<T$1, {
      distributive: false;
      exact: true;
    }>): T$1;
    /**
     * Check if type `T` is `string` or string literals.
     *
     * @return `expected` as `T` for type inspection.
     */
    string<T$1>(expected: IsString<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is a `symbol`.
     *
     * @return `expected` as `T` for type inspection.
     */
    symbol<T$1>(expected: IsSymbol<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is a *tuple*.
     *
     * @return `expected` as `T` for type inspection.
     */
    tuple<T$1>(expected: IsTuple<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is exactly `undefined`.
     *
     * @return `expected` as `T` for type inspection.
     */
    undefined<T$1>(expected: IsUndefined<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * Check if type `T` is exactly `unknown`.
     *
     * @return `expected` as `T` for type inspection.
     */
    unknown<T$1>(expected: IsUnknown<T$1>): T$1;
    /**
     * Check if type `T` is exactly `void`.
     *
     * @return `expected` as `T` for type inspection.
     */
    void<T$1>(expected: IsVoid<T$1, {
      distributive: false;
    }>): T$1;
    /**
     * A quick way to inspect a type.
     *
     * The handler receives a `InspectedType` object.
     * It contains `value` which is typed to `T`,
     * and many other properties to inspect the behavior of `T`.
     *
     * The handler is not being call,
     * it is use to hold the type in value for inspection.
     *
     * 🧪 *testing*
     * 🦴 *utilities*
     *
     * @example
     * ```ts
     * testType.inspect<SomeType>(t => {
     *   type T = typeof t.value // resolve and inspect the type `T`
     *   t.extend_boolean // result of `T extends boolean`
     * })
     * ```
     *
     * After trying out the type, remove the line.
     */
    inspect<T$1>(handler: (t: InspectedType<T$1>) => unknown): T$1;
  }
  type InspectedType<T$1> = {
    type: T$1;
    extends<R$1>(): T$1 extends R$1 ? true : false;
    extends_any: T$1 extends any ? true : false;
    extends_unknown: T$1 extends unknown ? true : false;
    extends_void: T$1 extends void ? true : false;
    extends_never: T$1 extends never ? true : false;
    extends_undefined: T$1 extends undefined ? true : false;
    extends_null: T$1 extends null ? true : false;
    extends_boolean: T$1 extends boolean ? true : false;
    extends_true: T$1 extends true ? true : false;
    extends_false: T$1 extends false ? true : false;
    extends_number: T$1 extends number ? true : false;
    extends_1: T$1 extends 1 ? true : false;
    extends_bigint: T$1 extends bigint ? true : false;
    extends_1n: T$1 extends 1n ? true : false;
    extends_string: T$1 extends string ? true : false;
    extends_a: T$1 extends 'a' ? true : false;
    extends_symbol: T$1 extends symbol ? true : false;
    extends_object: T$1 extends object ? true : false;
    extends_function: T$1 extends Function ? true : false;
    extends_array_unknown: T$1 extends unknown[] ? true : false;
    extends_tuple_empty: T$1 extends [] ? true : false;
    union<R$1>(): T$1 | R$1;
    union_any: T$1 | any;
    union_unknown: T$1 | unknown;
    union_void: T$1 | void;
    union_never: T$1 | never;
    union_undefined: T$1 | undefined;
    union_null: T$1 | null;
    union_boolean: T$1 | boolean;
    union_true: T$1 | true;
    union_false: T$1 | false;
    union_number: T$1 | number;
    union_1: T$1 | 1;
    union_bigint: T$1 | bigint;
    union_1n: T$1 | 1n;
    union_string: T$1 | string;
    union_a: T$1 | 'a';
    union_symbol: T$1 | symbol;
    union_object: T$1 | object;
    union_function: T$1 | Function;
    union_array_unknown: T$1 | unknown[];
    union_tuple_empty: T$1 | [];
    intersect<R$1>(): T$1 & R$1;
    intersect_any: T$1 & any;
    intersect_unknown: T$1 & unknown;
    intersect_void: T$1 & void;
    intersect_never: T$1 & never;
    intersect_undefined: T$1 & undefined;
    intersect_null: T$1 & null;
    intersect_boolean: T$1 & boolean;
    intersect_true: T$1 & true;
    intersect_false: T$1 & false;
    intersect_number: T$1 & number;
    intersect_1: T$1 & 1;
    intersect_bigint: T$1 & bigint;
    intersect_1n: T$1 & 1n;
    intersect_string: T$1 & string;
    intersect_a: T$1 & 'a';
    intersect_symbol: T$1 & symbol;
    intersect_object: T$1 & object;
    intersect_function: T$1 & Function;
    intersect_array_unknown: T$1 & unknown[];
    intersect_tuple_empty: T$1 & [];
  };
}
/**
 * Test utilities for types.
 *
 * This is designed specifically for testing.
 * The return value is the input `expected` parameter asserted as the first type parameter,
 * so that the type can be further inspected.
 */
declare const testType: testType.TestType;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/tuple/tuple_plus.common_prop_keys.d.ts
/**
 * ⚗️ *transform*
 * 🔢 *customization*
 *
 * Gets the common property keys of the elements in tuple `T`.
 *
 * @example
 * ```ts
 * import { type TuplePlus } from 'type-plus'
 *
 * type R = TuplePlus.CommonPropKeys<[{ a: number }, { b: number }]> // never
 * type R = TuplePlus.CommonPropKeys<[{ a: number, c: 1 }, { b: number, c: 2 }]> // 'c'
 * ```
 *
 * @typeParam Options['$never'] Return type when `T` is `never`.
 * Default to `never`.
 */
type CommonPropKeys$1<T$1 extends Record<KeyTypes, unknown>[], Options$1 extends CommonPropKeys$1.Options = CommonPropKeys$1.DefaultOptions> = IsNever<T$1, {
  $then: Options$1['$never'];
  $else: T$1['length'] extends 0 ? never : T$1['length'] extends 1 ? keyof T$1[0] : T$1['length'] extends 2 ? keyof T$1[0] & keyof T$1[1] : keyof T$1[0] & keyof T$1[1] & CommonPropKeys$1<Tail$1<Tail$1<T$1>>>;
}>;
declare namespace CommonPropKeys$1 {
  interface Options extends $Never.$Options {}
  interface DefaultOptions extends $Never.$Default {}
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/tuple/common_prop_keys.d.ts
/**
 * ⚗️ *transform*
 * 🔢 *customization*
 *
 * Gets the common property keys of the elements in tuple or array `T`.
 *
 * @example
 * ```ts
 * import { CommonPropKeys } from 'type-plus'
 *
 * type R = CommonPropKeys<[{ a: number }, { b: number }]> // never
 * type R = CommonPropKeys<[{ a: number, c: 1 }, { b: number, c: 2 }]> // 'c'
 * ```
 *
 * @typeParam Options['$never'] Return type when `T` is `never`.
 * Default to `never`.
 */
type CommonPropKeys<T$1 extends Record<KeyTypes, unknown>[], Options$1 extends CommonPropKeys.Options = CommonPropKeys.DefaultOptions> = number extends T$1['length'] ? CommonPropKeys$2<T$1> : CommonPropKeys$1<T$1, Options$1>;
declare namespace CommonPropKeys {
  interface Options extends CommonPropKeys$1.Options {}
  interface DefaultOptions extends CommonPropKeys$1.DefaultOptions {}
}
/**
 * Gets the common property keys of the elements in `A`.
 *
 * @deprecated Please use `CommonPropKeys` instead.
 */
type CommonKeys<A$1 extends Record<KeyTypes, any>[]> = CommonPropKeys<A$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/tuple/tuple_plus.drop_match.d.ts
type DropMatch$1<A$1 extends Readonly<Array<unknown>>, Criteria> = A$1['length'] extends 0 ? A$1 : A$1 extends readonly [infer Head, ...infer Tail] ? Tail['length'] extends 0 ? undefined extends Criteria ? DropMatch$1.ExcludeUnionOfEmptyTuple<Head extends Criteria ? [] : [Head]> : DropMatch$1.ExcludeUnionOfEmptyTuple<Head extends Criteria ? [] : [Head]> : Exclude<Head, Criteria> extends never ? DropMatch$1<Tail, Criteria> : [Exclude<Head, Criteria>, ...DropMatch$1<Tail, Criteria>] : never[];
declare namespace DropMatch$1 {
  type ExcludeUnionOfEmptyTuple<A$1> = IsEqual<A$1, []> extends true ? A$1 : Exclude<A$1, []>;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/tuple/drop.d.ts
/**
 * ⚗️ *transform*
 * 🔢 *customizable*
 *
 * Drops the first entry in the tuple `T`.
 *
 * If the type is an array, the same array will be returned.
 *
 * @example
 * ```ts
 * type R = DropFirst<[1, 2, 3]> // [2, 3]
 * type R = DropFirst<[string]> // []
 * type R = DropFirst<[]> // []
 * type R = DropFirst<string[]> // string[]
 * ```
 *
 * @typeParam Options['$array'] Return type when `T` is `Array`.
 * Default to `T`.
 *
 * @typeParam Options['caseEmptyTuple'] Return type when `T` is an empty tuple.
 * Default to `[]`.
 */
type DropFirst<T$1 extends unknown[], Options$1 extends DropFirst.Options = DropFirst.DefaultOptions<T$1>> = number extends T$1['length'] ? Options$1['$array'] : T$1['length'] extends 0 ? Options$1['caseEmptyTuple'] : T$1['length'] extends 1 ? [] : T$1 extends [any, ...infer Tail] ? Tail : never;
declare namespace DropFirst {
  interface Options {
    $array?: unknown;
    caseEmptyTuple?: unknown;
  }
  interface DefaultOptions<T$1> {
    $array: T$1;
    caseEmptyTuple: [];
  }
}
/**
 * ⚗️ *transform*
 * 🔢 *customizable*
 *
 * Drops the last entry in the tuple `T`.
 *
 * If the type is an array, the same array will be returned.
 *
 * @example
 * ```ts
 * type R = DropLast<[1, 2, 3]> // [2, 3]
 * type R = DropLast<[string]> // []
 * type R = DropLast<[]> // []
 * type R = DropLast<string[]> // string[]
 * ```
 *
 * @typeParam Options['$array'] Return type when `T` is `Array`.
 * Default to `T`.
 *
 * @typeParam Options['caseEmptyTuple'] Return type when `T` is an empty tuple.
 * Default to `[]`.
 */
type DropLast<T$1 extends unknown[], Cases extends DropLast.Options = DropLast.DefaultOptions<T$1>> = number extends T$1['length'] ? Cases['$array'] : T$1['length'] extends 0 ? Cases['caseEmptyTuple'] : T$1['length'] extends 1 ? [] : T$1 extends [...infer Heads, any] ? Heads : never;
declare namespace DropLast {
  interface Options {
    $array?: unknown;
    caseEmptyTuple?: unknown;
  }
  interface DefaultOptions<T$1> {
    $array: T$1;
    caseEmptyTuple: [];
  }
}
/**
 * ⚗️ *transform*
 *
 * Drops entries matching `Criteria` in array or tuple `A`.
 *
 * @example
 * ```ts
 * type R = DropMatch<Array<string | undefined>, undefined> // string[]
 * type R = DropMatch<Array<string>, string> // never[]
 * type R = DropMatch<Array<1 | 2>, number> // never[]
 * ```
 */
type DropMatch<A$1 extends Readonly<Array<unknown>>, Criteria> = number extends A$1['length'] ? DropMatch$2<A$1, Criteria> : DropMatch$1<A$1, Criteria>;
type DropNull<A$1 extends Array<any>> = DropMatch<A$1, null>;
type DropNullable<A$1 extends Array<any>> = DropMatch<A$1, null | undefined>;
type DropUndefined<A$1 extends Array<any>> = DropMatch<A$1, undefined>;
/**
 * drop a particular value from an array.
 *
 * 💀 *deprecated* the type does not sufficiently cover the use cases.
 */
declare function drop<A$1 extends Readonly<unknown[]>, const C$1>(array: A$1, value: C$1): DropMatch<A$1, C$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/tuple/is_not_tuple.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate that `T` is not a tuple, excluding array.
 *
 * ```ts
 * type R = IsNotTuple<[]>       // false
 * type R = IsNotTuple<[1]>      // false
 *
 * type R = IsNotTuple<number[]> // true
 * type R = IsNotTuple<string>   // true
 * type R = IsNotTuple<never>    // true
 * type R = IsNotTuple<unknown>  // true
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not a `tuple`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotTuple<[], { selection: 'filter' }> // never
 * type R = IsNotTuple<[1], { selection: 'filter' }> // never
 *
 * type R = IsNotTuple<never, { selection: 'filter' }> // never
 * type R = IsNotTuple<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotTuple<[] | boolean, { selection: 'filter' }> // boolean
 * type R = IsNotTuple<[1] | bigint> // bigint
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * ```ts
 * type R = IsNotTuple<[] | 1> // boolean
 * type R = IsNotTuple<[] | 1, { distributive: false }> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotTuple<bigint, IsNotTuple.$Branch> // $Then
 * type R = IsNotTuple<[], IsNotTuple.$Branch> // $Else
 * ```
 */
type IsNotTuple<T$1, $O extends IsNotTuple.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotTuple.$<T$1, $O>;
}>>;
declare namespace IsNotTuple {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `bigint` or `bigint` literals.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = $Distributive.Parse<$O, {
    $then: T$1 extends readonly any[] ? number extends T$1['length'] ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
    $else: [T$1] extends [readonly any[]] ? number extends T$1['length'] ? $ResolveBranch<$O, [$Then], T$1> : $ResolveBranch<$O, [$Else]> : $ResolveBranch<$O, [$Then], T$1>;
  }>;
  type $UtilOptions = NotAssignable.$UtilOptions;
}
declare namespace tuple_plus_d_exports {
  export { CommonPropKeys$1 as CommonPropKeys, DropMatch$1 as DropMatch, Filter$1 as Filter, Find, PadStart$2 as PadStart };
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/type-guard/is_type.d.ts
/**
 * Is the subject of type T
 */
declare function isType<T$1>(subject: T$1): subject is T$1;
/**
 * Is the subject of type T, satisfying the supplied validator
 */
declare function isType<T$1>(subject: unknown, validator: (s: T$1) => unknown): subject is T$1;
declare namespace isType {
  var t: <T$1 extends true>(subject?: T$1) => boolean;
  var f: <T$1 extends false>(subject?: T$1) => boolean;
  var never: typeof isNever;
  var equal: <_C extends IsEqual<A$1, B$1>, A$1, B$1>() => void;
}
/**
 * Check is the type `never`
 * @deprecated use `isType<T>()` or `testType.never<T>()` instead
 */
declare function isNever<_S extends never>(): unknown;
/**
 * Check is the value is type `never`
 * @deprecated use `isType<T>()` or `testType.never<T>()` instead
 */
declare function isNever(subject: never): subject is never;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/undefined/has_undefined.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is `undefined` or an union with `undefined`.
 *
 * @example
 * ```ts
 * type R = HasUndefined<undefined> // true
 * type R = HasUndefined<undefined | 1> // true
 *
 * type R = HasUndefined<number> // false
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is `undefined` or an union with `undefined`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = HasUndefined<undefined> // undefined
 * type R = HasUndefined<undefined | 1> // undefined | 1
 *
 * type R = HasUndefined<number> // never
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = HasUndefined<undefined, $SelectionBranch> // $Then
 * type R = HasUndefined<string, $SelectionBranch> // $Else
 * ```
 */
type HasUndefined<T$1, $O extends $Selection.Options = {}> = $ResolveBranch<$O, [IsUndefined<T$1> extends false ? $Else : $Then], T$1>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/undefined/is_not_undefined.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `undefined`.
 *
 * @example
 * ```ts
 * type R = IsNotUndefined<undefined> // false
 *
 * type R = IsNotUndefined<never> // true
 * type R = IsNotUndefined<unknown> // true
 * type R = IsNotUndefined<string | boolean> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `undefined`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotUndefined<undefined, { selection: 'filter' }> // never
 *
 * type R = IsNotUndefined<never, { selection: 'filter' }> // never
 * type R = IsNotUndefined<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotUndefined<string | boolean, { selection: 'filter' }> // string | boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Disable distribution of union types.
 *
 * @example
 * ```ts
 * type R = IsNotUndefined<undefined | 1> // boolean
 * type R = IsNotUndefined<undefined | 1, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotUndefined<string, $SelectionBranch> // $Then
 * type R = IsNotUndefined<undefined, $SelectionBranch> // $Else
 * ```
 */
type IsNotUndefined<T$1, $O extends IsNotUndefined.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $else: IsNotUndefined.$<T$1, $O>;
}>>;
declare namespace IsNotUndefined {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `undefined`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = NotAssignable.$<T$1, undefined, $O>;
  type $UtilOptions = NotAssignable.$UtilOptions;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/union/sub_union.d.ts
/**
 * 🧰 *type util*
 * Define a union type that is a subset of union type.
 */
type SubUnion<U$1, T$1 extends U$1> = T$1;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/unknown/is_not_unknown.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not exactly `unknown`.
 *
 * @example
 * ```ts
 * type R = IsNotUnknown<unknown> // false
 *
 * type R = IsNotUnknown<number> // true
 * type R = IsNotUnknown<never> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not exactly `unknown`.
 *
 * @example
 * ```ts
 * type R = IsNotUnknown<unknown, { selection: 'filter' }> // never
 *
 * type R = IsNotUnknown<number, { selection: 'filter' }> // number
 * type R = IsNotUnknown<never, { selection: 'filter' }> // never
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotUnknown<unknown, $SelectionBranch> // $Else
 * type R = IsNotUnknown<string, $SelectionBranch> // $Then
 * ```
 */
type IsNotUnknown<T$1, $O extends IsNotUnknown.$Options = {}> = $Special<T$1, {
  $any: $ResolveBranch<$O, [$Any, $Then], T$1>;
  $unknown: $ResolveBranch<$O, [$Else]>;
  $never: $ResolveBranch<$O, [$Never, $Then], T$1>;
  $void: $ResolveBranch<$O, [$Void, $Then], T$1>;
  $else: $ResolveBranch<$O, [$Then], T$1>;
}>;
declare namespace IsNotUnknown {
  type $Options = $Selection.Options & $InputOptions<$Any | $Never>;
  type $Branch = $Selection.Branch;
}
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/unknown/not_unknown_or.d.ts
/**
 * 🌪️ *filter*
 *
 * Returns `T` if `T` is not `unknown`, otherwise `$Unknown`.
 *
 * @example
 * ```ts
 * type R = NotUnknownOr<number> // number
 * type R = NotUnknownOr<unknown> // $Unknown
 *
 * // customize
 * type R = NotUnknownOr<unknown, number> // number
 * ```
 *
 * 🔢 *customize*
 *
 * Replace `unknown` branch with `Replace`.
 *
 * @example
 * ```ts
 * type R = NotUnknownOr<unknown, number> // number
 * ```
 */
type NotUnknownOr<T$1, Else = $Unknown> = IsUnknown<T$1, {
  $then: Else;
  $else: T$1;
}>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/utils/no_infer.d.ts
/**
 * Prevents inference of a type parameter `T`.
 *
 * 🦴 *utilities*
 *
 * @deprecated 💀 **deprecated since 8.0.0**: use `NoInfer` from TypeScript 5.4 instead
 *
 * @author original version author @ajafff
 * @see https://github.com/microsoft/TypeScript/issues/14829#issuecomment-298425341
 *
 * @example
 * ```ts
 * function assertEqual<T>(a: T, b: NoInfer<T>) {
 *   return a === b
 * }
 *
 * assertEqual(123, 324) // OK
 * assertEqual(123, 'abc') // Error
 * assertEqual({ x: 1 }, { x: 1, y: 2 }) // Error
 * ```
 */
type NoInfer$1<T$1> = Or<IsNull<T$1>, IsUndefined<T$1, $Selection.Predicate>, {
  $then: T$1;
  $else: T$1 & {};
}>;
//#endregion
//#region ../../node_modules/.pnpm/type-plus@8.0.0-beta.8_typescript@5.9.3/node_modules/type-plus/esm/void/is_not_void.d.ts
/**
 * 🎭 *predicate*
 *
 * Validate if `T` is not `void`.
 *
 * @example
 * ```ts
 * type R = IsNotVoid<void> // false
 *
 * type R = IsNotVoid<never> // true
 * type R = IsNotVoid<unknown> // true
 * type R = IsNotVoid<string | boolean> // true
 *
 * type R = IsNotVoid<string | void> // boolean
 * ```
 *
 * 🔢 *customize*
 *
 * Filter to ensure `T` is not `void`, otherwise returns `never`.
 *
 * @example
 * ```ts
 * type R = IsNotVoid<void, { selection: 'filter' }> // never
 *
 * type R = IsNotVoid<never, { selection: 'filter' }> // never
 * type R = IsNotVoid<unknown, { selection: 'filter' }> // unknown
 * type R = IsNotVoid<string | void, { selection: 'filter' }> // string
 * ```
 *
 * 🔢 *customize*:
 *
 * Disable distribution of union types.
 *
 * @example
 * ```ts
 * type R = IsNotVoid<void | string> // boolean
 * type R = IsNotVoid<void | string, { distributive: false }> // true
 * ```
 *
 * 🔢 *customize*
 *
 * Use unique branch identifiers to allow precise processing of the result.
 *
 * @example
 * ```ts
 * type R = IsNotVoid<void, $SelectionBranch> // $Else
 * type R = IsNotVoid<string, $SelectionBranch> // $Then
 * ```
 */
type IsNotVoid<T$1, $O extends IsNotVoid.$Options = {}> = $Special<T$1, $MergeOptions<$O, {
  $then: $ResolveBranch<$O, [$Then], T$1>;
  $void: $ResolveBranch<$O, [$Void, $Else]>;
  $else: IsNotVoid.$<T$1, $O>;
}>>;
declare namespace IsNotVoid {
  type $Options = $Selection.Options & $Distributive.Options & $Exact.Options & $InputOptions<$Any | $Unknown | $Never | $Void>;
  type $Branch<$O extends $Options = {}> = $Selection.Branch<$O>;
  /**
   * 🧰 *type util*
   *
   * Validate if `T` is `undefined`.
   *
   * This is a type util for building custom types.
   * It does not check against special types.
   */
  type $<T$1, $O extends $UtilOptions> = IsUndefined.$<T$1, {
    $then: $ResolveBranch<$O, [$Then], T$1>;
    $else: NotAssignable.$<T$1, void, $O>;
  }>;
  type $UtilOptions = NotAssignable.$UtilOptions;
}
//#endregion
export { $Any, $Branch, $BranchOptions, $Distributive, $Else, $Error, $Exact, $ExtractManipulatedString, $InferError, $InputOptions, $MergeOptions, $Never, $NotNever, $ResolveBranch, $ResolveOptions, $SelectInvert, $SelectInvertStrict, $Selection, $Special, $Then, $Type, $Unknown, ANotB, type Abs, type Add$1 as Add, AdjustExactOptionalProps, And, AnyConstructor, type AnyFunction, AnyRecord, array_plus_d_exports as ArrayPlus, Assignable, type At, AwaitedProp, bit_d_exports as B, bit_d_exports as Bit, BNotA, Box, Brand, Branded, CanAssign, ChainFn, type CommonKeys, type CommonPropKeys, type ComposableTypes, type Concat, ContextBaseShape, ContextBuilder, ContextExtender, CreateTuple, type Decrement, type DropFirst, type DropLast, type DropMatch, type DropNull, type DropNullable, type DropUndefined, EitherAnd, EitherOrBoth, EndoFn, Equal, Except, Exclude$1 as Exclude, ExcludePropType, Extendable, ExtractFunction, Failed, FailedT, type Filter, type FindFirst, type FindLast, Flavor, Flavored, FlavoredUnit, type GreaterThan, HasKey, HasUndefined, type Head$1 as Head, If, type Increment, type IntersectOfProps, type IsAny, IsAnyOrNever, IsArray, IsAssign, IsBigint, IsBigintLiteral, IsBoolean, IsDisjoint, IsEmptyObject, type IsEqual, IsExtend, IsFalse, IsFunction, IsInteger, IsLiteral, type IsLooseArray, IsNegative, IsNever, type IsNotAny, IsNotArray, IsNotBigint, IsNotBigintLiteral, IsNotBoolean, type IsNotEqual, IsNotExtend, IsNotFalse, IsNotFunction, IsNotInteger, type IsNotLooseArray, IsNotNegative, IsNotNever, IsNotNull, IsNotNumber, IsNotNumberLiteral, IsNotNumeric, IsNotObject, IsNotPositive, IsNotStrictFunction, IsNotString, IsNotStringLiteral, IsNotSymbol, IsNotTemplateLiteral, IsNotTrue, IsNotTuple, IsNotUndefined, IsNotUnknown, IsNotVoid, IsNull, IsNumber, IsNumberLiteral, IsNumeric, IsObject, IsOptionalKey, IsPositive, IsRecord, IsStrictFunction, IsString, IsStringLiteral, IsSymbol, IsTemplateLiteral, IsTrue, IsTuple, IsUndefined, type IsUnion, IsUnknown, IsVoid, type JSONArray, type JSONObject, type JSONPrimitive, type JSONTypes, type KeepMatch, KeyTypes, KeysOfOptional, KeysWithDiffType, KnownKeys, type Last, LeftJoin, type LooseArrayType, type MapToProp, math_plus_d_exports as MathPlus, type Max, MaybePromise, Merge, type Multiply$1 as Multiply, NoInfer$1 as NoInfer, type NonComposableTypes, Not, NotAssignable, type NotEqual, NotExtendable, type NotLooseArrayType, NotUnknownOr, number_plus_d_exports as NumberPlus, Numeric, numeric_plus_d_exports as NumericPlus, type NumericToString, object_plus_d_exports as ObjectPlus, Omit$1 as Omit, OptionalKeys, OptionalProps, Or, type PadStart, Partial, PartialExcept, PartialOmit, PartialPick, Pick$1 as Pick, type PrimitiveTypes, PromiseValue, PromiseValueMerge, type PropUnion, Properties, RecordValue, RecursiveIntersect, RecursivePartial, RecursiveRequired, ReplaceProperty, type Required, type RequiredExcept, RequiredKeys, type RequiredPick, type Reverse, type Some, Split, SpreadRecord, StrictCanAssign, type StringIncludes, type StringPlus, type StringSplit, type StringToBigint, type StringToNumber, type StringToNumeric, SubUnion, type Subtract$1 as Subtract, SystemErrorCodes, SystemErrors, type Tail$1 as Tail, ToTuple, tuple_plus_d_exports as TuplePlus, type TypePlusOptions, type UnionKeys, type UnionOfProps, type UnionOfValues, type UnionType, ValueOf, type Widen, Xor, Zero, amend, as, asAny, assertType, brand, canAssign, compose, context, drop, everyKey, extractFunction, facade, filterKey, findKey, flavor, forEachKey, getField, hasKey, hasProperty, inspect, isConstructor, isInstanceof, isPromise, isSystemError, isType, literalArray, mapKey, mapProperties, mapSeries, merge, nominalMatch, omit, pick, record, reduceByKey, reduceKey, reduceWhile, replaceProperty, required, requiredDeep, someKey, split, stub, testType, transformMaybePromise, typeOverrideIncompatible, unpartial };
//# sourceMappingURL=index.d.mts.map