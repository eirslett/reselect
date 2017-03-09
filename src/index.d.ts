export = Reselect;

declare namespace Reselect {
  type Selector<S, R> = (state: S) => R;
  interface OutputSelector<S, R, C> extends Selector<S, R> {
    resultFunc: C;
    recomputations: () => number;
    resetRecomputations: () => number;
  }
  type ParametricSelector<S, P, R> = (state: S, props: P, ...args: any[]) => R;

  /* one selector */
  function createSelector<S, R1, T>(
    selector: Selector<S, R1>,
    combiner: (res: R1) => T,
  ): OutputSelector<S, T, (res: R1) => T>;
  function createSelector<S, P, R1, T>(
    selector: ParametricSelector<S, P, R1>,
    combiner: (res: R1) => T,
  ): ParametricSelector<S, P, T>;

  /* two selectors */
  function createSelector<S, R1, R2, T>(
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    combiner: (res1: R1, res2: R2) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2) => T>;
  function createSelector<S, P, R1, R2, T>(
    selector1: ParametricSelector<S, P, R1>,
    selector2: ParametricSelector<S, P, R2>,
    combiner: (res1: R1, res2: R2) => T,
  ): ParametricSelector<S, P, T>;

  /* three selectors */
  function createSelector<S, R1, R2, R3, T>(
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    combiner: (res1: R1, res2: R2, res3: R3) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3) => T>;
  function createSelector<S, P, R1, R2, R3, T>(
    selector1: ParametricSelector<S, P, R1>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    combiner: (res1: R1, res2: R2, res3: R3) => T,
  ): ParametricSelector<S, P, T>;

  /* four selectors */
  function createSelector<S, R1, R2, R3, R4, T>(
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4) => T>;
  function createSelector<S, P, R1, R2, R3, R4, T>(
    selector1: ParametricSelector<S, P, R1>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4) => T,
  ): ParametricSelector<S, P, T>;

  /* five selectors */
  function createSelector<S, R1, R2, R3, R4, R5, T>(
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, T>(
    selector1: ParametricSelector<S, P, R1>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T,
  ): ParametricSelector<S, P, T>;

  /* six selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, T>(
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, T>(
    selector1: ParametricSelector<S, P, R1>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
  ): ParametricSelector<S, P, T>;

  /* seven selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, T>(
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, T>(
    selector1: ParametricSelector<S, P, R1>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7) => T,
  ): ParametricSelector<S, P, T>;

  /* eight selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, R8, T>(
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    selector8: Selector<S, R8>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, R8, T>(
    selector1: ParametricSelector<S, P, R1>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    selector8: ParametricSelector<S, P, R8>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8) => T,
  ): ParametricSelector<S, P, T>;

  /* nine selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, R8, R9, T>(
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    selector8: Selector<S, R8>,
    selector9: Selector<S, R9>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, T>(
    selector1: ParametricSelector<S, P, R1>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    selector8: ParametricSelector<S, P, R8>,
    selector9: ParametricSelector<S, P, R9>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9) => T,
  ): ParametricSelector<S, P, T>;

  /* ten selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    selector8: Selector<S, R8>,
    selector9: Selector<S, R9>,
    selector10: Selector<S, R10>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
    selector1: ParametricSelector<S, P, R1>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    selector8: ParametricSelector<S, P, R8>,
    selector9: ParametricSelector<S, P, R9>,
    selector10: ParametricSelector<S, P, R10>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10) => T,
  ): ParametricSelector<S, P, T>;

  /* eleven selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    selector8: Selector<S, R8>,
    selector9: Selector<S, R9>,
    selector10: Selector<S, R10>,
    selector11: Selector<S, R11>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
    selector1: ParametricSelector<S, P, R1>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    selector8: ParametricSelector<S, P, R8>,
    selector9: ParametricSelector<S, P, R9>,
    selector10: ParametricSelector<S, P, R10>,
    selector11: ParametricSelector<S, P, R11>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
  ): ParametricSelector<S, P, T>;

  /* twelve selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
    selector1: Selector<S, R1>,
    selector2: Selector<S, R2>,
    selector3: Selector<S, R3>,
    selector4: Selector<S, R4>,
    selector5: Selector<S, R5>,
    selector6: Selector<S, R6>,
    selector7: Selector<S, R7>,
    selector8: Selector<S, R8>,
    selector9: Selector<S, R9>,
    selector10: Selector<S, R10>,
    selector11: Selector<S, R11>,
    selector12: Selector<S, R12>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
    selector1: ParametricSelector<S, P, R1>,
    selector2: ParametricSelector<S, P, R2>,
    selector3: ParametricSelector<S, P, R3>,
    selector4: ParametricSelector<S, P, R4>,
    selector5: ParametricSelector<S, P, R5>,
    selector6: ParametricSelector<S, P, R6>,
    selector7: ParametricSelector<S, P, R7>,
    selector8: ParametricSelector<S, P, R8>,
    selector9: ParametricSelector<S, P, R9>,
    selector10: ParametricSelector<S, P, R10>,
    selector11: ParametricSelector<S, P, R11>,
    selector12: ParametricSelector<S, P, R12>,
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
  ): ParametricSelector<S, P, T>;


  /* array argument */

  /* one selector */
  function createSelector<S, R1, T>(
    selectors: [Selector<S, R1>],
    combiner: (res: R1) => T,
  ): OutputSelector<S, T, (res: R1) => T>;
  function createSelector<S, P, R1, T>(
    selectors: [ParametricSelector<S, P, R1>],
    combiner: (res: R1) => T,
  ): ParametricSelector<S, P, T>;

  /* two selectors */
  function createSelector<S, R1, R2, T>(
    selectors: [Selector<S, R1>,
                Selector<S, R2>],
    combiner: (res1: R1, res2: R2) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2) => T>;
  function createSelector<S, P, R1, R2, T>(
    selectors: [ParametricSelector<S, P, R1>,
                ParametricSelector<S, P, R2>],
    combiner: (res1: R1, res2: R2) => T,
  ): ParametricSelector<S, P, T>;

  /* three selectors */
  function createSelector<S, R1, R2, R3, T>(
    selectors: [Selector<S, R1>,
                Selector<S, R2>,
                Selector<S, R3>],
    combiner: (res1: R1, res2: R2, res3: R3) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3) => T>;
  function createSelector<S, P, R1, R2, R3, T>(
    selectors: [ParametricSelector<S, P, R1>,
                ParametricSelector<S, P, R2>,
                ParametricSelector<S, P, R3>],
    combiner: (res1: R1, res2: R2, res3: R3) => T,
  ): ParametricSelector<S, P, T>;

  /* four selectors */
  function createSelector<S, R1, R2, R3, R4, T>(
    selectors: [Selector<S, R1>,
                Selector<S, R2>,
                Selector<S, R3>,
                Selector<S, R4>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4) => T>;
  function createSelector<S, P, R1, R2, R3, R4, T>(
    selectors: [ParametricSelector<S, P, R1>,
                ParametricSelector<S, P, R2>,
                ParametricSelector<S, P, R3>,
                ParametricSelector<S, P, R4>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4) => T,
  ): ParametricSelector<S, P, T>;

  /* five selectors */
  function createSelector<S, R1, R2, R3, R4, R5, T>(
    selectors: [Selector<S, R1>,
                Selector<S, R2>,
                Selector<S, R3>,
                Selector<S, R4>,
                Selector<S, R5>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, T>(
    selectors: [ParametricSelector<S, P, R1>,
                ParametricSelector<S, P, R2>,
                ParametricSelector<S, P, R3>,
                ParametricSelector<S, P, R4>,
                ParametricSelector<S, P, R5>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5) => T,
  ): ParametricSelector<S, P, T>;

  /* six selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, T>(
    selectors: [Selector<S, R1>,
                Selector<S, R2>,
                Selector<S, R3>,
                Selector<S, R4>,
                Selector<S, R5>,
                Selector<S, R6>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, T>(
    selectors: [ParametricSelector<S, P, R1>,
                ParametricSelector<S, P, R2>,
                ParametricSelector<S, P, R3>,
                ParametricSelector<S, P, R4>,
                ParametricSelector<S, P, R5>,
                ParametricSelector<S, P, R6>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6) => T,
  ): ParametricSelector<S, P, T>;

  /* seven selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, T>(
    selectors: [Selector<S, R1>,
                Selector<S, R2>,
                Selector<S, R3>,
                Selector<S, R4>,
                Selector<S, R5>,
                Selector<S, R6>,
                Selector<S, R7>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, T>(
    selectors: [ParametricSelector<S, P, R1>,
                ParametricSelector<S, P, R2>,
                ParametricSelector<S, P, R3>,
                ParametricSelector<S, P, R4>,
                ParametricSelector<S, P, R5>,
                ParametricSelector<S, P, R6>,
                ParametricSelector<S, P, R7>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7) => T,
  ): ParametricSelector<S, P, T>;

  /* eight selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, R8, T>(
    selectors: [Selector<S, R1>,
      Selector<S, R2>,
      Selector<S, R3>,
      Selector<S, R4>,
      Selector<S, R5>,
      Selector<S, R6>,
      Selector<S, R7>,
      Selector<S, R8>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, R8, T>(
    selectors: [ParametricSelector<S, P, R1>,
      ParametricSelector<S, P, R2>,
      ParametricSelector<S, P, R3>,
      ParametricSelector<S, P, R4>,
      ParametricSelector<S, P, R5>,
      ParametricSelector<S, P, R6>,
      ParametricSelector<S, P, R7>,
      ParametricSelector<S, P, R8>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8) => T,
  ): ParametricSelector<S, P, T>;

  /* nine selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, R8, R9, T>(
    selectors: [Selector<S, R1>,
      Selector<S, R2>,
      Selector<S, R3>,
      Selector<S, R4>,
      Selector<S, R5>,
      Selector<S, R6>,
      Selector<S, R7>,
      Selector<S, R8>,
      Selector<S, R9>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, T>(
    selectors: [ParametricSelector<S, P, R1>,
      ParametricSelector<S, P, R2>,
      ParametricSelector<S, P, R3>,
      ParametricSelector<S, P, R4>,
      ParametricSelector<S, P, R5>,
      ParametricSelector<S, P, R6>,
      ParametricSelector<S, P, R7>,
      ParametricSelector<S, P, R8>,
      ParametricSelector<S, P, R9>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9) => T,
  ): ParametricSelector<S, P, T>;

  /* ten selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
    selectors: [Selector<S, R1>,
      Selector<S, R2>,
      Selector<S, R3>,
      Selector<S, R4>,
      Selector<S, R5>,
      Selector<S, R6>,
      Selector<S, R7>,
      Selector<S, R8>,
      Selector<S, R9>,
      Selector<S, R10>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, T>(
    selectors: [ParametricSelector<S, P, R1>,
      ParametricSelector<S, P, R2>,
      ParametricSelector<S, P, R3>,
      ParametricSelector<S, P, R4>,
      ParametricSelector<S, P, R5>,
      ParametricSelector<S, P, R6>,
      ParametricSelector<S, P, R7>,
      ParametricSelector<S, P, R8>,
      ParametricSelector<S, P, R9>,
      ParametricSelector<S, P, R10>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10) => T,
  ): ParametricSelector<S, P, T>;

  /* eleven selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
    selectors: [Selector<S, R1>,
      Selector<S, R2>,
      Selector<S, R3>,
      Selector<S, R4>,
      Selector<S, R5>,
      Selector<S, R6>,
      Selector<S, R7>,
      Selector<S, R8>,
      Selector<S, R9>,
      Selector<S, R10>,
      Selector<S, R11>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, T>(
    selectors: [ParametricSelector<S, P, R1>,
      ParametricSelector<S, P, R2>,
      ParametricSelector<S, P, R3>,
      ParametricSelector<S, P, R4>,
      ParametricSelector<S, P, R5>,
      ParametricSelector<S, P, R6>,
      ParametricSelector<S, P, R7>,
      ParametricSelector<S, P, R8>,
      ParametricSelector<S, P, R9>,
      ParametricSelector<S, P, R10>,
      ParametricSelector<S, P, R11>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11) => T,
  ): ParametricSelector<S, P, T>;

  /* twelve selectors */
  function createSelector<S, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
    selectors: [Selector<S, R1>,
      Selector<S, R2>,
      Selector<S, R3>,
      Selector<S, R4>,
      Selector<S, R5>,
      Selector<S, R6>,
      Selector<S, R7>,
      Selector<S, R8>,
      Selector<S, R9>,
      Selector<S, R10>,
      Selector<S, R11>,
      Selector<S, R12>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
  ): OutputSelector<S, T, (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T>;
  function createSelector<S, P, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, T>(
    selectors: [ParametricSelector<S, P, R1>,
      ParametricSelector<S, P, R2>,
      ParametricSelector<S, P, R3>,
      ParametricSelector<S, P, R4>,
      ParametricSelector<S, P, R5>,
      ParametricSelector<S, P, R6>,
      ParametricSelector<S, P, R7>,
      ParametricSelector<S, P, R8>,
      ParametricSelector<S, P, R9>,
      ParametricSelector<S, P, R10>,
      ParametricSelector<S, P, R11>,
      ParametricSelector<S, P, R12>],
    combiner: (res1: R1, res2: R2, res3: R3, res4: R4, res5: R5, res6: R6,
              res7: R7, res8: R8, res9: R9, res10: R10, res11: R11, res12: R12) => T,
  ): ParametricSelector<S, P, T>;


  function defaultMemoize<F extends Function>(
    func: F, equalityCheck?: <T>(a: T, b: T, index: number) => boolean,
  ): F;


  function createSelectorCreator(
    memoize: <F extends Function>(func: F) => F,
  ): typeof createSelector;

  function createSelectorCreator<O1>(
    memoize: <F extends Function>(func: F,
                                  option1: O1) => F,
    option1: O1,
  ): typeof createSelector;

  function createSelectorCreator<O1, O2>(
    memoize: <F extends Function>(func: F,
                                  option1: O1,
                                  option2: O2) => F,
    option1: O1,
    option2: O2,
  ): typeof createSelector;

  function createSelectorCreator<O1, O2, O3>(
    memoize: <F extends Function>(func: F,
                                  option1: O1,
                                  option2: O2,
                                  option3: O3,
                                  ...rest: any[]) => F,
    option1: O1,
    option2: O2,
    option3: O3,
    ...rest: any[],
  ): typeof createSelector;

  function createStructuredSelector<S, T>(
    selectors: {[K in keyof T]: Selector<S, T[K]>},
    selectorCreator?: typeof createSelector,
  ): Selector<S, T>;
  function createStructuredSelector<S, P, T>(
    selectors: {[K in keyof T]: ParametricSelector<S, P, T[K]>},
    selectorCreator?: typeof createSelector,
  ): ParametricSelector<S, P, T>;
}
