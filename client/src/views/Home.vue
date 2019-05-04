<template>
  <div class="home">
    <input type="number" v-model="id">

    <!-- <div class="container">
      <Card v-if="customer" :title="customer.name" text="aset" />
    </div> -->


    <div class="layout">
      <div class="left">
        <Card v-if="customer" :title="customer.nama" :key="customer.no" id="customer-detail" class="slide-in-blurred-left"/>
      </div>

      <div class="right">
        <div class="customers-container">
          <div class="grid">
            <Card class="card" v-for="customer in customers" :title="customer.nama.split(' ').shift()" :key="customer.no" @click.native="setCustomer(customer)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue"

import { CustomerServices } from "@/services.js";

export default {
  name: "home",
  components: {
    Card
  },
  data() {
    return {
      id: 1,
      customer: null,
      customers: []
    }
  },
  async created() {
      this.customers = await CustomerServices.getCustomers();
  },
  watch: {
    async id(val) {
      console.log("changed")
      this.customer = await CustomerServices.getCustomer(val);
    }
  },
  methods: {
    setCustomer(customer) {
      const detailElement = document.getElementById("customer-detail")
      if(detailElement) detailElement.className = "slide-out-blurred-left";

      setTimeout(() => {
        this.customer = customer;
      }, detailElement ? 300 : 0); 
    }
  }
};
</script>

<style lang="scss">
.container {
   display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  overflow: hidden;
  transition: 1s ease-in;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  margin: 50px;

  .card {
    cursor: pointer;
  }
}

.layout {
  display: table;
  width: 100%;

  .left {
    position: absolute;
    left: 0px;
    width: 50%;
    min-height: 600px;
    
    div {
      margin: 60px 20px ;
      padding: 5px 0;
      display: inline-block;
      min-height: 600px;
      width: 100%;
      height: 100%;
  
      div {
        background-color: white;
        width: 80%;
        height: 80%;
      }
    }
  }

  .right {
    position: absolute;
    right: 0px;
    width: 50%;
    min-height: 600px;
    padding-right: 20px;

    & > div {
      min-height: 600px;
    }
  }
}

.customers-container {
  background-color: white;
  border: none;
  border-radius: 20px;
  margin: 20px 20px;
  padding: 5px 0;
}


.slide-in-blurred-left {
	-webkit-animation: slide-in-blurred-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
	        animation: slide-in-blurred-left 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}

.slide-out-blurred-left {
	-webkit-animation: slide-out-blurred-left 0.3s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
	        animation: slide-out-blurred-left 0.3s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}


@-webkit-keyframes slide-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1200px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1200px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
    
           
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

@keyframes slide-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1200px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1200px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
    
           
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-out-blurred-left {
  0% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(-1200px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1200px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
    
           
    opacity: 0;
  }
}

@keyframes slide-out-blurred-left {
  0% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(-1200px) scaleX(2.5) scaleY(0.2);
            transform: translateX(-1200px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
    
           
    opacity: 0;
  }
}

</style>

