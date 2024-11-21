import { ComponentTreeNode, InspectorTree } from '@vue/devtools-kit';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<any>;
    data: {
        type: import('vue').PropType<ComponentTreeNode[] | InspectorTree[]>;
        required: true;
    };
    depth: {
        type: import('vue').PropType<number>;
        required: true;
        default: number;
    };
    withTag: {
        type: import('vue').PropType<boolean>;
        required: true;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    leave: (...args: any[]) => void;
    hover: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<any>;
    data: {
        type: import('vue').PropType<ComponentTreeNode[] | InspectorTree[]>;
        required: true;
    };
    depth: {
        type: import('vue').PropType<number>;
        required: true;
        default: number;
    };
    withTag: {
        type: import('vue').PropType<boolean>;
        required: true;
        default: boolean;
    };
}>> & Readonly<{
    onLeave?: ((...args: any[]) => any) | undefined;
    onHover?: ((...args: any[]) => any) | undefined;
}>, {
    depth: number;
    withTag: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
