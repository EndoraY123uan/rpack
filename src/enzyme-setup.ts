/*
 * @Author: jinzi.yuan
 * @description: 测试开始之前执行
 * @Date: 2020-11-19 18:41:22
 * @LastEditors: jinzi.yuan
 * @LastEditTime: 2020-11-20 10:30:24
 * @FilePath: \rpack\src\__tests__\enzyme-setup.ts
 */
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });