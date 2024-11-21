import { ButtonProps } from './Button';

declare const _default: <Value extends number | string, Label, M extends boolean>(__VLS_props: Awaited<typeof __VLS_setup>["props"], __VLS_ctx?: __VLS_Prettify<Pick<Awaited<typeof __VLS_setup>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_Prettify<__VLS_OmitKeepDiscriminatedUnion<(Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((value: M extends true ? Value[] : Value) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>) & {
        modelValue: M extends true ? Value[] : Value;
        multiple?: M;
        options: {
            label: Label;
            value: Value;
        }[];
        placeholder?: string;
        autoClose?: boolean;
        disabled?: boolean;
        labelRenderer?: (label: Label) => string;
        buttonProps?: ButtonProps;
    }, keyof import('vue').VNodeProps | keyof import('vue').AllowedComponentProps>> & {} & (import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps);
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: ReturnType<() => Readonly<{
        item: (props: {
            item: {
                label: Label;
                value: Value;
            };
            active: boolean;
            disabled: boolean;
        }) => any;
        button: () => any;
    }> & {
        item: (props: {
            item: {
                label: Label;
                value: Value;
            };
            active: boolean;
            disabled: boolean;
        }) => any;
        button: () => any;
    }>;
    emit: (evt: "update:modelValue", value: M extends true ? Value[] : Value) => void;
}>) => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
