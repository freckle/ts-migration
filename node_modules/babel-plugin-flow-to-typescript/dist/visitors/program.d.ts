import { Program } from '@babel/types';
import { NodePath } from '@babel/traverse';
declare const _default: {
    enter(path: NodePath<Program>): void;
    exit(path: NodePath<Program>): void;
};
export default _default;
