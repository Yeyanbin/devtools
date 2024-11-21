import { CustomInspectorState } from '@vue/devtools-kit';
import { EditorAddNewPropType, EditorInputValidType } from '../../composables/state-editor';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    data: CustomInspectorState & {
        key?: string;
    };
    hovering: boolean;
    depth: number;
    showAddIfNeeded?: boolean;
    disableEdit?: boolean;
}>, {
    showAddIfNeeded: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    enableEditInput: (type: EditorInputValidType) => void;
    addNewProp: (type: EditorAddNewPropType) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    data: CustomInspectorState & {
        key?: string;
    };
    hovering: boolean;
    depth: number;
    showAddIfNeeded?: boolean;
    disableEdit?: boolean;
}>, {
    showAddIfNeeded: boolean;
}>>> & Readonly<{
    onEnableEditInput?: ((type: EditorInputValidType) => any) | undefined;
    onAddNewProp?: ((type: EditorAddNewPropType) => any) | undefined;
}>, {
    showAddIfNeeded: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
