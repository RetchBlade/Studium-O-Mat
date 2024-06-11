<template>
    <div class="slider-container">
      <div class="labels">
        <span v-for="(label, index) in labels" :key="index" class="label" :style="{ left: `${index * 25}%` }">
          {{ label }}
        </span>
      </div>
      <input
        type="range"
        v-model="currentState"
        min="0"
        max="4"
        step="1"
        class="slider"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentState: 2,
        labels: [
          'Stimme nicht zu',
          'Stimme eher nicht zu',
          'Neutral',
          'Stimme eher zu',
          'Stimme zu'
        ]
      };
    }
  };
  </script>
  
  <style>
  .slider-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  
  .labels {
    position: relative;
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .label {
    position: absolute;
    transform: translateX(-50%);
    text-align: center;
    font-size: 12px;
    white-space: nowrap;
  }
  
  .slider {
    -webkit-appearance: none;
    width: 80%;
    height: 15px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }
  
  .slider:hover {
    opacity: 1;
  }
  
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }
  
  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }
  
  .slider-content {
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    margin-top: 20px;
  }
  </style>
  
  