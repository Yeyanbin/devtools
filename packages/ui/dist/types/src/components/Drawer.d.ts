import { OverlayProps } from './Overlay';

declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: boolean;
    mountTo?: string | HTMLElement;
    placement?: "left" | "right" | "top" | "bottom";
    closeOutside?: boolean;
    closable?: boolean;
    contentClass?: string;
    permanent?: boolean;
    contentBlur?: boolean;
    top?: string | HTMLElement;
} & OverlayProps>, {
    mountTo: string;
    placement: string;
    closeOutside: boolean;
    closable: boolean;
    permanent: boolean;
    contentBlur: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (modelValue: boolean) => void;
    close: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: boolean;
    mountTo?: string | HTMLElement;
    placement?: "left" | "right" | "top" | "bottom";
    closeOutside?: boolean;
    closable?: boolean;
    contentClass?: string;
    permanent?: boolean;
    contentBlur?: boolean;
    top?: string | HTMLElement;
} & OverlayProps>, {
    mountTo: string;
    placement: string;
    closeOutside: boolean;
    closable: boolean;
    permanent: boolean;
    contentBlur: boolean;
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    closable: boolean;
    mountTo: string | HTMLElement;
    placement: "left" | "right" | "top" | "bottom";
    closeOutside: boolean;
    permanent: boolean;
    contentBlur: boolean;
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
