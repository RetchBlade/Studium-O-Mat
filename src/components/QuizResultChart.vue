<template>
    <div>
      <canvas ref="myChart" width="400" height="400"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    props: {
      points: Object
    },
    mounted() {
      this.renderChart();
    },
    watch: {
      points: {
        handler() {
          this.renderChart();
        },
        deep: true
      }
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.myChart.getContext('2d');
        const labels = Object.keys(this.points);
        const data = Object.values(this.points);
  
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)', // Rot
                'rgba(54, 162, 235, 0.6)', // Blau
                'rgba(255, 206, 86, 0.6)', // Gelb
                // Füge weitere Farben hinzu je nach Bedarf
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: function(tooltipItem) {
                    return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + ' Punkte';
                  }
                }
              }
            }
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Hier könntest du ggf. Styles für das Diagramm anpassen */
  </style>
  