<template>
  <div class="main-container">
    <div class="background-layers"></div>
    <div class="header">
      <h1>Tree Simulator</h1>
    </div>
    <div class="form-container">
      <form>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Username">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <div class="button-container">
          <button class="btn btn-primary">Register</button>
          <button class="btn btn-secondary">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Array of layer filenames
    const layers = ['layer1.png', 'layer2.png', 'layer3.png',
    'layer4.png', 'layer5.png', 'layer6.png', 'layer7.png',
    'layer8.png', 'layer9.png', 'layer10.png','layer11.png',
    'layer12.png', 'layer13.png', 'layer14.png', 'layer15.png',
    'layer16.png', 'layer17.png'];
    
    
    const backgroundLayers = document.querySelector('.background-layers');
    let zIndex = -1;

    layers.forEach(layer => {
      const backgroundImage = `url('/src/assets/${layer}')`;
      const layerStyle = `
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        crop:  content-box;
        crop-mode: outside;
        background-image: ${backgroundImage};
        background-repeat: no-repeat;
        background-size: cover;
        z-index: ${zIndex};
      `;

      const layerElement = document.createElement('div');
      layerElement.style = layerStyle;
      backgroundLayers.appendChild(layerElement);

      zIndex--;
    });
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 100%;
  bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;
  background-color: rgba(11, 201, 87, 0.562);
}

.background-layers {
  position: absolute;
  padding: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
}
</style>