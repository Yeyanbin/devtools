export interface ButtonProps {
    type?: ButtonType;
    round?: 'full' | 'normal' | false;
    loading?: boolean;
    disabled?: boolean;
    size?: 'normal' | 'mini';
    flat?: boolean;
    outlined?: boolean;
}
export type ButtonType = 'default' | 'primary' | 'accent' | 'danger' | 'warning' | 'info' | 'success';
declare function __VLS_template(): {
    icon?(_: {
        class: string;
    }): any;
    default?(_: {}): any;
    "icon-right"?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    type: string;
    round: string;
    loading: boolean;
    disabled: boolean;
    size: string;
    flat: boolean;
    outlined: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (e: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    type: string;
    round: string;
    loading: boolean;
    disabled: boolean;
    size: string;
    flat: boolean;
    outlined: boolean;
}>>> & Readonly<{
    onClick?: ((e: MouseEvent) => any) | undefined;
}>, {
    flat: boolean;
    type: ButtonType;
    round: "full" | "normal" | false;
    loading: boolean;
    disabled: boolean;
    size: "normal" | "mini";
    outlined: boolean;
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
