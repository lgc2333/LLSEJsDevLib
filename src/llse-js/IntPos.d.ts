/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="index.d.ts" />

/**
 * ### 整数 坐标对象
 *
 * 成员均为**整数**，多用来表示方块坐标等用整数表示的位置
 *
 * 坐标对象的各个成员都是**可读写**的
 */
declare class IntPos {
  /** x坐标（整数） */
  x: Integer;

  /** y坐标（整数） */
  y: Integer;

  /** z坐标（整数） */
  z: Integer;

  /**
   * 维度文字名
   *
   * 主世界 - `Overworld`\
   * 下界 - `Nether`\
   * 末地 - `TheEnd`
   */
  dim: string;

  /**
   * 维度ID
   *
   * 主世界 - `0`\
   * 下界 - `1`\
   * 末地 - `2`
   *
   * 如果某种情况下维度无效，或者无法获取，你会发现`dimid`的值为`-1`
   */
  dimid: Integer;
}
