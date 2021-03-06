/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {JSNodeBase, AnyExpression} from '../index';
import {createBuilder} from '../utils';

export type BinaryExpression = JSNodeBase & {
  type: 'BinaryExpression';
  operator: BinaryOperator;
  left: AnyExpression;
  right: AnyExpression;
};

export type BinaryOperator =
  | '=='
  | '!='
  | '==='
  | '**'
  | '!=='
  | '<'
  | '<='
  | '>'
  | '>='
  | '<<'
  | '>>'
  | '>>>'
  | '+'
  | '-'
  | '*'
  | '/'
  | '%'
  | '|'
  | '^'
  | '&'
  | 'in'
  | 'instanceof';

export const binaryExpression = createBuilder<BinaryExpression>(
  'BinaryExpression',
  {
    bindingKeys: {},
    visitorKeys: {
      left: true,
      right: true,
    },
  },
);
