import { OverlayProps } from './Overlay';

declare function __VLS_template(): {
    title?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: boolean;
    autoClose?: boolean;
    title?: string;
    width?: string;
    height?: string;
    closable?: boolean;
    mountTo?: string | HTMLElement;
} & OverlayProps>, {
    title: string;
    modelValue: boolean;
    autoClose: boolean;
    width: string;
    height: string;
    closable: boolean;
    mountTo: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
    "update:modelValue": (value: boolean) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: boolean;
    autoClose?: boolean;
    title?: string;
    width?: string;
    height?: string;
    closable?: boolean;
    mountTo?: string | HTMLElement;
} & OverlayProps>, {
    title: string;
    modelValue: boolean;
    autoClose: boolean;
    width: string;
    height: string;
    closable: boolean;
    mountTo: string;
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    title: string;
    modelValue: boolean;
    autoClose: boolean;
    width: string;
    height: string;
    closable: boolean;
    mountTo: string | HTMLElement;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};