<script>
export default {
  name: "item",
  props: {
    source: Object
  },
  render() {
    const { renderContent } = this.$parent;
    return renderContent(this.source, this.$parent);
  }
}
</script>
