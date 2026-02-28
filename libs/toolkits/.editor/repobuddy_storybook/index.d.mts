import { UserConfig } from "htmlfy";
import * as react from "react";
import { ReactNode } from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { AnyFunction, CreateTuple, IsStringLiteral, Properties, Tail } from "type-plus";
import { ClassNameProps, StyleProps } from "@just-web/css";
import { Args, DecoratorFunction, Renderer } from "storybook/internal/csf";
import { Decorator, Meta, StoryContext, StoryObj, StrictArgs } from "@storybook/react-vite";
export * from "@repobuddy/test";

//#region ../../node_modules/.pnpm/@repobuddy+storybook@2.23.0_82de231412847ee76f021feb42c205d0/node_modules/@repobuddy/storybook/esm/index.d.ts

//#region src/arg-types/fn-to-arg.types.d.ts
/**
 * Converts a function's parameter types to `Args` type for Storybook.
 * Each name maps to the parameter type at the same index in F.
 *
 * @example
 * type F = (a: number, b: string) => void
 * type R = FnToArgTypes<F, ['x', 'y']>  // { x: number; y: string }
 */
type FnToArgTypes<F extends AnyFunction, Names extends CreateTuple<Parameters<F>['length'], string> = CreateTuple<Parameters<F>['length'], string>> = Properties<ReduceToRecord<Parameters<F>, Names>>;
type ReduceToRecord<Params extends Array<any>, Names extends Array<any>> = Names['length'] extends 0 ? unknown : Names['length'] extends 1 ? Names extends [infer K extends string] ? { [I in K]: Params[0] } : never : Names extends [infer K extends string, ...infer Rest] ? { [I in K]: Params[0] } & ReduceToRecord<Tail<Params>, Rest> : Record<string, any>;
//#endregion
//#region src/components/show_html.d.ts
type ShowHtmlProps = ClassNameProps & StyleProps & {
  selector?: string | undefined;
  config?: UserConfig | undefined;
};
/**
 * A component that displays the HTML of a subject element.
 * Uses `htmlfy` internally to format and prettify the HTML output.
 *
 * @param selector - CSS selector to find the subject element. Defaults to '[data-testid="subject"]'
 * @param config - Configuration options passed to htmlfy's prettify function
 * @param props - Additional props (className, style) passed to the pre element
 * @returns A pre element containing the formatted HTML
 */
declare function ShowHtml({
  selector,
  config,
  ...props
}: ShowHtmlProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/story_card.d.ts
/**
 * Resolved appearance of the card (error | warn | info | source | output).
 * Used for styling; when only `status` is provided it is mapped to this.
 */
type StoryCardAppearance = 'error' | 'warn' | 'info' | 'source' | 'output';
/**
 * @deprecated Use `appearance` instead. Visual status of the card; equivalent to `appearance` for 'error' | 'warn' | 'info'.
 */
type StoryCardStatus = 'error' | 'warn' | 'info' | undefined;
type StoryCardProps = {
  /**
   * Optional title displayed as a heading in the card.
   * Can be any React node (string, JSX, etc.).
   */
  title?: ReactNode | undefined;
  /**
   * @deprecated Use `appearance` instead. When set, behaves like `appearance` for the same value.
   */
  status?: StoryCardStatus;
  /**
   * Appearance of the card, affecting its background and border color.
   * - `'error'`: Red
   * - `'warn'`: Yellow
   * - `'info'`: Blue (default when neither appearance nor status is set)
   * - `'source'`: Transparent
   * - `'output'`: Green
   */
  appearance?: StoryCardAppearance | undefined;
  /**
   * Additional CSS classes or a function to compute classes.
   *
   * If a string is provided, it will be merged with the default classes.
   * If a function is provided, it receives the card state and default className,
   * and should return the final className string.
   */
  className?: ((state: Pick<StoryCardProps, 'status' | 'appearance'> & {
    defaultClassName: string;
  }) => string) | string | undefined;
  /**
   * Content to display in the card body.
   * Can be any React node (string, JSX, etc.).
   */
  children?: ReactNode | undefined;
  /**
   * Test identifier for the card.
   */
  'data-testid'?: string | undefined;
};
type StoryCardThemeState = Pick<StoryCardProps, 'status' | 'appearance'> & {
  defaultClassName: string;
};
/**
 * A card component that displays information with optional title and appearance styling.
 *
 * @param props - StoryCard component props
 * @returns A section element containing the card content
 */
declare const StoryCard: react.NamedExoticComponent<StoryCardProps>;
//#endregion
//#region src/decorators/show_source.d.ts
/**
 * Options for the {@link showSource} decorator.
 *
 * @property className - Class name to apply to the source card. Can be a string or a function that receives the card state and returns a string.
 * @property source - Source code to display. A string, or a function `(originalSource) => string` that receives the story's original source and returns the code to show. Defaults to the story's docs source.
 * @property showOriginalSource - When true, use the story's original (untransformed) source instead of the rendered source.
 * @property placement - Where to show the source code relative to the story. Defaults to `'before'`.
 */
type ShowSourceOptions = Pick<StoryCardProps, 'className' | 'data-testid'> & {
  source?: ((source: string | undefined) => string) | string | undefined;
  showOriginalSource?: boolean | undefined;
  placement?: 'before' | 'after' | undefined;
};
/**
 * A decorator that shows the source code of a story relative to the rendered story.
 * The source code is taken from the story's `parameters.docs.source.code`.
 *
 * @param options - Options for the showSource decorator
 * @param options.showOriginalSource - Whether to show the original source code in a card
 * @param options.className - Class name to apply to the card
 * @param options.source - Source code to show. Can be a string, or a function `(originalSource) => string` that receives the story's original source and returns the code to display.
 * @param options.placement - Where to show the source code relative to the story.
 * @returns A decorator function that shows the source code of a story above or below the rendered story
 */
declare function showSource<TRenderer extends Renderer = Renderer, TArgs = Args>({
  className,
  placement,
  showOriginalSource,
  source,
  ...options
}?: ShowSourceOptions): DecoratorFunction<TRenderer, TArgs>;
//#endregion
//#region src/decorators/show_doc_source.d.ts
/**
 * A decorator that shows the source code of a story below the rendered story.
 * Uses {@link showSource} with `placement: 'after'`.
 *
 * @deprecated Use `showSource({ placement: 'after' })` instead.
 * @param options - Same options as showSource; placement is forced to 'after'
 * @returns A decorator function that shows the source code below the story
 */
declare function showDocSource<TRenderer extends Renderer = Renderer, TArgs = Args>(options?: ShowSourceOptions): DecoratorFunction<TRenderer, TArgs>;
//#endregion
//#region src/decorators/with_story_card.d.ts
type WithStoryCardProps = Omit<StoryCardProps, 'children' | 'className'> & {
  /**
   * @deprecated Use `appearance` instead. When set, behaves like `appearance` for the same value.
   */
  status?: StoryCardStatus;
  /**
   * Additional CSS classes or a function to compute classes.
   *
   * If a string is provided, it will be merged with the default classes.
   * If a function is provided, it receives the card state and default className,
   * and should return the final className string.
   */
  className?: ((state: Pick<StoryCardProps, 'status' | 'appearance'> & {
    defaultClassName: string;
  }) => string) | string | undefined;
  /**
   * Content to display in the card body.
   * Can be any React node (string, JSX, etc.).
   *
   * If not provided, the decorator will automatically use:
   * 1. Story description (`parameters.docs.description.story`)
   * 2. Component description (`parameters.docs.description.component`)
   * 3. Nothing (card won't render if no content and no title)
   */
  content?: ReactNode | undefined;
};
/**
 * A decorator that adds a card section to display additional information about the story.
 *
 * The card is automatically hidden when the story is shown in docs mode.
 * Multiple decorators can be chained together,
 * and all cards will be collected and displayed above the story content.
 *
 * @returns A Storybook decorator function.
 *
 * @example
 * Basic usage - automatically uses component or story description:
 * ```tsx
 * export const MyStory: Story = {
 *   parameters: defineDocsParam({
 *     description: {
 *       story: 'This description will be shown in the card'
 *     }
 *   }),
 *   decorators: [withStoryCard()]
 * }
 * ```
 *
 * @example
 * Using defineStoryCard parameter:
 * ```tsx
 * export const MyStory: Story = {
 *   parameters: defineStoryCard({
 *     title: 'Important Notice',
 *     status: 'warn',
 *     content: <p>Please review this carefully.</p>
 *   }),
 *   decorators: [withStoryCard()]
 * }
 * ```
 *
 * @example
 * With custom content:
 * ```tsx
 * export const MyStory: Story = {
 *   decorators: [
 *     withStoryCard({
 *       content: <p>This is a custom message displayed in the card.</p>
 *     })
 *   ]
 * }
 * ```
 *
 * @example
 * With title and status:
 * ```tsx
 * export const MyStory: Story = {
 *   decorators: [
 *     withStoryCard({
 *       title: 'Important Notice',
 *       status: 'warn',
 *       content: <p>Please review this carefully.</p>
 *     })
 *   ]
 * }
 * ```
 *
 * @example
 * Multiple cards:
 * ```tsx
 * export const MyStory: Story = {
 *   decorators: [
 *     withStoryCard({ title: 'First Card', status: 'info' }),
 *     withStoryCard({ title: 'Second Card', status: 'warn' })
 *   ]
 * }
 * ```
 *
 * @remarks
 * - The card will not render if both `content` and `title` are missing.
 * - If `content` is not provided, it will automatically use the story description,
 *   or fall back to the component description.
 * - Cards are collected and displayed in the order they are defined in the decorators array.
 * - The `status` option is deprecated; use `appearance` instead for the same behavior and additional variants (`source`, `output`).
 */
declare function withStoryCard<TRenderer extends Renderer = Renderer>({
  title,
  status,
  appearance,
  content: contentProp,
  className,
  ...rest
}?: WithStoryCardProps): DecoratorFunction<TRenderer>;
//#endregion
//#region src/parameters/define_actions_param.d.ts
interface ActionsParam {
  actions: {
    argTypesRegex?: string | undefined;
    disable?: boolean | undefined;
    handles?: string[] | undefined;
    [k: string]: unknown;
  };
}
/**
 * Defines actions parameters for Storybook stories.
 *
 * @see https://storybook.js.org/docs/essentials/actions#parameters
 *
 * @param actions - Configuration for actions parameters
 * @returns An object containing the actions parameter configuration
 */
declare function defineActionsParam(actions: ActionsParam['actions']): {
  actions: {
    [k: string]: unknown;
    argTypesRegex?: string | undefined;
    disable?: boolean | undefined;
    handles?: string[] | undefined;
  };
};
//#endregion
//#region src/parameters/define_backgrounds_param.d.ts
interface BackgroundsParam {
  backgrounds: {
    default?: string | undefined;
    values?: Array<{
      name: string;
      value: string;
    }>;
    disable?: boolean | undefined;
    grid?: {
      cellAmount?: number | undefined;
      cellSize?: number | undefined;
      disable?: boolean | undefined;
      offsetX?: number | undefined;
      offsetY?: number | undefined;
      opacity?: number | undefined;
    } | undefined;
    [k: string]: unknown;
  };
}
interface GlobalApiBackgroundsParam {
  backgrounds: {
    default?: string | undefined;
    options?: Array<{
      name: string;
      value: string;
    }>;
    disabled?: boolean | undefined;
    grid?: {
      cellAmount?: number | undefined;
      cellSize?: number | undefined;
      disable?: boolean | undefined;
      offsetX?: number | undefined;
      offsetY?: number | undefined;
      opacity?: number | undefined;
    } | undefined;
    [k: string]: unknown;
  };
}
/**
 * Defines backgrounds parameters for Storybook stories.
 *
 * @param backgrounds - The backgrounds configuration
 * @returns An object containing the backgrounds parameter configuration
 */
declare const defineBackgroundsParam: (backgrounds: BackgroundsParam["backgrounds"] | GlobalApiBackgroundsParam["backgrounds"]) => BackgroundsParam;
//#endregion
//#region src/parameters/define_docs_param.d.ts
declare global {
  namespace JSX {
    interface Element {}
  }
}
interface SourceProps {
  /**
   * Provides the source code to be rendered.
   *
   * This is useful when the story contains extra code that would be confusing in the docs.
   *
   * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#code
   */
  code?: string | undefined;
  /**
   * Specifies whether the source code should be rendered in dark mode.
   *
   * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#dark
   */
  dark?: boolean | undefined;
  /**
   * Specifies whether decorators should be excluded from the source code.
   *
   * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#excludedecorators
   *
   * Note: Has no effect in React.
   * @see https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#parameter-docssourceexcludedecorators-has-no-effect-in-react
   */
  excludeDecorators?: boolean | undefined;
  /**
   * Specifies the language of the source code.
   *
   * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#language
   */
  language?: string | undefined;
  /**
   * A function to dynamically transform the source before being rendered,
   * based on the original source and any story context necessary.
   * The returned string is displayed as-is.
   *
   * If both code and transform are specified, transform will be ignored.
   *
   * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#transform
   */
  transform?: ((code: string, storyContext: StoryContext) => string) | undefined;
  /**
   * Specifies how the source code is rendered.
   *
   * - auto: Same as dynamic, if the story's render function accepts args inputs and dynamic is supported by the framework in use; otherwise same as code
   * - code: Renders the value of code prop, otherwise renders static story source
   * - dynamic: Renders the story source with dynamically updated arg values
   *
   * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-source#type
   */
  type?: 'auto' | 'code' | 'dynamic' | undefined;
}
interface DocsParam {
  docs: {
    argTypes?: {
      /**
       * Specifies which controls to exclude from the args table.
       * Any controls whose names match the regex or are part of the array will be left out.
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-argtypes#exclude
       */
      exclude?: string[] | RegExp | undefined;
      /**
       * Specifies which controls to include in the args table.
       * Any controls whose names don't match the regex or are not part of the array will be left out.
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-argtypes#include
       */
      include?: string[] | RegExp | undefined;
      /**
       * Specifies how the arg types are sorted.
       *
       * - none: Unsorted, displayed in the same order the arg types are processed in
       * - alpha: Sorted alphabetically, by the arg type's name
       * - requiredFirst: Same as alpha, with any required arg types displayed first
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-argtypes#sort
       */
      sort?: 'alpha' | 'requiredFirst' | 'none' | undefined;
    } | undefined;
    description?: {
      /**
       * `docs.description.story` can be used to describe the story in doc.
       */
      story?: string | undefined;
      /**
       * `docs.description.component` can be used to describe the component in meta.
       * It has no effect on the stories.
       */
      component?: string | undefined;
    } | undefined;
    /**
     * Determines whether to show the code panel.
     *
     * @see https://storybook.js.org/docs/writing-docs/code-panel
     */
    codePanel?: boolean | undefined;
    source?: SourceProps | undefined;
    canvas?: {
      /**
       * Provides any additional custom actions to show in the bottom right corner.
       * These are simple buttons that do anything you specify in the onClick function.
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#additionalactions
       */
      additionalActions?: Array<{
        title: string | JSX.Element;
        className?: string;
        onClick: () => void;
        disabled?: boolean;
      }> | undefined;
      /**
       * Provides HTML class(es) to the preview element, for custom styling.
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#classname
       */
      className?: string | undefined;
      /**
       * Specifies how the canvas should layout the story.
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#layout
       */
      layout?: 'centered' | 'padded' | 'fullscreen' | undefined;
      /**
       * Specifies the initial state of the source panel.
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#sourcestate
       */
      sourceState?: 'hidden' | 'shown' | 'none' | undefined;
      /**
       * Determines whether to render a toolbar containing tools to interact with the story.
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#withtoolbar
       */
      withToolbar?: boolean | undefined;
    } | undefined;
    controls?: {
      /**
       * Specifies which controls to exclude from the args table.
       * Any controls whose names match the regex or are part of the array will be left out.
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-controls#exclude
       */
      exclude?: string[] | RegExp | undefined;
      /**
       * Specifies which controls to include in the args table.
       * Any controls whose names don't match the regex or are not part of the array will be left out.
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-controls#include
       */
      include?: string[] | RegExp | undefined;
      /**
       *
       * Specifies how the controls are sorted.
       *
       * - none: Unsorted, displayed in the same order the controls are processed in
       * - alpha: Sorted alphabetically, by the arg type's name
       * - requiredFirst: Same as alpha, with any required controls displayed first
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-controls#sort
       */
      sort?: 'alpha' | 'requiredFirst' | 'none' | undefined;
    } | undefined;
    story?: {
      /**
       * Specifies whether the story should be autoplayed.
       *
       * @see https://storybook.js.org/docs/api/doc-blocks/doc-block-story#autoplay
       */
      autoplay?: boolean | undefined;
      /**
       * Set a minimum height (note for an iframe this is the actual height) when rendering a story in an iframe or inline.
       * This overrides parameters.docs.story.iframeHeight for iframes.
       */
      height?: string | undefined;
      /**
       * Determines whether the story is rendered inline (in the same browser frame as the other docs content) or in an iframe.
       */
      inline?: boolean | undefined;
    } | undefined;
    [k: string]: unknown;
  };
}
/**
 * Defines docs parameters for Storybook stories.
 *
 * @param docs - Configuration for docs parameters including options for:
 * - Controls display and sorting
 * - Story rendering (autoplay, height, inline vs iframe)
 * - And other docs-related settings
 * @returns An object containing the docs parameter configuration
 *
 * @example
 * ```ts
 * import { defineDocsParam } from '@repobuddy/storybook'
 *
 * export default {
 *   parameters: defineDocsParam({
 *     controls: {
 *       sort: 'alpha',
 *       exclude: ['internal*']
 *     },
 *     story: {
 *       inline: true,
 *       height: '400px'
 *     }
 *   })
 * }
 * ```
 */
declare function defineDocsParam(docs: DocsParam['docs']): DocsParam['docs'];
//#endregion
//#region src/parameters/define_layout_param.d.ts
interface LayoutParam {
  layout: 'padded' | 'fullscreen' | 'centered';
}
/**
 * Helper function to define the layout parameter for a story
 *
 * @see https://storybook.js.org/docs/api/parameters#layout
 *
 * @param layout - The layout type to use ('padded', 'fullscreen', or 'centered')
 * @returns An object containing the layout parameter
 * @example
 * ```ts
 * export const MyStory = {
 *   parameters: defineLayoutParam('centered')
 * }
 * ```
 */
declare const defineLayoutParam: (layout: LayoutParam["layout"]) => {
  layout: "padded" | "fullscreen" | "centered";
};
//#endregion
//#region src/parameters/define_test_param.d.ts
interface TestParam {
  test: {
    clearMocks?: boolean | undefined;
    mockReset?: boolean | undefined;
    restoreMocks?: boolean | undefined;
    dangerouslyIgnoreUnhandledErrors?: boolean | undefined;
    [k: string]: unknown;
  };
}
/**
 * Defines test parameters for Storybook stories.
 *
 * @see https://storybook.js.org/docs/api/parameters#test
 *
 * @param test - Configuration for test parameters
 * @returns An object containing the test parameter configuration
 *
 * @example
 * defineTestParam({
 *   clearMocks: true,
 *   mockReset: true,
 *   restoreMocks: true,
 *   dangerouslyIgnoreUnhandledErrors: true
 * })
 */
declare function defineTestParam(test: TestParam['test']): {
  test: {
    [k: string]: unknown;
    clearMocks?: boolean | undefined;
    mockReset?: boolean | undefined;
    restoreMocks?: boolean | undefined;
    dangerouslyIgnoreUnhandledErrors?: boolean | undefined;
  };
};
//#endregion
//#region src/parameters/define_viewport_param.d.ts
interface ViewportParam {
  viewport: {
    /**
     * @see https://storybook.js.org/docs/essentials/viewport#viewports
     */
    viewports?: Record<string, Viewport> | undefined;
    /**
     * @see https://storybook.js.org/docs/essentials/viewport#defaultorientation
     */
    defaultOrientation?: 'landscape' | 'portrait' | undefined;
    /**
     * @see https://storybook.js.org/docs/essentials/viewport#defaultviewport
     */
    defaultViewport?: string | undefined;
    /**
     * Disables the viewport parameter.
     * @deprecated Use `disabled` instead.
     */
    disable?: boolean | undefined;
    [k: string]: unknown;
  };
}
interface Viewport {
  name: string;
  styles: {
    width: string;
    height: string;
  };
  type: 'mobile' | 'tablet' | 'desktop';
}
interface GlobalApiViewportParam {
  viewport: {
    /**
     * @see https://storybook.js.org/docs/essentials/viewport#viewports
     */
    options?: Record<string, Viewport> | undefined;
    /**
     * @see https://storybook.js.org/docs/essentials/viewport#defaultviewport
     */
    defaultViewport?: string | undefined;
    /**
     * @see https://storybook.js.org/docs/essentials/viewport#defaultorientation
     */
    defaultOrientation?: 'landscape' | 'portrait' | undefined;
    /**
     * @see https://storybook.js.org/docs/essentials/viewport#disable
     */
    disabled?: boolean | undefined;
  };
}
/**
 * Defines viewport parameters for Storybook stories.
 *
 * @see https://storybook.js.org/docs/api/parameters#viewport
 *
 * @param viewport - Configuration for viewport parameters including:
 * - viewports: Custom viewport definitions
 * - defaultViewport: The default viewport to use
 * - defaultOrientation: Default orientation (landscape/portrait)
 * - disabled: Whether viewport controls are disabled
 * @returns An object containing the viewport parameter configuration
 *
 * @example
 * ```ts
 * defineViewportParam({
 *   viewports: {
 *     mobile: {
 *       name: 'Mobile',
 *       styles: { width: '320px', height: '568px' },
 *       type: 'mobile'
 *     }
 *   },
 *   defaultViewport: 'mobile',
 *   defaultOrientation: 'portrait'
 * })
 * ```
 */
declare function defineViewportParam(viewport: ViewportParam['viewport'] | GlobalApiViewportParam['viewport']): ViewportParam;
//#endregion
//#region src/parameters/story_sort.d.ts
type StorySortConfig = {
  includeNames?: boolean;
  locales?: string;
  method?: 'alphabetical' | 'alphabetical-by-kind' | 'custom';
  order?: string[];
  [k: string]: unknown;
};
type Story = {
  id: string;
  importPath: string;
  name: string;
  title: string;
};
type StorySortFn = (a: Story, b: Story) => number;
/**
 * Interface for story sorting parameters in Storybook.
 * Used to define how stories should be sorted in the navigation sidebar.
 */
interface StorySortParam {
  /**
   * Configuration for story sorting. Can be either:
   * - A StorySortConfig object specifying sort method and options
   * - A custom sorting function that takes two stories and returns their sort order
   */
  storySort: StorySortConfig | StorySortFn;
}
//#endregion
//#region src/parameters/define_parameters.d.ts
type StorybookBuiltInParams = Partial<BackgroundsParam | GlobalApiBackgroundsParam> & Partial<DocsParam> & Partial<LayoutParam> & Partial<TestParam> & Partial<ViewportParam> & {
  options?: StorySortParam & Record<string, any>;
} & Record<string, any>;
/**
 * Defines parameters for Storybook stories, combining built-in parameters with custom ones.
 *
 * @param parameters - Configuration object containing both built-in Storybook parameters and custom parameters
 * @returns The combined parameters object
 *
 * @example
 * ```ts
 * import { defineParameters } from '@repobuddy/storybook'
 *
 * export default {
 *   parameters: defineParameters({
 *     // Built-in parameters
 *     layout: 'centered',
 *     backgrounds: {
 *       default: 'light',
 *       values: [
 *         { name: 'light', value: '#ffffff' },
 *         { name: 'dark', value: '#333333' }
 *       ]
 *     },
 *     // Custom parameters
 *     myCustomParam: {
 *       someValue: true
 *     }
 *   })
 * }
 * ```
 */
declare function defineParameters<P extends Record<string, any>>(param: P & StorybookBuiltInParams, ...rest: Array<StorybookBuiltInParams>): StorybookBuiltInParams;
//#endregion
//#region src/parameters/define_story_card_param.d.ts
interface StoryCardParam {
  storyCard: {
    /**
     * Optional title displayed as a heading in the card.
     * Can be any React node (string, JSX, etc.).
     */
    title?: ReactNode | undefined;
    /**
     * @deprecated Use `appearance` instead.
     */
    status?: StoryCardStatus;
    /**
     * Appearance of the card (error | warn | info | source | output). Default: `'info'`.
     */
    appearance?: StoryCardAppearance | undefined;
    /**
     * Additional CSS classes or a function to compute classes.
     *
     * If a string is provided, it will be merged with the default classes.
     * If a function is provided, it receives the card state and default className,
     * and should return the final className string.
     */
    className?: ((state: Pick<StoryCardProps, 'status' | 'appearance'> & {
      defaultClassName: string;
    }) => string) | string | undefined;
    /**
     * Content to display in the card body.
     * Can be any React node (string, JSX, etc.).
     *
     * If not provided, the decorator will automatically use:
     * 1. Story description (`parameters.docs.description.story`)
     * 2. Component description (`parameters.docs.description.component`)
     * 3. Nothing (card won't render if no content and no title)
     */
    content?: ReactNode | undefined;
  };
}
/**
 * Defines story card parameters for Storybook stories.
 *
 * These parameters can be consumed by the `withStoryCard` decorator
 * to automatically configure story cards without passing props directly.
 *
 * @param storyCard - Configuration for story card parameters
 * @returns An object containing the story card parameter configuration
 *
 * @example
 * ```tsx
 * import { defineStoryCard, withStoryCard } from '@repobuddy/storybook'
 *
 * export const MyStory: Story = {
 *   parameters: defineStoryCard({
 *     title: 'Important Notice',
 *     status: 'warn',
 *     content: <p>Please review this carefully.</p>
 *   }),
 *   decorators: [withStoryCard()]
 * }
 * ```
 *
 * @example
 * With automatic content from story description:
 * ```tsx
 * export const MyStory: Story = {
 *   parameters: {
 *     ...defineDocsParam({
 *       description: {
 *         story: 'This description will be shown in the card'
 *       }
 *     }),
 *     ...defineStoryCard({
 *       title: 'Story Information',
 *       status: 'info'
 *     })
 *   },
 *   decorators: [withStoryCard()]
 * }
 * ```
 */
declare function defineStoryCardParam(storyCard: StoryCardParam['storyCard']): StoryCardParam;
//#endregion
//#region src/testing/decorators/when_running_in_test.d.ts
/**
 * executes the specified decorator or handler if the code is running in test.
 */
declare function whenRunningInTest<TArgs = StrictArgs>(decoratorOrHandler: ((...args: Parameters<Decorator<TArgs>>) => ReturnType<Decorator<TArgs>> | undefined | void) | (() => ReturnType<Decorator<TArgs>> | undefined | void)): Decorator<TArgs>;
//#endregion
//#region src/types/_extract_string_literals.d.ts
type ExtractStringLiterals<T> = T extends any ? (string extends T ? never : T) : never;
//#endregion
//#region src/types/extends_meta.d.ts
/**
 * Extends the Storybook Meta type with custom tag types.
 *
 * This utility type allows you to extend the `tags` property of a Storybook Meta type
 * with custom string literal types while preserving existing tag types from the base Meta.
 *
 * @template M - The base Meta type to extend
 * @template E - The extension type containing a `tag` property with the custom tag types
 *
 * @example
 * ```ts
 * import type { ExtendsMeta } from '@repobuddy/storybook'
 * import type { Args, Meta as M } from '@storybook/your-framework'
 *
 * // Create a generic Meta type for your project
 * type Meta<TCmpOrArgs = Args> = ExtendsMeta<
 *   M<TCmpOrArgs>,
 *   { tag: 'new' | 'beta' | 'deprecated' | 'remove:next' }
 * >
 *
 * // Use in component stories
 * const meta: Meta<typeof Component> = {
 *   tags: ['new'], // <--- gets auto-completion for 'new' | 'beta' | 'deprecated' | 'remove:next'
 *   // ...
 * }
 * ```
 */
type ExtendsMeta<M extends {
  tags?: string[] | undefined;
}, E extends {
  tag: string;
}> = Omit<M, 'tags'> & {
  tags?: ExtractStringLiterals<NonNullable<M['tags']>[number]> extends infer MT ? IsStringLiteral<MT> extends true ? Array<(string & {}) | MT | E['tag']> | undefined : Array<(string & {}) | E['tag']> | undefined : never;
};
//#endregion
//#region src/types/extends_story_obj.d.ts
/**
 * Extends the Storybook StoryObj type with custom tag types.
 *
 * This utility type allows you to extend the `tags` property of a Storybook StoryObj type
 * with custom string literal types while preserving existing tag types from the base StoryObj.
 *
 * @template S - The base StoryObj type to extend (must have an optional `tags` property)
 * @template E - The extension type containing a `tag` property with the custom tag types
 *
 * @example
 * ```ts
 * import type { ExtendsStoryObj } from '@repobuddy/storybook'
 * import type { Args, StoryObj as S } from '@storybook/your-framework'
 *
 * // Create a generic StoryObj type for your project
 * type StoryObj<TCmpOrArgs = Args> = ExtendsStoryObj<
 *   S<TCmpOrArgs>,
 *   { tag: 'new' | 'beta' | 'deprecated' | 'remove:next' }
 * >
 *
 * // Use in component stories
 * const story: StoryObj<typeof Component> = {
 *   tags: ['new'], // <--- gets auto-completion for 'new' | 'beta' | 'deprecated' | 'remove:next'
 *   // ...
 * }
 * ```
 */
type ExtendsStoryObj<S extends {
  tags?: string[] | undefined;
}, E extends {
  tag: string;
}> = Omit<S, 'tags'> & {
  tags?: ExtractStringLiterals<NonNullable<S['tags']>[number]> extends infer MT ? IsStringLiteral<MT> extends true ? Array<(string & {}) | MT | E['tag']> | undefined : Array<(string & {}) | E['tag']> | undefined : never;
};
//#endregion
//#region src/types.d.ts
/**
 * Extends the Storybook Meta type with custom tag types
 * @template TCmpOrArgs - The component or args type
 * @template M - The base Meta type
 * @template E - The extension type containing tagType
 *
 * @deprecated use `import { ExtendsMeta } from '@repobuddy/storybook'` instead.
 *
 * @example
 * ```ts
 * // Create a generic Meta type for a project
 * type Meta<TCmpOrArgs = Args> = ExtendMeta<TCmpOrArgs, Meta<TCmpOrArgs>, { tagType: 'tag1' | 'tag2' }>
 *
 * // Create a specific Meta type for a component
 * type Meta = ExtendMeta<typeof Component, Meta<typeof Component>, { tagType: 'tag1' | 'tag2' }>
 * ```
 */
type ExtendMeta<TCmpOrArgs, M extends Meta<TCmpOrArgs>, E extends {
  tag: string;
}> = Omit<M, 'tags'> & {
  tags?: Array<E['tag'] | (string & {})> | undefined;
};
/**
 * Extends the Storybook StoryObj type with custom tag types
 * @template TMetaOrCmpOrArgs - The meta, component or args type
 * @template S - The base StoryObj type
 * @template E - The extension type containing tagType
 *
 * @deprecated use `import { ExtendsStoryObj } from '@repobuddy/storybook'` instead.
 *
 * @example
 * ```ts
 * // Create a generic StoryObj type for a project
 * type StoryObj<TMetaOrCmpOrArgs = Args> = ExtendStoryObj<TMetaOrCmpOrArgs, StoryObj<TMetaOrCmpOrArgs>, { tagType: 'tag1' | 'tag2' }>
 *
 * // Create a specific StoryObj type for a component
 * type StoryObj = ExtendStoryObj<typeof Component, StoryObj<typeof Component>, { tagType: 'tag1' | 'tag2' }>
 * ```
 */
type ExtendStoryObj<TMetaOrCmpOrArgs, S extends StoryObj<TMetaOrCmpOrArgs>, E extends {
  tag: string;
}> = Omit<S, 'tags'> & {
  tags?: Array<E['tag'] | (string & {})> | undefined;
};
//#endregion
//#endregion
export { ActionsParam, BackgroundsParam, DocsParam, ExtendMeta, ExtendStoryObj, ExtendsMeta, ExtendsStoryObj, FnToArgTypes, GlobalApiBackgroundsParam, GlobalApiViewportParam, LayoutParam, ShowHtml, ShowHtmlProps, ShowSourceOptions, SourceProps, StoryCard, StoryCardAppearance, StoryCardParam, StoryCardProps, StoryCardStatus, StoryCardThemeState, StorySortParam, StorybookBuiltInParams, TestParam, Viewport, ViewportParam, WithStoryCardProps, defineActionsParam, defineBackgroundsParam, defineDocsParam, defineLayoutParam, defineParameters, defineStoryCardParam, defineTestParam, defineViewportParam, showDocSource, showSource, whenRunningInTest, withStoryCard };
//# sourceMappingURL=index.d.mts.map