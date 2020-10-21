<template>
  <div class="container-fluid mx-12">
    <v-row>
      <v-col v-if="firstColumn.condition || true" :md="firstColumn.md" :cols="firstColumn.cols">
        <slot name="first-col" />
      </v-col>
      <v-col v-if="secondColumn.condition || true" :md="secondColumn.md" :cols="secondColumn.cols">
        <slot name="second-col" />
      </v-col>
      <v-col v-if="thirdColumn" :md="thirdColumn.md" :cols="thirdColumn.cold">
        <slot name="third-col" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'g-bootstrap',
  props: {
    // sm
    // md
    // lg
    // xl
    // cols
    // condition
    firstCol: {
      type: Object,
      default: null,
    },
    secondCol: {
      type: Object,
      default: null,
    },
    thirdCol: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      firstColumn: {},
      secondColumn: {},
      thirdColumn: {},
    };
  },
  mounted() {
    const colsSize = this.getColsSize();
    this.firstColumn = colsSize.firstColumn;
    this.secondColumn = colsSize.secondColumn;
    this.thirdColumn = colsSize.thirdColumn;
  },
  methods: {
    getColsSize: function() {
      const fc = Boolean(this.$slots['first-col']);
      const sc = Boolean(this.$slots['second-col']);
      const tc = Boolean(this.$slots['third-col']);
      const colsQty = this.getColsQty(fc, sc, tc);
      return {
        firstColumn: {
          condition: fc,
          cols: (this.firstCol || {}).cols || 12,
          md: (this.firstCol || {}).md || this.getLateralColSize(colsQty),
        },
        secondColumn: {
          condition: sc,
          cols: (this.secondCol || {}).cols || 12,
          md: (this.secondCol || {}).md || this.getMainColSize(colsQty),
        },
        thirdColumn: {
          condition: tc,
          cols: (this.thirdCol || {}).cols || 12,
          md: (this.thirdCol || {}).md || this.getLateralColSize(colsQty),
        },
      };
    },
    getColsQty (first, second, third) {
      return  first && third ? 3 : first || third ? 2 : 1;
    },
    getLateralColSize(colsQty) {
      let size = 12;
      switch (colsQty) {
        case 3:
          size = 3;
          break;
        case 2:
          size = 4;
          break;
        case 1:
          size = 0;
          break;
        default:
          size = 12;
      }
      return size;
    },
    getMainColSize(colsQty) {
      let size = 12;
      switch (colsQty) {
        case 3:
          size = 6;
          break;
        case 2:
          size = 8;
          break;
        case 1:
          size = 12;
          break;
        default:
          size = 12;
      }
      return size;
    },
  },
};
</script>

<style></style>
