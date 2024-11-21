import { FloatingVueCommonProps } from '../types';
import { ButtonProps } from './Button';

declare const _default: <T>(__VLS_props: Awaited<typeof __VLS_setup>["props"], __VLS_ctx?: __VLS_Prettify<Pick<Awaited<typeof __VLS_setup>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_Prettify<__VLS_OmitKeepDiscriminatedUnion<(Partial<{}> & Omit<{
        readonly "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>) & ({
        label?: string;
        buttonProps?: ButtonProps;
        buttonClass?: string;
    } & FloatingVueCommonProps), keyof import('vue').VNodeProps | keyof import('vue').AllowedComponentProps>> & {} & (import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps);
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: ReturnType<() => Readonly<{
        default: () => any;
        popper: (props: {
            hide: () => void;
        }) => any;
        'button-icon': () => any;
        'button-icon-right': () => any;
    }> & {
        default: () => any;
        popper: (props: {
            hide: () => void;
        }) => any;
        'button-icon': () => any;
        'button-icon-right': () => any;
    }>;
    emit: (evt: "update:visible", value: boolean) => void;
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
