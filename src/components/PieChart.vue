<template>
  <div ref="container">
    
    <span class="value info">{{ value }}</span>
    <span 
      class="part info"
      v-for="([x, y], i) in parts"
      :key="i"
      :style="{ left: `${x}%`, top: `${y}%` }"
    >{{ i + 1 }}</span>

    <svg v-if="size" className="pie" :viewBox="`0 0 ${size} ${size}`" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size">

      <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
          fill="none"
          :stroke="color"
          :stroke-width="`3%`"
          :stroke-dasharray="`${circumference / parts.length - size / 25} ${size / 25}`"
          stroke-linecap='round'
      />
       <path fill="#FFF" :d="arc"/>
    </svg>    
  </div>
</template>

<script>
export default {
    computed: {
      circumference() {
        return 2 * 3.14 * this.radius
      },
      strokeLength() {
          return this.circumference * this.percentage
      },
      value() {
        return this.text ?? Math.floor(this.percentage * 100)
      },
      radius() {
        return this.size / 3.7;
      },
      parts() {
        return new Array(this.segments).fill(null).map((_, i, a) =>
          this.polar(i / a.length, 0.7)
        )
      },
      arc() {
        const arcSweep = this.percentage >= 0.5 ? 0 : 1;
        const radius = 0.8;
        const [start, end] = [1, this.percentage].map(i => i - 0.098).map(deg => 
          this.polar(deg, radius).map(i => (i / 100) * this.size))

        return [
          "M", start[0], start[1], 
          "A", radius * (this.size / 2), radius * (this.size / 2), 0, arcSweep, 0, end[0], end[1],
          "L", this.size / 2, this.size / 2,
          "L", start[0], start[1]
        ].join(" ");
      }
    },
    methods: {
      polar(percentage, scale = 1) {
        return [Math.cos, Math.sin]
            .map(fn => fn((percentage - 0.15) * Math.PI * 2))
            .map(i => i * 50 * scale)
            .map(i => i + 50)
      }
    },
    data: () => ({
      color: '#E1EDDB',
      size: null,
    }),
    props: {
      percentage: Number,
      segments: Number,
      text: String,
    },
    mounted() {
      setTimeout(() => {
        this.size = this.$refs.container.offsetWidth
      }, 50)
    }
}
</script>

<style scoped>
div {
  position: relative;
}

circle {
  transform: rotate(-85deg); 
  transform-origin: center;
  transition: all 0.6s cubic-bezier(0.58, 0.16, 0.5, 1.14);
  transition-delay: 0.3s;
}

span {
  position: absolute;
  transform: translate(-50%, -50%);
}

.value {
  top: 50%;
  left: 50%;
}
</style>