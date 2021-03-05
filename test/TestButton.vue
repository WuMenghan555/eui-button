<template>
  <div class="app">
    <div class="row">
      <eui-button>按钮</eui-button>
      <eui-button type="primary">按钮</eui-button>
      <eui-button type="success">按钮</eui-button>
      <eui-button type="info">按钮</eui-button>
      <eui-button type="warning">按钮</eui-button>
      <eui-button type="danger">按钮</eui-button>
    </div>
    <div class="row">
      <eui-button plain>按钮</eui-button>
      <eui-button plain type="primary">按钮</eui-button>
      <eui-button plain type="success">按钮</eui-button>
      <eui-button plain type="info">按钮</eui-button>
      <eui-button plain type="warning">按钮</eui-button>
      <eui-button plain type="danger">按钮</eui-button>
    </div>
    <div class="row">
      <eui-button round plain>按钮</eui-button>
      <eui-button round plain type="primary">按钮</eui-button>
      <eui-button round plain type="success">按钮</eui-button>
      <eui-button round plain type="info">按钮</eui-button>
      <eui-button round plain type="warning">按钮</eui-button>
      <eui-button round plain type="danger">按钮</eui-button>
    </div>
    <div class="row">
      <eui-button circle>ok</eui-button>
      <eui-button circle type="primary">ok</eui-button>
      <eui-button circle type="success">ok</eui-button>
      <eui-button circle type="info">ok</eui-button>
      <eui-button circle type="warning">ok</eui-button>
      <eui-button circle type="danger">ok</eui-button>
    </div>
    <div class="row">
      <eui-button plain>字体</eui-button>
      <eui-button icon="eui-icon-check" circle plain type="primary"></eui-button>
      <eui-button icon="eui-icon-message" circle plain type="success"></eui-button>
      <eui-button icon="eui-icon-search" circle plain type="info"></eui-button>
      <eui-button icon="eui-icon-star-off" plain type="warning">字体图标</eui-button>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.app {
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.row {
  padding: 10px 0;
  .eui-button {
    margin-left: 10px;
  }
}
</style>