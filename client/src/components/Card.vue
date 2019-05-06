<template>
  <div id="Card">
    <div class="wrapper">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100px;
  padding: 10px;
  border-radius: 20px;

  border: none;
  color: #fd746c;
  font-family: sans-serif;
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  &:active {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
  }
}
</style>
