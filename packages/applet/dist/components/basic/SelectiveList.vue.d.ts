import { CustomInspectorNode } from '@vue/devtools-kit';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<any>;
    data: {
        type: import('vue').PropType<CustomInspectorNode[]>;
        required: true;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<any>;
    data: {
        type: import('vue').PropType<CustomInspectorNode[]>;
        required: true;
    };
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
