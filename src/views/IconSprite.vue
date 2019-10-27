<template>
  <!--
  Svg ikonlar, 100x100px bir artboard içine sığdırılıp 'assets/icons' klasörüne eklenmeli.
  Daha sonra bu sayfadan import edilip 'icons' dizisine örnektekiler gibi eklenmeli.
  Sitede kullanılan tüm iconlar '/icons' yolunda listelenir.
  -->
  <div class="icon-sprite">
    <container>
      <div class="icon-sprite__title">ICONS</div>
      <div class="icon-sprite__list">
        <div class="icon-sprite__item" v-for="icon in icons" :key="icon.id">
          <div class="icon-sprite__icon">
            <svg-icon :icon="icon.name" />
          </div>
          <div class="icon-sprite__name">{{ icon.name }}</div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import Rain from '@/assets/icons/rain.svg'
import Fog from '@/assets/icons/fog.svg'
import Clouds from '@/assets/icons/clouds.svg'
import Snow from '@/assets/icons/snow.svg'
import Clear from '@/assets/icons/clear.svg'
import Windy from '@/assets/icons/windy.svg'
import ArrowLeft from '@/assets/icons/arrow-left.svg'
export default {
  name: 'IconSprite',
  components: {
    Rain,
    Fog,
    Clouds,
    Snow,
    Clear,
    Windy,
    ArrowLeft
  },
  data () {
    return {
      icons: [
        {
          id: 0,
          name: 'rain'
        },
        {
          id: 1,
          name: 'fog'
        },
        {
          id: 2,
          name: 'clouds'
        },
        {
          id: 3,
          name: 'snow'
        },
        {
          id: 4,
          name: 'windy'
        },
        {
          id: 5,
          name: 'clear'
        },
        {
          id: 6,
          name: 'arrow-left'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .icon-sprite {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 288;
    overflow: auto;
    background: #f0f4f9;
  }

  .icon-sprite__title {
    margin-top: 50px;
    font-size: 55px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
    color: #546391;
  }
  .icon-sprite__list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }
  .icon-sprite__item {
    width: 240px;
    text-align: center;
    border: 1px solid #bac2cb;
    margin: 10px;
    border-radius: 9px;
    padding: 20px;
    background: #fff;
  }
  .icon-sprite__icon {
    font-size: 45px;
    margin-bottom: 10px;
    display: inline-flex;
  }
  .icon-sprite__name {
    font-size: 20px;
    font-weight: 600;
    background: #e3e9f0;
    border-radius: 6px;
    padding: 3px;
    margin-top: 15px;
  }
</style>
