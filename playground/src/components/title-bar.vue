<script>
export default {
  name: "TitleBar",
  props: {
    year: [Number, String],
    month: [Number, String]
  },
  render() {
    const { renderTitle } = this.$parent;
    return renderTitle(this.year, this.month, this.$parent);
  }
}
</script>
